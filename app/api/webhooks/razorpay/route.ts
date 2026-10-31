import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

async function findUserByEmail(admin: ReturnType<typeof getSupabaseAdmin>, email: string): Promise<string | null> {
  const normalizedEmail = email.trim().toLowerCase();
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
      if (error) {
        throw error;
      }
      if (!data?.users || data.users.length === 0) {
        break;
      }

      const match = data.users.find(u => u.email?.trim().toLowerCase() === normalizedEmail);
      if (match) {
        return match.id;
      }

      if (!data.nextPage || data.nextPage <= page) {
        break;
      }
      page = data.nextPage;
    }
  } catch (err) {
    console.error('Error looking up user by email in webhook:', err);
    throw err;
  }

  return null;
}

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

      // If user_id wasn't in notes, try to find existing user by email through Supabase Admin API
      if (!userId && email) {
        userId = await findUserByEmail(admin, email);
      }

      // If still not found and email provided, invite user to create account
      if (!userId && email) {
        try {
          const { data: inviteData, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(email);
          if (!inviteErr && inviteData?.user) {
            userId = inviteData.user.id;
          } else {
            console.warn('inviteUserByEmail failed for subscription webhook:', inviteErr);
          }
        } catch (inviteException) {
          console.warn('Exception inviting user by email:', inviteException);
        }
      }

      if (!userId) {
        console.error('Webhook unable to resolve user for subscription:', { email, subId: sub.id });
        return NextResponse.json(
          { error: 'User could not be resolved or invited for subscription activation.' },
          { status: 422 }
        );
      }

      const planTier = (sub.plan_id?.includes('year') || sub.notes?.plan_tier === 'pro_yearly')
        ? 'pro_yearly'
        : 'pro_monthly';

      const { error: upsertError } = await admin.from('organizations').upsert({
        owner_id: userId,
        razorpay_subscription_id: sub.id,
        razorpay_customer_id: sub.customer_id,
        plan_tier: planTier,
        subscription_status: 'active',
        current_period_end: sub.current_end ? new Date(sub.current_end * 1000).toISOString() : null,
        updated_at: new Date().toISOString(),
      });

      if (upsertError) {
        console.error('Failed to upsert organization in subscription webhook:', upsertError);
        return NextResponse.json(
          { error: 'Failed to update organization subscription status.' },
          { status: 500 }
        );
      }
    } 
    // 2. Fallback Order Paid / Payment Captured (for non-recurring orders)
    else if (event === 'order.paid' || event === 'payment.captured') {
      const payment = payload.payload?.payment?.entity;
      const order = payload.payload?.order?.entity;
      const asObj = (n: unknown): Record<string, string> =>
        n && typeof n === 'object' && !Array.isArray(n) ? (n as Record<string, string>) : {};
      const notes = { ...asObj(order?.notes), ...asObj(payment?.notes) };

      let userId = notes.user_id || null;
      const email = (notes.email || payment?.email || '').trim().toLowerCase();

      // If user_id wasn't in notes, try to find existing user by email through Supabase Admin API
      if (!userId && email) {
        userId = await findUserByEmail(admin, email);
      }

      // If still not found and email provided, invite user to create account
      if (!userId && email) {
        try {
          const { data: inviteData, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(email);
          if (!inviteErr && inviteData?.user) {
            userId = inviteData.user.id;
          } else {
            console.warn('inviteUserByEmail failed for order/payment webhook:', inviteErr);
          }
        } catch (inviteException) {
          console.warn('Exception inviting user by email:', inviteException);
        }
      }

      if (!userId) {
        console.error('Webhook unable to resolve user for order/payment:', { email, paymentId: payment?.id, orderId: order?.id });
        return NextResponse.json(
          { error: 'User could not be resolved or invited for payment activation.' },
          { status: 422 }
        );
      }

      const planTier = notes.plan_tier === 'pro_yearly' ? 'pro_yearly' : 'pro_monthly';
      const referenceId = order?.id || payment?.order_id || payment?.id;

      if (!referenceId) {
        console.error('Webhook received order/payment event without any valid order or payment identifier');
        return NextResponse.json(
          { error: 'Missing order or payment reference ID.' },
          { status: 400 }
        );
      }

      const { error: upsertError } = await admin.from('organizations').upsert({
        owner_id: userId,
        razorpay_subscription_id: referenceId,
        plan_tier: planTier,
        subscription_status: 'active',
        updated_at: new Date().toISOString(),
      });

      if (upsertError) {
        console.error('Failed to upsert organization in order/payment webhook:', upsertError);
        return NextResponse.json(
          { error: 'Failed to update organization subscription status.' },
          { status: 500 }
        );
      }
    }
    // 3. Subscription Halted / Payment Failed
    else if (event === 'subscription.halted' || event === 'payment.failed') {
      const entity = payload.payload?.subscription?.entity || payload.payload?.payment?.entity;
      const subId = entity?.subscription_id || entity?.order_id || entity?.id;
      if (subId) {
        const { error: updateError } = await admin
          .from('organizations')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString(),
          })
          .eq('razorpay_subscription_id', subId);

        if (updateError) {
          console.error('Failed to update organization status in payment.failed webhook:', updateError);
          return NextResponse.json({ error: 'Failed to update organization status.' }, { status: 500 });
        }
      }
    } 
    // 4. Subscription Cancelled
    else if (event === 'subscription.cancelled') {
      const entity = payload.payload?.subscription?.entity;
      const subId = entity?.id;
      if (subId) {
        const { error: updateError } = await admin
          .from('organizations')
          .update({
            subscription_status: 'canceled',
            updated_at: new Date().toISOString(),
          })
          .eq('razorpay_subscription_id', subId);

        if (updateError) {
          console.error('Failed to update organization status in subscription.cancelled webhook:', updateError);
          return NextResponse.json({ error: 'Failed to update organization status.' }, { status: 500 });
        }
      }
    }

    return NextResponse.json({ status: 'success', event });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook error';
    console.error('Webhook processing exception:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
