import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileSpreadsheet,
  Download,
  ShieldAlert,
  BarChart2,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GSTR-1, GSTR-3B & GSTR-2B Return Filing Engine | Billenza',
  description:
    'Generate GSTN offline utility-compatible GSTR-1 and GSTR-3B return JSONs. Reconcile purchase ITC against GSTR-2B to prevent Section 16(2)(aa) audit notices.',
  keywords: [
    'GSTR-1 JSON export software',
    'GSTR-3B return summary generator',
    'GSTR-2B ITC reconciliation software',
    'GST filing software for CAs',
    'GST return filing software India',
    'HSN summary table 12 GSTR-1',
  ],
  alternates: {
    canonical: 'https://billenza.com/features/gstr-reports',
  },
};

export default function GSTRReportsPage() {
  const faqList = [
    {
      q: 'How does Billenza generate the GSTR-1 JSON payload?',
      a: 'Billenza compiles all sales invoices, credit/debit notes, and delivery challans into the exact multi-table JSON schema expected by the GSTN offline tool. Tables included: 4A (B2B), 5A (B2C Large), 7 (B2C Small), 9B (Credit/Debit Notes), and 12 (HSN/SAC summary). Simply upload this JSON directly to the GST portal.',
    },
    {
      q: 'Can my Chartered Accountant directly use these reports?',
      a: 'Yes! In addition to JSON payloads, Billenza provides downloadable multi-sheet Microsoft Excel and CSV workbooks designed specifically for CA audit reviews, complete with tax rate breakdown, customer GSTIN verification, and invoice summaries.',
    },
    {
      q: 'What is GSTR-2B ITC Reconciliation and why is it critical?',
      a: 'Under Section 16(2)(aa) of the CGST Act, a taxpayer cannot claim Input Tax Credit (ITC) unless the supplier has uploaded the invoice in their GSTR-1 and it appears in the buyer’s GSTR-2B. Billenza matches your purchase ledger against GSTR-2B to highlight missing or mismatched supplier invoices before you file GSTR-3B.',
    },
    {
      q: 'Does Billenza compute Table 12 HSN summaries automatically?',
      a: 'Yes. Table 12 requires aggregating total quantity, taxable value, and rate-wise CGST/SGST/IGST by HSN/SAC code. Billenza automates this calculation in real-time, eliminating hours of manual Excel pivot calculations.',
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
              { label: 'GSTR Return Reports' },
            ]}
          />
          <div className="badge-chip lime">
            <Layers size={13} /> GSTN OFFLINE UTILITY COMPATIBLE
          </div>
          <h1>GSTR-1, GSTR-3B &amp; GSTR-2B Return Engine</h1>
          <p className="sub-hero-desc">
            Transform invoice data into audit-ready GST return files in seconds. Download validated GSTR-1 JSON payloads, GSTR-3B summaries, and reconcile purchase ITC against GSTR-2B.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Get Audit-Ready
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/compare" className="pill pill-ghost">
              Compare vs Tally
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
                <Download size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                1-Click GSTR-1 JSON Export
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Every outward invoice, debit note, and credit note is compiled into official GSTN offline JSON format. Upload directly to the government portal with 0% error probability.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <BarChart2 size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Instant GSTR-3B Tax Summary
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                View total outward taxable supplies, zero-rated exports, reverse charge supplies, and net tax liability broken down by CGST, SGST, IGST, and Cess in 3B format.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <ShieldAlert size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                GSTR-2B ITC Matching Radar
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Reconcile your purchase invoices against supplier-filed GSTR-2B statements. Detect non-compliant suppliers before paying invoices or claiming ineligible tax credit.
              </p>
            </div>
          </div>

          {/* Table-Wise Breakdown Matrix */}
          <div className="card-dark" style={{ marginBottom: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Layers size={13} /> OFFICIAL GSTN SCHEMA COMPLIANCE
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
              Tables Automatically Populated in Billenza GSTR-1
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              No manual categorization needed. Billenza routes each invoice to its statutory GSTR-1 bucket based on invoice type and customer profile.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 4A &bull; B2B Supplies</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Regular registered business transactions with verified buyer GSTINs.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 5A &bull; B2C Large</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Inter-state unregistered supplies with invoice value exceeding ₹2,50,000.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 7 &bull; B2C Others</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Intra-state retail supplies and inter-state supplies up to ₹2.5 Lakhs aggregated by POS.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 9B &bull; Credit/Debit Notes</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Registered and unregistered credit/debit notes with original invoice number reference.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 12 &bull; HSN Summary</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Aggregated commodity/service HSN codes with UQC standardized units and tax totals.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12 }}>
                <div style={{ color: '#dcf986', fontWeight: 700, fontSize: 14 }}>Table 13 &bull; Documents Issued</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>
                  Sequential serial number range (fromBLZ-001 to BLZ-150) and cancelled invoices count.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                GSTR Return Filing Answers
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
        title="File Your Monthly GST Returns With Zero Drama"
        description="Switch to Billenza Pro. Download validated GSTR JSON payloads in 1 click."
      />
      <Footer />
    </div>
  );
}
