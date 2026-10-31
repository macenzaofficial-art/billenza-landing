import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

async function findUserByEmail(admin: ReturnType<typeof getSupabaseAdmin>, email: string): Promise<string | null> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return null;

  try {
    // 1. Direct O(1) indexed lookup from public.profiles table
    const { data: profile, error: profileErr } = await admin
      .from('profiles')
      .select('user_id')
      .ilike('email', normalizedEmail)
      .limit(1)
      .maybeSingle();

    if (!profileErr && profile?.user_id) {
      return profile.user_id;
    }

    // 2. Try database RPC if configured in Supabase
    try {
      const { data: rpcUserId, error: rpcErr } = await admin.rpc('get_user_id_by_email', {
        user_email: normalizedEmail,
      });
      if (!rpcErr && rpcUserId) {
        return rpcUserId as string;
      }
    } catch {
      // RPC may not exist, continue to bounded fallback
    }

    // 3. Bounded fast lookup via Supabase Auth Admin API (max 1 page, no infinite sequential pagination loop)
    const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 50 });
    if (!error && data?.users) {
      const match = data.users.find(u => u.email?.trim().toLowerCase() === normalizedEmail);
      if (match) {
        return match.id;
      }
    }
  } catch (err) {
    console.error('Error looking up user by email in webhook:', err);
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
    id: string;
    subscription_status?: string | null;
    razorpay_subscription_id?: string | null;
    updated_at?: string | null;
  } | null;
  isRecurring: boolean;
}

async function saveActiveSubscription(
  admin: ReturnType<typeof getSupabaseAdmin>,
  params: SaveSubscriptionParams
): Promise<{ error?: unknown; ignored?: string }> {
  const { userId, subscriptionId, customerId, planTier, currentPeriodEnd, eventTime, existingOrg, isRecurring } = params;

  if (existingOrg?.id) {
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
      .eq('id', existingOrg.id);

    if (!isNewPurchase) {
      // Atomic database-level guard: do not resurrect row if concurrently cancelled
      query = query.neq('subscription_status', 'canceled');
    }

    const { error } = await query;
    return { error };
  } else {
    // New user without existing organization row: insert initial record
    const { error } = await admin.from('organizations').insert({
      owner_id: userId,
      razorpay_subscription_id: subscriptionId,
      ...(customerId ? { razorpay_customer_id: customerId } : {}),
      plan_tier: planTier,
      subscription_status: 'active',
      current_period_end: currentPeriodEnd || null,
      updated_at: new Date().toISOString(),
    });

    // If concurrent insert already created the record, update that record instead of failing
    if (error && (error as { code?: string }).code === '23505') {
      const { error: updateError } = await admin
        .from('organizations')
        .update({
          subscription_status: 'active',
          plan_tier: planTier,
          ...(customerId ? { razorpay_customer_id: customerId } : {}),
          ...(currentPeriodEnd ? { current_period_end: currentPeriodEnd } : {}),
          updated_at: new Date().toISOString(),
        })
        .eq('razorpay_subscription_id', subscriptionId);
      return { error: updateError };
    }

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
        .select('id, subscription_status, razorpay_subscription_id, updated_at')
        .eq('owner_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (fetchOrgErr) {
        console.error('Failed to query organization for subscription check:', fetchOrgErr);
        return NextResponse.json({ error: 'Database check failed.' }, { status: 500 });
      }

      // Validate subscription plan against configured IDs or recognized tier markers
      const monthlyPlanId = process.env.RAZORPAY_PLAN_MONTHLY_499;
      const annualPlanId = process.env.RAZORPAY_PLAN_ANNUAL_4999;

      const isYearly =
        (annualPlanId && sub.plan_id === annualPlanId) ||
        sub.plan_id?.toLowerCase().includes('year') ||
        sub.notes?.plan_tier === 'pro_yearly';
      const isMonthly =
        (monthlyPlanId && sub.plan_id === monthlyPlanId) ||
        sub.plan_id?.toLowerCase().includes('month') ||
        sub.notes?.plan_tier === 'pro_monthly';

      if (!isYearly && !isMonthly) {
        console.error('Webhook rejected: unrecognized subscription plan_id:', sub.plan_id);
        return NextResponse.json(
          { error: 'Unrecognized subscription plan.' },
          { status: 400 }
        );
      }

      const planTier: 'pro_monthly' | 'pro_yearly' = isYearly ? 'pro_yearly' : 'pro_monthly';

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

      // Validate currency
      if (payment?.currency && payment.currency !== 'INR') {
        console.error('Webhook rejected: unsupported payment currency:', payment.currency);
        return NextResponse.json(
          { error: 'Payment currency must be INR.' },
          { status: 400 }
        );
      }

      // Validate payment amount against legitimate plan tiers
      const VALID_PLANS: Record<number, 'pro_monthly' | 'pro_yearly'> = {
        49900: 'pro_monthly',
        499900: 'pro_yearly',
      };

      const paidAmount = Number(payment?.amount || order?.amount);
      const derivedTier = VALID_PLANS[paidAmount];

      if (!derivedTier) {
        console.error(`Webhook rejected: invalid payment amount (${paidAmount})`);
        return NextResponse.json(
          { error: `Payment amount (${paidAmount}) does not match any valid plan tier.` },
          { status: 400 }
        );
      }

      if (notes.plan_tier && notes.plan_tier !== derivedTier) {
        console.error(`Webhook rejected: notes plan_tier (${notes.plan_tier}) does not match amount tier (${derivedTier})`);
        return NextResponse.json(
          { error: 'Payment amount does not match plan tier in notes.' },
          { status: 400 }
        );
      }

      const planTier = derivedTier;
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
        .select('id, subscription_status, razorpay_subscription_id, updated_at')
        .eq('owner_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
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
