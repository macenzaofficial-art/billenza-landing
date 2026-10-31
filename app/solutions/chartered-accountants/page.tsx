import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  FileSpreadsheet,
  ShieldAlert,
  Users,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Platform for Chartered Accountants & Tax Consultants | Billenza',
  description:
    'Empower your CA practice. Export GSTN offline JSON returns, run GSTR-2B ITC reconciliations, and review client accounting books with zero formatting headaches.',
  keywords: [
    'GST software for chartered accountants',
    'CA GST filing software India',
    'GSTR-1 JSON export for tax consultants',
    'GSTR-2B ITC reconciliation CA software',
    'multi client GST billing practice',
  ],
  alternates: {
    canonical: 'https://billenza.com/solutions/chartered-accountants',
  },
};

export default function CharteredAccountantsPage() {
  const caFeatures = [
    {
      title: 'GSTN Offline Tool-Ready JSONs',
      desc: 'No more converting messy client spreadsheets into portal templates. Download pre-validated GSTR-1 and GSTR-3B JSON files ready for instant upload into the official GST offline utility.',
    },
    {
      title: 'Automated GSTR-2B ITC Reconciliation',
      desc: 'Protect your clients from Section 16(2)(aa) disallowed ITC notices. Billenza cross-references purchase registers against supplier-filed 2B statements to flag missing credits before month-end.',
    },
    {
      title: 'Clean Multi-Sheet Excel Workbooks',
      desc: 'Get audit-ready Excel reports formatted with rate-wise CGST, SGST, IGST, and Cess columns, customer GSTIN verification flags, and Table 12 HSN quantity summaries.',
    },
    {
      title: 'Sequential Rule 46 Audit Logs',
      desc: 'Verify consecutive invoice numbering, cancellation records, and debit/credit note linkages in one unified compliance log for seamless statutory audits.',
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
              { label: 'Chartered Accountants' },
            ]}
          />
          <div className="badge-chip lime">
            <Building2 size={13} /> DESIGNED FOR AUDITORS &amp; TAX PRACTITIONERS
          </div>
          <h1>Built for CAs, Tax Advocates &amp; Bookkeepers</h1>
          <p className="sub-hero-desc">
            Stop chasing clients for missing invoices and broken spreadsheets every 20th of the month. Billenza gives you clean, mathematically validated return files and automated GSTR-2B reconciliation.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Recommend Billenza to Clients
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/features/gstr-reports" className="pill pill-ghost">
              Explore GSTR Returns Engine
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="eyebrow">REDUCE RETURN FILING TIME BY 80%</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', margin: '12px 0 16px' }}>
              Why Indian CAs Love Working with Billenza
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 16 }}>
              When your business clients use Billenza, their data is already structured, validated, and categorized according to official GST rules. Filing GSTR-1 and GSTR-3B becomes a 5-minute task.
            </p>
          </div>

          <div className="feature-deep-grid">
            {caFeatures.map((f, idx) => (
              <div key={idx} className="card-premium">
                <div className="step-number">{idx + 1}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CA Value Summary */}
          <div className="card-dark" style={{ marginTop: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Sparkles size={13} /> PROFESSIONAL AUDIT ADVANTAGE
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>
              Say Goodbye to Client Tax Filing Panic
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Zero Decimal Rounding Discrepancies</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Statutory half-even rounding rules prevent 1-paisa mismatch errors during GST portal uploads.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Automated HSN Summaries</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Table 12 HSN/SAC codes are aggregated with total quantities and tax values automatically.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>One-Click CA Export</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Download both JSON files for the government portal and Excel files for working papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Upgrade Your Practice’s Filing Efficiency"
        description="Try Billenza today or recommend it to your SME clients for flawless monthly compliance."
      />
      <Footer />
    </div>
  );
}
