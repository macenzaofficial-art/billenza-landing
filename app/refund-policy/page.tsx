import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { RefreshCw, AlertCircle, CheckCircle2, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — Billenza | Macenza',
  description:
    'Billenza cancellation terms, subscription renewal policies, duplicate charge refunds, and 60-day data removal timeline.',
  alternates: {
    canonical: 'https://billenza.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />

      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content">
          <Breadcrumbs items={[{ label: 'Cancellation & Refunds' }]} />
          <div className="badge-chip lime">
            <RefreshCw size={13} /> BILLING TERMS &amp; DISCLOSURES
          </div>
          <h1>Cancellation &amp; Refund Policy</h1>
          <p className="sub-hero-desc">
            Official billing, cancellation procedures, duplicate charge policies, and data grace periods for Billenza (Macenza).
          </p>
        </div>
      </section>

      <main style={{ maxWidth: 900, margin: '48px auto', padding: '0 24px 64px' }}>
        <div className="card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line-soft)', paddingBottom: 16, marginBottom: 24 }}>
            <span style={{ fontSize: 13, color: 'var(--gray)', fontWeight: 600 }}>Operating Entity: Macenza</span>
            <span style={{ fontSize: 13, color: 'var(--gray)' }}>Last Revised: October 2026</span>
          </div>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Subscription Cancellation</h2>
            <p>
              You may cancel your recurring Billenza subscription (Monthly Pro or Annual Pro) at any time. To cancel, you can:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Manage and cancel your subscription directly from your Billenza account billing settings; or</li>
              <li>Send a cancellation request from your registered account email to <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a>.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Upon cancellation, all future scheduled auto-debits and recurring billing cycles are immediately discontinued.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Strict No-Refund Policy</h2>
            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <AlertCircle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#92400e' }}>All Successful Payments Are Non-Refundable:</strong>
                  <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.9rem' }}>
                    Because Billenza provides immediate electronic provisioning of software access, tax computation engines, e-Way bill tools, and cloud storage upon transaction confirmation, <strong>all subscription charges (Monthly Pro at ₹499 and Annual Pro at ₹4,999) are strictly non-refundable</strong> once processed.
                  </p>
                </div>
              </div>
            </div>
            <p>
              We do not provide pro-rated refunds, partial refunds, or credits for unused subscription time, mid-cycle cancellations, or downgraded accounts.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Immediate Account Lock &amp; 60-Day Data Removal Grace Period</h2>
            <p>
              When a subscription period concludes without renewal or upon immediate cancellation:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Immediate Lock:</strong> Access to the invoicing console (<code>app.billenza.com</code>) is automatically locked. No new documents or reports can be created, and data access is locked.</li>
              <li><strong>No Post-Cancellation Exports:</strong> Once access is locked, self-service data exports are disabled. Users are strictly required to export all invoices, GSTR JSONs, and complete database backups (using the built-in standard JSON Backup Export tool) <strong>prior to the conclusion of their active paid subscription</strong>.</li>
              <li><strong>60-Day Removal Grace Period:</strong> Stored tenant data remains locked in our secure database for a grace period of <strong>60 calendar days</strong> following expiration. If the subscription is not renewed within this 60-day window, all associated profile records, customer directories, inventory entries, and past invoices are <strong>permanently and irreversibly purged</strong> from our production servers and backups.</li>
              <li><strong>Statutory Preservation Responsibility:</strong> Under Section 36 of the Central Goods and Services Tax (CGST) Act, 2017, taxpayers are legally obligated to preserve business accounts and tax invoices for a minimum of 72 months (6 years). Preserving and backing up your statutory tax documents remains your sole legal responsibility.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Duplicate or Erroneous Transactions (5–7 Business Days Refund)</h2>
            <p>
              If a banking network timeout, payment gateway glitch, or system latency results in an accidental duplicate deduction for the same billing period:
            </p>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#0f172a' }}>100% Refund for Verified Duplicate Debits:</strong>
                  <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                    Upon receiving your notification, our billing team will verify the redundant charge with our payment aggregator (Razorpay) and process a complete refund of the excess payment.
                  </p>
                </div>
              </div>
            </div>
            <p>
              <strong>Refund Settlement Timeline:</strong> Once approved, the refund will be automatically credited back to your <strong>original source payment method</strong> (Bank Account, UPI ID, or Credit/Debit Card) within <strong>5 to 7 business days</strong>, subject to your issuing bank&apos;s standard clearing cycle.
            </p>
          </section>

          <section style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. How to Report Duplicate Transactions</h2>
            <p>To request a refund for a duplicate deduction, email our support desk:</p>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '0.75rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              <div><strong>Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a></div>
              <div><strong>Phone Support:</strong> <a href="tel:+919414660123" style={{ color: '#1d1d1d', fontWeight: 600 }}>+91 94146 60123</a></div>
              <div><strong>Required Details:</strong> Registered account email, both Razorpay transaction reference numbers (Payment IDs), and date of debit.</div>
              <div><strong>Response Turnaround:</strong> Within 24 to 48 business hours.</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
