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
              You can cancel your Billenza subscription at any time directly through your Organization Settings dashboard or by emailing <a href="mailto:support@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>support@billenza.com</a>. Upon cancellation, your account will remain active and fully functional until the end of the current paid billing cycle. You will not be charged for subsequent billing periods.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. 7-Day Money-Back Guarantee</h2>
            <p>
              We want you to be completely satisfied with Billenza. If you subscribe to Billenza Pro (Monthly or Annual) and find that the software does not meet your business invoicing requirements, you are eligible for a <strong>100% full refund within 7 days</strong> of your initial purchase date.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. How to Request a Refund</h2>
            <p>
              To claim a refund under our 7-day guarantee, simply send an email to <a href="mailto:support@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>support@billenza.com</a> from your registered account email with your payment reference or invoice ID.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Refund Processing Time</h2>
            <p>
              Once approved, your refund will be initiated immediately via our payment gateway (Razorpay). Depending on your bank or card issuer, the credited amount will appear in your original payment method (Bank Account, UPI, or Credit/Debit Card) within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Duplicate Payments</h2>
            <p>
              In the unlikely event that technical network latency causes a duplicate charge, our automated reconciliation system will detect it and refund the surplus payment automatically within 48 hours.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
