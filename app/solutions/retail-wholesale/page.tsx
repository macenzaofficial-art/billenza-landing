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
  Printer,
  Barcode,
  Truck,
  Users,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Billing & Inventory for Retailers & Wholesalers | Billenza',
  description:
    'High-speed POS billing, thermal receipt printing, barcode scanning, live stock deduction, and customer ledgers for Indian retailers, distributors, and traders.',
  keywords: [
    'GST billing software for retail shop',
    'wholesale billing software India',
    'POS billing software with GST',
    'thermal printer billing software',
    'distributor billing software India',
    'inventory and retail billing software',
  ],
  alternates: {
    canonical: 'https://billenza.com/solutions/retail-wholesale',
  },
};

export default function RetailWholesalePage() {
  const features = [
    {
      title: 'High-Speed Keyboard & Barcode Billing',
      desc: 'Process long queues in seconds. Use rapid keyboard shortcuts or standard handheld barcode scanners to add items, apply discounts, and generate invoices with zero lag.',
    },
    {
      title: 'Thermal & Full A4/A5 Printing',
      desc: 'Seamlessly print 2-inch and 3-inch thermal POS receipts for retail counters, or detailed A4/A5 tax invoices with custom company logo, terms, and bank details for wholesale consignments.',
    },
    {
      title: 'Customer Ledgers & Credit Tracking',
      desc: 'Track outstanding balances, payment receipts, and customer credit limits with ease. Download instant statement of accounts to share via WhatsApp or Email.',
    },
    {
      title: 'Wholesale e-Way Bill Integration',
      desc: 'Shipping orders over ₹50,000? Billenza automatically checks consignment values and generates validated NIC e-Way Bill JSON payloads in 1 click.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />

      {/* Hero */}
      <section className="sub-hero">
        <div className="sub-hero-grid" aria-hidden="true"></div>
        <div className="container sub-hero-content">
          <Breadcrumbs
            items={[
              { label: 'Solutions' },
              { label: 'Retail & Wholesale' },
            ]}
          />
          <div className="badge-chip lime">
            <Package size={13} /> HIGH-SPEED COUNTER BILLING &amp; TRADING
          </div>
          <h1>Built for High-Velocity Retail &amp; Wholesale Trade</h1>
          <p className="sub-hero-desc">
            Designed for brick-and-mortar stores, FMCG distributors, electronics, and hardware wholesalers. Lightning-fast checkout, thermal printing, real-time stock deductions, and customer credit management.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Start Counter Billing Free
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/features/inventory" className="pill pill-ghost">
              Explore Inventory Radar
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="eyebrow">REPLACE SLOW, CRASH-PRONE DESKTOP BILLING</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', margin: '12px 0 16px' }}>
              Engineered for Counter Speed &amp; Accuracy
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 16 }}>
              Say goodbye to database corruptions, lost backups, and expensive annual maintenance contracts. Run your retail shop from any PC, Mac, tablet, or smartphone.
            </p>
          </div>

          <div className="feature-deep-grid">
            {features.map((f, idx) => (
              <div key={idx} className="card-premium">
                <div className="step-number">{idx + 1}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Industry Types */}
          <div className="card-dark" style={{ marginTop: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Sparkles size={13} /> PROVEN ACROSS TRADING SECTORS
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>
              Industries Powered by Billenza
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>FMCG &amp; Groceries</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Barcode scanning, batch expiry tracking, and instant thermal receipt generation.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Electronics &amp; Appliances</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Serial number warranty tracking, 18% &amp; 28% GST tax slab management, and QR payments.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Hardware &amp; Building Materials</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Delivery challans, credit ledgers, multi-truck consignments, and e-way bill generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Modernize Your Store &amp; Warehouse Operations"
        description="Try Billenza Pro free for 14 days. No setup fees, no special hardware needed."
      />
      <Footer />
    </div>
  );
}
