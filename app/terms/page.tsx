import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Scale,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — Billenza',
  description:
    'Terms of Service for Billenza, a cloud-based GST billing, invoicing and business management platform operated by Macenza.',
};

export default function TermsOfServicePage() {
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
            <span>Effective: 14 November 2026</span>
          </div>
        </div>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <main style={{ maxWidth: 880, margin: '2.5rem auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '3rem 2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 25px rgba(0,0,0,0.03)' }}>
          {/* Eyebrow & Title */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 12px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#1d1d1d' }}>
            <Scale size={14} />
            LEGAL AGREEMENT &bull; TERMS OF SERVICE
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: '0 0 0.5rem', letterSpacing: '-0.025em', color: '#0f172a' }}>
            BILLENZA &ndash; TERMS OF SERVICE
          </h1>

          {/* Metadata Strip */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1rem 1.25rem', margin: '1.5rem 0 2.5rem', fontSize: '0.86rem', color: '#475569', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            <div><strong>Product:</strong> Billenza &ndash; GST Billing, Invoicing and Business Management SaaS</div>
            <div><strong>Operator and Commercial Service Provider:</strong> Macenza</div>
            <div><strong>Business Structure:</strong> Sole Proprietorship</div>
            <div><strong>Website:</strong> <a href="https://billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com</a></div>
            <div><strong>Application:</strong> <a href="https://app.billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://app.billenza.com</a></div>
            <div><strong>Official Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a></div>
            <div><strong>Principal Place of Business:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India.</div>
            <div><strong>Effective Date:</strong> 14 November 2026</div>
            <div><strong>Last Updated:</strong> 14 November 2026</div>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              1. Introduction and Acceptance
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>1.1 About Billenza</h3>
            <p>
              Billenza is a cloud-based Software-as-a-Service (SaaS) platform designed to help Indian businesses manage billing, invoicing, GST-related calculations, inventory records and other business operations.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Billenza is commercially operated, hosted and provided by Macenza, a sole proprietorship based in Ajmer, Rajasthan, India (&quot;Macenza&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Billenza incorporates and uses third-party and open-source software components, including software distributed under the MIT License. Certain underlying software components were originally developed by their respective authors and contributors. Macenza does not claim original authorship or ownership of pre-existing upstream open-source source code or intellectual property.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza is responsible for the commercial operation and maintenance of the Billenza service, including its independently created branding, customer support and service-related operations.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1.25rem 0 0.5rem' }}>1.2 Agreement</h3>
            <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>The Billenza website.</li>
              <li>The Billenza web application.</li>
              <li>Account and workspace features.</li>
              <li>Billing, invoicing and business management tools.</li>
              <li>Subscription plans and payment facilities.</li>
              <li>Available APIs, integrations and related services.</li>
              <li>Associated documentation and support facilities.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              By creating an account, purchasing a subscription, selecting an acceptance checkbox, clicking an acceptance button or otherwise using Billenza, you agree to these Terms and the applicable Privacy Policy.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              If you do not agree with these Terms, you must not register for or use the Service.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1.25rem 0 0.5rem' }}>1.3 Acceptance on Behalf of a Business</h3>
            <p>
              If you access or use Billenza on behalf of a company, partnership, LLP, proprietorship or another organisation, you confirm that:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>You have authority to represent that organisation.</li>
              <li>You are authorised to create and manage its account.</li>
              <li>You have permission to purchase or manage subscriptions on its behalf.</li>
              <li>Your acceptance of these Terms binds the organisation to the extent permitted by law.</li>
              <li>You will ensure that authorised users comply with these Terms.</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1.25rem 0 0.5rem' }}>1.4 Electronic Acceptance</h3>
            <p>
              Electronic acceptance through account registration, a click-through acceptance mechanism or another clearly recorded affirmative action may constitute electronic acceptance under applicable Indian law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza may maintain relevant acceptance records, such as the account identifier, registered email address, acceptance timestamp, IP address and version of the Terms accepted, subject to its Privacy Policy and applicable law.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1.25rem 0 0.5rem' }}>1.5 Related Policies</h3>
            <p>These Terms should be read together with:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><Link href="/privacy" style={{ color: '#0284c7' }}>Billenza Privacy Policy</Link>.</li>
              <li><Link href="/about#credits" style={{ color: '#0284c7' }}>Billenza Open Source Attribution documentation</Link>.</li>
              <li>Applicable subscription and payment disclosures displayed during checkout.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Where a specific policy governs a particular subject, that policy will apply to that subject to the extent it does not conflict with mandatory applicable law.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              2. Definitions
            </h2>
            <p>For the purposes of these Terms:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div><strong>2.1 &quot;Billenza&quot;, &quot;Platform&quot; or &quot;Service&quot;</strong> means the Billenza website, web application, available software features, user interfaces, account workspaces, documentation and associated services operated by Macenza.</div>
              <div><strong>2.2 &quot;Macenza&quot;</strong> means the sole proprietorship operating and commercially providing Billenza from Ajmer, Rajasthan, India.</div>
              <div><strong>2.3 &quot;Customer&quot; or &quot;you&quot;</strong> means an individual, business or legal entity that registers, subscribes to or uses Billenza.</div>
              <div><strong>2.4 &quot;Authorised User&quot;</strong> means an employee, contractor, accountant, representative or other individual whom the Customer permits to access its Billenza account.</div>
              <div><strong>2.5 &quot;Customer Data&quot;</strong> means information submitted, uploaded, entered, generated or maintained by the Customer through the Service, including business details, invoices, customer records, supplier records, inventory information and financial data.</div>
              <div><strong>2.6 &quot;Subscription&quot;</strong> means a paid plan or other recurring or fixed-term access arrangement offered by Macenza.</div>
              <div><strong>2.7 &quot;Open-Source Components&quot;</strong> means software libraries, modules, code, algorithms and other components distributed under open-source licences, including the MIT License applicable to the upstream Free-GST-Billing-Software project.</div>
              <div><strong>2.8 &quot;Third-Party Services&quot;</strong> means external services and infrastructure providers used in connection with Billenza, which may include Supabase, Amazon Web Services (AWS), Razorpay and other service providers.</div>
              <div><strong>2.9 &quot;Applicable Law&quot;</strong> means the laws, rules, regulations, notifications and binding directions applicable to the Customer, Macenza or the Service in India.</div>
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              3. Nature and Scope of Services
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>3.1 Software Utility</h3>
            <p>
              Billenza is a business productivity and record-management software service intended to assist businesses with activities such as:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>GST and non-GST billing.</li>
              <li>Invoice and credit note generation.</li>
              <li>Tax calculation assistance.</li>
              <li>Customer and supplier management.</li>
              <li>Product and inventory records.</li>
              <li>Business reports and related documentation.</li>
              <li>Other features made available through the selected subscription.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The exact functionality available may vary by plan, product version and feature availability.
            </p>

            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <AlertTriangle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#92400e' }}>3.2 No Professional Tax or Legal Advice:</strong>
                  <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.9rem' }}>
                    Billenza is a software service. It is not a Chartered Accountancy firm, legal practice, statutory audit firm or professional tax consultancy.
                  </p>
                  <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.9rem' }}>
                    Macenza does not provide personalised legal, accounting or tax advice merely by making Billenza available.
                  </p>
                  <p style={{ margin: '4px 0 0', color: '#78350f', fontSize: '0.9rem' }}>
                    Software-generated calculations, reports and documents are provided as operational tools. Customers should consult qualified professionals where professional tax, accounting or legal advice is required.
                  </p>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>3.3 No Government Affiliation</h3>
            <p>
              Billenza is an independent commercial software service.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza and Billenza are not affiliated with, endorsed by, sponsored by or acting as an agency of:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Goods and Services Tax Network (GSTN).</li>
              <li>Central Board of Indirect Taxes and Customs (CBIC).</li>
              <li>National Informatics Centre (NIC).</li>
              <li>Ministry of Finance.</li>
              <li>Any other government department or tax authority.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              References to GST, e-Way bills, tax returns, HSN/SAC codes or government processes are descriptive references to supported business functionality and applicable statutory requirements.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>3.4 Feature Availability</h3>
            <p>
              Macenza may introduce, modify, improve, suspend or discontinue features where reasonably necessary for maintenance, security, legal compliance or product development.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where a material change significantly affects a paid feature, Macenza will make reasonable efforts to provide notice where practicable and legally required.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              4. Account Registration and Eligibility
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>4.1 Eligibility</h3>
            <p>
              You must have the legal capacity to enter into a binding agreement under applicable Indian law to create and operate an account.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              A person accessing Billenza on behalf of an organisation must have appropriate authority to do so.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>4.2 Accurate Information</h3>
            <p>
              You agree to provide accurate, complete and current information during registration and account use, including, where applicable:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Legal or trade name.</li>
              <li>Business address.</li>
              <li>GSTIN.</li>
              <li>PAN or other required business identification.</li>
              <li>Contact email and telephone number.</li>
              <li>Other information requested for service operation or billing.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              You are responsible for updating inaccurate or outdated information.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>4.3 Account Credentials</h3>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials, passwords, authentication methods and account access devices.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              You must not knowingly share credentials with unauthorised individuals.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>4.4 Unauthorised Access</h3>
            <p>
              If you suspect unauthorised access, account compromise or misuse, notify Macenza promptly at <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza may take reasonable protective steps, including temporarily restricting access, investigating suspicious activity or requiring credential resets.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>4.5 Authorised Users</h3>
            <p>
              The Customer is responsible for managing the permissions and activities of individuals authorised to access its workspace, subject to applicable law and any obligations that cannot legally be transferred to the Customer.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              5. Customer Tax and Regulatory Responsibilities
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>5.1 Independent Tax Responsibility</h3>
            <p>The Customer remains responsible for determining the correct tax treatment of its transactions, including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Applicable GST rates.</li>
              <li>HSN and SAC classifications.</li>
              <li>Place of Supply.</li>
              <li>CGST, SGST, IGST and UTGST applicability.</li>
              <li>Buyer and supplier GSTIN verification.</li>
              <li>Exemptions, reverse charge and other applicable tax provisions.</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>5.2 Review of Documents</h3>
            <p>
              The Customer must review invoices, credit notes, debit notes, delivery challans, e-Way bills and other documents before issuing, sharing or relying on them.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer must ensure that information entered into Billenza is correct and complete.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>5.3 Statutory Returns and Payments</h3>
            <p>
              The Customer is responsible for its statutory filings, including applicable GST returns such as GSTR-1 and GSTR-3B, and for paying applicable taxes, interest, cess and penalties.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where Billenza provides a filing, integration or submission feature, the Customer remains responsible for reviewing the information, providing required authorisations and confirming successful submission.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>5.4 No Guarantee of Government Acceptance</h3>
            <p>
              Macenza does not guarantee that every document, calculation, return, integration or submission will be accepted by a government portal or authority.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Government portal availability, validation rules, statutory requirements and third-party integrations may change independently of Billenza.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>5.5 Customer Records</h3>
            <p>
              The Customer must maintain its own statutory books, invoices, tax records and independent backups for the retention period required by applicable law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Billenza must not be treated as the Customer&apos;s only legally required record-keeping arrangement.
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              6. Subscription Plans, Pricing and Payment
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>6.1 Subscription Plans</h3>
            <p>Billenza may offer paid subscription plans, including the following plans as currently published:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><strong>Monthly Pro:</strong> ₹499 per month.</li>
              <li><strong>Annual Pro:</strong> ₹4,999 per year.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The applicable plan, price, billing frequency and included features will be displayed during purchase.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.2 Taxes</h3>
            <p>
              Unless expressly stated otherwise, displayed subscription prices are exclusive of applicable statutory taxes.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Applicable GST or other taxes will be calculated and displayed during checkout where required.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza will issue applicable subscription invoices in accordance with its tax registration status and applicable law.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.3 Payment Gateway</h3>
            <p>
              Billenza uses Razorpay Software Private Limited or its supported payment infrastructure for payment processing, subject to the payment methods made available at checkout.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Payment processing is governed by the relevant payment provider&apos;s terms, policies and security procedures.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where payment details are collected directly by the payment provider, the Customer&apos;s payment credentials are handled under that provider&apos;s applicable security arrangements.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not intend to collect or store raw card security codes (CVVs) or banking passwords on Billenza servers. The actual payment flow and handling of payment data are subject to the selected payment integration.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.4 Recurring Payments and E-Mandates</h3>
            <p>
              Where recurring subscriptions are offered, the Customer may be asked to establish an electronic payment mandate through the applicable payment provider, bank, card issuer or UPI provider.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer authorises recurring charges only by completing the applicable mandate registration and authentication process.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Recurring transactions will be processed subject to the applicable Reserve Bank of India (RBI) directions, payment network requirements and the terms of the issuing bank or payment provider.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Pre-transaction and post-transaction notifications, where required, are generally handled through the relevant issuer or payment-system participant under the applicable framework.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer may manage or revoke an electronic mandate using the available payment-provider, bank, card or UPI facilities. Cancelling a Billenza subscription and revoking a payment mandate are related but may be separate actions. Customers should verify that both have been completed where applicable.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.5 Failed Payments</h3>
            <p>
              If a recurring payment fails, the subscription may become unpaid, restricted or subject to suspension after reasonable notice, where practicable.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer remains responsible for resolving payment failures and maintaining a valid payment method if continued subscription access is desired.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.6 Price Changes</h3>
            <p>
              Macenza may revise subscription prices or plan features.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where a price change affects an existing recurring subscription, Macenza will provide reasonable advance notice, ordinarily at least fifteen (15) calendar days before the revised price applies to a subsequent renewal, unless a different period is required by law or the payment provider&apos;s rules.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              A price change will not retroactively alter a completed billing period.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>6.7 Taxes and Payment Records</h3>
            <p>
              The Customer is responsible for providing correct billing information and reviewing subscription invoices.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Any tax treatment of subscription payments will be determined in accordance with applicable law.
            </p>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              7. Cancellation, Downgrade and Refunds
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>7.1 Subscription Cancellation</h3>
            <p>
              The Customer may request cancellation through the available billing settings or by contacting <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where a subscription is cancelled, access to paid features will ordinarily continue until the end of the already-paid billing period unless the Customer is informed otherwise or applicable law requires a different outcome.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Cancellation prevents future renewal charges once processed. It does not automatically mean that a refund is due for an already-started billing period.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>7.2 Downgrades</h3>
            <p>
              If plan downgrades are supported, the applicable change will take effect according to the billing information displayed during the downgrade process.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Features or usage limits that are not included in the new plan may become unavailable.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>7.3 Refund Eligibility</h3>
            <p>
              Because Billenza is a digital subscription service that may be provisioned immediately, subscription fees are generally not refundable merely because a Customer changes their mind or does not use the Service.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              However, this general policy does not limit any refund, cancellation or other remedy required by applicable law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>Refunds may be considered in circumstances including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li><strong>Duplicate Charges:</strong> The same subscription period is charged more than once because of a verified technical or payment-processing error.</li>
              <li><strong>Provisioning Failure:</strong> The Customer is unable to access the paid Service due to a verified server-side failure continuing for more than forty-eight (48) consecutive hours after payment confirmation, where the failure is attributable to Macenza.</li>
              <li><strong>Incorrect Charges:</strong> The Customer is charged an amount that was not authorised or was materially inconsistent with the disclosed checkout price.</li>
              <li><strong>Statutory Rights:</strong> A refund or other remedy is required under applicable consumer protection law, a binding order or another mandatory legal requirement.</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>7.4 Refund Requests</h3>
            <p>Refund requests may be submitted to <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a> with:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Registered account email.</li>
              <li>Payment or transaction reference.</li>
              <li>Relevant subscription details.</li>
              <li>A brief explanation of the issue.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza may request reasonable information to verify the transaction.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>7.5 Refund Processing</h3>
            <p>
              Approved refunds will ordinarily be initiated through the original payment method or payment provider.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The time taken for the amount to appear in the Customer&apos;s account may depend on Razorpay, the issuing bank, card network, UPI provider or other payment intermediary.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Any stated processing estimate is not a guarantee of the bank&apos;s final credit date.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>7.6 No Waiver of Statutory Rights</h3>
            <p>
              Nothing in this section excludes or restricts any non-waivable rights or remedies available to a Customer under applicable Indian consumer protection laws.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              8. Service Availability, Maintenance and Backups
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>8.1 Availability</h3>
            <p>
              Macenza will make reasonable efforts to keep Billenza available and operational.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              However, continuous or uninterrupted access cannot be guaranteed. Temporary interruptions may occur due to maintenance, infrastructure issues, network failures, security incidents, third-party outages or circumstances outside Macenza&apos;s reasonable control.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>8.2 Maintenance</h3>
            <p>
              Macenza may perform maintenance, upgrades, security patches, database operations and infrastructure changes.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where reasonably practicable, advance notice will be provided for planned maintenance that is expected to materially affect availability.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>8.3 Backups</h3>
            <p>
              Macenza may maintain backups or recovery copies as part of its operational and disaster-recovery practices.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The availability, frequency and retention of backups may depend on the underlying infrastructure and service configuration.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Backups are not a substitute for the Customer maintaining independent copies of important business and statutory records.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>8.4 Data Recovery</h3>
            <p>
              Macenza will make reasonable efforts to restore service or recover data where technically feasible after an incident.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              However, Macenza does not guarantee that every deleted, corrupted or lost record can be recovered.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>8.5 Third-Party Outages</h3>
            <p>
              Billenza may rely on cloud hosting, database, authentication, payment and network providers.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Service interruptions caused by these providers may affect Billenza even where Macenza has taken reasonable steps to manage its infrastructure.
            </p>
          </section>

          {/* Section 9 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              9. Acceptable Use and Prohibited Activities
            </h2>
            <p>The Customer agrees to use Billenza lawfully and responsibly.</p>
            <p style={{ marginTop: '0.5rem' }}>You must not:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Generate or knowingly use fraudulent, fabricated or sham invoices, tax documents or transport documents for tax evasion or other unlawful purposes.</li>
              <li>Use Billenza to facilitate money laundering, fraud, unlawful transactions or other prohibited activities.</li>
              <li>Attempt to access another Customer&apos;s workspace, account, records or credentials without authorisation.</li>
              <li>Circumvent authentication, access controls, tenant isolation, security protections or usage restrictions.</li>
              <li>Introduce malware, viruses, malicious scripts or harmful code.</li>
              <li>Conduct denial-of-service attacks, abusive automated requests or activities intended to disrupt the Service.</li>
              <li>Scrape, harvest or collect data from Billenza in a manner that violates these Terms, applicable law or the rights of others.</li>
              <li>Misuse APIs, integrations or credentials.</li>
              <li>Resell, sublicense, lease or commercially redistribute access to the hosted Billenza Service without written permission from Macenza.</li>
              <li>Use Billenza in a manner that infringes another person&apos;s intellectual property, privacy or other legal rights.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Nothing in this section is intended to restrict rights expressly granted under an applicable open-source licence for the relevant open-source components or rights that cannot legally be restricted.
            </p>
          </section>

          {/* Section 10 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              10. Customer Data, Ownership and Permitted Processing
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>10.1 Customer Data Ownership</h3>
            <p>
              As between Macenza and the Customer, the Customer retains its rights in Customer Data, subject to third-party rights and applicable law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>Customer Data may include:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Business and GST registration information.</li>
              <li>Invoices and financial records.</li>
              <li>Customer and supplier directories.</li>
              <li>Product and inventory records.</li>
              <li>Credit notes and delivery challans.</li>
              <li>Business reports and other uploaded information.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not claim ownership of the Customer&apos;s underlying business records merely because they are stored or processed through Billenza.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>10.2 Limited Service-Related Permission</h3>
            <p>
              The Customer grants Macenza a limited, non-exclusive permission to host, store, transmit, process, display, back up and otherwise handle Customer Data only to the extent reasonably necessary to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Provide the Service.</li>
              <li>Operate and maintain the Customer&apos;s account.</li>
              <li>Enable authorised users to access the workspace.</li>
              <li>Provide customer support.</li>
              <li>Maintain security and prevent misuse.</li>
              <li>Troubleshoot technical problems.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              This permission applies for the period necessary to provide the Service and complete applicable post-termination, backup, security and legal-retention processes.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>10.3 No Unrelated Sale of Customer Data</h3>
            <p>
              Macenza does not sell Customer Data to advertisers, data brokers or unrelated commercial parties.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Customer Data may be processed or disclosed to service providers, payment providers, professional advisers or authorities where reasonably necessary to operate the Service, provide support, protect rights or comply with law, subject to applicable privacy obligations.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>10.4 Customer Responsibility</h3>
            <p>
              The Customer is responsible for ensuring that it has the necessary rights, permissions and lawful grounds to upload or process information through Billenza.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer must not upload information that it is not legally authorised to provide.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>10.5 Data Export</h3>
            <p>
              Where export tools are available, Customers may export supported records in the formats made available by Billenza, which may include CSV, JSON or PDF.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Available formats may vary depending on the feature and record type.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>10.6 Personal Data</h3>
            <p>
              Personal data included in Customer Data will be handled in accordance with the Billenza Privacy Policy and applicable data protection laws.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where the Customer uploads personal data relating to its own customers, employees or suppliers, the Customer is responsible for its own applicable obligations relating to that information.
            </p>
          </section>

          {/* Section 11 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              11. Privacy and Information Security
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>11.1 Privacy Policy</h3>
            <p>
              Macenza&apos;s collection and processing of personal data in connection with Billenza is explained in the <Link href="/privacy" style={{ color: '#0284c7' }}>Billenza Privacy Policy</Link>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Customers should review that policy before creating an account or uploading personal information.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>11.2 Security Measures</h3>
            <p>
              Macenza seeks to maintain commercially reasonable administrative, technical and organisational safeguards designed to protect the Service and information processed through it.
            </p>
            <p style={{ marginTop: '0.5rem' }}>Depending on the deployed infrastructure and relevant service configuration, safeguards may include:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Encrypted network communications.</li>
              <li>Authentication and access controls.</li>
              <li>Database access restrictions.</li>
              <li>Row Level Security (RLS), where configured.</li>
              <li>Credential and secret management.</li>
              <li>Infrastructure monitoring.</li>
              <li>Backup and recovery procedures.</li>
              <li>Administrative access restrictions.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The specific safeguards may change as the Service develops.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>11.3 No Absolute Security Guarantee</h3>
            <p>
              No internet-based application, database, network or cloud infrastructure can be guaranteed to be completely secure or immune from every cyber threat.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not warrant that unauthorised access, data loss or security incidents can never occur.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>11.4 Security Incidents</h3>
            <p>
              If Macenza becomes aware of a security incident affecting Customer Data, it will assess the incident and take steps required under applicable law and its Privacy Policy.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>11.5 Customer Security Responsibilities</h3>
            <p>Customers must:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Maintain secure account credentials.</li>
              <li>Restrict access to authorised individuals.</li>
              <li>Avoid sharing passwords or authentication codes.</li>
              <li>Notify Macenza of suspected compromise.</li>
              <li>Use appropriate security controls on their own devices.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              12. Intellectual Property and Open-Source Licensing
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>12.1 Open-Source Software</h3>
            <p>
              Billenza incorporates and uses software components from the open-source project Free-GST-Billing-Software, available at:{' '}
              <a href="https://github.com/IamRamgarhia/Free-GST-Billing-Software" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>
                https://github.com/IamRamgarhia/Free-GST-Billing-Software
              </a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The upstream project and its components are subject to their applicable open-source licence terms, including the MIT License where applicable.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The upstream copyright and attribution information identifies DiceCodes and the relevant project contributors. The original copyright and licence notices must remain available in accordance with the applicable licence requirements.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not claim original authorship, ownership or exclusive copyright over pre-existing upstream source code, inherited software functionality or third-party intellectual property.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The full applicable licence text and attribution notices are made available through the Billenza Open Source Attribution section:{' '}
              <a href="https://billenza.com/about#credits" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', fontWeight: 600 }}>
                https://billenza.com/about#credits
              </a>
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>12.2 Rights Under Open-Source Licences</h3>
            <p>
              The rights of users, developers and other recipients in open-source components are governed by the applicable licence.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in these Terms is intended to remove, restrict or override permissions granted by the MIT License or another applicable open-source licence.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where the MIT License applies, recipients retain the rights granted by that licence, subject to its conditions, including preservation of the applicable copyright and permission notices.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>12.3 Macenza&apos;s Independent Materials</h3>
            <p>
              Macenza may claim rights, where legally applicable, in its independently created materials, including:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Macenza&apos;s original branding and visual identity.</li>
              <li>Independently created logos and graphics.</li>
              <li>Original website text and marketing materials.</li>
              <li>Original Billenza brand presentation and independently created visual assets.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              These claims do not extend to upstream open-source code, third-party software, third-party trademarks or materials owned by others.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Use of a brand name does not by itself establish that a trademark is registered.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>12.4 No Transfer of Ownership Through Subscription</h3>
            <p>
              Purchasing a Billenza subscription grants access to the hosted Service under these Terms.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              It does not transfer ownership of the underlying software, open-source components, third-party services or Macenza&apos;s independently created materials.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>12.5 Customer Materials</h3>
            <p>
              The Customer retains its rights in Customer Data and materials it independently owns or is authorised to use.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer grants only the limited processing permission described in Section 10.
            </p>
          </section>

          {/* Section 13 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              13. Third-Party Services and Integrations
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>13.1 Third-Party Providers</h3>
            <p>
              Billenza may use external infrastructure and service providers to operate the Service.
            </p>
            <p style={{ marginTop: '0.5rem' }}>These may include:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><strong>Supabase:</strong> Database, authentication and related backend infrastructure.</li>
              <li><strong>Amazon Web Services (AWS):</strong> Cloud infrastructure, storage or other hosting-related services where configured.</li>
              <li><strong>Razorpay Software Private Limited:</strong> Payment processing and supported recurring payment facilities.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The actual providers and services may change as Billenza&apos;s infrastructure develops.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>13.2 Third-Party Terms</h3>
            <p>
              Third-party services may be subject to separate terms, privacy policies, service-level arrangements and technical limitations.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Customers may be required to accept the applicable terms of a third-party service when using a related integration or payment facility.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>13.3 Third-Party Availability</h3>
            <p>
              Macenza does not control the entire infrastructure or operations of independent third-party providers.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where an external provider experiences an outage, service interruption, security issue or change in functionality, Billenza features that depend on that provider may be affected.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>13.4 External Links</h3>
            <p>
              Billenza may contain links to third-party websites or services.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza is not responsible for the content, policies, availability or practices of external websites that it does not control.
            </p>
          </section>

          {/* Section 14 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              14. Customer Indemnification
            </h2>
            <p>
              To the extent permitted by applicable law, the Customer agrees to indemnify and hold harmless Macenza and its proprietor against third-party claims, losses and reasonable legal expenses arising directly from:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>The Customer&apos;s intentional unlawful use of Billenza.</li>
              <li>Fraudulent invoices, false declarations or deliberate tax-law violations committed by the Customer.</li>
              <li>The Customer&apos;s infringement of another person&apos;s intellectual property or privacy rights.</li>
              <li>The Customer&apos;s unauthorised disclosure or misuse of third-party personal data.</li>
              <li>The Customer&apos;s wilful misconduct or gross negligence in using the Service.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              The indemnity will apply only to the extent the relevant claim or loss is attributable to the Customer&apos;s conduct.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza will, where reasonably practicable, notify the Customer of a relevant claim and cooperate in its defence.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in this section requires the Customer to indemnify Macenza for losses caused by Macenza&apos;s own fraud, wilful misconduct or other conduct for which liability cannot legally be excluded.
            </p>
          </section>

          {/* Section 15 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              15. Account Restriction and Suspension
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>15.1 Grounds for Restriction</h3>
            <p>Macenza may temporarily restrict, suspend or limit access to an account where reasonably necessary because of:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>A confirmed or reasonably suspected security threat.</li>
              <li>Unauthorised access or attempted data compromise.</li>
              <li>Non-payment of subscription fees.</li>
              <li>Material violation of these Terms.</li>
              <li>Fraudulent or unlawful activity.</li>
              <li>A valid legal or regulatory direction.</li>
              <li>A serious risk to the Service, other Customers or infrastructure.</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>15.2 Notice and Opportunity to Resolve</h3>
            <p>
              Where practicable and legally permissible, Macenza will notify the Customer of the reason for the restriction and provide a reasonable opportunity to resolve the issue.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              For ordinary material contractual breaches that can be corrected, Macenza will generally aim to provide at least seven (7) business days to remedy the issue before termination.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              This notice period may not apply where immediate action is reasonably necessary to address security threats, suspected fraud, legal requirements or risks to other Customers.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>15.3 Restoration</h3>
            <p>
              Where a suspension reason has been resolved, Macenza may restore access after reasonable verification.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>15.4 No Waiver</h3>
            <p>
              Temporary restriction does not automatically waive any unpaid subscription amount or other valid contractual obligation, subject to applicable law.
            </p>
          </section>

          {/* Section 16 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              16. Subscription Expiry, Termination and Data Retention
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>16.1 Subscription Expiry</h3>
            <p>
              When a paid subscription expires without renewal, access to paid features may be restricted.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where supported, the account may enter a read-only or limited-access period during which the Customer can review and export available historical records.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.2 Sixty-Day Export Period</h3>
            <p>
              Subject to the actual product functionality and applicable legal requirements, Macenza intends to preserve Customer Data for up to sixty (60) calendar days following subscription expiry to allow the Customer to export available records or reactivate the subscription.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The export period begins from the applicable subscription expiry date unless the Customer is separately notified of a different date.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.3 Deletion from Active Systems</h3>
            <p>
              After the applicable export period, Customer Data may be scheduled for deletion from active production systems if the subscription is not renewed.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              A verified account deletion request may also result in earlier deletion where required or permitted by applicable privacy laws.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Deletion may be delayed or limited where retention is necessary to comply with law, resolve disputes, prevent fraud, maintain security or establish or defend legal claims.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.4 Backups and Disaster-Recovery Copies</h3>
            <p>
              Deletion from active production databases does not necessarily result in immediate deletion from every backup, disaster-recovery snapshot or third-party system.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Backup copies may remain temporarily available in isolated backup systems until they are overwritten, expire or are otherwise deleted according to the applicable backup-retention process.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where a backup is restored for disaster recovery, deleted information will be subject to the applicable deletion process again.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza will not use backup retention as a reason to retain Customer Data indefinitely.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.5 Statutory Retention</h3>
            <p>
              Under Section 36 of the Central Goods and Services Tax Act, 2017, registered persons are generally required to retain relevant books of accounts and records for seventy-two (72) months from the due date of furnishing the annual return for the relevant financial year, subject to applicable statutory extensions.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer remains responsible for maintaining records for the full period required by applicable law, including any extended period arising from proceedings, appeals or investigations.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer must not rely exclusively on Billenza to satisfy statutory retention obligations.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.6 Account Termination</h3>
            <p>
              A Customer may request account termination by contacting <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a> or using any available account deletion facility.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza may terminate an account where there is a material breach, unlawful activity, prolonged non-payment or another valid reason under these Terms, subject to applicable notice and legal requirements.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>16.7 Outstanding Obligations</h3>
            <p>
              Termination does not eliminate payment obligations, liabilities or rights that accrued before termination.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Sections concerning intellectual property, Customer Data, confidentiality, indemnification, limitation of liability, dispute resolution and other provisions intended to survive will continue to apply to the extent necessary.
            </p>
          </section>

          {/* Section 17 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              17. Confidentiality
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>17.1 Confidential Information</h3>
            <p>
              Each party may receive non-public information belonging to the other party in connection with the Service.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Confidential information may include business records, technical information, account information, commercial information and other information that should reasonably be understood as confidential.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>17.2 Protection</h3>
            <p>
              Each party agrees to take reasonable steps to protect confidential information against unauthorised access, use or disclosure.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza will handle Customer Data in accordance with these Terms and the Privacy Policy.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>17.3 Permitted Disclosure</h3>
            <p>Macenza may disclose relevant information where reasonably necessary:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>To operate and provide the Service.</li>
              <li>To authorised infrastructure or payment providers.</li>
              <li>To provide customer support.</li>
              <li>To protect the rights, security or property of Macenza or others.</li>
              <li>To comply with a valid legal obligation, court order or government direction.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Where legally permitted and reasonably practicable, Macenza will limit disclosure to the information necessary for the relevant purpose.
            </p>
          </section>

          {/* Section 18 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              18. Disclaimer of Warranties
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>18.1 Service Basis</h3>
            <p>
              To the maximum extent permitted by applicable law, Billenza is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not guarantee that the Service will always be uninterrupted, error-free, compatible with every device or free from every technical defect.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>18.2 Software Calculations</h3>
            <p>
              Billenza may provide automated tax calculations, document generation and reporting based on Customer-provided information and configured rules.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza does not guarantee that every calculation or document will be suitable for every transaction or statutory situation.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Customers must review relevant outputs before relying on or issuing them.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>18.3 No Guarantee of Business Outcomes</h3>
            <p>
              Macenza does not guarantee any particular financial, tax, operational or commercial result from using Billenza.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>18.4 Mandatory Legal Rights</h3>
            <p>
              Nothing in this section excludes warranties, remedies or rights that cannot legally be excluded under applicable law.
            </p>
          </section>

          {/* Section 19 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              19. Limitation of Liability
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>19.1 Excluded Losses</h3>
            <p>
              To the maximum extent permitted by applicable law, neither party will be liable to the other for indirect, incidental, special or consequential losses, including loss of anticipated profits, revenue, business opportunities or goodwill.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              This exclusion does not apply where such exclusion is prohibited by law or to liability expressly preserved under Section 19.3.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>19.2 Aggregate Liability</h3>
            <p>
              To the maximum extent permitted by applicable law, Macenza&apos;s total aggregate liability arising out of or relating to the Service or these Terms will not exceed the subscription fees actually paid by the Customer to Macenza during the three (3) months immediately preceding the event giving rise to the claim.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where the Customer has not paid any subscription fees during that period, the limitation will apply only to the extent legally enforceable.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>19.3 Non-Excludable Liability</h3>
            <p>Nothing in these Terms excludes or limits liability for:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Fraud or fraudulent misrepresentation.</li>
              <li>Wilful misconduct.</li>
              <li>Death or personal injury where liability cannot legally be excluded.</li>
              <li>Any liability that cannot be limited or excluded under applicable Indian law.</li>
              <li>Mandatory non-waivable rights or remedies available to consumers.</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>19.4 Reasonable Reliance</h3>
            <p>
              The Customer is responsible for reviewing business information and statutory documents before relying on them.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in this section removes Macenza&apos;s responsibility for obligations that cannot legally be transferred to the Customer.
            </p>
          </section>

          {/* Section 20 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              20. Force Majeure
            </h2>
            <p>
              Neither party will be responsible for a failure or delay in performing an obligation to the extent caused by circumstances beyond its reasonable control.
            </p>
            <p style={{ marginTop: '0.5rem' }}>Such circumstances may include:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Natural disasters.</li>
              <li>Floods, earthquakes or extreme weather.</li>
              <li>War, terrorism or civil unrest.</li>
              <li>Government restrictions or orders.</li>
              <li>Major telecommunications or internet failures.</li>
              <li>Widespread power outages.</li>
              <li>Major cloud infrastructure failures.</li>
              <li>Large-scale cyber incidents.</li>
              <li>Other events beyond the affected party&apos;s reasonable control.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              The affected party will make reasonable efforts to reduce the impact and resume performance when reasonably possible.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              This section does not excuse payment obligations that became due before the relevant event, except where applicable law requires otherwise.
            </p>
          </section>

          {/* Section 21 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              21. Changes to These Terms
            </h2>
            <p>
              Macenza may update these Terms to reflect changes in law, product functionality, business operations, security requirements or service arrangements.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Material changes will be communicated through the registered email address, an in-app notice or another reasonable communication method.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where practicable, Macenza will provide at least fifteen (15) calendar days&apos; advance notice of material changes that affect existing Customers, unless a shorter period is required for legal, security or urgent operational reasons.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The revised Terms will state their updated effective date.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where applicable law requires fresh consent for a material change, Macenza will obtain that consent rather than relying solely on continued use.
            </p>
          </section>

          {/* Section 22 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              22. Grievance Redressal and Customer Support
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>22.1 Contact for Grievances</h3>
            <p>Customers may submit complaints, concerns or grievances relating to Billenza using the following contact details:</p>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '0.75rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              <div><strong>Entity:</strong> Macenza &ndash; Operator and Commercial Service Provider of Billenza</div>
              <div><strong>Designation:</strong> Grievance Officer</div>
              <div><strong>Official Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#0284c7', fontWeight: 600 }}>info@macenza.com</a></div>
              <div><strong>Principal Place of Business:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India.</div>
              <div><strong>Customer Support:</strong> <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a></div>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>22.2 Complaint Information</h3>
            <p>Customers should include:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Their registered email address.</li>
              <li>Relevant account or subscription information.</li>
              <li>A clear description of the issue.</li>
              <li>Supporting transaction or reference details, where relevant.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Customers should not send passwords, CVVs, OTPs or other authentication secrets when submitting complaints.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>22.3 Acknowledgement and Resolution</h3>
            <p>
              Where the Consumer Protection (E-Commerce) Rules, 2020 or another applicable rule requires it, complaints will be acknowledged within forty-eight (48) hours and addressed within the applicable statutory period, including the prescribed one-month redressal period where applicable.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Other support requests will be handled within a reasonable time based on their nature and complexity.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>22.4 Escalation</h3>
            <p>
              If a Customer is dissatisfied with the response, the Customer may reply to the existing complaint or use the applicable statutory consumer grievance or dispute-resolution channels.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in this section restricts any statutory right to approach a competent authority or consumer commission.
            </p>
          </section>

          {/* Section 23 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              23. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms will be governed by the laws of India.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Subject to mandatory consumer protection rights and statutory dispute-resolution mechanisms, the competent courts at Ajmer, Rajasthan, India will have jurisdiction over disputes arising out of these Terms.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in this section prevents a consumer from approaching a consumer commission or other forum that has jurisdiction under applicable law.
            </p>
          </section>

          {/* Section 24 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              24. Severability
            </h2>
            <p>
              If any provision of these Terms is held to be invalid, unlawful or unenforceable by a competent authority or court, that provision will be limited or severed to the minimum extent necessary.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The remaining provisions will continue to apply to the extent legally enforceable.
            </p>
          </section>

          {/* Section 25 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              25. Waiver
            </h2>
            <p>
              A failure or delay by Macenza in exercising a right under these Terms does not automatically waive that right.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              A waiver will be effective only to the extent expressly communicated by the party granting it.
            </p>
          </section>

          {/* Section 26 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              26. Assignment and Transfer
            </h2>
            <p>
              The Customer may not assign or transfer its rights or obligations under these Terms without Macenza&apos;s prior written consent, except where such restriction is prohibited by applicable law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Macenza may transfer or assign its rights and obligations in connection with a bona fide business reorganisation, merger, acquisition or sale of substantial business assets, subject to applicable law.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Any successor taking over the Service will be required to respect the Customer&apos;s accrued rights and applicable data protection and contractual obligations.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Where a transfer materially affects Customer Data processing or the identity of the service provider, Macenza will provide notice where required by law or reasonably practicable.
            </p>
          </section>

          {/* Section 27 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              27. Entire Agreement
            </h2>
            <p>
              These Terms, together with the Billenza Privacy Policy, Open Source Attribution documentation and applicable subscription disclosures, constitute the agreement between Macenza and the Customer regarding use of Billenza.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              If a separate written agreement signed by the parties expressly governs a particular service or feature, that agreement will prevail for the subject it specifically covers, to the extent of any inconsistency.
            </p>
          </section>

          {/* Section 28 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              28. Relationship of the Parties
            </h2>
            <p>
              The relationship between Macenza and the Customer is that of independent contracting parties.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Nothing in these Terms creates a partnership, joint venture, employment relationship, franchise or agency relationship between Macenza and the Customer.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              The Customer is responsible for its own employees, contractors, business activities and statutory obligations.
            </p>
          </section>

          {/* Section 29 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              29. Electronic Communications and Notices
            </h2>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>29.1 Notices to Customers</h3>
            <p>
              Macenza may send service-related notices, subscription information, security notifications and legal updates to the registered email address or through the Billenza application.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Customers are responsible for keeping their contact details accurate and checking important account communications.
            </p>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>29.2 Notices to Macenza</h3>
            <p>
              Legal notices, contractual communications and service-related complaints may be sent to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li>Email: <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a></li>
              <li>Website: <a href="https://billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com</a></li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '1rem 0 0.5rem' }}>29.3 Electronic Records</h3>
            <p>
              Electronic communications and records may be maintained as evidence of account activity, acceptance, payments and service-related events, subject to applicable law and the Privacy Policy.
            </p>
          </section>

          {/* Section 30 */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              30. Business and Contact Information
            </h2>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '1.25rem', border: '1px solid #e2e8f0', marginTop: '0.75rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Macenza &ndash; Operator and Commercial Service Provider of Billenza</div>
              <div><strong>Business Structure:</strong> Sole Proprietorship</div>
              <div><strong>Product:</strong> Billenza &ndash; GST Billing, Invoicing and Business Management SaaS</div>
              <div><strong>Website:</strong> <a href="https://billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com</a></div>
              <div><strong>Application:</strong> <a href="https://app.billenza.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://app.billenza.com</a></div>
              <div><strong>Open Source Attribution:</strong> <a href="https://billenza.com/about#credits" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>https://billenza.com/about#credits</a></div>
              <div><strong>Principal Place of Business:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India.</div>
              <div><strong>Official Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#0284c7' }}>info@macenza.com</a></div>
            </div>
          </section>

          {/* Section 31: Customer Acceptance Block */}
          <section style={{ marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '1.8rem 0 0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              31. Customer Acceptance
            </h2>
            <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: 16, padding: '1.5rem', marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#0f172a', fontSize: '1.05rem', marginBottom: 8 }}>
                <CheckCircle2 size={18} color="#16a34a" />
                CONFIRMATION OF ACCEPTANCE
              </div>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                By registering an account, purchasing a subscription, selecting an acceptance checkbox or accessing Billenza, the Customer confirms that:
              </p>
              <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.9rem', color: '#334155' }}>
                <li>The Customer has read and understood these Terms.</li>
                <li>The Customer agrees to use Billenza in accordance with these Terms.</li>
                <li>The Customer understands that Billenza is a software utility and does not replace professional tax, accounting or legal advice.</li>
                <li>The Customer understands that it remains responsible for reviewing its business records and statutory documents.</li>
                <li>The Customer understands that Billenza incorporates open-source and third-party software components subject to their respective licences and terms.</li>
                <li>The Customer understands that Macenza operates and commercially provides Billenza and does not claim ownership of pre-existing upstream open-source software.</li>
              </ul>
            </div>
          </section>

          {/* End of Terms */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '2.5rem', textAlign: 'center', fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6 }}>
            <div style={{ fontWeight: 700, letterSpacing: '0.05em' }}>END OF TERMS OF SERVICE</div>
            <div style={{ marginTop: 6, maxWidth: 720, margin: '6px auto 0' }}>
              &copy; 2026 Macenza. All rights reserved in Macenza&apos;s independently created branding, original website content and other materials to the extent legally applicable. Billenza is operated and commercially provided by Macenza. Third-party and open-source components remain subject to their respective copyrights and licence terms, including the applicable MIT License.
            </div>
          </div>
        </div>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand" style={{ marginBottom: 16 }}>
                <Image
                  src="/billenza-logo-white.webp"
                  alt="Billenza"
                  width={140}
                  height={45}
                  style={{ height: 38, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p>
                Precision GST Invoicing, GSTR-1/3B Returns, Inventory Radar, and
                Multi-Currency Financial Suite.
              </p>
              <div className="status-line">
                <span className="ndot live"></span>
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>

            <div className="foot-col">
              <h4>Platform</h4>
              <Link href="/features">All GST Features</Link>
              <Link href="/features#tax-invoices">Tax Invoicing</Link>
              <Link href="/features#eway-bills">e-Way Bill Generator</Link>
              <Link href="/features#gstr1-json">GSTR-1 &amp; 3B Filing</Link>
              <Link href="/features#multi-currency-exports">Multi-Currency Suite</Link>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/pricing">Pricing Plans</Link>
              <Link href="/#faq">Compliance &amp; Security</Link>
              <Link href="/contact">Contact &amp; Support</Link>
            </div>

            <div className="foot-col">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/refund-policy">Cancellation &amp; Refunds</Link>
              <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
              <Link href="/contact">Grievance Redressal</Link>
            </div>
          </div>

          <div className="foot-base">
            <div>&copy; 2026 Macenza / Billenza. All rights reserved.</div>
            <div>Operated by Macenza &bull; Ajmer, Rajasthan, India.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
