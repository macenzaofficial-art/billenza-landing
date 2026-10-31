import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  Globe2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  DollarSign,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Currency GST Invoicing & Export Suite (22 Currencies) | Billenza',
  description:
    'Bill international clients in 22 global currencies with automatic statutory INR conversion notes and Letter of Undertaking (LUT) tracking under Rule 96A.',
  keywords: [
    'multi-currency GST invoice software',
    'export billing software India',
    'LUT zero rated GST invoice',
    'freelancer export invoice USD',
    'software export invoicing India',
    'Rule 96A LUT compliance',
  ],
  alternates: {
    canonical: 'https://billenza.com/features/multi-currency',
  },
};

export default function MultiCurrencyPage() {
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
  ];

  const faqList = [
    {
      q: 'How does GST apply to service and goods exports from India?',
      a: 'Under Section 16 of the IGST Act, exports of goods and services qualify as &ldquo;Zero-Rated Supplies&rdquo;. Exporters can either export under a Letter of Undertaking (LUT) without paying IGST (Rule 96A), or pay IGST and claim a refund later. Billenza automates zero-rated invoicing under LUT with required statutory declarations.',
    },
    {
      q: 'How does Billenza handle statutory INR conversion for GSTR-1?',
      a: 'While your foreign client receives an invoice denominated in USD, EUR, or GBP with international banking details (SWIFT / IBAN), Indian tax laws require reporting export turnover in Indian Rupees (INR). Billenza automatically computes and attaches the INR conversion note based on the reference exchange rate on the date of supply.',
    },
    {
      q: 'Does Billenza embed the mandatory LUT declaration?',
      a: 'Yes. For exports under LUT, Billenza automatically embeds the mandatory legal text: &ldquo;Supply Meant for Export Under Bond or Letter of Undertaking Without Payment of Integrated Tax (Rule 96A)&rdquo; along with your ARN / LUT reference number.',
    },
    {
      q: 'Can I include international wire and payment instructions?',
      a: 'Absolutely. You can save your SWIFT / BIC codes, intermediary bank instructions, Wise, PayPal, Stripe, or direct foreign remittance account details directly on foreign currency invoices.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content">
          <Breadcrumbs
            items={[
              { label: 'Features', href: '/features' },
              { label: 'Multi-Currency & Exports' },
            ]}
          />
          <div className="badge-chip lime">
            <Globe2 size={13} /> 22 GLOBAL CURRENCIES &bull; RULE 96A LUT
          </div>
          <h1>Multi-Currency Invoicing &amp; Export Engine</h1>
          <p className="sub-hero-desc">
            Seamlessly bill clients across the United States, Europe, Middle East, and Asia. Billenza delivers dual-currency invoices with automatic statutory INR notes and Letter of Undertaking (LUT) compliance.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Start Export Invoicing
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/solutions/freelancers-exporters" className="pill pill-ghost">
              Exporter Solution Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Main Feature Cards */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 56 }}>
            <div className="card-premium">
              <div className="step-number">
                <Globe2 size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                22 Currencies Supported
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Bill in USD, EUR, GBP, AED, SGD, CAD, and more. Present your client with clean native currency totals while keeping your internal books pristine.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <FileCheck size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Automated LUT Declaration
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Rule 96A requires specific legal text and ARN numbers for zero-rated exports without IGST. Billenza injects the verified statutory disclaimer automatically.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <TrendingUp size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Statutory INR Conversion
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Includes reference exchange rates and converts line items to Indian Rupees for hassle-free GSTR-1 Table 6A (Exports) filing and CA audit readiness.
              </p>
            </div>
          </div>

          {/* Currencies Grid Showcase */}
          <div className="card-premium" style={{ marginBottom: 56 }}>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px' }}>
              <span className="badge-chip">GLOBAL TRADE CURRENCIES</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, marginTop: 10 }}>
                Bill Overseas Buyers in Their Preferred Currency
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 12 }}>
              {currencies.map((curr) => (
                <div
                  key={curr.code}
                  style={{
                    padding: '14px 12px',
                    borderRadius: 12,
                    background: 'var(--bone)',
                    border: '1px solid var(--line)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>{curr.code}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>{curr.name}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{curr.symbol}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                Export Invoicing &amp; LUT FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqList.map((faq, idx) => (
                <div key={idx} className="card-premium" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Scale Your International Business With Billenza"
        description="Join leading Indian exporters and software agencies billing overseas clients under LUT."
      />
      <Footer />
    </div>
  );
}
