import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTASection from '../../components/CTASection';
import CompareTable from '../../components/CompareTable';
import {
  Scale,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Billenza vs Tally, Vyapar & Zoho Books — GST Software Comparison | Billenza',
  description:
    'Compare Billenza against traditional accounting tools like TallyPrime, Vyapar, and Zoho Books. Discover how cloud velocity, multi-currency exports, and instant e-Way bills save hours each week.',
  keywords: [
    'Billenza vs Tally',
    'Billenza vs Vyapar',
    'Billenza vs Zoho Books',
    'best GST billing software India',
    'cloud GST software comparison',
    'alternatives to Tally for SME billing',
  ],
  alternates: {
    canonical: 'https://billenza.com/compare',
  },
};

export default function ComparePage() {
  const pillars = [
    {
      title: 'Cloud Velocity vs Desktop Lock-in',
      desc: 'Access your invoices, client ledgers, and inventory from your MacBook, Windows laptop, iPad, or Android phone with real-time continuous synchronization. Never worry about corrupt hard drives or manual .bak files again.',
    },
    {
      title: 'Built-in Global Multi-Currency',
      desc: 'Most Indian software was built solely for local shops. Billenza natively handles cross-border trade in 22 global currencies with automatic statutory INR notes and Letter of Undertaking (LUT) reference disclaimers.',
    },
    {
      title: 'Transparent, All-Inclusive Pricing',
      desc: 'No hidden add-on fees, no per-user microtransactions, and no surprise annual maintenance contracts. At ₹499/month, you get every compliance engine unlocked with unlimited invoices.',
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
              { label: 'Compare Alternatives' },
            ]}
          />
          <div className="badge-chip lime">
            <Scale size={13} /> TRANSPARENT BENCHMARK
          </div>
          <h1>How Billenza Compares to Traditional Accounting Software</h1>
          <p className="sub-hero-desc">
            Choosing the right GST platform shouldn&rsquo;t require hiring an IT consultant. See how Billenza stacks up against legacy desktop packages and complex ERPs on speed, compliance, and total cost of ownership.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/pricing" className="pill pill-ink">
              Start Free 14-Day Evaluation
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

      {/* Comparison Table */}
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
            <span className="eyebrow">FEATURE-BY-FEATURE BREAKDOWN</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', margin: '12px 0 16px' }}>
              Side-by-Side Platform Matrix
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 16 }}>
              A clear, verified comparison of core capabilities across modern Indian billing solutions.
            </p>
          </div>

          <CompareTable />
        </div>
      </section>

      {/* 3 Pillars */}
      <section style={{ padding: '48px 0 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 56 }}>
            {pillars.map((p, idx) => (
              <div key={idx} className="card-premium">
                <div className="step-number">{idx + 1}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Decision Guide */}
          <div className="card-dark">
            <span className="badge-chip lime" style={{ color: '#1d1d1d', marginBottom: 16 }}>
              <Sparkles size={13} /> HONEST DECISION GUIDE
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
              When to Choose Billenza vs Legacy Software
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              We believe in choosing the right tool for the job. Here is an honest appraisal to guide your decision:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 22, borderRadius: 14 }}>
                <h4 style={{ color: '#dcf986', fontSize: 18, marginBottom: 10 }}>Choose Billenza If:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'rgba(255,255,255,0.85)' }}>
                  <li style={{ display: 'flex', gap: 8 }}>
                    <CheckCircle2 size={16} color="#dcf986" style={{ flexShrink: 0, marginTop: 2 }} />
                    You want to be up and running in under 60 seconds without software installation.
                  </li>
                  <li style={{ display: 'flex', gap: 8 }}>
                    <CheckCircle2 size={16} color="#dcf986" style={{ flexShrink: 0, marginTop: 2 }} />
                    You bill overseas clients in USD/EUR/GBP and need LUT compliance.
                  </li>
                  <li style={{ display: 'flex', gap: 8 }}>
                    <CheckCircle2 size={16} color="#dcf986" style={{ flexShrink: 0, marginTop: 2 }} />
                    You want automatic NIC e-Way bill JSON generation without retyping data.
                  </li>
                  <li style={{ display: 'flex', gap: 8 }}>
                    <CheckCircle2 size={16} color="#dcf986" style={{ flexShrink: 0, marginTop: 2 }} />
                    You need access across Mac, PC, and mobile with continuous cloud sync.
                  </li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 22, borderRadius: 14 }}>
                <h4 style={{ color: '#ffffff', fontSize: 18, marginBottom: 10 }}>Stick With Tally If:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'rgba(255,255,255,0.7)' }}>
                  <li style={{ display: 'flex', gap: 8 }}>
                    &bull; You have dedicated in-house accountants trained specifically on Tally keyboard navigation.
                  </li>
                  <li style={{ display: 'flex', gap: 8 }}>
                    &bull; You require complex multi-branch manufacturing cost-center job costing.
                  </li>
                  <li style={{ display: 'flex', gap: 8 }}>
                    &bull; You operate purely offline with no internet connectivity whatsoever.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Modern Cloud GST Invoicing"
        description="Switch to Billenza Pro. Join thousands of modern Indian enterprises."
      />
      <Footer />
    </div>
  );
}
