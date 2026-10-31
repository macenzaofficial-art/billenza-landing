import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — Billenza',
  description: 'Terms and Conditions governing the use of Billenza GST invoicing software and platform services.',
};

export default function TermsOfServicePage() {
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
            <FileText size={14} />
            TERMS &amp; CONDITIONS
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.5px' }}>Terms of Service</h1>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Agreement to Terms</h2>
            <p>
              By creating an account, subscribing to a plan, or accessing the Billenza platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company, partnership, or legal entity, you represent that you possess the statutory authority to bind that entity.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Use of Invoicing &amp; Compliance Software</h2>
            <p>
              Billenza provides computerized invoicing, e-Way bill formatting, inventory deduction tracking, and GSTR reporting tools. While our calculation engines strictly implement Central Goods and Services Tax (CGST), SGST, IGST, UTGST, and cess formulas according to the GST Act, you remain responsible for the factual accuracy of your GSTIN, tax classifications, and item valuations.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Subscription Plans &amp; Billing</h2>
            <p>
              Billenza offers monthly (₹499/month) and annual (₹4,999/year) Pro subscriptions. Recurring and one-time payments are processed securely through authorized Reserve Bank of India (RBI) compliant payment aggregators (Razorpay). Subscriptions renew automatically unless cancelled prior to the renewal date via your billing settings.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Intellectual Property &amp; Customer Data</h2>
            <p>
              You retain 100% full legal ownership of your customer profiles, inventory lists, sales data, and issued invoices. Billenza retains all rights, title, and intellectual property in the platform software, algorithms, codebases, and interfaces.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Limitation of Liability</h2>
            <p>
              In no event shall Billenza Inc., its directors, or affiliates be liable for indirect, incidental, or consequential damages resulting from portal downtime, GSTN government portal outages, or incorrect filings resulting from user input errors.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India, with exclusive jurisdiction in the competent courts of New Delhi, India.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
