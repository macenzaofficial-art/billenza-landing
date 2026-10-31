import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Barcode,
  Layers,
  TrendingDown,
  Warehouse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Inventory Radar & Stock Control Engine | Billenza',
  description:
    'Real-time inventory tracking synchronized with GST invoicing. Low-stock radar notifications, HSN/SAC catalog, UQC standardized units, and batch tracking.',
  keywords: [
    'inventory management software with GST',
    'stock billing software India',
    'low stock alert billing software',
    'HSN code inventory management',
    'barcode billing software India',
    'UQC units GST inventory',
  ],
  alternates: {
    canonical: 'https://billenza.com/features/inventory',
  },
};

export default function InventoryPage() {
  const faqList = [
    {
      q: 'How does Billenza automate inventory deduction?',
      a: 'The instant an invoice or delivery challan is confirmed, Billenza automatically deducts the exact item quantities from your central stock ledger. If an invoice is cancelled or a sales return / credit note is issued, stock is restored automatically.',
    },
    {
      q: 'What is the Low-Stock Radar?',
      a: 'You can configure safety threshold levels for every product in your catalog. When stock drops below this threshold, Billenza triggers visual alerts and notifications, allowing you to reorder before running out of stock and losing sales.',
    },
    {
      q: 'Does it support standardized GST UQC unit codes?',
      a: 'Yes. Indian GST requires using official Unique Quantity Codes (UQC) such as PCS (Pieces), KGS (Kilograms), NOS (Numbers), BOX (Boxes), MTR (Meters), and LTR (Liters). Billenza standardizes these units automatically for Table 12 HSN filings.',
    },
    {
      q: 'Can I use barcode scanners with Billenza?',
      a: 'Yes! Billenza supports standard USB and Bluetooth barcode scanners (EAN-13, UPC, Code 128). Simply scan an item barcode into the invoice line item field to instantly add the item with its pre-configured HSN code, price, and GST slab.',
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
              { label: 'Inventory Radar' },
            ]}
          />
          <div className="badge-chip lime">
            <Package size={13} /> REAL-TIME STOCK SYNC
          </div>
          <h1>Smart Inventory Radar &amp; Stock Control</h1>
          <p className="sub-hero-desc">
            Keep your warehouse and billing in perfect harmony. Automatic stock deductions with every invoice, low-stock threshold alerts, and standardized GST HSN/UQC cataloging.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Track Your Inventory
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/solutions/retail-wholesale" className="pill pill-ghost">
              Retail &amp; Wholesale Guide
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
                <Package size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Live Invoicing Deduction
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Every item invoiced is deducted instantly. Sales returns and credit notes automatically replenish stock levels with zero manual adjustments.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <AlertTriangle size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Low-Stock Threshold Radar
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Set custom reorder levels for every SKU. The dashboard alerts you when quantities drop, preventing sudden stockouts on best-selling items.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <Barcode size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Barcode Scanner Ready
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Scan product barcodes straight into the invoice editor. Supports standard handheld USB and Bluetooth scanners for high-speed retail checkout.
              </p>
            </div>
          </div>

          {/* Deep Feature Highlights */}
          <div className="card-dark" style={{ marginBottom: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Warehouse size={13} /> WAREHOUSE INTELLIGENCE
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
              Standardized for Indian Tax &amp; Logistics Audits
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Billenza bridges the gap between daily warehouse operations and statutory GST returns, giving you clear inventory valuation and zero tax filing discrepancies.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              <div>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>HSN/SAC Mapping</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Pre-assign 4, 6, or 8-digit HSN codes to items so tax rates populate automatically.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>UQC Unit Standardization</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Strict adherence to GSTN unit codes (PCS, KGS, BOX, NOS) required for Table 12 filings.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>Gross Margin Radar</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Track purchase cost vs selling price per line item to maintain healthy profit margins.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                Inventory Radar FAQs
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
        title="Take Full Command of Your Inventory &amp; Billing"
        description="Switch to Billenza Pro. Sync your warehouse, billing, and tax returns seamlessly."
      />
      <Footer />
    </div>
  );
}
