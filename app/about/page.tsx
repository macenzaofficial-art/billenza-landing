import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Building2, MapPin, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'About Us — Billenza',
  description: 'Learn about Billenza, the precision GST invoicing, inventory, and compliance suite operated by Macenza.',
};

export default function AboutUsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#1d1d1d', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} />
            Back to Billenza
          </Link>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Platform Overview</span>
        </div>
      </header>

      <main style={{ maxWidth: 840, margin: '2.5rem auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            <Sparkles size={14} />
            ABOUT BILLENZA
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 0.5rem', letterSpacing: '-0.5px' }}>About Billenza</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0 0 2rem' }}>
            Precision-engineered GST billing, inventory management, and tax compliance suite for modern Indian enterprises.
          </p>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. Platform Overview</h2>
            <p>
              Billenza is a dedicated cloud financial technology platform designed to streamline statutory invoicing and GST compliance for Indian small and medium enterprises (SMEs), chartered accountants, traders, and exporters.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Engineered with a focus on mathematical accuracy and zero operational friction, Billenza automates the calculation of Central GST (CGST), State GST (SGST), Integrated GST (IGST), UTGST, and Compensation Cess across all standard tax slabs, ensuring every generated document aligns strictly with Indian Goods and Services Tax regulations.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Core Capabilities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#1d1d1d' }}>GST Tax Invoicing &amp; e-Way Bills</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  Tax invoices, bills of supply, delivery challans, credit/debit notes, and instant NIC-compliant e-Way bill JSON generation with atomic invoice numbering.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#1d1d1d' }}>GSTR-1 &amp; GSTR-3B Returns</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  Automated compilation of GSTR-1 and GSTR-3B return JSON payloads compatible with official GSTN offline filing tools, plus GSTR-2B ITC reconciliation.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#1d1d1d' }}>Multi-Currency Invoicing</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  Bill international clients in 22 global currencies (USD, EUR, GBP, AED, SGD, etc.) with automatic INR statutory conversion notes and LUT/Bond tracking.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#1d1d1d' }}>Inventory &amp; Stock Radar</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  Real-time stock deduction, HSN/SAC management, UQC unit standardisation, and instant low-stock threshold radar notifications.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Corporate Ownership &amp; Operations</h2>
            <p>
              Billenza is wholly owned, developed, and operated by <strong>Macenza</strong> (Sole Proprietorship: <strong>Shashank Shubham</strong>).
            </p>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#1d1d1d', fontSize: '0.9rem', marginBottom: 4 }}>
                    <Building2 size={16} /> Legal Entity
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                    Shashank Shubham<br />
                    (Operating as Macenza / Billenza)
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#1d1d1d', fontSize: '0.9rem', marginBottom: 4 }}>
                    <MapPin size={16} /> Registered Office
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                    PL NO 16, SIDDARTHA NAGAR,<br />
                    Mayo Link Rd, Dhola Bhata Colony,<br />
                    Ajmer, Rajasthan 305001, India
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#1d1d1d', fontSize: '0.9rem', marginBottom: 4 }}>
                    <Mail size={16} /> Contact Information
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                    Email: <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a><br />
                    Phone: <a href="tel:+919414660123" style={{ color: '#1d1d1d', fontWeight: 600 }}>+91 94146 60123</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Security &amp; Data Integrity Commitment</h2>
            <p>
              We prioritize tenant data isolation and financial confidentiality. All communications are encrypted via TLS 1.3 in transit and AES-256 at rest. Subscriptions are billed securely through Reserve Bank of India (RBI) authorized payment aggregators (Razorpay), ensuring no sensitive card or banking credentials touch our application servers.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
