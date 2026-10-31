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

interface SaveSubscriptionParams {
  userId: string;
  subscriptionId: string;
  customerId?: string;
  planTier: 'pro_monthly' | 'pro_yearly';
  currentPeriodEnd?: string | null;
  eventTime: number;
  existingOrg: {
    subscription_status?: string | null;
    razorpay_subscription_id?: string | null;
    updated_at?: string | null;
  } | null;
  isRecurring: boolean;
}

async function saveActiveSubscription(
  admin: ReturnType<typeof getSupabaseAdmin>,
  params: SaveSubscriptionParams
): Promise<{ error?: any; ignored?: string }> {
  const { userId, subscriptionId, customerId, planTier, currentPeriodEnd, eventTime, existingOrg, isRecurring } = params;

  if (existingOrg) {
    const lastUpdated = existingOrg.updated_at ? new Date(existingOrg.updated_at).getTime() : 0;

    // 1. Keep one-time order/payment events from overwriting an active recurring subscription
    if (!isRecurring && existingOrg.subscription_status === 'active' && existingOrg.razorpay_subscription_id?.startsWith('sub_')) {
      return { ignored: 'recurring_already_active' };
    }

    // 2. Reject stale events for earlier identifiers
    if (existingOrg.razorpay_subscription_id && existingOrg.razorpay_subscription_id !== subscriptionId && eventTime < lastUpdated) {
      return { ignored: 'stale_older_identifier' };
    }

    // 3. Reject stale events that occurred before cancellation
    if (existingOrg.subscription_status === 'canceled' && eventTime <= lastUpdated) {
      return { ignored: 'stale_before_cancellation' };
    }

    // 4. Atomic database update:
    // If a user genuinely creates a new subscription after cancellation, allow reactivation
    const isNewPurchase =
      existingOrg.subscription_status === 'canceled' &&
      existingOrg.razorpay_subscription_id !== subscriptionId &&
      eventTime > lastUpdated;

    let query = admin
      .from('organizations')
      .update({
        razorpay_subscription_id: subscriptionId,
        ...(customerId ? { razorpay_customer_id: customerId } : {}),
        plan_tier: planTier,
        subscription_status: 'active',
        ...(currentPeriodEnd ? { current_period_end: currentPeriodEnd } : {}),
        updated_at: new Date().toISOString(),
      })
      .eq('owner_id', userId);

    if (!isNewPurchase) {
      // Atomic database-level guard: do not resurrect row if concurrently cancelled
      query = query.neq('subscription_status', 'canceled');
    }

    const { error } = await query;
    return { error };
  } else {
    // New user without existing organization row: upsert initial record
    const { error } = await admin.from('organizations').upsert(
      {
        owner_id: userId,
        razorpay_subscription_id: subscriptionId,
        ...(customerId ? { razorpay_customer_id: customerId } : {}),
        plan_tier: planTier,
        subscription_status: 'active',
        current_period_end: currentPeriodEnd || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'owner_id' }
    );
    return { error };
  }
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

      const eventTime = (sub.created_at || payload.created_at || Date.now() / 1000) * 1000;
      const { data: existingOrg, error: fetchOrgErr } = await admin
        .from('organizations')
        .select('subscription_status, razorpay_subscription_id, updated_at')
        .eq('owner_id', userId)
        .maybeSingle();

      if (fetchOrgErr) {
        console.error('Failed to query organization for subscription check:', fetchOrgErr);
        return NextResponse.json({ error: 'Database check failed.' }, { status: 500 });
      }

      const planTier = (sub.plan_id?.includes('year') || sub.notes?.plan_tier === 'pro_yearly')
        ? 'pro_yearly'
        : 'pro_monthly';

      const result = await saveActiveSubscription(admin, {
        userId,
        subscriptionId: sub.id,
        customerId: sub.customer_id,
        planTier,
        currentPeriodEnd: sub.current_end ? new Date(sub.current_end * 1000).toISOString() : null,
        eventTime,
        existingOrg,
        isRecurring: true,
      });

      if (result.ignored) {
        console.log(`Ignored subscription event (${result.ignored}):`, { subId: sub.id, userId });
        return NextResponse.json({ status: `ignored_${result.ignored}`, event });
      }

      if (result.error) {
        console.error('Failed to update organization in subscription webhook:', result.error);
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

      const eventTime = (order?.created_at || payment?.created_at || payload.created_at || Date.now() / 1000) * 1000;
      const { data: existingOrg, error: fetchOrgErr } = await admin
        .from('organizations')
        .select('subscription_status, razorpay_subscription_id, updated_at')
        .eq('owner_id', userId)
        .maybeSingle();

      if (fetchOrgErr) {
        console.error('Failed to query organization for order check:', fetchOrgErr);
        return NextResponse.json({ error: 'Database check failed.' }, { status: 500 });
      }

      const result = await saveActiveSubscription(admin, {
        userId,
        subscriptionId: referenceId,
        planTier,
        eventTime,
        existingOrg,
        isRecurring: false,
      });

      if (result.ignored) {
        console.log(`Ignored order/payment event (${result.ignored}):`, { referenceId, userId });
        return NextResponse.json({ status: `ignored_${result.ignored}`, event });
      }

      if (result.error) {
        console.error('Failed to upsert organization in order/payment webhook:', result.error);
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
