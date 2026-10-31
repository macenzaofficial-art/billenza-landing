import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTASection from '../../../components/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Truck,
  FileCode2,
  Zap,
  Clock,
  Layers,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'e-Way Bill Generation & NIC JSON Export — Billenza',
  description:
    'Generate NIC-compliant e-Way bill JSON payloads in one click. Automatic Part A and Part B compilation, vehicle validity calculation, and 100% portal compatibility.',
  keywords: [
    'e-Way bill software',
    'NIC e-Way bill JSON generator',
    'instant e-Way bill generator India',
    'e-Way bill Part A Part B',
    'Rule 138 e-Way bill automation',
    'transporter e-Way bill software',
  ],
  alternates: {
    canonical: 'https://billenza.com/features/eway-bill',
  },
};

export default function EWayBillPage() {
  const faqList = [
    {
      q: 'What is an e-Way bill and when is it mandatory?',
      a: 'Under Rule 138 of the CGST Rules, 2017, an Electronic Way Bill (e-Way Bill) is mandatory for the movement of goods of consignment value exceeding ₹50,000 (inter-state or intra-state, subject to state-specific limits). It consists of Part A (consignment details) and Part B (transport vehicle details).',
    },
    {
      q: 'How does Billenza generate the e-Way Bill JSON?',
      a: 'When you create an invoice in Billenza, our engine automatically maps all statutory fields (Supplier GSTIN, Buyer POS, HSN codes, invoice value, tax amounts) into the exact NIC schema specifications. With one click, you download the verified JSON ready for instant drag-and-drop into the ewaybillgst.gov.in portal.',
    },
    {
      q: 'Can I update vehicle numbers or change transporters later?',
      a: 'Yes. Billenza supports updating Part B details. You can input revised vehicle numbers or reassign transporter IDs without needing to rebuild the invoice.',
    },
    {
      q: 'Does it support consolidated and multi-vehicle consignments?',
      a: 'Yes! If goods are transshipped via multiple vehicles or consolidated across consignments, Billenza allows splitting into multiple delivery challan batches and generating compatible multi-vehicle payloads.',
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
        <div className="container sub-hero-content">
          <Breadcrumbs
            items={[
              { label: 'Features', href: '/features' },
              { label: 'e-Way Bill Automation' },
            ]}
          />
          <div className="badge-chip lime">
            <Truck size={13} /> NIC PORTAL 100% COMPATIBLE
          </div>
          <h1>NIC-Compliant e-Way Bill Automation</h1>
          <p className="sub-hero-desc">
            Eliminate repetitive copy-pasting into government portals. Billenza compiles validated Part A and Part B e-Way Bill JSON payloads directly from your invoices in a single click.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Try e-Way Bill Engine
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/features/gst-invoicing" className="pill pill-ghost">
              Explore GST Invoicing
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 56 }}>
            <div className="card-premium">
              <div className="step-number">
                <FileCode2 size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                1-Click NIC JSON Generation
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Pre-formatted and validated against National Informatics Centre (NIC) JSON schemas. Zero syntax errors or missing field rejections when uploading to the government portal.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <Truck size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Automatic Part A &amp; Part B Sync
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Part A is populated straight from your Billenza invoice. Add Transporter ID (TRANSIN) or Vehicle Number to complete Part B and instantly generate the transport authorization document.
              </p>
            </div>

            <div className="card-premium">
              <div className="step-number">
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Smart Validity Radar
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6 }}>
                Billenza calculates validity periods based on transit distance (1 day per 200 km for regular cargo; 1 day per 20 km for Over Dimensional Cargo), preventing expired transit penalties.
              </p>
            </div>
          </div>

          {/* Workflow steps */}
          <div className="card-dark" style={{ marginBottom: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Zap size={13} /> INSTANT 3-STEP PIPELINE
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>
              How e-Way Bills Flow From Invoice to Gatepass
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#dcf986', marginBottom: 6 }}>STEP 01</div>
                <h4 style={{ color: '#fff', fontSize: 16, marginBottom: 6 }}>Generate Invoice</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Enter goods, HSN codes, and transport distance. Billenza checks if value exceeds ₹50,000.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#dcf986', marginBottom: 6 }}>STEP 02</div>
                <h4 style={{ color: '#fff', fontSize: 16, marginBottom: 6 }}>Export NIC JSON</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Click &ldquo;Download e-Way Bill JSON&rdquo;. The JSON is strictly validated against official NIC schema standards.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#dcf986', marginBottom: 6 }}>STEP 03</div>
                <h4 style={{ color: '#fff', fontSize: 16, marginBottom: 6 }}>Upload &amp; Print</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}>
                  Upload to ewaybillgst.gov.in and receive the government EWB Number &amp; QR barcode immediately.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                e-Way Bill Compliance Answers
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
        title="Never Waste Another Minute on e-Way Bill Portals"
        description="Switch to Billenza Pro. Automate your logistics and statutory waybill documentation."
      />
      <Footer />
    </div>
  );
}
