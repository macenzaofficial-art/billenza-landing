import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Billenza',
  description: 'Billenza privacy policy regarding client financial records, data protection, and cloud confidentiality.',
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck size={14} />
            DATA PRIVACY &amp; SECURITY
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.5px' }}>Privacy Policy</h1>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Introduction</h2>
            <p>
              Billenza Inc. (&quot;Billenza&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the privacy and integrity of your corporate and personal information. This Privacy Policy details how we collect, store, process, and protect your data when you access or use Billenza&apos;s GST invoicing and compliance suite.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Information We Collect</h2>
            <p>To provide accurate tax calculations and invoice generation services, we collect:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Account Information:</strong> Name, business name, official email address, phone number, and billing credentials.</li>
              <li><strong>Statutory Business Data:</strong> GSTIN, PAN, bank details, state tax jurisdictions, company logos, and authorized digital signatures.</li>
              <li><strong>Invoice &amp; Transaction Details:</strong> Customer and vendor details, HSN/SAC codes, item prices, and tax computations required for GSTR filing.</li>
              <li><strong>Payment Information:</strong> Transactions processed via our payment aggregator (Razorpay) in compliance with RBI guidelines. We do not store raw card numbers or CVVs on our servers.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. How We Use Your Information</h2>
            <p>We process your data strictly to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Generate compliant GST tax invoices, bills of supply, delivery challans, and e-Way bills.</li>
              <li>Compile GSTR-1, GSTR-3B, and GSTR-2B reconciliation JSON structures.</li>
              <li>Authenticate your account session and maintain organization isolation.</li>
              <li>Send critical statutory alerts, subscription receipts, and customer support notifications.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Data Protection &amp; Confidentiality</h2>
            <p>
              Your financial records are encrypted in transit using TLS 1.3 and at rest using AES-256 standards. We maintain strict tenant isolation across organizations. Billenza will never monetize, lease, or share your proprietary customer databases or invoices with third-party advertisers.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Contact &amp; Grievance Officer</h2>
            <p>
              If you have any questions or data access requests under Indian Information Technology (IT) Rules, please reach out to our Grievance Officer at <a href="mailto:privacy@billenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>privacy@billenza.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
