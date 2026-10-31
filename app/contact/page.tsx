import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Clock, Building, Phone, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us & Support Desk — Billenza',
  description: 'Official contact details, corporate office location, phone, and customer support channels for Billenza (Macenza).',
};

export default function ContactUsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#1d1d1d', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} />
            Back to Billenza
          </Link>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Support Desk: Active</span>
        </div>
      </header>

      <main style={{ maxWidth: 840, margin: '2.5rem auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            <Building size={14} />
            GET IN TOUCH
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.5px' }}>Contact Billenza</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2rem' }}>
            Have a question about GST calculation rules, subscription billing, or cloud compliance? Our support team is here to assist you.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.5rem', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1d1d1d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <Mail size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>Customer Support</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 8px' }}>For billing, invoicing, and account inquiries:</p>
              <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                info@macenza.com
              </a>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1d1d1d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <Phone size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>Phone Support</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 8px' }}>Direct phone assistance during business hours:</p>
              <a href="tel:+919414660123" style={{ color: '#1d1d1d', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                +91 94146 60123
              </a>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1d1d1d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <Clock size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>Business Hours</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 8px' }}>Monday through Saturday:</p>
              <div style={{ color: '#1d1d1d', fontWeight: 700, fontSize: '0.9rem' }}>
                10:00 AM – 6:00 PM IST
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1d1d1d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <MapPin size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>Registered Office</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                <strong>Shashank Shubham</strong><br />
                (Operating as Macenza / Billenza)<br />
                PL NO 16, SIDDARTHA NAGAR,<br />
                Mayo Link Rd, Dhola Bhata Colony,<br />
                Ajmer, Rajasthan 305001, India
              </p>
            </div>
          </div>

          <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f1f5f9', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              STATUTORY COMPLIANCE
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '0 0 0.5rem' }}>Grievance Redressal Mechanism</h2>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1rem' }}>
              In accordance with the Indian Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023, you may contact our designated Grievance Officer regarding any data protection concerns, subscription billing grievances, or statutory matters:
            </p>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '1.25rem', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              <div><strong>Grievance Officer:</strong> Shashank Shubham</div>
              <div><strong>Designation:</strong> Proprietor, Macenza</div>
              <div><strong>Email:</strong> <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', fontWeight: 600 }}>info@macenza.com</a></div>
              <div><strong>Address:</strong> PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India</div>
              <div><strong>Response Turnaround:</strong> Within 48 business hours</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
