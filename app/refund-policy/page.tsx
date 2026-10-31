import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Cancellation & Refund Policy — Billenza',
  description: 'Billenza cancellation terms, subscription renewal policies, and refund guidelines.',
};

export default function RefundPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#1d1d1d', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} />
            Back to Billenza
          </Link>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Last updated: October 2026</span>
        </div>
      </header>

      <main style={{ maxWidth: 840, margin: '2.5rem auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            <RefreshCw size={14} />
            PAYMENTS &amp; REFUNDS
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.5px' }}>Cancellation &amp; Refund Policy</h1>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Subscription Cancellation</h2>
            <p>
              You can request cancellation of your Billenza subscription at any time by sending an email directly to our support desk at <a href="mailto:support@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>support@billenza.com</a>. Cancellations are processed manually by our support team. Upon cancellation, your account will remain active and fully accessible until the conclusion of your current paid billing period, and no further subscription charges will occur.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. 7-Day Money-Back Guarantee</h2>
            <p>
              We want you to be completely confident in choosing Billenza. If you subscribe to Billenza Pro (Monthly or Annual) and find that the software does not meet your business invoicing needs, you are eligible for a <strong>100% full refund within 7 days</strong> of your initial purchase date.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. How to Request a Refund (Email Only)</h2>
            <p>
              All refund requests must be submitted directly via contact email. To initiate a refund, please write to <a href="mailto:support@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>support@billenza.com</a> from your registered account email address with the following details:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Your registered account email address</li>
              <li>Payment transaction reference ID or receipt number</li>
              <li>Brief reason for the refund request</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Please note that refunds are not issued automatically or through self-service payment gateway portals; they are reviewed and processed directly by our customer support team upon receiving your email.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Refund Review &amp; Processing Time</h2>
            <p>
              Our billing desk reviews email refund requests within <strong>24 to 48 business hours</strong>. Once approved, the refund will be credited back to your original source payment method (Bank Account, UPI ID, or Debit/Credit Card) within <strong>5 to 7 business days</strong>, subject to your bank&apos;s settlement timelines.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Duplicate Payments</h2>
            <p>
              If technical network latency causes a duplicate deduction for the same billing cycle, please email <a href="mailto:support@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>support@billenza.com</a> with both transaction reference numbers. Our support team will verify the duplicate charge and process an immediate refund of the excess payment.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
