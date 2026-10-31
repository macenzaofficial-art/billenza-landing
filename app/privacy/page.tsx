import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { ShieldCheck, Lock, Database, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Billenza GST Platform | Macenza',
  description:
    'Exhaustive data privacy policy, statutory compliance (DPDP Act 2023 / IT Act), and data protection standards for Billenza, operated by Macenza.',
  alternates: {
    canonical: 'https://billenza.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />

      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <div className="badge-chip lime">
            <ShieldCheck size={13} /> DPDP ACT 2023 &bull; IT ACT 2000
          </div>
          <h1>Privacy Policy &amp; Data Protection</h1>
          <p className="sub-hero-desc">
            Statutory disclosures regarding personal data collection, cloud storage, cryptographic encryption, and tenant sovereignty for Billenza (Macenza).
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
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Introduction &amp; Legal Framework</h2>
            <p>
              This Privacy Policy explains how <strong>Macenza</strong> (&quot;Macenza&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), through its product <strong>Billenza</strong>, collects, processes, encrypts, and retains personal and financial data when you access <code>billenza.com</code> and <code>app.billenza.com</code>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              We operate strictly within the legal frameworks of the Republic of India, including the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, the <strong>Information Technology Act, 2000</strong>, and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Exhaustive Data Collection Disclosure</h2>
            <p>To enable statutory GST invoicing, e-Way bill compilation, inventory radar, and tax return exports, Billenza processes the following categories of data:</p>
            
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>A. User Account &amp; Authentication Credentials</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Registered email address, cryptographic password hashes / magic link session tokens managed via Supabase Auth, unique tenant UUIDs, and active subscription tier (<code>pro_monthly</code>, <code>pro_yearly</code>).
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>B. Statutory Business &amp; Banking Information</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Business legal and trade names, 15-character GSTIN, Permanent Account Number (PAN), registered office address, city, state, state code, PIN code, contact phone number, and official email. Banking coordinates including Bank Name, Account Number, IFSC code, SWIFT code (for export invoices), UPI Virtual Payment Address (VPA), business logo, authorized signatory signature image, and business stamp image.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>C. Customer &amp; Vendor Counterparty Records</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Buyer / Vendor GSTINs, company legal names, shipping and billing addresses, State Codes (Place of Supply), phone numbers, and contact names.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>D. Invoicing, Logistics &amp; Inventory Data</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Item descriptions, 4, 6, or 8-digit HSN/SAC codes, UQC unit codes (PCS, KGS, NOS, MTR), taxable amounts, statutory tax slab percentages (0%, 5%, 12%, 18%, 28%), CGST/SGST/IGST/Cess breakdowns, transport distance, vehicle registration numbers (Part B e-Way Bill), and Transporter IDs.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Razorpay Payment Infrastructure &amp; Zero Card Storage</h2>
            <p>
              All online subscription transactions are processed securely through <strong>Razorpay Software Private Limited</strong>.
            </p>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#166534' }}>PCI-DSS Level 1 Verified:</strong>
                  <p style={{ margin: '4px 0 0', color: '#15803d', fontSize: '0.9rem' }}>
                    Billenza never receives, sees, or stores your raw Credit Card numbers, Debit Card CVVs, UPI MPINs, or Net Banking credentials on our application servers. All payment credential handling is executed within Razorpay&apos;s RBI-authorized, encrypted vault environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Security Architecture &amp; Encryption Standards</h2>
            <p>We implement comprehensive administrative, technical, and physical safeguards:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>In-Transit Security:</strong> All web traffic and API calls are enforced over Transport Layer Security (TLS 1.3) with HSTS.</li>
              <li><strong>At-Rest Security:</strong> Cloud database storage in Supabase PostgreSQL (AWS ap-south-1 Mumbai region) is protected via AES-256 encryption.</li>
              <li><strong>Row Level Security (RLS):</strong> Database-engine-enforced Row Level Security ensures tenant records can only be queried by the authenticated user ID (<code>auth.uid() = user_id</code>). Cross-tenant data leakage is prevented at the database kernel level.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Data Retention, Account Lock &amp; Permanent Deletion</h2>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <strong style={{ color: '#0f172a' }}>Immediate Lock &amp; 60-Day Data Removal Grace Period:</strong>
              <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                When your paid subscription period ends without renewal or is cancelled, workspace access is immediately locked. Stored tenant records remain locked in our database for a grace period of <strong>60 calendar days</strong>. If the account is not renewed within this period, all tenant data is <strong>permanently and irreversibly purged</strong> from our cloud database and backups.
              </p>
            </div>
            <p>
              <strong>Important Statutory Notice (CGST Act Section 36):</strong> Under Section 36 of the Central Goods and Services Tax Act, 2017, taxpayers are legally required to maintain books of accounts and records for <strong>72 months (6 years)</strong>. Because Billenza disables self-service exports upon account lock, you are strictly advised to export all invoices, GSTR reports, and inventory ledgers <strong>prior to the conclusion of your active subscription</strong>. Fulfilling statutory record retention duties remains your sole legal obligation.
            </p>
          </section>

          <section style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>6. Grievance Redressal Officer (DPDP Act &amp; IT Rules)</h2>
            <p>
              In compliance with Section 5 of the Information Technology (SPDI) Rules, 2011 and the Digital Personal Data Protection Act, 2023, the details of our Grievance Redressal Officer are as follows:
            </p>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '0.75rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              <div><strong>Grievance Officer:</strong> Shashank Shubham</div>
              <div><strong>Designation:</strong> Proprietor, Macenza</div>
              <div><strong>Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a></div>
              <div><strong>Phone:</strong> <a href="tel:+919414660123" style={{ color: '#1d1d1d', fontWeight: 600 }}>+91 94146 60123</a></div>
              <div><strong>Address:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India</div>
              <div><strong>SLA:</strong> Grievance resolution within 48 business hours</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
