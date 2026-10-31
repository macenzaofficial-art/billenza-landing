import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTASection from '../../components/CTASection';
import {
  FileText,
  ShieldCheck,
  Layers,
  Globe2,
  Package,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Lock,
  Cpu,
  Clock,
  Printer,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Features & Engines — Billenza GST Compliance Platform',
  description:
    'Explore Billenza’s six precision engines: GST tax invoicing, NIC e-Way bill JSON generation, GSTR-1 & 3B return filing, multi-currency export suite, and smart inventory radar.',
  keywords: [
    'GST billing software features',
    'GST invoice generator India',
    'e-Way bill automation',
    'GSTR-1 JSON export',
    'multi-currency GST invoice',
    'inventory management GST',
    'Billenza features',
  ],
  alternates: {
    canonical: 'https://billenza.com/features',
  },
};

export default function FeaturesPage() {
  const engines = [
    {
      title: 'Precision GST Tax Invoicing',
      href: '/features/gst-invoicing',
      badge: 'Core Engine',
      icon: FileText,
      description:
        'Generate statutory B2B, B2C, SEZ, and export invoices with automated CGST, SGST, IGST, UTGST, and Compensation Cess calculations.',
      features: [
        'Atomic sequential invoice numbering adhering to Rule 46',
        'Automatic Place of Supply (POS) state detection',
        'Built-in QR code & IRN generation readiness',
        'Reverse Charge Mechanism (RCM) flags',
      ],
    },
    {
      title: 'NIC-Compliant e-Way Bill Automation',
      href: '/features/eway-bill',
      badge: 'High Speed',
      icon: ShieldCheck,
      description:
        'Instant compilation of NIC e-Way Bill JSON payloads (Part A & Part B) without manual copy-pasting into government portals.',
      features: [
        'Automatic ₹50,000 threshold validation',
        'Transporter ID & vehicle number assignment',
        'Multi-vehicle consignment support',
        'Instant JSON export compatible with ewaybillgst.gov.in',
      ],
    },
    {
      title: 'GSTR-1, GSTR-3B & GSTR-2B Returns',
      href: '/features/gstr-reports',
      badge: 'CA Approved',
      icon: Layers,
      description:
        'Direct JSON and Excel return payloads formatted for the GSTN offline utility. Reconcile purchase ITC against GSTR-2B.',
      features: [
        'Table-wise compilation: 4A B2B, 5 B2C Large, 7 B2C Small, 9 Credit Notes',
        'Table 12 HSN/SAC summary aggregation',
        'ITC mismatch alert to prevent tax leakage',
        'One-click export for tax auditors & CAs',
      ],
    },
    {
      title: 'Multi-Currency Invoicing & Exports',
      href: '/features/multi-currency',
      badge: 'Global Commerce',
      icon: Globe2,
      description:
        'Bill overseas clients in 22 global currencies with automatic statutory INR notes and Letter of Undertaking (LUT) references.',
      features: [
        '22 global currencies (USD, EUR, GBP, AED, SGD, CAD, AUD, etc.)',
        'Statutory RBI reference exchange rates',
        'Zero-rated export under LUT (Rule 96A) validation',
        'Dual-currency display for client clarity and statutory filings',
      ],
    },
    {
      title: 'Smart Inventory Radar & Stock Control',
      href: '/features/inventory',
      badge: 'Real-Time Sync',
      icon: Package,
      description:
        'Automatic stock deduction with every invoice. Real-time radar alerts prevent stockouts and revenue loss.',
      features: [
        'Automatic low-stock threshold alerts',
        'HSN/SAC catalog with UQC standardized units (PCS, KGS, NOS, MTR)',
        'Batch, serial, and expiry date management',
        'Inventory valuation reports (FIFO / Weighted Average)',
      ],
    },
    {
      title: 'Real-Time Financial Intelligence',
      href: '/features',
      badge: 'Analytics',
      icon: BarChart3,
      description:
        'Live cashflow summaries, tax liability projections, customer receivables aging, and profit margins.',
      features: [
        'Pending payment reminders with direct UPI/payment links',
        'Customer ledger statements with running balance',
        'Estimated monthly tax liability radar',
        'Exportable to Microsoft Excel and PDF',
      ],
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Billenza Precision GST Billing Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, macOS, Android, iOS',
    description:
      'Cloud-based GST billing and compliance SaaS providing e-invoicing, e-way bills, multi-currency exports, and GSTR filing for Indian enterprises.',
    offers: {
      '@type': 'Offer',
      price: '499.00',
      priceCurrency: 'INR',
    },
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
        <div className="container sub-hero-content">
          <Breadcrumbs items={[{ label: 'Features' }]} />
          <div className="badge-chip lime">
            <Sparkles size={13} />
            COMPREHENSIVE SAAS ENGINE
          </div>
          <h1>Precision Compliance Architecture</h1>
          <p className="sub-hero-desc">
            Engineered from first principles to remove every fraction of friction from Indian tax invoicing, statutory e-way bills, multi-currency export billing, and GSTN returns.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Get Started Free
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/tools/gst-calculator" className="pill pill-ghost">
              Try Free GST Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Engines Grid */}
      <section style={{ padding: '72px 0 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <span className="eyebrow">SIX SPECIALIZED COMPLIANCE ENGINES</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', margin: '12px 0 16px' }}>
              Built for Mathematical Exactness
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 16 }}>
              Every calculation adheres directly to the Central Goods and Services Tax Act, 2017. Never worry about miscalculated decimals, wrong tax codes, or portal rejection.
            </p>
          </div>

          <div className="feature-deep-grid">
            {engines.map((eng, idx) => {
              const Icon = eng.icon;
              return (
                <div key={idx} className="card-premium" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          background: 'var(--ink)',
                          color: 'var(--lime)',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="badge-chip">{eng.badge}</span>
                    </div>

                    <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 10px' }}>
                      {eng.title}
                    </h3>
                    <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, marginBottom: 20 }}>
                      {eng.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {eng.features.map((feat, fidx) => (
                        <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#334155' }}>
                          <CheckCircle2 size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={eng.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontWeight: 700,
                      fontSize: 14,
                      color: 'var(--ink)',
                      borderTop: '1px solid var(--line-soft)',
                      paddingTop: 16,
                      transition: 'gap 0.2s',
                    }}
                  >
                    Deep dive into {eng.title} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Guarantee Strip */}
      <section style={{ padding: '48px 0', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Cpu size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>Bank-Grade Security</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>AES-256 encrypted database with 24/7 automated backups.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>99.99% Cloud Uptime</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>Hosted on high-availability Indian cloud clusters in Mumbai.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1d1d1d', color: '#dcf986', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Printer size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>Thermal &amp; A4 Ready</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>Print clean invoices on standard A4, A5, or 2-inch/3-inch thermal POS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
