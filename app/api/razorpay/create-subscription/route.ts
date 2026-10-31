import { NextResponse } from 'next/server';
import { getAuthenticatedUser, getSupabaseAdmin } from '@/lib/supabaseAdmin';

function getCorsHeaders(request: Request) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.NEXT_PUBLIC_MARKETING_URL,
    'http://localhost:3000',
    'http://localhost:47371',
  ].filter(Boolean) as string[];

  const isAllowed = origin && allowedOrigins.some(allowed => allowed.replace(/\/$/, '') === origin.replace(/\/$/, ''));

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin! : (allowedOrigins[0] || ''),
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS(request: Request) {
  return NextResponse.json({}, { headers: getCorsHeaders(request) });
}

export async function POST(request: Request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();
    const planTier = body.planTier || (body.planId?.includes('year') ? 'pro_yearly' : 'pro_monthly');
    const inputEmail = (body.email || '').trim().toLowerCase();
    const phone = body.phone || '';
    const name = body.name || '';

    // Authenticate user via token or verified Supabase user record
    let verifiedUserId: string | null = null;
    let verifiedEmail = inputEmail;

    const authUser = await getAuthenticatedUser(request);
    if (authUser) {
      verifiedUserId = authUser.id;
      if (authUser.email) verifiedEmail = authUser.email.toLowerCase();
    } else if (body.userId) {
      // Validate user existence against Supabase Auth admin
      try {
        const admin = getSupabaseAdmin();
        const { data, error } = await admin.auth.admin.getUserById(body.userId);
        if (!error && data?.user) {
          verifiedUserId = data.user.id;
          if (data.user.email) verifiedEmail = data.user.email.toLowerCase();
        }
      } catch (adminErr) {
        console.warn('Could not verify userId via Supabase admin:', adminErr);
      }
    }

    if (!verifiedUserId) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in or register to initiate subscription.' },
        { status: 401, headers: corsHeaders }
      );
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { 
          error: 'Razorpay API credentials not configured. Please set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in environment variables.' 
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Server-Side Duplicate Check: Prevent multiple active subscriptions
    try {
      const admin = getSupabaseAdmin();
      const { data: orgData, error: orgError } = await admin
        .from('organizations')
        .select('subscription_status, plan_tier')
        .eq('owner_id', verifiedUserId)
        .maybeSingle();

      if (!orgError && orgData?.subscription_status === 'active') {
        return NextResponse.json(
          { error: 'An active subscription already exists for this account. No need to subscribe again!' },
          { status: 400, headers: corsHeaders }
        );
      }
    } catch (checkErr) {
      console.warn('Could not verify existing subscription status:', checkErr);
    }

    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`;
    const isYearly = planTier === 'pro_yearly';
    const amountInPaise = isYearly ? 499900 : 49900;
    const planName = isYearly ? 'Billenza Pro Yearly' : 'Billenza Pro Monthly';

    // 1. Resolve configured Razorpay Subscription Plan ID
    let resolvedPlanId = isYearly 
      ? process.env.RAZORPAY_PLAN_ANNUAL_4999 
      : process.env.RAZORPAY_PLAN_MONTHLY_499;

    if (!resolvedPlanId && body.planId && body.planId.startsWith('plan_')) {
      resolvedPlanId = body.planId;
    }

    // Auto-create plan on the fly if user hasn't created one manually
    if (!resolvedPlanId) {
      try {
        const createPlanRes = await fetch('https://api.razorpay.com/v1/plans', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader,
          },
          body: JSON.stringify({
            period: isYearly ? 'yearly' : 'monthly',
            interval: 1,
            item: {
              name: planName,
              amount: amountInPaise,
              currency: 'INR',
              description: isYearly ? 'Billenza 1-Year Cloud Pro Plan' : 'Billenza 1-Month Cloud Pro Plan',
            },
          }),
        });

        if (createPlanRes.ok) {
          const planData = await createPlanRes.json();
          resolvedPlanId = planData.id;
        }
      } catch (e) {
        console.warn('Could not auto-create plan via API, will try direct order:', e);
      }
    }

    // 2. Try creating a recurring subscription if plan ID is available
    if (resolvedPlanId) {
      const subRes = await fetch('https://api.razorpay.com/v1/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify({
          plan_id: resolvedPlanId,
          total_count: 120, // 10 years recurring
          quantity: 1,
          customer_notify: 1,
          notes: {
            user_id: verifiedUserId,
            email: verifiedEmail,
            name,
            phone,
            plan_tier: planTier,
          },
        }),
      });

      if (subRes.ok) {
        const subData = await subRes.json();
        return NextResponse.json({
          type: 'subscription',
          subscriptionId: subData.id,
          keyId,
          amount: amountInPaise,
          planName,
        }, { headers: corsHeaders });
      }
    }

    // 3. Fallback: If recurring subscriptions fail or aren't enabled on test account,
    // generate an instant Razorpay Order
    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        notes: {
          user_id: verifiedUserId,
          email: verifiedEmail,
          name,
          plan_tier: planTier,
        },
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok) {
      return NextResponse.json(
        { error: orderData.error?.description || 'Failed to initiate payment with Razorpay.' },
        { status: orderRes.status, headers: corsHeaders }
      );
    }

    return NextResponse.json({
      type: 'order',
      orderId: orderData.id,
      keyId,
      amount: amountInPaise,
      planName,
    }, { headers: corsHeaders });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500, headers: corsHeaders });
  }
}
