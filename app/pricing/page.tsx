import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import PricingTable from '../../components/PricingTable';
import ROICalculator from '../../components/ROICalculator';
import CTASection from '../../components/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  HelpCircle,
  CreditCard,
  Lock,
  RefreshCw,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing & Plans — Transparent GST Compliance Software | Billenza',
  description:
    'Simple, transparent pricing for Indian businesses. Free Starter tier available. Pro Cloud at ₹499/month (or ₹4,999/year with 2 months free) includes all engines and unlimited invoices.',
  keywords: [
    'GST billing software price India',
    'Billenza pricing',
    'affordable GST software for small business',
    'GST invoice software subscription ₹499',
    'free GST billing software',
  ],
  alternates: {
    canonical: 'https://billenza.com/pricing',
  },
};

export default function PricingPage() {
  const faqList = [
    {
      q: 'Are there any hidden setup or annual maintenance fees?',
      a: 'Zero. Unlike traditional desktop accounting packages that charge extra for annual maintenance contracts (AMC), multi-device access, or version upgrades, Billenza’s price is 100% all-inclusive. You get continuous cloud updates and statutory compliance tweaks for free.',
    },
    {
      q: 'How does the 14-day free evaluation work?',
      a: 'You can sign up and explore Billenza immediately with zero payment and no credit card required. Generate test invoices, test e-way bill JSON payloads, and explore the inventory radar completely risk-free.',
    },
    {
      q: 'Can I cancel or switch plans at any time?',
      a: 'Yes. There are no lock-in contracts. You can switch between monthly and annual billing, or cancel anytime directly from your dashboard with 1 click.',
    },
    {
      q: 'What payment methods does Billenza accept?',
      a: 'Through our secured Razorpay payment infrastructure, we accept all Indian UPI apps (Google Pay, PhonePe, Paytm, BHIM), Net Banking across 50+ Indian banks, Credit/Debit Cards (Visa, Mastercard, RuPay), and corporate cards.',
    },
    {
      q: 'Is GST input tax credit (ITC) available on the subscription fee?',
      a: 'Yes! Billenza issues a statutory B2B GST tax invoice for your subscription payment. Enter your business GSTIN during checkout to claim 18% Input Tax Credit on your monthly GSTR-3B return.',
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

      {/* Subpage Hero */}
      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <Breadcrumbs
            items={[
              { label: 'Pricing & Plans' },
            ]}
          />
          <div className="badge-chip lime" style={{ margin: '0 auto 12px' }}>
            <Zap size={13} /> SIMPLE, PREDICTABLE PRICING
          </div>
          <h1>Honest Pricing Engineered for Indian SMEs</h1>
          <p className="sub-hero-desc" style={{ margin: '0 auto 28px' }}>
            No surprise per-user charges, no expensive AMC contracts, and no feature gates. Everything you need to manage invoices, e-way bills, inventory, and GSTR returns under one roof.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <PricingTable />
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section style={{ padding: '48px 0 64px', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
          <ROICalculator />
        </div>
      </section>

      {/* Trust & Security Strip */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <CreditCard size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>Secured by Razorpay</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>PCI-DSS Level 1 certified payments with UPI, cards &amp; net banking.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Lock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>256-Bit Bank Encryption</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>All invoice data encrypted at rest and in transit via TLS 1.3.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <RefreshCw size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>Instant Cancellation</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>Cancel anytime with zero questions asked and retain data export access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section style={{ padding: '48px 0 64px', background: '#ffffff', borderTop: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 8 }}>
              Pricing &amp; Subscription FAQ
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
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
