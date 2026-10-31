import fs from 'fs';
import crypto from 'crypto';

// Conditionally load .env.local if present, preserving any existing environment variables
if (fs.existsSync('.env.local') && typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile('.env.local');
  } catch {
    // ignore
  }
}

let BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;

console.log(`\n========================================`);
console.log(`🧪 Running Billenza Security & API Tests`);
console.log(`========================================\n`);

// Pre-flight server check
async function verifyServerAvailable() {
  const candidates = process.env.TEST_URL
    ? [BASE_URL]
    : [BASE_URL, 'http://127.0.0.1:3000'];
  for (const url of candidates) {
    try {
      await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(2000) });
      BASE_URL = url;
      return true;
    } catch {
      // try next
    }
  }
  return false;
}

const isOnline = await verifyServerAvailable();
if (!isOnline) {
  console.error(`❌ Connection failed: Next.js dev server is not reachable at ${BASE_URL}.`);
  console.error(`👉 Please ensure your dev server is running ('npm run dev') in another terminal before testing.\n`);
  process.exit(1);
}

console.log(`Target: ${BASE_URL}\n`);

let passed = 0;
let failed = 0;

async function testFetch(endpoint, options = {}) {
  return fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    signal: options.signal || AbortSignal.timeout(5000),
  });
}

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
  const res = await testFetch('/api/razorpay/create-subscription', {
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
  const res = await testFetch('/api/razorpay/create-subscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: '00000000-0000-0000-0000-000000000000',
      email: 'victim@example.com',
      planTier: 'pro_monthly',
    }),
  });
  assert(res.status === 401, `Expected status 401, got ${res.status}`);
});

// 3. Test verify-payment rejects unauthenticated requests
await runTest('verify-payment rejects request without Bearer token', async () => {
  const res = await testFetch('/api/razorpay/verify-payment', {
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
  const res = await testFetch('/api/razorpay/verify-payment', {
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
  const res = await testFetch('/api/razorpay/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert(res.status === 400, `Expected status 400, got ${res.status}`);
});

// 6. Test webhook rejects request without x-razorpay-signature
await runTest('webhook rejects request without x-razorpay-signature header', async () => {
  const res = await testFetch('/api/webhooks/razorpay', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: 'payment.captured' }),
  });
  assert(res.status === 400, `Expected status 400, got ${res.status}`);
});

// 7. Test webhook rejects invalid signature
await runTest('webhook rejects request with invalid HMAC signature', async () => {
  const res = await testFetch('/api/webhooks/razorpay', {
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

    const res = await testFetch('/api/webhooks/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signature,
      },
      body: payload,
    });

    assert(res.status === 422, `Expected status 422, got ${res.status}`);
  });

  // 9. Test webhook rejects payment with invalid / tampered amount (e.g. 100 paise)
  await runTest('webhook rejects order/payment with invalid amount', async () => {
    const payload = JSON.stringify({
      event: 'payment.captured',
      payload: {
        payment: {
          entity: {
            id: 'pay_test_tampered',
            amount: 100, // ₹1 instead of ₹499 or ₹4,999
            currency: 'INR',
            notes: { user_id: '00000000-0000-0000-0000-000000000000' },
          },
        },
      },
    });

    const signature = crypto.createHmac('sha256', WEBHOOK_SECRET).update(payload).digest('hex');

    const res = await testFetch('/api/webhooks/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signature,
      },
      body: payload,
    });

    assert(res.status === 400, `Expected status 400 for tampered amount, got ${res.status}`);
  });

  // 10. Test webhook rejects non-INR currency
  await runTest('webhook rejects order/payment with unsupported currency', async () => {
    const payload = JSON.stringify({
      event: 'payment.captured',
      payload: {
        payment: {
          entity: {
            id: 'pay_test_curr',
            amount: 49900,
            currency: 'USD',
            notes: { user_id: '00000000-0000-0000-0000-000000000000' },
          },
        },
      },
    });

    const signature = crypto.createHmac('sha256', WEBHOOK_SECRET).update(payload).digest('hex');

    const res = await testFetch('/api/webhooks/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signature,
      },
      body: payload,
    });

    assert(res.status === 400, `Expected status 400 for non-INR currency, got ${res.status}`);
  });

  // 11. Test webhook rejects unrecognized subscription plan ID
  await runTest('webhook rejects subscription with unrecognized plan ID', async () => {
    const payload = JSON.stringify({
      event: 'subscription.charged',
      payload: {
        subscription: {
          entity: {
            id: 'sub_test_invalid_plan',
            plan_id: 'plan_bogus_free_123',
            customer_id: 'cust_test',
            notes: { user_id: '00000000-0000-0000-0000-000000000000' },
          },
        },
      },
    });

    const signature = crypto.createHmac('sha256', WEBHOOK_SECRET).update(payload).digest('hex');

    const res = await testFetch('/api/webhooks/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signature,
      },
      body: payload,
    });

    assert(res.status === 400, `Expected status 400 for unrecognized plan, got ${res.status}`);
  });
}

console.log(`\n----------------------------------------`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`----------------------------------------\n`);

if (failed > 0) {
  process.exit(1);
}
