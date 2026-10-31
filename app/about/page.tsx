import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTASection from '../../components/CTASection';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Server,
  Lock,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Billenza — Precision GST Compliance & Financial SaaS | Macenza',
  description:
    'Learn about Billenza, the precision GST invoicing, inventory, and compliance suite engineered for Indian enterprises. Wholly owned and operated by Macenza.',
  keywords: [
    'about Billenza',
    'Macenza GST billing',
    'Shashank Shubham Billenza',
    'GST software Ajmer Rajasthan',
    'Indian GST SaaS company',
  ],
  alternates: {
    canonical: 'https://billenza.com/about',
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Billenza',
    legalName: 'Macenza',
    url: 'https://billenza.com',
    founder: {
      '@type': 'Person',
      name: 'Shashank Shubham',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94146-60123',
      contactType: 'customer support',
      email: 'info@macenza.com',
    },
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
          <Breadcrumbs items={[{ label: 'About Billenza' }]} />
          <div className="badge-chip lime">
            <Sparkles size={13} /> CLOUD FINANCIAL TECHNOLOGY
          </div>
          <h1>Built for India&rsquo;s Next Generation of Enterprises</h1>
          <p className="sub-hero-desc">
            Billenza is engineered with a singular focus: removing every fraction of friction from statutory tax invoicing, logistics documentation, and GST returns for Indian SMEs, exporters, and chartered accountants.
          </p>
        </div>
      </section>

      {/* Narrative & Mission */}
      <section style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center', marginBottom: 56 }}>
            <div>
              <span className="eyebrow">OUR ORIGIN &amp; PHILOSOPHY</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', margin: '10px 0 16px' }}>
                Precision Over Complexity
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: 15.5, lineHeight: 1.7, marginBottom: 16 }}>
                For decades, Indian small business owners and accountants have been trapped between two extremes: archaic desktop accounting software that requires days of training and crashes frequently, or expensive enterprise ERPs with bloated menus that slow down daily checkout counters.
              </p>
              <p style={{ color: 'var(--gray)', fontSize: 15.5, lineHeight: 1.7, marginBottom: 24 }}>
                We built Billenza to deliver a modern, blisteringly fast alternative. Cloud-native, accessible from any device, mathematically strict with Indian GST acts, and capable of generating statutory tax invoices in under 60 seconds.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="pill pill-ink">
                  Try Billenza Free
                  <span className="pill-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/contact" className="pill pill-ghost">
                  Contact Support Desk
                </Link>
              </div>
            </div>

            <div className="card-dark">
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                OPERATING PRINCIPLES
              </div>
              <h3 style={{ fontSize: 24, color: '#fff', marginBottom: 16 }}>
                The Three Pillars of Billenza
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li style={{ display: 'flex', gap: 12 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', color: '#1d1d1d', display: 'grid', placeItems: 'center', fontWeight: 800, flexShrink: 0, fontSize: 12 }}>1</span>
                  <div>
                    <strong style={{ color: '#fff' }}>Mathematical Invariance:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 }}>Every calculation adheres strictly to Section 31 and Rule 46 of the CGST Act. No decimal drift.</div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 12 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', color: '#1d1d1d', display: 'grid', placeItems: 'center', fontWeight: 800, flexShrink: 0, fontSize: 12 }}>2</span>
                  <div>
                    <strong style={{ color: '#fff' }}>Sub-Second Cloud Velocity:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 }}>Instant live search, keyboard shortcuts, and immediate PDF generation without spinning loaders.</div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 12 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', color: '#1d1d1d', display: 'grid', placeItems: 'center', fontWeight: 800, flexShrink: 0, fontSize: 12 }}>3</span>
                  <div>
                    <strong style={{ color: '#fff' }}>Zero Lock-in &amp; Data Sovereignty:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 }}>Your financial records remain 100% yours. Download full JSON and Excel ledger dumps at any time.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Infrastructure & Security */}
          <div id="security" className="card-premium" style={{ marginBottom: 56, background: '#fafafa' }}>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 36px' }}>
              <span className="badge-chip lime">
                <ShieldCheck size={13} /> SECURITY &amp; DATA LOCALIZATION
              </span>
              <h2 style={{ fontSize: 26, fontWeight: 700, marginTop: 8 }}>
                Indian Cloud Infrastructure &amp; Encryption
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: 14 }}>
                Hosted strictly within Indian geographical borders to satisfy RBI and statutory data localization requirements.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              <div style={{ background: '#fff', padding: 22, borderRadius: 14, border: '1px solid var(--line)' }}>
                <Server size={22} color="#1d1d1d" style={{ marginBottom: 10 }} />
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>Mumbai Region Cloud</h4>
                <p style={{ fontSize: 13, color: 'var(--gray)', margin: 0, lineHeight: 1.5 }}>
                  Hosted on redundant cloud availability zones in Mumbai, India, ensuring sub-50ms latency across the subcontinent.
                </p>
              </div>

              <div style={{ background: '#fff', padding: 22, borderRadius: 14, border: '1px solid var(--line)' }}>
                <Lock size={22} color="#1d1d1d" style={{ marginBottom: 10 }} />
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>AES-256 Storage Encryption</h4>
                <p style={{ fontSize: 13, color: 'var(--gray)', margin: 0, lineHeight: 1.5 }}>
                  All customer records, GSTIN credentials, and financial invoices are encrypted both at rest and in transit via TLS 1.3.
                </p>
              </div>

              <div style={{ background: '#fff', padding: 22, borderRadius: 14, border: '1px solid var(--line)' }}>
                <Cpu size={22} color="#1d1d1d" style={{ marginBottom: 10 }} />
                <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>Automated Daily Backups</h4>
                <p style={{ fontSize: 13, color: 'var(--gray)', margin: 0, lineHeight: 1.5 }}>
                  Immutable point-in-time recovery logs protect against accidental deletions, ensuring zero risk of ledger data loss.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Transparency & Ownership */}
          <div className="card-premium">
            <span className="eyebrow">STATUTORY ENTITY INFORMATION</span>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: '8px 0 16px' }}>
              Corporate Ownership &amp; Operating Entity
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.6, maxWidth: 740, marginBottom: 24 }}>
              Billenza is wholly owned, developed, and operated by <strong>Macenza</strong> (Sole Proprietorship: <strong>Shashank Shubham</strong>). We operate with full corporate transparency in compliance with Indian IT and consumer protection rules.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <div style={{ background: 'var(--bone)', padding: 18, borderRadius: 12, border: '1px solid var(--line)' }}>
                <div style={{ fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Operating Name</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginTop: 4 }}>Macenza / Billenza</div>
                <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 2 }}>Sole Proprietor: Shashank Shubham</div>
              </div>

              <div style={{ background: 'var(--bone)', padding: 18, borderRadius: 12, border: '1px solid var(--line)' }}>
                <div style={{ fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Registered Office</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginTop: 4 }}>
                  PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India
                </div>
              </div>

              <div style={{ background: 'var(--bone)', padding: 18, borderRadius: 12, border: '1px solid var(--line)' }}>
                <div style={{ fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Support &amp; Inquiries</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginTop: 4 }}>info@macenza.com</div>
                <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 2 }}>Phone: +91 94146 60123</div>
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
