import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAuthenticatedUser, getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, subscriptionId, paymentId, signature } = body;

    if (!paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing paymentId or signature in verification request.' },
        { status: 400 }
      );
    }

    // 1. Authenticate user strictly via Bearer token
    const authUser = await getAuthenticatedUser(request);
    if (!authUser) {
      return NextResponse.json(
        { error: 'Unauthorized: User authentication required for payment verification.' },
        { status: 401 }
      );
    }
    const verifiedUserId = authUser.id;

    // 2. Validate Razorpay gateway configuration
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;

    if (!keySecret || !keyId) {
      console.error('Razorpay API credentials (KEY_ID / KEY_SECRET) are not configured.');
      return NextResponse.json(
        { error: 'Payment gateway configuration error.' },
        { status: 500 }
      );
    }

    // 3. Validate Razorpay signature
    let dataToSign = '';
    if (subscriptionId) {
      dataToSign = `${paymentId}|${subscriptionId}`;
    } else if (orderId) {
      dataToSign = `${orderId}|${paymentId}`;
    } else {
      return NextResponse.json(
        { error: 'Either orderId or subscriptionId must be provided with paymentId.' },
        { status: 400 }
      );
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(dataToSign)
      .digest('hex');

    const sigBuf = Buffer.from(signature, 'utf8');
    const expBuf = Buffer.from(expectedSignature, 'utf8');

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return NextResponse.json(
        { error: 'Invalid payment signature. Verification failed.' },
        { status: 400 }
      );
    }

    // 4. Verify payment status via Razorpay API (fail-closed, return 502 if status cannot be confirmed)
    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`;
    let payData: {
      status?: string;
      amount?: number;
      order_id?: string;
      notes?: Record<string, string>;
    };

    try {
      const payRes = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
        headers: { Authorization: authHeader },
      });

      if (!payRes.ok) {
        const errText = await payRes.text();
        console.error(`Razorpay payment fetch failed with status ${payRes.status}:`, errText);
        return NextResponse.json(
          { error: 'Payment gateway could not confirm payment status.' },
          { status: 502 }
        );
      }

      payData = await payRes.json();
    } catch (fetchErr) {
      console.error('Network error connecting to Razorpay API:', fetchErr);
      return NextResponse.json(
        { error: 'Payment gateway is currently unreachable.' },
        { status: 502 }
      );
    }

    if (payData.status !== 'captured' && payData.status !== 'authorized') {
      return NextResponse.json(
        { error: `Payment is in invalid status: ${payData.status}` },
        { status: 400 }
      );
    }

    // 5. Bind payment user notes to verifiedUserId
    let notesUserId = payData.notes?.user_id;
    let notesPlanTier = payData.notes?.plan_tier;

    // If payment entity does not include user notes, fetch from parent subscription or order
    if (!notesUserId && subscriptionId) {
      try {
        const subRes = await fetch(`https://api.razorpay.com/v1/subscriptions/${subscriptionId}`, {
          headers: { Authorization: authHeader },
        });
        if (subRes.ok) {
          const subData = await subRes.json();
          notesUserId = notesUserId || subData.notes?.user_id;
          notesPlanTier = notesPlanTier || subData.notes?.plan_tier;
        }
      } catch (err) {
        console.warn('Could not fetch subscription notes from Razorpay API:', err);
      }
    } else if (!notesUserId && (orderId || payData.order_id)) {
      try {
        const resolvedOrderId = orderId || payData.order_id;
        const orderRes = await fetch(`https://api.razorpay.com/v1/orders/${resolvedOrderId}`, {
          headers: { Authorization: authHeader },
        });
        if (orderRes.ok) {
          const orderData = await orderRes.json();
          notesUserId = notesUserId || orderData.notes?.user_id;
          notesPlanTier = notesPlanTier || orderData.notes?.plan_tier;
        }
      } catch (err) {
        console.warn('Could not fetch order notes from Razorpay API:', err);
      }
    }

    if (!notesUserId || notesUserId !== verifiedUserId) {
      return NextResponse.json(
        { error: 'Forbidden: Payment user identity does not match authenticated user.' },
        { status: 403 }
      );
    }

    // 6. Validate fetched amount against server-defined plan prices
    const VALID_PLANS: Record<number, 'pro_monthly' | 'pro_yearly'> = {
      49900: 'pro_monthly',
      499900: 'pro_yearly',
    };

    const paidAmount = Number(payData.amount);
    const derivedTier = VALID_PLANS[paidAmount];

    if (!derivedTier) {
      return NextResponse.json(
        { error: `Payment amount (${paidAmount}) does not match any valid plan tier.` },
        { status: 400 }
      );
    }

    // Validate that the paid amount matches server notes if specified
    if (notesPlanTier && notesPlanTier !== derivedTier) {
      return NextResponse.json(
        { error: `Payment amount (${paidAmount}) does not match plan tier (${notesPlanTier}) in order notes.` },
        { status: 400 }
      );
    }

    const resolvedTier = derivedTier;

    // 7. Prevent payment replay / subscription reuse across accounts
    const admin = getSupabaseAdmin();
    const targetSubId = subscriptionId || orderId || paymentId;
    const subIdentifiers = [subscriptionId, orderId, paymentId].filter(Boolean) as string[];

    if (subIdentifiers.length > 0) {
      const { data: existingSubOrgs, error: existingSubErr } = await admin
        .from('organizations')
        .select('owner_id, subscription_status, razorpay_subscription_id')
        .in('razorpay_subscription_id', subIdentifiers);

      if (existingSubErr) {
        console.error('Replay check query failed:', existingSubErr);
        return NextResponse.json(
          { error: 'Could not verify payment uniqueness.' },
          { status: 500 }
        );
      }

      if (existingSubOrgs && existingSubOrgs.some(o => o.owner_id !== verifiedUserId)) {
        return NextResponse.json(
          { error: 'This payment or subscription has already been registered to another account.' },
          { status: 409 }
        );
      }

      if (existingSubOrgs && existingSubOrgs.some(o => o.subscription_status !== 'active')) {
        return NextResponse.json(
          { error: 'This payment has already been used and cannot be re-activated.' },
          { status: 409 }
        );
      }

      // If already active with this payment identifier for this user, return success idempotently
      if (existingSubOrgs && existingSubOrgs.some(o => o.owner_id === verifiedUserId && o.subscription_status === 'active')) {
        return NextResponse.json({
          success: true,
          message: 'Payment verified successfully and subscription is active.',
          planTier: resolvedTier,
        });
      }
    }

    // 8. Update Supabase organization record securely via admin client
    const { error: upsertError } = await admin.from('organizations').upsert({
      owner_id: verifiedUserId,
      subscription_status: 'active',
      plan_tier: resolvedTier,
      razorpay_subscription_id: targetSubId,
      updated_at: new Date().toISOString(),
    });

    if (upsertError) {
      console.error('Failed to update organization subscription:', upsertError);
      return NextResponse.json(
        { error: 'Payment verified, but database update failed. Our team has been alerted.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully and subscription activated.',
      planTier: resolvedTier,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('Verify payment error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
