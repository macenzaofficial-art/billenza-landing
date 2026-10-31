import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import GSTCalculatorWidget from '../../../components/GSTCalculatorWidget';
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Percent,
  Layers,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Online GST Calculator India (Inclusive & Exclusive) | Billenza',
  description:
    'Free, accurate Indian GST Calculator. Compute CGST, SGST, IGST across 0%, 5%, 12%, 18%, 28% tax slabs. Supports both GST Exclusive and Reverse GST Inclusive calculations.',
  keywords: [
    'GST calculator online India',
    'reverse GST calculator',
    'GST inclusive calculator',
    'GST exclusive calculator',
    'calculate 18% GST',
    'CGST SGST IGST formula calculator',
    'free GST tax calculator 2026',
  ],
  alternates: {
    canonical: 'https://billenza.com/tools/gst-calculator',
  },
};

export default function GSTCalculatorPage() {
  const faqList = [
    {
      q: 'What is the mathematical formula for calculating GST (Exclusive)?',
      a: 'To calculate GST when the price is exclusive of tax: GST Amount = (Base Amount × GST Rate) / 100. Total Invoice Price = Base Amount + GST Amount. For example, on a base price of ₹10,000 at 18% GST, the GST is (10,000 × 18) / 100 = ₹1,800, making the total ₹11,800.',
    },
    {
      q: 'What is the reverse GST formula for Inclusive amounts?',
      a: 'When an amount already includes GST: Base Price = (Total Amount × 100) / (100 + GST Rate), and GST Amount = Total Amount - Base Price. For example, on a total of ₹11,800 at 18% GST: Base Price = (11,800 × 100) / 118 = ₹10,000, and GST = ₹1,800.',
    },
    {
      q: 'How are CGST and SGST split on intra-state sales?',
      a: 'For supplies within the same state (Intra-state), the total GST rate is divided equally between the Central Government (CGST) and State Government (SGST). For an 18% item, 9% is CGST and 9% is SGST.',
    },
    {
      q: 'When does IGST apply instead of CGST/SGST?',
      a: 'Integrated Goods and Services Tax (IGST) applies when goods or services are supplied from one Indian state or union territory to another (Inter-state supply), or on imports and exports. The entire tax rate (e.g. 18%) is levied as IGST.',
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
        <div className="container sub-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <Breadcrumbs
            items={[
              { label: 'Free Tools' },
              { label: 'GST Calculator' },
            ]}
          />
          <div className="badge-chip lime" style={{ margin: '0 auto 12px' }}>
            <Calculator size={13} /> FREE STATUTORY TOOL
          </div>
          <h1>Online GST Tax Calculator India</h1>
          <p className="sub-hero-desc" style={{ margin: '0 auto 28px' }}>
            Instant, mathematically precise GST calculations for businesses, accountants, and consumers. Calculate CGST, SGST, and IGST for all standard tax slabs, or compute reverse GST inclusive amounts.
          </p>
        </div>
      </section>

      {/* Interactive Tool Widget */}
      <section style={{ padding: '48px 0 64px' }}>
        <div className="container">
          <GSTCalculatorWidget />
        </div>
      </section>

      {/* Educational & SEO Content */}
      <section style={{ padding: '48px 0 64px', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">GST CALCULATION GUIDE</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 8 }}>
              Understanding the Indian GST Rate Structure
            </h2>
          </div>

          {/* Slabs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>0% Slab</h3>
                <span className="badge-chip">Exempt</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Essential necessities: unbranded food grains, fresh milk, fruits, vegetables, bread, salt, and statutory educational services.
              </p>
            </div>

            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>5% Slab</h3>
                <span className="badge-chip lime">Household</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Packaged food items, spices, tea, coffee, edible vegetable oils, life-saving medicines, footwear under ₹1,000, and economy rail travel.
              </p>
            </div>

            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>12% Slab</h3>
                <span className="badge-chip">Processed</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Processed foods, frozen meat, computers, cell phones, processed fruit juices, non-AC restaurant dining, and diagnostic test kits.
              </p>
            </div>

            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>18% Slab</h3>
                <span className="badge-chip lime">Standard</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Most industrial goods, software/IT services, telecom, financial services, branded garments, industrial machinery, and capital goods.
              </p>
            </div>

            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>28% Slab</h3>
                <span className="badge-chip">Luxury</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Motor cars, motorcycles, air conditioners, refrigerators, cement, aerated sugary drinks, and high-end consumer luxury goods.
              </p>
            </div>

            <div style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Special Slabs</h3>
                <span className="badge-chip">0.25% &bull; 3%</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                Rough precious and semi-precious stones (0.25%), Gold, Silver, and diamond jewelry articles (3% GST).
              </p>
            </div>
          </div>

          {/* Formulas explained */}
          <div className="card-premium" style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
              Statutory Formulas for GST Calculation
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div style={{ background: 'var(--bone)', padding: 20, borderRadius: 12 }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                  1. GST Exclusive (Add GST)
                </h4>
                <p style={{ fontSize: 13.5, color: 'var(--gray)', marginBottom: 8 }}>
                  When you know the base selling price and want to calculate tax:
                </p>
                <div style={{ fontFamily: 'monospace', background: '#fff', padding: '10px 14px', borderRadius: 8, fontSize: 13, border: '1px solid var(--line)', color: 'var(--ink)' }}>
                  GST Amount = (Base Price &times; Rate) &divide; 100<br />
                  Gross Total = Base Price + GST Amount
                </div>
              </div>

              <div style={{ background: 'var(--bone)', padding: 20, borderRadius: 12 }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                  2. GST Inclusive (Extract Reverse GST)
                </h4>
                <p style={{ fontSize: 13.5, color: 'var(--gray)', marginBottom: 8 }}>
                  When the MRP or total payment already includes GST:
                </p>
                <div style={{ fontFamily: 'monospace', background: '#fff', padding: '10px 14px', borderRadius: 8, fontSize: 13, border: '1px solid var(--line)', color: 'var(--ink)' }}>
                  Base Price = (Total &times; 100) &divide; (100 + Rate)<br />
                  GST Amount = Total &minus; Base Price
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, marginTop: 8 }}>
                GST Calculation FAQ
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqList.map((faq, idx) => (
                <div key={idx} style={{ background: '#fff', padding: 24, borderRadius: 16, border: '1px solid var(--line)' }}>
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
        title="Ready to Automate Your GST Billing?"
        description="Stop computing taxes manually on a calculator. Billenza handles all rates, HSN codes, and e-way bills automatically."
      />
      <Footer />
    </div>
  );
}
