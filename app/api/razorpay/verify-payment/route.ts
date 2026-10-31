import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAuthenticatedUser, getSupabaseAdmin } from '@/lib/supabaseAdmin';

function getCorsHeaders(request: Request) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.NEXT_PUBLIC_MARKETING_URL,
    ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:3000', 'http://localhost:47371'] : []),
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

async function syncDefaultBusinessProfile({
  admin,
  verifiedUserId,
  verifiedEmail,
  notesName,
  orgId,
}: {
  admin: ReturnType<typeof getSupabaseAdmin>;
  verifiedUserId: string;
  verifiedEmail: string;
  notesName?: string;
  orgId?: string;
}): Promise<boolean> {
  try {
    const { data: existingProf, error: findProfErr } = await admin
      .from('profiles')
      .select('id, business_name, data')
      .eq('user_id', verifiedUserId)
      .limit(1)
      .maybeSingle();

    if (findProfErr) {
      console.warn('Profile lookup failed in verify-payment:', findProfErr);
      return false;
    }

    let detectedName = notesName && notesName !== 'Billenza Customer'
      ? notesName
      : null;

    if (!detectedName && orgId) {
      const { data: orgInfo, error: orgInfoErr } = await admin
        .from('organizations')
        .select('business_name')
        .eq('id', orgId)
        .maybeSingle();

      if (orgInfoErr) {
        console.warn('Org info lookup error in verify-payment profile sync:', orgInfoErr);
      } else if (orgInfo?.business_name && orgInfo.business_name !== 'My Business') {
        detectedName = orgInfo.business_name;
      }
    }

    const finalBizName = detectedName || 'My Business';

    if (!existingProf) {
      const { error: insertProfErr } = await admin
        .from('profiles')
        .insert({
          user_id: verifiedUserId,
          business_name: finalBizName,
          email: verifiedEmail || '',
          is_default: true,
          data: {
            businessName: finalBizName,
            email: verifiedEmail || '',
            isDefault: true,
          },
          updated_at: new Date().toISOString(),
        });

      if (insertProfErr) {
        console.warn('Profile insert error in verify-payment:', insertProfErr);
        return false;
      }
    } else if (detectedName && (!existingProf.business_name || existingProf.business_name === 'My Business')) {
      const existingData =
        typeof existingProf.data === 'object' && existingProf.data !== null
          ? (existingProf.data as Record<string, unknown>)
          : {};

      const { error: updateProfErr } = await admin
        .from('profiles')
        .update({
          business_name: detectedName,
          data: {
            ...existingData,
            businessName: detectedName,
          },
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingProf.id);

      if (updateProfErr) {
        console.warn('Profile update error in verify-payment:', updateProfErr);
        return false;
      }
    }

    return true;
  } catch (profSyncErr) {
    console.warn('Profile sync in verify-payment note:', profSyncErr);
    return false;
  }
}

export async function POST(request: Request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();
    const orderId = typeof body.orderId === 'string' ? body.orderId.trim() : undefined;
    const subscriptionId = typeof body.subscriptionId === 'string' ? body.subscriptionId.trim() : undefined;
    const paymentId = typeof body.paymentId === 'string' ? body.paymentId.trim() : undefined;
    const signature = typeof body.signature === 'string' ? body.signature.trim() : undefined;

    if (!paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing paymentId or signature in verification request.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 1. Authenticate user strictly via Bearer token
    const authUser = await getAuthenticatedUser(request);
    if (!authUser) {
      return NextResponse.json(
        { error: 'Unauthorized: User authentication required for payment verification.' },
        { status: 401, headers: corsHeaders }
      );
    }
    const verifiedUserId = authUser.id;
    const verifiedEmail = authUser.email || '';

    // 2. Validate Razorpay gateway configuration
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;

    if (!keySecret || !keyId) {
      console.error('Razorpay API credentials (KEY_ID / KEY_SECRET) are not configured.');
      return NextResponse.json(
        { error: 'Payment gateway configuration error.' },
        { status: 500, headers: corsHeaders }
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
        { status: 400, headers: corsHeaders }
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
        { status: 400, headers: corsHeaders }
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
          { status: 502, headers: corsHeaders }
        );
      }

      payData = await payRes.json();
    } catch (fetchErr) {
      console.error('Network error connecting to Razorpay API:', fetchErr);
      return NextResponse.json(
        { error: 'Payment gateway is currently unreachable.' },
        { status: 502, headers: corsHeaders }
      );
    }

    if (payData.status !== 'captured' && payData.status !== 'authorized') {
      return NextResponse.json(
        { error: `Payment is in invalid status: ${payData.status}` },
        { status: 400, headers: corsHeaders }
      );
    }

    // 5. Bind payment user notes to verifiedUserId
    let notesUserId = payData.notes?.user_id;
    let notesPlanTier = payData.notes?.plan_tier;
    let notesName = payData.notes?.name;

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
          notesName = notesName || subData.notes?.name;
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
          notesName = notesName || orderData.notes?.name;
        }
      } catch (err) {
        console.warn('Could not fetch order notes from Razorpay API:', err);
      }
    }

    if (!notesUserId || notesUserId !== verifiedUserId) {
      return NextResponse.json(
        { error: 'Forbidden: Payment user identity does not match authenticated user.' },
        { status: 403, headers: corsHeaders }
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
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate that the paid amount matches server notes if specified
    if (notesPlanTier && notesPlanTier !== derivedTier) {
      return NextResponse.json(
        { error: `Payment amount (${paidAmount}) does not match plan tier (${notesPlanTier}) in order notes.` },
        { status: 400, headers: corsHeaders }
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
        .select('id, owner_id, subscription_status, razorpay_subscription_id')
        .in('razorpay_subscription_id', subIdentifiers);

      if (existingSubErr) {
        console.error('Replay check query failed:', existingSubErr);
        return NextResponse.json(
          { error: 'Could not verify payment uniqueness.' },
          { status: 500, headers: corsHeaders }
        );
      }

      if (existingSubOrgs && existingSubOrgs.some(o => o.owner_id !== verifiedUserId)) {
        return NextResponse.json(
          { error: 'This payment or subscription has already been registered to another account.' },
          { status: 409, headers: corsHeaders }
        );
      }

      if (existingSubOrgs && existingSubOrgs.some(o => o.subscription_status !== 'active')) {
        return NextResponse.json(
          { error: 'This payment has already been used and cannot be re-activated.' },
          { status: 409, headers: corsHeaders }
        );
      }

      // If already active with this payment identifier for this user, return success idempotently
      const matchingActiveOrg = existingSubOrgs?.find(
        (o) => o.owner_id === verifiedUserId && o.subscription_status === 'active'
      );
      if (matchingActiveOrg) {
        await syncDefaultBusinessProfile({
          admin,
          verifiedUserId,
          verifiedEmail,
          notesName,
          orgId: matchingActiveOrg.id,
        });

        return NextResponse.json(
          {
            success: true,
            message: 'Payment verified successfully and subscription is active.',
            planTier: resolvedTier,
          },
          { headers: corsHeaders }
        );
      }
    }

    // 8. Update Supabase organization record securely via admin client
    const { data: existingUserOrg, error: findUserOrgErr } = await admin
      .from('organizations')
      .select('id')
      .eq('owner_id', verifiedUserId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (findUserOrgErr) {
      console.error('Failed to locate organization for user:', findUserOrgErr);
      return NextResponse.json(
        { error: 'Payment verified, but database update failed. Our team has been alerted.' },
        { status: 500, headers: corsHeaders }
      );
    }

    let saveOrgError = null;
    let savedOrgId = existingUserOrg?.id;
    if (existingUserOrg?.id) {
      const { error: updateErr } = await admin
        .from('organizations')
        .update({
          subscription_status: 'active',
          plan_tier: resolvedTier,
          razorpay_subscription_id: targetSubId,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingUserOrg.id);
      saveOrgError = updateErr;
    } else {
      const { data: insertedOrg, error: insertErr } = await admin
        .from('organizations')
        .insert({
          owner_id: verifiedUserId,
          subscription_status: 'active',
          plan_tier: resolvedTier,
          razorpay_subscription_id: targetSubId,
          updated_at: new Date().toISOString(),
        })
        .select('id')
        .maybeSingle();

      // If a concurrent webhook already inserted this record, recover idempotently
      if (insertErr && (insertErr as { code?: string }).code === '23505') {
        const { data: alreadyInsertedOrg } = await admin
          .from('organizations')
          .select('id, subscription_status, owner_id')
          .eq('razorpay_subscription_id', targetSubId)
          .maybeSingle();

        if (alreadyInsertedOrg && alreadyInsertedOrg.owner_id === verifiedUserId) {
          saveOrgError = null;
          savedOrgId = alreadyInsertedOrg.id;
        } else {
          saveOrgError = insertErr;
        }
      } else {
        saveOrgError = insertErr;
        if (insertedOrg?.id) {
          savedOrgId = insertedOrg.id;
        }
      }
    }

    if (saveOrgError) {
      console.error('Failed to update organization subscription:', saveOrgError);
      return NextResponse.json(
        { error: 'Payment verified, but database update failed. Our team has been alerted.' },
        { status: 500, headers: corsHeaders }
      );
    }

    // 9. Ensure a default business profile exists in public.profiles so the user sees their company name in the app
    await syncDefaultBusinessProfile({
      admin,
      verifiedUserId,
      verifiedEmail,
      notesName,
      orgId: savedOrgId || existingUserOrg?.id,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Payment verified successfully and subscription activated.',
        planTier: resolvedTier,
      },
      { headers: corsHeaders }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('Verify payment error:', message);
    return NextResponse.json({ error: message }, { status: 500, headers: corsHeaders });
  }
}
