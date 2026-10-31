import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAuthenticatedUser, getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, subscriptionId, paymentId, signature, planTier } = body;

    if (!paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing paymentId or signature in verification request.' },
        { status: 400 }
      );
    }

    // 1. Authenticate user
    let verifiedUserId: string | null = null;
    const authUser = await getAuthenticatedUser(request);
    if (authUser) {
      verifiedUserId = authUser.id;
    } else if (body.userId) {
      try {
        const admin = getSupabaseAdmin();
        const { data, error } = await admin.auth.admin.getUserById(body.userId);
        if (!error && data?.user) {
          verifiedUserId = data.user.id;
        }
      } catch (adminErr) {
        console.warn('Could not verify userId via Supabase admin:', adminErr);
      }
    }

    if (!verifiedUserId) {
      return NextResponse.json(
        { error: 'Unauthorized: User authentication required for payment verification.' },
        { status: 401 }
      );
    }

    // 2. Validate Razorpay signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;

    if (!keySecret) {
      console.error('RAZORPAY_KEY_SECRET is not configured.');
      return NextResponse.json(
        { error: 'Payment gateway configuration error.' },
        { status: 500 }
      );
    }

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

    // 3. Defense-in-depth: Verify payment status via Razorpay API
    if (keyId) {
      try {
        const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`;
        const payRes = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
          headers: { Authorization: authHeader },
        });

        if (payRes.ok) {
          const payData = await payRes.json();
          if (payData.status !== 'captured' && payData.status !== 'authorized') {
            return NextResponse.json(
              { error: `Payment is in invalid status: ${payData.status}` },
              { status: 400 }
            );
          }
        }
      } catch (checkErr) {
        console.warn('Could not double-check payment status with Razorpay API:', checkErr);
      }
    }

    // 4. Update Supabase organization record securely via admin client
    const admin = getSupabaseAdmin();
    const resolvedTier = planTier === 'pro_yearly' ? 'pro_yearly' : 'pro_monthly';

    const { error: upsertError } = await admin.from('organizations').upsert({
      owner_id: verifiedUserId,
      subscription_status: 'active',
      plan_tier: resolvedTier,
      razorpay_subscription_id: subscriptionId || orderId || paymentId,
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
