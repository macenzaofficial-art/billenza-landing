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
  Code,
  FileCheck,
  CreditCard,
  Building2,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Billing for Freelancers, Agencies & Software Exporters | Billenza',
  description:
    'The precision invoicing solution for Indian tech freelancers, SaaS startups, and digital agencies. Multi-currency billing in USD/EUR/GBP, LUT zero-rated compliance, and statutory INR conversion.',
  keywords: [
    'GST billing software for freelancers',
    'invoicing software for software exporters India',
    'zero GST invoice LUT software',
    'freelance developer invoice India',
    'SaaS billing GST India',
    'export of services GST compliance',
  ],
  alternates: {
    canonical: 'https://billenza.com/solutions/freelancers-exporters',
  },
};

export default function FreelancersExportersPage() {
  const benefits = [
    {
      title: 'Zero-Rated Exports Under LUT',
      desc: 'Export software, design, and consulting services with 0% GST legally under Rule 96A. Billenza automatically embeds your Letter of Undertaking (LUT) ARN and required legal disclaimer on every invoice.',
    },
    {
      title: '22 Supported Foreign Currencies',
      desc: 'Bill clients in USD, EUR, GBP, AED, SGD, CAD, and more. Your international clients get crystal-clear foreign currency invoices with your SWIFT / IBAN / Wise payment instructions.',
    },
    {
      title: 'Automated Statutory INR Notes',
      desc: 'No more looking up exchange rates manually for GSTR-1 Table 6A. Billenza calculates and attaches statutory INR conversions on the invoice date for hassle-free tax returns and CA audits.',
    },
    {
      title: 'International Wire & UPI QR Payments',
      desc: 'Include both international bank transfer instructions (SWIFT, IBAN, Wise, Stripe) for overseas buyers and instant UPI QR codes for domestic Indian clients on the same platform.',
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
              { label: 'Freelancers & Exporters' },
            ]}
          />
          <div className="badge-chip lime">
            <Code size={13} /> TAILORED FOR TECH SERVICES &amp; EXPORTERS
          </div>
          <h1>Built for Modern Indian Exporters &amp; Freelancers</h1>
          <p className="sub-hero-desc">
            Whether you&rsquo;re a solo software engineer billing US clients in USD, a digital agency exporting creative work, or a SaaS company operating out of India — Billenza handles your cross-border compliance effortlessly.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Start Free Today
              <span className="pill-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/features/multi-currency" className="pill pill-ghost">
              Explore Multi-Currency Suite
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="eyebrow">ELIMINATE CROSS-BORDER TAX HEADACHES</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', margin: '12px 0 16px' }}>
              Why Indian Freelancers &amp; Agencies Choose Billenza
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 16 }}>
              Generic invoicing tools either don&rsquo;t understand Indian GST rules or force you into clunky desktop software from the 1990s. Billenza gives you modern cloud velocity.
            </p>
          </div>

          <div className="feature-deep-grid">
            {benefits.map((b, idx) => (
              <div key={idx} className="card-premium">
                <div className="step-number">{idx + 1}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{b.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Persona Showcase */}
          <div className="card-dark" style={{ marginTop: 56 }}>
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Sparkles size={13} /> WHO IS THIS DESIGNED FOR?
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>
              Tailored for Knowledge Workers &amp; Digital Exporters
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Software Engineers &amp; Devs</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                  Bill remote US and European employers via contract invoices in USD/EUR with zero GST under LUT.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>Design &amp; Marketing Agencies</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                  Issue professional retainer invoices to international clients with automated monthly recurrence.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 16, marginBottom: 8 }}>B2B SaaS Startups</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                  Generate dual-currency tax receipts and manage export compliance without costly enterprise ERPs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Billing Global Clients with 100% Tax Confidence"
        description="Get started in under 60 seconds. Free evaluation with zero credit card required."
      />
      <Footer />
    </div>
  );
}
