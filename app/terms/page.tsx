import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FileText, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — Billenza GST Platform | Macenza',
  description:
    'Terms and Conditions governing the use of Billenza GST invoicing software, subscriptions, and platform services (Macenza).',
  alternates: {
    canonical: 'https://billenza.com/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />

      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <div className="badge-chip lime">
            <FileText size={13} /> LEGAL TERMS &amp; CONDITIONS
          </div>
          <h1>Terms of Service</h1>
          <p className="sub-hero-desc">
            Statutory legal agreement governing platform access, subscription usage, data ownership, and jurisdiction for Billenza (Macenza).
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
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Agreement to Terms</h2>
            <p>
              By subscribing to a plan, creating an account, or accessing the Billenza platform (<code>billenza.com</code> and <code>app.billenza.com</code>), you agree to be legally bound by these Terms of Service. These Terms constitute a binding legal agreement between you (&quot;Customer&quot;, &quot;User&quot;, or &quot;You&quot;) and <strong>Macenza</strong> (Sole Proprietorship: <strong>Shashank Shubham</strong>, &quot;Macenza&quot;, &quot;Billenza&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              If you are entering into this agreement on behalf of a company, partnership firm, LLP, or other legal entity, you represent and warrant that you hold full legal authority to bind that entity to these Terms.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Statutory Non-CA &amp; Non-Advisory Disclaimer</h2>
            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <AlertTriangle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#92400e' }}>Billenza is an Invoicing Software, Not a Chartered Accountant Firm:</strong>
                  <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.9rem' }}>
                    Billenza provides automated computerized billing calculation, invoice formatting, e-Way bill JSON preparation, and inventory deduction tools. Neither Macenza nor Billenza provides chartered accountancy, legal, tax advisory, or statutory auditing services.
                  </p>
                </div>
              </div>
            </div>
            <p>
              While our calculation engines strictly implement statutory CGST, SGST, IGST, UTGST, and Cess formulas under the Central Goods and Services Tax Act, 2017, you remain solely and exclusively responsible for:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>The factual and statutory validity of your GSTIN, PAN, and trade registrations.</li>
              <li>The legal accuracy of selected HSN/SAC codes, item valuations, and tax rate classifications.</li>
              <li>Determining the correct Place of Supply (Intrastate vs. Interstate) and Reverse Charge (RCM) applicability.</li>
              <li>Timely review, reconciliation, and statutory filing of GSTR-1, GSTR-3B, and annual returns on the official government GSTN portal (<code>gst.gov.in</code>).</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Subscription Plans, Pricing &amp; Billing</h2>
            <p>
              Billenza provides commercial cloud access under two primary recurring subscription tiers:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Monthly Pro:</strong> <strong>₹499 / month</strong></li>
              <li><strong>Annual Pro:</strong> <strong>₹4,999 / year</strong> (Offers ~17% annual savings)</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              All transaction prices are listed in Indian Rupees (INR). Payments, subscription mandates (e-mandates, UPI AutoPay, and cards), and recurring renewals are processed securely via our Reserve Bank of India (RBI) authorized payment aggregator (Razorpay). Subscriptions renew automatically at the end of each billing cycle unless cancelled prior to the renewal date.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Strict No-Refund Policy &amp; Cancellation Terms</h2>
            <p>
              Because software access, cloud workspace provisioning, and tax computation capabilities are made available immediately upon payment confirmation, <strong>all subscription fees are strictly non-refundable</strong>. We do not offer prorated refunds, mid-tenure cancellations, or credits for unused periods.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Cancellation:</strong> You may cancel auto-renewal at any time through your billing settings or by emailing <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a>. Upon cancellation, recurring debits are halted immediately.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Duplicate Deductions:</strong> In the event of an accidental duplicate transaction caused by payment gateway or banking latency, verified excess deductions will be refunded to your original payment source within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Account Lock &amp; 60-Day Data Removal Grace Period</h2>
            <p>
              Upon the expiration, non-renewal, or cancellation of your paid subscription:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Access to the console (<code>app.billenza.com</code>) is immediately locked. Self-service data export features are disabled post-cancellation.</li>
              <li>Users are strictly required to export and download all invoices, GSTR reports, and database records using the built-in standard JSON Backup Export tool <strong>prior to subscription expiration</strong>.</li>
              <li>Your tenant data remains locked in our secure database for a grace period of <strong>60 calendar days</strong>. If unrenewed after 60 days, all cloud records are permanently deleted. Under Section 36 of the CGST Act, 2017, taxpayers are legally obligated to preserve business accounts and invoices for 72 months (6 years); preserving these records remains your statutory responsibility.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>6. Intellectual Property &amp; Customer Data Ownership</h2>
            <p>
              <strong>Your Data:</strong> You retain 100% full legal ownership of your business data, customer directories, inventory records, and issued invoices. We claim no ownership over your proprietary business records. You may export and download your complete database in standard portable JSON format at any time while your subscription is active.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Platform Property:</strong> Macenza retains all exclusive right, title, interest, copyrights, source code, design assets, and trademarks associated with Billenza. You may not reverse-engineer, decompile, resell, or distribute the platform software.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable law, Macenza, its proprietor, and affiliates shall not be liable for any indirect, incidental, punitive, or consequential damages, including loss of profits, business interruption, or tax penalties resulting from:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>User calculation or input errors (such as incorrect tax rates, invalid GSTINs, or erroneous HSN codes).</li>
              <li>Government portal downtime or outages on the GSTN (<code>gst.gov.in</code>) or NIC e-Way bill networks.</li>
              <li>Network transmission failures between third-party banking servers or payment gateways.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Our aggregate liability arising out of or related to these Terms shall in no event exceed the total subscription fees paid by you to Billenza in the three (3) months preceding the incident.
            </p>
          </section>

          <section style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>8. Governing Law &amp; Exclusive Jurisdiction</h2>
            <p>
              These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The parties mutually agree that the competent courts situated in <strong>Ajmer, Rajasthan, India</strong> shall have exclusive legal jurisdiction to resolve any disputes, claims, or controversies arising under or relating to these Terms.
            </p>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '1.5rem', fontSize: '0.9rem', color: '#334155' }}>
              <div><strong>Operating Firm:</strong> Macenza (Sole Proprietorship: Shashank Shubham)</div>
              <div><strong>Registered Address:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India</div>
              <div><strong>Official Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a></div>
              <div><strong>Phone Support:</strong> <a href="tel:+919414660123" style={{ color: '#1d1d1d', fontWeight: 600 }}>+91 94146 60123</a></div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
