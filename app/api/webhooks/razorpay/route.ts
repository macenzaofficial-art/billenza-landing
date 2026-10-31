import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const signature = request.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret) {
      console.error('Webhook secret (RAZORPAY_WEBHOOK_SECRET) is not configured.');
      return NextResponse.json(
        { error: 'Server configuration error: Webhook secret not set.' },
        { status: 500 }
      );
    }

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing x-razorpay-signature header.' },
        { status: 400 }
      );
    }

    const rawBody = await request.text();

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    const sigBuf = Buffer.from(signature, 'utf8');
    const expBuf = Buffer.from(expectedSignature, 'utf8');

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return NextResponse.json(
        { error: 'Invalid webhook signature.' },
        { status: 400 }
      );
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const admin = getSupabaseAdmin();

    // 1. Subscription Activated / Charged
    if (event === 'subscription.authenticated' || event === 'subscription.charged') {
      const sub = payload.payload?.subscription?.entity;
      if (!sub) {
        return NextResponse.json({ status: 'ignored_no_subscription_payload' });
      }

      let userId = sub.notes?.user_id || null;
      const email = (sub.notes?.email || '').trim().toLowerCase();

      // If user_id wasn't in notes, try to find user by email
      if (!userId && email) {
        const { data: orgData } = await admin
          .from('organizations')
          .select('owner_id')
          .eq('owner_id', sub.notes?.user_id)
          .maybeSingle();

        if (orgData?.owner_id) {
          userId = orgData.owner_id;
        }
      }

      // If still not found and email provided, invite user
      if (!userId && email) {
        const { data: inviteData, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(email);
        if (!inviteErr && inviteData?.user) {
          userId = inviteData.user.id;
        }
      }

      if (userId) {
        const planTier = (sub.plan_id?.includes('year') || sub.notes?.plan_tier === 'pro_yearly')
          ? 'pro_yearly'
          : 'pro_monthly';

        await admin.from('organizations').upsert({
          owner_id: userId,
          razorpay_subscription_id: sub.id,
          razorpay_customer_id: sub.customer_id,
          plan_tier: planTier,
          subscription_status: 'active',
          current_period_end: sub.current_end ? new Date(sub.current_end * 1000).toISOString() : null,
          updated_at: new Date().toISOString(),
        });
      }
    } 
    // 2. Fallback Order Paid / Payment Captured (for non-recurring orders)
    else if (event === 'order.paid' || event === 'payment.captured') {
      const payment = payload.payload?.payment?.entity;
      const order = payload.payload?.order?.entity;
      const notes = payment?.notes || order?.notes || {};

      const userId = notes.user_id;
      const planTier = notes.plan_tier === 'pro_yearly' ? 'pro_yearly' : 'pro_monthly';
      const referenceId = payment?.id || order?.id || subIdFromEntity(payment);

      if (userId) {
        await admin.from('organizations').upsert({
          owner_id: userId,
          razorpay_subscription_id: referenceId,
          plan_tier: planTier,
          subscription_status: 'active',
          updated_at: new Date().toISOString(),
        });
      }
    }
    // 3. Subscription Halted / Payment Failed
    else if (event === 'subscription.halted' || event === 'payment.failed') {
      const entity = payload.payload?.subscription?.entity || payload.payload?.payment?.entity;
      const subId = entity?.subscription_id || entity?.id;
      if (subId) {
        await admin
          .from('organizations')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString(),
          })
          .eq('razorpay_subscription_id', subId);
      }
    } 
    // 4. Subscription Cancelled
    else if (event === 'subscription.cancelled') {
      const entity = payload.payload?.subscription?.entity;
      const subId = entity?.id;
      if (subId) {
        await admin
          .from('organizations')
          .update({
            subscription_status: 'canceled',
            updated_at: new Date().toISOString(),
          })
          .eq('razorpay_subscription_id', subId);
      }
    }

    return NextResponse.json({ status: 'success', event });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook error';
    console.error('Webhook processing exception:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function subIdFromEntity(payment: any): string {
  return payment?.order_id || payment?.id || `txn_${Date.now()}`;
}
