import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const signature = request.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    const rawBody = await request.text();

    if (secret) {
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(rawBody)
        .digest('hex');

      if (signature !== expectedSignature) {
        return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const entity = payload.payload?.subscription?.entity || payload.payload?.payment?.entity;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.warn('Supabase service credentials not configured. Webhook logged:', event);
      return NextResponse.json({ status: 'logged_without_sync' });
    }

    if (event === 'subscription.authenticated' || event === 'subscription.charged') {
      const sub = payload.payload?.subscription?.entity;
      if (!sub) return NextResponse.json({ status: 'ignored_no_subscription' });

      const email = sub.notes?.email || '';

      // 1. Query Supabase for user with this email using admin auth endpoint
      const userRes = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
      });

      let userId = null;
      if (userRes.ok) {
        const usersData = await userRes.json();
        const existing = usersData.users?.find((u: { email: string }) => u.email?.toLowerCase() === email.toLowerCase());
        userId = existing?.id;
      }

      // 2. If user doesn't exist, invite user via email
      if (!userId && email) {
        const inviteRes = await fetch(`${supabaseUrl}/auth/v1/invite`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
          },
          body: JSON.stringify({ email }),
        });
        if (inviteRes.ok) {
          const invited = await inviteRes.json();
          userId = invited?.id;
        }
      }

      // 3. Upsert organization subscription record
      if (userId) {
        await fetch(`${supabaseUrl}/rest/v1/organizations`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
            Prefer: 'resolution=merge-duplicates',
          },
          body: JSON.stringify({
            owner_id: userId,
            razorpay_subscription_id: sub.id,
            razorpay_customer_id: sub.customer_id,
            plan_tier: sub.plan_id?.includes('year') ? 'pro_yearly' : 'pro_monthly',
            subscription_status: 'active',
            current_period_end: sub.current_end ? new Date(sub.current_end * 1000).toISOString() : null,
            updated_at: new Date().toISOString(),
          }),
        });
      }
    } else if (event === 'subscription.halted' || event === 'payment.failed') {
      const subId = entity?.subscription_id || entity?.id;
      if (subId) {
        await fetch(`${supabaseUrl}/rest/v1/organizations?razorpay_subscription_id=eq.${subId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
          },
          body: JSON.stringify({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString(),
          }),
        });
      }
    } else if (event === 'subscription.cancelled') {
      const subId = entity?.id;
      if (subId) {
        await fetch(`${supabaseUrl}/rest/v1/organizations?razorpay_subscription_id=eq.${subId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
          },
          body: JSON.stringify({
            subscription_status: 'canceled',
            updated_at: new Date().toISOString(),
          }),
        });
      }
    }

    return NextResponse.json({ status: 'success', event });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
