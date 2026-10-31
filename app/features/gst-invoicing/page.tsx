import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  QrCode,
  Layers,
  Scale,
  Percent,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Tax Invoicing Engine — Indian Rule 46 Compliant Invoices | Billenza',
  description:
    'Generate mathematically exact GST tax invoices, delivery challans, bills of supply, and credit notes. Automatic CGST/SGST/IGST detection, atomic numbering, and QR codes.',
  keywords: [
    'GST tax invoicing software',
    'GST invoice generator India',
    'Rule 46 GST tax invoice',
    'B2B GST billing software',
    'CGST SGST IGST calculator billing',
    'GST billing software for small business',
  ],
  alternates: {
    canonical: 'https://billenza.com/features/gst-invoicing',
  },
};

export default function GSTInvoicingPage() {
  const faqList = [
    {
      q: 'How does Billenza automatically calculate CGST, SGST, and IGST?',
      a: 'Billenza inspects your registered state of supply and the buyer’s Place of Supply (POS) or GSTIN. If the transaction occurs within the same state (Intra-state), the tax is automatically split 50/50 into CGST and SGST. If it spans across states (Inter-state), 100% is mapped to IGST, eliminating manual calculation errors completely.',
    },
    {
      q: 'Does Billenza enforce atomic sequential invoice numbering?',
      a: 'Yes. Under Rule 46(b) of the CGST Rules, 2017, invoice numbers must be consecutive, unique per financial year, and contain only alphabets, numbers, and special characters (- or /). Billenza uses database-level atomic incrementation to prevent duplicate or missing serial numbers.',
    },
    {
      q: 'Can I generate Bills of Supply, Delivery Challans, and Credit Notes?',
      a: 'Absolutely. In addition to standard Tax Invoices, Billenza supports Bills of Supply (for composition dealers or exempt goods), Delivery Challans (Rule 55), Debit Notes, and Credit Notes (Section 34) with direct statutory linkage to the original invoice.',
    },
    {
      q: 'Are B2B dynamic QR codes included?',
      a: 'Yes! Billenza automatically embeds statutory UPI payment QR codes and complies with GST e-invoicing B2C and B2B requirements so your customers can scan and pay instantly via PhonePe, Google Pay, Paytm, or BHIM.',
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
              { label: 'GST Tax Invoicing' },
            ]}
          />
          <div className="badge-chip lime">
            <FileText size={13} /> RULE 46 &amp; RULE 48 COMPLIANT
          </div>
          <h1>Precision GST Tax Invoicing Engine</h1>
          <p className="sub-hero-desc">
            Stop losing hours to manual spreadsheet formulas and misaligned tax slabs. Billenza delivers mathematically flawless B2B and B2C tax invoices engineered strictly to Indian Goods &amp; Services Tax standards.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Create Your First Invoice
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/tools/gst-calculator" className="pill pill-ghost">
              Open GST Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 56 }}>
            <div className="card-premium">
              <div className="step-number">1</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Intelligent Tax Splitting
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Billenza checks both supplier and buyer state codes in real-time. Intra-state supplies are bifurcated into CGST and SGST with 100% precision, while inter-state trades are routed directly to IGST.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">2</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Sequential Numbering Guarantee
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Avoid tax audit penalties caused by broken serial numbers. Billenza enforces consecutive numbering per financial year with customizable prefix/suffix schemes (e.g., <code>BLZ/26-27/0001</code>).
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">3</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Instant UPI QR &amp; Paylinks
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Every invoice automatically renders a statutory UPI QR code. Customers simply scan with any Indian UPI app to pay directly into your linked bank account with zero payment delays.
              </p>
            </div>
          </div>

          {/* Deep Technical Spec Box */}
          <div className="card-dark" style={{ marginBottom: 56 }}>
            <div style={{ maxWidth: 760 }}>
              <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
                <ShieldCheck size={13} /> STATUTORY COMPLIANCE ARCHITECTURE
              </span>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
                Complete Alignment with CGST Act Sections
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                Unlike generic international accounting tools that treat GST as a flat percentage surcharge, Billenza is built from the ground up to reflect the exact legal anatomy of Indian statutory billing.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                <div>
                  <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>Section 31</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                    Mandatory timeline compliance for issuing tax invoices before or at the time of removal of goods.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>Rule 46 &amp; 48</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                    16 statutory fields included: HSN/SAC, Place of Supply, reverse charge indicator, and tax breakdown.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 6 }}>Section 34</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                    Credit &amp; Debit Notes with strict bilateral ledger validation and return integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                Everything You Need to Know About Billenza Invoicing
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
        title="Start Generating Compliant GST Invoices Today"
        description="Try Billenza free for 14 days. Create your first statutory tax invoice in under 60 seconds."
      />
      <Footer />
    </div>
  );
}
