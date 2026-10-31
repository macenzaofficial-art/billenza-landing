'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  Mail,
  MapPin,
  Clock,
  Building,
  Phone,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';

export default function ContactUsPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Billenza Contact & Support Desk',
    url: 'https://billenza.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Billenza (Macenza)',
      image: 'https://billenza.com/billenza-app.jpg',
      telephone: '+91-94146-60123',
      email: 'info@macenza.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony',
        addressLocality: 'Ajmer',
        addressRegion: 'Rajasthan',
        postalCode: '305001',
        addressCountry: 'IN',
      },
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
          <Breadcrumbs items={[{ label: 'Contact & Support' }]} />
          <div className="badge-chip lime">
            <Building size={13} /> DEDICATED ASSISTANCE
          </div>
          <h1>Get in Touch with the Billenza Team</h1>
          <p className="sub-hero-desc">
            Have questions about GST calculations, subscription billing, multi-currency exports, or API integrations? We&rsquo;re here to assist you Monday through Saturday.
          </p>
        </div>
      </section>

      {/* Contact Form & Information Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, marginBottom: 56 }}>
            {/* Interactive Form */}
            <div className="card-premium">
              <span className="eyebrow">SEND US A MESSAGE</span>
              <h2 style={{ fontSize: 24, fontWeight: 700, margin: '8px 0 16px' }}>
                How Can We Help You Today?
              </h2>

              {submitted ? (
                <div style={{ padding: '36px 20px', textAlign: 'center', background: '#f0fdf4', borderRadius: 16, border: '1px solid #bbf7d0', marginTop: 16 }}>
                  <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#166534', marginBottom: 8 }}>
                    Message Received Successfully!
                  </h3>
                  <p style={{ color: '#15803d', fontSize: 14, lineHeight: 1.6, maxWidth: 380, margin: '0 auto 20px' }}>
                    Thank you, {formState.name}. A customer success specialist will review your message and reply via email or phone within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="pill pill-ink"
                    style={{ fontSize: 13, height: 40 }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="calc-input"
                        style={{ fontSize: 15, padding: '10px 14px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="calc-input"
                        style={{ fontSize: 15, padding: '10px 14px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="calc-input"
                        style={{ fontSize: 15, padding: '10px 14px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                        Subject Category
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="calc-input"
                        style={{ fontSize: 15, padding: '10px 14px', cursor: 'pointer' }}
                      >
                        <option value="General Inquiry">General Product Inquiry</option>
                        <option value="Billing & Razorpay">Billing &amp; Subscription</option>
                        <option value="GST Calculation Question">GST Calculation &amp; Slabs</option>
                        <option value="Custom Enterprise Request">CA &amp; Enterprise Firm</option>
                        <option value="Technical Support">Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                      How can we assist you? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your question or requirement..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="calc-input"
                      style={{ fontSize: 15, padding: '12px 14px', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="pill pill-ink"
                    style={{ height: 48, justifyContent: 'center', fontWeight: 700, marginTop: 8 }}
                  >
                    {loading ? 'Submitting Inquiry...' : 'Submit Message'}
                    <span className="pill-arrow" style={{ width: 32, height: 32 }}>
                      <Send size={15} />
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Support Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card-premium" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ink)', color: 'var(--lime)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 4px' }}>Customer Support Desk</h3>
                    <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: '0 0 6px' }}>For billing, invoices, account setup &amp; inquiries:</p>
                    <a href="mailto:info@macenza.com" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 15 }}>
                      info@macenza.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-premium" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ink)', color: 'var(--lime)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 4px' }}>Phone Assistance</h3>
                    <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: '0 0 6px' }}>Direct phone helpline during working hours:</p>
                    <a href="tel:+919414660123" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 15 }}>
                      +91 94146 60123
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-premium" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ink)', color: 'var(--lime)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 4px' }}>Business Hours</h3>
                    <p style={{ fontSize: 13.5, color: 'var(--gray)', margin: '0 0 4px' }}>Monday through Saturday:</p>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 14 }}>
                      10:00 AM – 6:00 PM IST
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ink)', color: 'var(--lime)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 4px' }}>Registered Office</h3>
                    <p style={{ fontSize: 13, color: 'var(--gray)', margin: 0, lineHeight: 1.6 }}>
                      <strong>Shashank Shubham</strong> (Macenza / Billenza)<br />
                      PL NO 16, SIDDARTHA NAGAR,<br />
                      Mayo Link Rd, Dhola Bhata Colony,<br />
                      Ajmer, Rajasthan 305001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grievance Redressal Banner */}
          <div className="card-premium" style={{ background: 'var(--bone)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <ShieldCheck size={18} color="#16a34a" />
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                Statutory Grievance Redressal Officer
              </h3>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--gray)', lineHeight: 1.6, margin: 0 }}>
              Under the Information Technology Act, 2000 and rules made thereunder: <strong>Shashank Shubham</strong>, Grievance Officer, Macenza. Email: <a href="mailto:info@macenza.com" style={{ fontWeight: 700, color: 'var(--ink)' }}>info@macenza.com</a>. Address: PL NO 16, SIDDARTHA NAGAR, Mayo Link Rd, Dhola Bhata Colony, Ajmer, Rajasthan 305001, India. All grievances are acknowledged within 24 hours and addressed within 15 days.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
