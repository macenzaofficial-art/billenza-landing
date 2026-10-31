import crypto from 'crypto';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;

console.log(`\n========================================`);
console.log(`🧪 Running Billenza Security & API Tests`);
console.log(`Target: ${BASE_URL}`);
console.log(`========================================\n`);

let passed = 0;
let failed = 0;

async function runTest(name, fn) {
  process.stdout.write(`• ${name}... `);
  try {
    await fn();
    console.log('✅ PASSED');
    passed++;
  } catch (err) {
    console.log(`❌ FAILED: ${err.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// 1. Test create-subscription rejects unauthenticated requests
await runTest('create-subscription rejects request without Bearer token', async () => {
  const res = await fetch(`${BASE_URL}/api/razorpay/create-subscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ planTier: 'pro_monthly' }),
  });
  const data = await res.json();
  assert(res.status === 401, `Expected status 401, got ${res.status}`);
  assert(data.error?.toLowerCase().includes('unauthorized'), `Unexpected error message: ${data.error}`);
});

// 2. Test create-subscription rejects unauthenticated body.userId impersonation attempt
await runTest('create-subscription blocks unauthenticated body.userId bypass', async () => {
  const res = await fetch(`${BASE_URL}/api/razorpay/create-subscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: '00000000-0000-0000-0000-000000000000',
      email: 'victim@example.com',
      planTier: 'pro_monthly',
    }),
  });
  const data = await res.json();
  assert(res.status === 401, `Expected status 401, got ${res.status}`);
});

// 3. Test verify-payment rejects unauthenticated requests
await runTest('verify-payment rejects request without Bearer token', async () => {
  const res = await fetch(`${BASE_URL}/api/razorpay/verify-payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      paymentId: 'pay_dummy123',
      signature: 'dummy_sig',
      orderId: 'order_dummy123',
    }),
  });
  assert(res.status === 401, `Expected status 401, got ${res.status}`);
});

// 4. Test verify-payment blocks body.userId impersonation attempt
await runTest('verify-payment blocks unauthenticated body.userId bypass', async () => {
  const res = await fetch(`${BASE_URL}/api/razorpay/verify-payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: '00000000-0000-0000-0000-000000000000',
      paymentId: 'pay_dummy123',
      signature: 'dummy_sig',
      orderId: 'order_dummy123',
    }),
  });
  assert(res.status === 401, `Expected status 401, got ${res.status}`);
});

// 5. Test verify-payment checks missing parameters
await runTest('verify-payment requires paymentId and signature', async () => {
  const res = await fetch(`${BASE_URL}/api/razorpay/verify-payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert(res.status === 400, `Expected status 400, got ${res.status}`);
});

// 6. Test webhook rejects request without x-razorpay-signature
await runTest('webhook rejects request without x-razorpay-signature header', async () => {
  const res = await fetch(`${BASE_URL}/api/webhooks/razorpay`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: 'payment.captured' }),
  });
  assert(res.status === 400, `Expected status 400, got ${res.status}`);
});

// 7. Test webhook rejects invalid signature
await runTest('webhook rejects request with invalid HMAC signature', async () => {
  const res = await fetch(`${BASE_URL}/api/webhooks/razorpay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-razorpay-signature': '0000000000000000000000000000000000000000000000000000000000000000',
    },
    body: JSON.stringify({ event: 'payment.captured' }),
  });
  assert(res.status === 400, `Expected status 400, got ${res.status}`);
});

// 8. Test webhook fails with 422 if user cannot be resolved (prevent silent drops)
if (WEBHOOK_SECRET) {
  await runTest('webhook returns 422 when user cannot be resolved (forces retry)', async () => {
    const payload = JSON.stringify({
      event: 'subscription.charged',
      payload: {
        subscription: {
          entity: {
            id: 'sub_test_unresolvable',
            customer_id: 'cust_test',
          },
        },
      },
    });

    const signature = crypto.createHmac('sha256', WEBHOOK_SECRET).update(payload).digest('hex');

    const res = await fetch(`${BASE_URL}/api/webhooks/razorpay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signature,
      },
      body: payload,
    });

    assert(res.status === 422, `Expected status 422, got ${res.status}`);
  });
}

console.log(`\n----------------------------------------`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`----------------------------------------\n`);

if (failed > 0) {
  process.exit(1);
}
