import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Billenza',
  description:
    'Comprehensive Privacy Policy for Billenza, operated by Macenza . Covers data processing, DPDP Act 2023, IT Act 2000, and GST compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      {/* ===================== HEADER ===================== */}
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', background: '#fff', position: 'sticky', top: 0, zIndex: 30 }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#1d1d1d', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} />
            <Image src="/billenza-logo.webp" alt="Billenza" width={110} height={34} style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: '#64748b' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span>Effective Date: 11 November 2026</span>
          </div>
        </div>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <main style={{ maxWidth: 880, margin: '2.5rem auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '3rem 2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 25px rgba(0,0,0,0.03)' }}>
          {/* Eyebrow & Title */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 12px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#1d1d1d' }}>
            <ShieldCheck size={14} />
            STATUTORY DATA PRIVACY &amp; DPDP ACT COMPLIANCE
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: '0 0 0.5rem', letterSpacing: '-0.025em', color: '#0f172a' }}>
            BILLENZA &ndash; PRIVACY POLICY
          </h1>

          {/* Metadata Meta Strip */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1rem 1.25rem', margin: '1.5rem 0 2.5rem', fontSize: '0.86rem', color: '#475569', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <div><strong>Operated by:</strong> Macenza </div>
            <div><strong>Website:</strong> <a href="https://billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com</a></div>
            <div><strong>Application:</strong> <a href="https://app.billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://app.billenza.com</a></div>
            <div><strong>Jurisdiction:</strong> India</div>
            <div><strong>Effective Date:</strong> 11 November 2026</div>
            <div><strong>Last Updated:</strong> 14 November 2026</div>
          </div>

          {/* ================= SECTION 1 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how <strong>Macenza</strong> (&quot;Macenza&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), the operator and service provider of <strong>Billenza</strong> (&quot;Billenza&quot;, &quot;Platform&quot;, or &quot;Service&quot;), collects, uses, stores, processes, shares, protects, and deletes information when individuals and businesses access or use our website, web application, subscription services, and related features.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Billenza is a cloud-based GST billing, invoicing, inventory, purchase, expense management, and business record management software designed primarily for businesses operating in India.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              By registering for or using Billenza, you acknowledge that you have been provided access to this Privacy Policy. Where applicable law requires consent for processing personal data, we will obtain such consent through an appropriate mechanism.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              This Policy is intended to operate in accordance with applicable Indian laws, including:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>The Information Technology Act, 2000.</li>
              <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, as applicable.</li>
              <li>The Digital Personal Data Protection Act, 2023.</li>
              <li>The Digital Personal Data Protection Rules, 2025, as and when their respective provisions become effective.</li>
              <li>Applicable provisions of the Central Goods and Services Tax Act, 2017 and other relevant tax laws.</li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: '#64748b' }}>
              Nothing in this Policy limits any rights or obligations that cannot legally be excluded or restricted.
            </p>
          </section>

          {/* ================= SECTION 2 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              2. Scope and Roles in Data Processing
            </h2>
            <p>This Policy applies to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Visitors accessing the Billenza website.</li>
              <li>Individuals registering for a Billenza account.</li>
              <li>Business owners and authorized employees using Billenza.</li>
              <li>Customers, suppliers, vendors, and other individuals whose information is entered into Billenza by business users.</li>
              <li>Individuals contacting Macenza for support, billing, privacy, or other business-related matters.</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '1.5rem 0 0.5rem' }}>
              2.1 Macenza as a Service Provider
            </h3>
            <p>
              When a business customer uploads or manages information about its customers, suppliers, employees, or other individuals through Billenza, that business customer generally determines the purposes for which the information is collected and used.
            </p>
            <p style={{ marginTop: '0.5rem' }}>In such situations:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>The business customer is responsible for having an appropriate lawful basis or authorization to collect and use the information.</li>
              <li>Macenza processes the information to provide, maintain, secure, and support Billenza, subject to applicable law and contractual arrangements.</li>
              <li>Macenza does not claim ownership of customer business records, invoices, customer directories, supplier records, or inventory information.</li>
              <li>Macenza may separately determine the purposes and means of processing information required for its own account administration, subscription management, security, customer support, legal compliance, and business operations.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The precise legal roles of Macenza and its customers depend on the particular processing activity and applicable law.
            </p>
          </section>

          {/* ================= SECTION 3 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              3. Categories of Information We Collect
            </h2>
            <p>We collect and process information necessary to provide Billenza&apos;s functionality, manage subscriptions, maintain security, and fulfil legal obligations.</p>

            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* 3.1 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.1 Account and Authentication Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>We may collect:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Registered email address.</li>
                  <li>Account identification and unique user identifiers.</li>
                  <li>Authentication records and session information.</li>
                  <li>Password authentication data managed through Supabase Auth.</li>
                  <li>Password hashes, where applicable, maintained by the authentication provider.</li>
                  <li>Login timestamps and account activity information.</li>
                  <li>Account status and subscription information.</li>
                  <li>Subscription plan identifiers, including Pro Monthly and Pro Yearly.</li>
                  <li>User preferences and application settings.</li>
                </ul>
                <p style={{ margin: '8px 0 0', fontWeight: 600, color: '#0f172a', fontSize: '0.88rem' }}>
                  We do not intentionally collect or store users&apos; plaintext account passwords.
                </p>
              </div>

              {/* 3.2 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.2 Business Registration and Profile Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>To facilitate business invoicing and GST-related operations, we may process:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Legal business name and trade name.</li>
                  <li>GST Identification Number (GSTIN).</li>
                  <li>Permanent Account Number (PAN).</li>
                  <li>Registered business address.</li>
                  <li>Billing and business contact addresses.</li>
                  <li>City, state, state code, and PIN code.</li>
                  <li>Business contact number.</li>
                  <li>Official business email address.</li>
                  <li>Business logo.</li>
                  <li>Authorized signatory details.</li>
                  <li>Signature and business stamp images.</li>
                  <li>Other business profile information voluntarily provided by the customer.</li>
                </ul>
              </div>

              {/* 3.3 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.3 Banking and Payment-Related Business Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>Depending on the features used, Billenza may process:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Bank name.</li>
                  <li>Bank account number.</li>
                  <li>IFSC code.</li>
                  <li>SWIFT/BIC code, where applicable.</li>
                  <li>UPI Virtual Payment Address (VPA).</li>
                  <li>Payment instructions appearing on invoices.</li>
                  <li>Other banking details voluntarily entered by the business customer.</li>
                </ul>
                <p style={{ margin: '8px 0 0', color: '#475569', fontSize: '0.88rem' }}>
                  Such information is used to display payment instructions on business documents and support relevant business workflows. <strong>Macenza does not use customer banking details to independently initiate withdrawals or debit transactions from business bank accounts.</strong> Banking details should be restricted to authorized users and appropriately protected within the application and database.
                </p>
              </div>

              {/* 3.4 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.4 Customer and Supplier Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>Business users may enter and manage information relating to their customers, suppliers, vendors, and other business parties, including:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Individual or business names.</li>
                  <li>GSTIN and PAN, where applicable.</li>
                  <li>Billing and shipping addresses.</li>
                  <li>Delivery locations.</li>
                  <li>State and state codes.</li>
                  <li>Contact person names.</li>
                  <li>Phone numbers and Email addresses.</li>
                  <li>Business identification details and other information necessary for commercial transactions.</li>
                </ul>
                <p style={{ margin: '8px 0 0', fontWeight: 600, color: '#0f172a', fontSize: '0.88rem' }}>
                  The business customer is responsible for ensuring that such information is collected and entered lawfully.
                </p>
              </div>

              {/* 3.5 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.5 Invoices and Tax-Related Records</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>Billenza processes information required to generate and manage business documents, including:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Tax invoices, Bills of Supply, Credit Notes, Debit Notes, Delivery Challans, Quotations, estimates, and Purchase documents.</li>
                  <li>Document numbering and financial-year sequences.</li>
                  <li>Invoice dates and due dates.</li>
                  <li>Product and service descriptions.</li>
                  <li>HSN/SAC classifications.</li>
                  <li>Quantities and Units of Quantity Codes (UQC).</li>
                  <li>Discounts and taxable values.</li>
                  <li>CGST, SGST, UTGST, IGST, and applicable cess calculations.</li>
                  <li>Reverse Charge Mechanism (RCM) indicators.</li>
                  <li>TDS and TCS information, where supported.</li>
                  <li>Transporter identification and vehicle information.</li>
                  <li>E-Way Bill-related details, where supported.</li>
                  <li>Generated PDF, printable documents, and related electronic records.</li>
                </ul>
              </div>

              {/* 3.6 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.6 Inventory and Product Catalogue Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>For inventory management, we may process:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Product and service names, SKU and item codes, HSN/SAC classifications, and measurement units.</li>
                  <li>Purchase and selling prices, tax rates, and tax categories.</li>
                  <li>Opening stock balances, current stock quantities, stock adjustments, low-stock thresholds, and inventory transaction records.</li>
                </ul>
              </div>

              {/* 3.7 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.7 Purchases, Expenses and Input Tax Credit Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>Depending on the features used, we may process:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Supplier purchase records and expense categories.</li>
                  <li>Purchase invoice details, vendor GSTINs, purchase values, and tax breakdowns.</li>
                  <li>Eligible input tax credit information, GSTR-2B reconciliation records, GSTR-3B-related ITC schedules, and business ledgers.</li>
                </ul>
              </div>

              {/* 3.8 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.8 Technical, Device and Usage Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>To operate and secure the Platform, we may collect limited technical information, such as:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>IP addresses, browser type and version, and operating system information.</li>
                  <li>Device and session identifiers, login/logout timestamps, application error logs, security events, authentication logs, and performance metrics.</li>
                </ul>
                <p style={{ margin: '8px 0 0', color: '#475569', fontSize: '0.88rem' }}>
                  This information is used for security monitoring, troubleshooting, service reliability, and abuse prevention. <strong>We do not intentionally scan users&apos; personal devices or access unrelated files stored on their computers.</strong>
                </p>
              </div>

              {/* 3.9 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.9 Payment and Subscription Information</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>Billenza uses <strong>Razorpay</strong> for payment processing and subscription-related transactions. We may receive and maintain:</p>
                <ul style={{ paddingLeft: '1.25rem', margin: '6px 0 0', color: '#475569', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <li>Razorpay Customer IDs, Subscription IDs, and Payment IDs.</li>
                  <li>Payment status, transaction amounts, billing dates, subscription renewal dates, receipts, and webhook verification signatures.</li>
                </ul>
                <p style={{ margin: '8px 0 0', color: '#0f172a', fontWeight: 600, fontSize: '0.88rem' }}>
                  Card Information: Billenza is designed not to collect or store raw credit/debit card numbers, CVVs, card expiry dates, or NetBanking passwords. Such payment credentials are handled exclusively by Razorpay on PCI-DSS Level 1 certified infrastructure in compliance with RBI guidelines.
                </p>
              </div>

              {/* 3.10 */}
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>3.10 Customer-Side Data Exports and Imports</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem' }}>
                  Billenza provides customers with tools to export and import supported business records. Depending on the features used, customers may download standard JSON backup files containing business profiles, customers, vendors, invoices, inventory, and expense records.
                </p>
                <p style={{ margin: '6px 0 0', color: '#475569', fontSize: '0.88rem' }}>
                  Where exports are generated directly within the customer&apos;s browser, the file is delivered through normal browser download functionality. Such exports may be unencrypted and contain confidential business data. <strong>Macenza does not automatically access, scan, or monitor files stored in customer local device folders merely because an export was downloaded.</strong> Customers are responsible for securely storing and deleting downloaded backup files.
                </p>
              </div>
            </div>
          </section>

          {/* ================= SECTION 4 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              4. Purposes for Which We Use Information
            </h2>
            <p>Macenza processes information for legitimate and disclosed business purposes, including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Creating and managing Billenza accounts.</li>
              <li>Authenticating users and maintaining secure sessions.</li>
              <li>Generating invoices and other business documents.</li>
              <li>Performing GST-related calculations based on customer-provided information and selected settings.</li>
              <li>Supporting GSTR-related reports and data exports.</li>
              <li>Managing customers, suppliers, inventory, purchases, and expenses.</li>
              <li>Providing data backup, export, and import functionality.</li>
              <li>Managing subscription plans, billing, and payment verification.</li>
              <li>Providing technical assistance and customer support.</li>
              <li>Detecting unauthorized access, fraud, and misuse.</li>
              <li>Maintaining application reliability and performance.</li>
              <li>Complying with applicable legal, regulatory, tax, and accounting obligations.</li>
              <li>Communicating important service announcements, security notices, billing notifications, and policy updates.</li>
              <li>Improving the functionality, usability, and security of Billenza.</li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontWeight: 600, color: '#0f172a' }}>
              We will not use personal information for purposes that are incompatible with the purposes disclosed to users, except where permitted or required by applicable law.
            </p>
          </section>

          {/* ================= SECTION 5 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              5. Legal Basis and Consent
            </h2>
            <p>Macenza processes personal information in accordance with applicable law. Depending on the relevant processing activity, processing may be based on:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Consent obtained from the individual, where required.</li>
              <li>Voluntary provision of information for a requested service.</li>
              <li>Performance of contractual obligations.</li>
              <li>Compliance with applicable legal obligations.</li>
              <li>Other lawful grounds or permitted uses recognized by applicable law.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Where consent is required, individuals may withdraw it through available mechanisms or by contacting us. Withdrawal of consent does not invalidate processing lawfully undertaken before withdrawal. Where withdrawal makes a particular service or feature impossible to provide, we may explain the resulting limitations and take appropriate action in accordance with applicable law.
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>
              The Digital Personal Data Protection Act, 2023 and its Rules have phased commencement dates. Macenza will implement the applicable obligations as their respective provisions become effective.
            </p>
          </section>

          {/* ================= SECTION 6 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              6. Data Sharing and Third-Party Service Providers
            </h2>
            <p style={{ fontWeight: 600, color: '#0f172a' }}>
              Macenza does not sell personal information, business records, invoice data, or customer directories to advertisers or data brokers.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              We may share limited information with trusted third parties when necessary to operate Billenza, process payments, maintain security, or comply with legal obligations:
            </p>

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>6.1 Supabase:</strong> Backend infrastructure including database, authentication, and file storage. Configured database region is AWS ap-south-1 (Mumbai), subject to project configurations and backup locations.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>6.2 Razorpay:</strong> Payment and subscription infrastructure. Shares necessary payment data to initiate transactions, verify status, process refunds, and prevent fraud in accordance with its privacy policies.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>6.3 Hosting &amp; Infrastructure Providers:</strong> Content delivery, hosting, and cloud service providers processing technical logs necessary for service delivery.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>6.4 Email &amp; Communication Providers:</strong> Transmitting transactional verification emails, password resets, receipts, renewal reminders, and security notices.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>6.5 Legal &amp; Regulatory Disclosure:</strong> Disclosing information when reasonably required to comply with court orders, investigate fraud/security incidents, or protect legal rights.
              </div>
            </div>
          </section>

          {/* ================= SECTION 7 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              7. International Data Processing and Transfers
            </h2>
            <p>
              Although our intended database hosting region is Mumbai, certain third-party infrastructure, payment, email, support, or security providers may process or store information in other jurisdictions. Accordingly, information may be processed outside India depending on the services and infrastructure used.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where international transfers occur, Macenza will take steps required under applicable Indian law, including complying with any applicable government restrictions, transfer conditions, or contractual safeguards. Customers should not assume that every category of information or backup remains exclusively within India.
            </p>
          </section>

          {/* ================= SECTION 8 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              8. Data Security and Protection Measures
            </h2>
            <p>
              Macenza takes reasonable technical, organizational, and administrative measures to protect information against unauthorized access, alteration, disclosure, destruction, and misuse:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>8.1 Encryption in Transit:</strong> Browser communication, application APIs, and infrastructure endpoints are protected using HTTPS and TLS encryption.</li>
              <li><strong>8.2 Encryption at Rest:</strong> Cloud infrastructure providers, including Supabase, provide encryption-at-rest protections for supported storage services.</li>
              <li><strong>8.3 Database Access Control:</strong> Supabase PostgreSQL Row Level Security (RLS) ensures tenant records can only be queried by authorized authenticated user IDs.</li>
              <li><strong>8.4 Authentication and Authorization:</strong> Secure sessions, password hash verification, role permissions, and access controls. Users remain responsible for login confidentiality.</li>
              <li><strong>8.5 Security Monitoring:</strong> Maintenance of security logs and operational records to detect suspicious activities and mitigate technical problems.</li>
              <li><strong>8.6 Security Limitations:</strong> No internet-based transmission can be guaranteed 100% impenetrable. We take reasonable precautions and prompt response actions as required by law.</li>
            </ul>
          </section>

          {/* ================= SECTION 9 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              9. Personal Data Breaches and Security Incidents
            </h2>
            <p>If Macenza becomes aware of a personal data breach affecting information processed through Billenza, we will:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Investigate the incident, assess its scope, and take steps to contain and mitigate it.</li>
              <li>Secure affected systems, address identified vulnerabilities, and preserve forensic data.</li>
              <li>Notify affected individuals and relevant authorities where required by applicable law.</li>
              <li>Cooperate with regulatory processes and take reasonable steps to prevent recurrence.</li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#64748b' }}>
              Customers who become aware of unauthorized access, compromised credentials, or suspected misuse should promptly contact us at <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a>.
            </p>
          </section>

          {/* ================= SECTION 10 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              10. Data Retention and Account Deletion
            </h2>
            <p>Macenza retains information only for as long as reasonably necessary for disclosed purposes, subject to contractual, statutory, tax, regulatory, security, and dispute-resolution requirements.</p>

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>10.1 Active Accounts:</strong> Business records are retained while the account remains active to provide continuous software functionality.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>10.2 Subscription Expiry and Account Lock:</strong> When a subscription ends without renewal, the workspace is locked. Records remain preserved for up to <strong>60 calendar days</strong>. If not renewed, eligible records are scheduled for deletion.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>10.3 Permanent Deletion and Backups:</strong> Database records and uploaded assets are purged from active production systems. Data in disaster-recovery backups expires according to third-party infrastructure rotation cycles.
              </div>
              <div style={{ padding: '0.9rem 1.1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0f172a' }}>10.4 Data Retained for Legal Purposes:</strong> Retained where necessary for tax, accounting, payment reconciliation, fraud prevention, or court orders.
              </div>
              <div style={{ padding: '1rem 1.1rem', background: '#fffbeb', borderRadius: 10, border: '1px solid #fef3c7' }}>
                <strong style={{ color: '#92400e' }}>10.5 Customer Responsibility for Statutory Records (CGST Act Section 36):</strong>
                <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  Under Section 36 of the CGST Act, 2017, taxpayers are required to retain books of accounts for <strong>72 months (6 years)</strong> from the annual return due date. Billenza is a software service and does not replace the customer&apos;s legal obligation to independently archive records. Customers should regularly download and store independent backup copies.
                </p>
              </div>
            </div>
          </section>

          {/* ================= SECTION 11 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              11. Data Portability, Access, Correction and Deletion Requests
            </h2>
            <p>Subject to applicable law, individuals may have rights concerning their personal information, including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Requesting information about the processing of their personal data.</li>
              <li>Requesting correction or updating of inaccurate personal data.</li>
              <li>Requesting erasure of personal data where legally permissible.</li>
              <li>Withdrawing consent where processing is based on consent.</li>
              <li>Raising grievances regarding the processing of personal data.</li>
            </ul>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem 1.25rem', marginTop: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>11.1 How to Submit a Request:</div>
              <div>Email: <a href="mailto:info@macenza.com" style={{ color: '#0284c7', fontWeight: 600 }}>info@macenza.com</a></div>
              <div>Subject Line: <code>Billenza &ndash; Privacy or Personal Data Request</code></div>
              <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: 4 }}>Reasonable identity verification may be requested before acting on an account request.</div>
            </div>
          </section>

          {/* ================= SECTION 12 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              12. Cookies and Similar Technologies
            </h2>
            <p>
              Billenza may use cookies, local storage, session storage, or similar technologies to maintain authenticated sessions, remember user preferences, and support security mechanisms. Users may manage cookies through browser settings; disabling certain cookies may affect authentication or functionality. Billenza does not use advertising trackers unless explicitly disclosed.
            </p>
          </section>

          {/* ================= SECTION 13 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              13. Children&apos;s Privacy
            </h2>
            <p>
              Billenza is a business-oriented software platform and is not directed at children. We do not knowingly collect personal data directly from children. If a business customer enters data concerning a child, they must ensure compliance with applicable parental/guardian consent laws.
            </p>
          </section>

          {/* ================= SECTION 14 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              14. Marketing and Promotional Communications
            </h2>
            <p>
              Macenza may send essential service communications, including account verification messages, password reset links, subscription receipts, renewal reminders, security alerts, and operational notices. Users may opt out of promotional communications where offered; opting out of marketing does not disable essential transactional or security notices.
            </p>
          </section>

          {/* ================= SECTION 15 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              15. Third-Party Websites and External Services
            </h2>
            <p>
              Billenza may contain links to external payment gateways or third-party websites operating under independent privacy policies. Macenza does not control the privacy practices of independent third parties and recommends reviewing external policies prior to submitting data.
            </p>
          </section>

          {/* ================= SECTION 16 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              16. Third-Party and Open-Source Software
            </h2>
            <p>
              Billenza incorporates, is powered by, and interacts with foundational third-party and open-source software, including software components originally distributed under the permissive MIT License.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>Ownership of Underlying Source Code:</strong> Macenza does not own, nor did it originally create or develop, the underlying open-source source code, base software architecture, or pre-existing functionality of third-party repositories. All pre-existing copyrights, author credits, and intellectual property in third-party and open-source software belong exclusively to their respective original copyright holders and upstream repository authors.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>Macenza&apos;s Independent Materials:</strong> Macenza claims proprietary rights, trademarks, and intellectual property interests solely in its independently created branding, trade names, logos, website content, cloud configurations, custom user-interface additions, deployment infrastructure, and original service contributions, where legally applicable under applicable intellectual property laws.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>Customer Data Ownership:</strong> Nothing in this Policy or in the software architecture grants Macenza ownership over customer business data. All invoices, client lists, ledgers, and financial records belong 100% to the respective business customers. For complete licensing details and developer credits, visit our <Link href="/about#credits" style={{ color: '#0284c7', fontWeight: 600 }}>Open Source Attribution</Link> section.
            </p>
          </section>

          {/* ================= SECTION 17 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              17. Changes to This Privacy Policy
            </h2>
            <p>
              Macenza may update this Privacy Policy from time to time to reflect legal changes, new features, or infrastructure updates. Revised policies will be published with an updated Effective Date. Continued use following notice of material updates operates in accordance with applicable law.
            </p>
          </section>

          {/* ================= SECTION 18 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              18. Grievance Redressal and Privacy Contact
            </h2>
            <p>
              For privacy concerns, data protection requests, complaints, or statutory grievances relating to Billenza, individuals may contact our designated Grievance Officer:
            </p>

            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '1.5rem', border: '1px solid #e2e8f0', marginTop: '1rem', fontSize: '0.92rem', color: '#334155', lineHeight: 1.65 }}>
              <div><strong>Grievance Redressal:</strong> Macenza Compliance Team</div>
              <div><strong>Entity:</strong> Macenza</div>
              <div><strong>Business:</strong> Billenza</div>
              <div><strong>Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#0284c7', fontWeight: 600 }}>info@macenza.com</a></div>
              
              <div style={{ marginTop: '0.5rem' }}>
                <strong>Registered Business Address:</strong><br />
                PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India.
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.86rem', color: '#64748b' }}>
                <strong>Grievance Handling Timelines:</strong><br />
                &bull; Acknowledgement within 48 business hours of receipt.<br />
                &bull; Resolution within 30 calendar days, subject to statutory requirements and matter complexity.
              </div>
            </div>
          </section>

          {/* ================= SECTION 19 ================= */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              19. Applicable Law and Jurisdiction
            </h2>
            <p>
              This Privacy Policy is governed by the laws of India. Subject to applicable mandatory legal rights and jurisdictional requirements, disputes arising in connection with this Policy shall be subject to the competent courts in <strong>Ajmer, Rajasthan, India</strong>. Nothing in this Policy prevents an individual from exercising any statutory rights under applicable law.
            </p>
          </section>

          {/* ================= SECTION 20 ================= */}
          <section style={{ marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              20. Contact Us
            </h2>
            <p>For questions concerning this Privacy Policy, information processing, security practices, or privacy-related requests, please contact:</p>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '0.75rem', fontSize: '0.92rem' }}>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Macenza &ndash; Operator and Service Provider of Billenza</div>
              <div>Website: <a href="https://billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com</a></div>
              <div>Application: <a href="https://app.billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://app.billenza.com</a></div>
              <div>Email: <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a></div>
              
              <div>Address: PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India.</div>
            </div>
          </section>

          {/* End of Policy Notice */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '2.5rem', textAlign: 'center', fontSize: '0.84rem', color: '#64748b' }}>
            <div>End of Privacy Policy</div>
            <div style={{ marginTop: 4 }}>&copy; 2026 Macenza. All rights reserved. Billenza is operated by Macenza as a cloud service provider.</div>
          </div>
        </div>
      </main>

      {/* ===================== FOOTER ===================== */}
      <Footer />
    </div>
  );
}
