import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Database, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Billenza',
  description: 'Exhaustive data privacy policy, statutory compliance (DPDP Act 2023 / IT Act), and data protection standards for Billenza (Macenza).',
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
            DATA PRIVACY &amp; DPDP ACT COMPLIANCE
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0 0 2rem' }}>
            Statutory data protection, data collection disclosures, and security architecture for Billenza, owned and operated by Macenza (Sole Proprietorship: Shashank Shubham).
          </p>

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
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>A. User Account &amp; Authentication Credentials</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Registered email address, cryptographic password hashes / magic link session tokens managed via Supabase Auth, unique tenant UUIDs, and active subscription tier (<code>pro_monthly</code>, <code>pro_yearly</code>).
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>B. Statutory Business &amp; Banking Information</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Business legal and trade names, 15-character GSTIN, Permanent Account Number (PAN), registered office address, city, state, state code, PIN code, contact phone number, and official email. Banking coordinates including Bank Name, Account Number, IFSC code, SWIFT code (for export invoices), UPI Virtual Payment Address (VPA), business logo, authorized signatory signature image, and business stamp image.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>C. Customer &amp; Supplier (Party) Directory</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Client and vendor business names, GSTINs, PANs, billing addresses, delivery/shipping addresses, state codes, contact person names, email addresses, and phone numbers.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>D. Invoices &amp; Statutory Tax Documents</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Sequential document numbering series, issue dates, due dates, document types (Tax Invoices, Bills of Supply, Credit/Debit Notes, Delivery Challans, Quotations), line item descriptions, HSN/SAC codes, quantities, UQC units, discounts, and taxable amounts. Tax computations including Central GST (CGST), State/UT GST (SGST/UTGST), Integrated GST (IGST), Compensation Cess, and Reverse Charge (RCM) indicators. Transporter IDs, vehicle numbers, transport document dates, distance (KM), and transport modes for e-Way bills. TDS (Section 194Q) and TCS (Section 206C(1H)) amounts. Generated PDF and thermal print files.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>E. Inventory &amp; Stock Catalogue</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Item names, SKU references, HSN/SAC classifications, measurement units, selling prices, cost prices, default tax brackets (0% to 28%), opening stock balances, current quantities, and low-stock radar thresholds.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>F. Expenses, Purchases &amp; Input Tax Credit (ITC) Records</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Operating expense classifications, supplier purchase bills, vendor GSTINs, total purchase values, and input tax breakdown necessary for GSTR-2B reconciliation and GSTR-3B Table 4 ITC declarations.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>G. Data Portability &amp; Client-Side JSON Backup Exports</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Billenza provides full client-side data portability: you can export and download an unencrypted standard JSON backup of your entire business database (business profiles, invoices, customers, vendors, inventory catalogue, and expense ledgers) to your device at any time directly through your web browser. Billenza operates strictly within web browser security standards and does not access, scan, or monitor your local computer or device storage folders. All database exports and imports are initiated and controlled exclusively by you.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>H. Razorpay Payment Identifiers (Zero Card Storage)</strong>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                  Razorpay Subscription IDs, Customer IDs, Payment IDs, and cryptographic signature hashes. <strong>Billenza never collects, stores, or processes raw credit/debit card numbers, CVVs, expiry dates, or NetBanking passwords.</strong> All payments are handled on Razorpay&apos;s PCI-DSS Level 1 certified infrastructure in compliance with Reserve Bank of India (RBI) mandates.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. How We Use Your Data</h2>
            <p>Your data is processed strictly for the following purposes:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Generating mathematically accurate GST tax invoices, bills of supply, and e-Way bills.</li>
              <li>Compiling GSTR-1, GSTR-3B JSON exports, and GSTR-2B ITC reconciliation schedules.</li>
              <li>Providing self-service data portability via standard JSON database export and import tools.</li>
              <li>Authenticating your session and maintaining strict multi-tenant isolation.</li>
              <li>Processing subscription billing mandates through Razorpay.</li>
              <li>Delivering transaction receipts, security notices, and statutory updates.</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: '#0f172a' }}>
              Macenza and Billenza do not sell, rent, monetize, or disclose your corporate customer directories, pricing structures, or tax invoices to any third-party advertisers or data brokers.
            </p>
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
    </div>
  );
}
