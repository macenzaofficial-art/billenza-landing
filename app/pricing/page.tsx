'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  HelpCircle,
  Clock,
  ChevronDown,
  Percent,
  CheckCircle2,
  Building2,
  FileSpreadsheet,
  RefreshCw,
  Coins,
  Calculator,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar';
import CheckoutModal from '@/components/CheckoutModal';

export default function PricingPage() {
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_yearly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Interactive ROI Calculator State
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(150);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.billenza.com';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCheckout = (plan: 'pro_monthly' | 'pro_yearly') => {
    setCheckoutPlan(plan);
    setCheckoutOpen(true);
  };

  // ROI calculations
  const hoursSaved = Math.round((monthlyInvoices * 8) / 60); // ~8 mins saved per invoice on manual tax splitting, e-Way, ledger
  const caCostSaved = Math.round(monthlyInvoices * 28); // Average manual data entry cost avoided

  const FAQS = [
    {
      q: 'Are there any hidden charges or per-invoice fees?',
      a: 'Never. Both Monthly and Annual Pro plans include 100% unlimited GST tax invoices, delivery challans, and credit/debit notes with zero penalty caps.',
    },
    {
      q: 'Can I switch between Monthly and Yearly billing anytime?',
      a: 'Yes. You can upgrade from Monthly Pro to Annual Pro at any point. Unused balance is automatically prorated towards your new plan.',
    },
    {
      q: 'Does Billenza generate valid GSTR-1 and GSTR-3B JSON files?',
      a: 'Yes. All return files are validated against the official GSTN Schema v1.4, ready for direct upload to the GST Portal or GST Offline Tool.',
    },
    {
      q: 'How does the free trial work?',
      a: 'When you sign up, you get full access to explore the console, add test products, configure your GSTIN, and issue real tax invoices immediately.',
    },
    {
      q: 'What payment methods do you support?',
      a: 'We accept all major UPI apps (Google Pay, PhonePe, Paytm, BHIM), Indian & international credit/debit cards, Net Banking, and corporate cards via Razorpay.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1d] overflow-x-hidden">
      {/* ===================== FLOATING HEADER ===================== */}
      <header
        className="site-header"
        id="top"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          border: 'none',
        }}
      >
        <nav
          className="nav container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Link
            href="/"
            className="brand"
            aria-label="Billenza home"
            style={{ flexShrink: 0, textDecoration: 'none' }}
          >
            <Image
              src="/billenza-logo.webp"
              alt="Billenza"
              width={140}
              height={45}
              priority
              style={{ height: 38, width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Main Navigation Pill - Shifted towards the left side */}
          <div
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              transform: 'translateX(-32px)',
            }}
          >
            <LiquidNavbar
              tone="light"
              defaultActive={3}
              sound={false}
              items={[
                {
                  label: 'Home',
                  icon: NimbusIcons.home,
                  fx: 'glow',
                  href: '/',
                },
                {
                  label: 'Features',
                  icon: NimbusIcons.globe,
                  fx: 'spin',
                  href: '/features',
                },
                {
                  label: 'How It Works',
                  icon: NimbusIcons.plane,
                  fx: 'plane',
                  href: '/how-it-works',
                },
                {
                  label: 'Pricing',
                  icon: NimbusIcons.drop,
                  fx: 'drop',
                  href: '/pricing',
                },
                {
                  label: 'FAQ',
                  icon: NimbusIcons.user,
                  fx: 'wave',
                  href: '#faq',
                },
              ]}
            />
          </div>

          {/* Right-aligned cluster: Glass Auth Pill (Sign In & Get Started) + Hamburger */}
          <div
            className="nav-right"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginLeft: 'auto',
              flexShrink: 0,
            }}
          >
            <div className="auth-links">
              <LiquidNavbar
                tone="light"
                defaultActive={1}
                sound={false}
                items={[
                  {
                    label: 'Sign In',
                    icon: NimbusIcons.user,
                    fx: 'wave',
                    href: `${appUrl}?mode=login`,
                  },
                  {
                    label: 'Get Started',
                    icon: NimbusIcons.plane,
                    fx: 'plane',
                    href: '#pricing-cards',
                  },
                ]}
              />
            </div>

            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 7 : 0,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 12 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -7 : 0,
                }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu sheet with Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-sheet"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/features" onClick={() => setMobileMenuOpen(false)}>
                Platform Features
              </Link>
              <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing & Plans
              </Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                <a
                  href={`${appUrl}?mode=login`}
                  className="pill"
                  style={{ justifyContent: 'center', border: '1px solid var(--line)', background: '#fff', color: 'var(--ink)' }}
                >
                  Sign In
                </a>
                <Link
                  href="/#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pill pill-ink"
                  style={{ justifyContent: 'center' }}
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section style={{ padding: '145px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid sm" aria-hidden="true" style={{ opacity: 0.5 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <h1
            style={{
              fontSize: 'clamp(28px, 4.2vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
              margin: '20px auto 0',
              maxWidth: 860,
              textAlign: 'center',
            }}
          >
            Create invoices, manage taxes, and grow your business — all in one place.
          </h1>
        </div>
      </section>

      {/* ===================== PRICING CARDS WITH ANIMATIONS ===================== */}
      <section id="pricing-cards" style={{ padding: '20px 0 100px' }}>
        <div className="container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: 28,
              alignItems: 'stretch',
            }}
          >
            {/* Card 1: Starter / Monthly Pro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, boxShadow: '0 25px 50px -15px rgba(0,0,0,0.1)' }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 28,
                padding: '40px 34px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', color: '#64748b', textTransform: 'uppercase' }}>
                    FLEXIBLE PLAN
                  </span>
                  <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.74rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>
                    Pay As You Go
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)' }}>
                  Monthly Pro
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', margin: '0 0 24px', lineHeight: 1.5 }}>
                  Ideal for independent businesses, freelancers, and growing trade operations.
                </p>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em' }}>
                      ₹499
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--gray)', fontWeight: 500 }}>
                      / month
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 4 }}>
                    Billed monthly &bull; Cancel anytime with 1 click
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 24, marginBottom: 28 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    What&apos;s Included:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      'Unlimited GST Tax Invoices & Challans',
                      'Direct GSTR-1 & 3B JSON exports',
                      'e-Way bill JSON generation (Rule 138)',
                      'Dynamic UPI QR code on invoices',
                      'Real-time inventory & stock deduction',
                      'Up to 2 Business Profiles / GSTINs',
                      'Standard Email & WhatsApp Support',
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: '#334155' }}>
                        <Check size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => openCheckout('pro_monthly')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="pill pill-ink"
                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '14px', fontSize: '0.94rem' }}
              >
                Subscribe Monthly — ₹499
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            </motion.div>

            {/* Card 2: Featured Annual Pro (High Highlight) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 30px 60px -20px rgba(0,0,0,0.22)' }}
              style={{
                background: '#ffffff',
                border: '2px solid #1d1d1d',
                borderRadius: 28,
                padding: '40px 34px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 45px -15px rgba(0,0,0,0.12)',
                position: 'relative',
              }}
            >
              {/* Floating Popular Tag */}
              <div
                style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#dcf986',
                  color: 'var(--ink)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '5px 16px',
                  borderRadius: 999,
                  boxShadow: '0 4px 12px rgba(220, 249, 134, 0.5)',
                }}
              >
                MOST POPULAR &bull; SAVE 17%
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', color: '#16a34a', textTransform: 'uppercase' }}>
                    ENTERPRISE GRADE
                  </span>
                  <span style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#16a34a', fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                    2 Months Free
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)' }}>
                  Annual Pro
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', margin: '0 0 24px', lineHeight: 1.5 }}>
                  The gold standard for Indian SMEs, manufacturers, exporters, and multi-branch firms.
                </p>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em' }}>
                      ₹4,999
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--gray)', fontWeight: 500 }}>
                      / year
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600, marginTop: 4 }}>
                    Effective ₹416/mo &bull; Full year of uninterrupted compliance
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 24, marginBottom: 28 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Everything in Monthly Pro, Plus:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      'Unlimited Business Profiles & Multi-GSTIN',
                      'Multi-Currency Invoicing (22 Currencies)',
                      'GSTR-2B Automated ITC Purchase Radar',
                      'Party Ledgers with WhatsApp Payment Links',
                      'TDS (Sec 194Q) & TCS (Sec 206C) Audit',
                      'Dedicated Read-Only CA Auditor Portal',
                      'Priority Support & Annual Tax Consultation',
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: '#1d1d1d', fontWeight: 600 }}>
                        <Check size={16} color="#16a34a" strokeWidth={3} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => openCheckout('pro_yearly')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pill pill-lime"
                style={{ width: '100%', justifyContent: 'center', fontWeight: 800, cursor: 'pointer', padding: '14px', fontSize: '0.96rem', border: 'none' }}
              >
                Get Annual Pro — ₹4,999
                <span className="pill-arrow" style={{ background: '#1d1d1d', color: '#dcf986' }}>
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            </motion.div>

            {/* Card 3: CA & Multi-Entity Custom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: '0 25px 50px -15px rgba(0,0,0,0.1)' }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 28,
                padding: '40px 34px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', color: '#64748b', textTransform: 'uppercase' }}>
                    LARGE FIRMS &amp; CAS
                  </span>
                  <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.74rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>
                    Custom Volume
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)' }}>
                  CA Firm &amp; Enterprise
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', margin: '0 0 24px', lineHeight: 1.5 }}>
                  For Chartered Accountant practitioners, audit firms, and multi-branch distribution houses.
                </p>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em' }}>
                      Custom
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 4 }}>
                    Tailored multi-client seat licensing &bull; Dedicated SLA
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 24, marginBottom: 28 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Enterprise Highlights:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      'Bulk Client Management Console for CAs',
                      'Custom ERP / Tally XML migration hooks',
                      'Custom sub-domain & white-label bills',
                      'Dedicated Account Manager & Phone SLA',
                      'On-premise / Private Cloud backup',
                      'Signed BAA & Enterprise Security Audit',
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: '#334155' }}>
                        <Check size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className="pill pill-ghost"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.94rem' }}
              >
                Contact Enterprise Team
                <span className="pill-arrow gray">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== ANIMATED ROI & SAVINGS CALCULATOR ===================== */}
      <section style={{ padding: '80px 0', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 48px' }}>
            <span className="eyebrow">INTERACTIVE ROI CALCULATOR</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '12px 0 14px' }}>
              Calculate Your Monthly Time &amp; Cost Savings
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '17px', lineHeight: 1.55 }}>
              See how much manual reconciliation time and accounting labor Billenza eliminates for your team.
            </p>
          </div>

          <div
            className="subpage-roi-grid"
            style={{
              background: '#ffffff',
              borderRadius: 28,
              border: '1px solid var(--line)',
              padding: '36px 28px',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 36,
              alignItems: 'center',
            }}
          >
            {/* Slider Controls */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--ink)' }}>
                  How many invoices do you issue monthly?
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ink)' }}>
                  {monthlyInvoices.toLocaleString()} Bills
                </span>
              </div>

              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: 8,
                  borderRadius: 4,
                  accentColor: '#1d1d1d',
                  cursor: 'pointer',
                  marginBottom: 16,
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b', marginBottom: 28 }}>
                <span>20 Bills (Startup)</span>
                <span>250 Bills (Growing SME)</span>
                <span>1,000+ Bills (Wholesale)</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.86rem', color: '#475569' }}>
                  <CheckCircle2 size={16} color="#22c55e" />
                  <span>Eliminates manual CGST/SGST/IGST tax calculation formula mistakes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.86rem', color: '#475569' }}>
                  <CheckCircle2 size={16} color="#22c55e" />
                  <span>Zero-delay e-Way bills generated directly with distance auto-discovery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.86rem', color: '#475569' }}>
                  <CheckCircle2 size={16} color="#22c55e" />
                  <span>One-click GSTR-1 JSON export without third-party Excel utility bugs</span>
                </div>
              </div>
            </div>

            {/* Results Callout */}
            <div
              style={{
                background: '#1d1d1d',
                color: '#ffffff',
                borderRadius: 22,
                padding: '34px 28px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#dcf986', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
                ESTIMATED MONTHLY SAVINGS
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.92rem', color: '#94a3b8' }}>Manual Labor Saved:</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  ~{hoursSaved} Hours / Mo
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                <span style={{ fontSize: '0.92rem', color: '#94a3b8' }}>Reconciliation Savings:</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dcf986' }}>
                  ₹{(caCostSaved).toLocaleString()} / Mo
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(220, 249, 134, 0.12)',
                  border: '1px solid rgba(220, 249, 134, 0.25)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  fontSize: '0.82rem',
                  color: '#dcf986',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Zap size={16} />
                <span>ROI: Pays for itself within the first 4 invoices issued.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section id="faq" style={{ padding: '90px 0' }}>
        <div className="container" style={{ maxWidth: 840, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, margin: '12px 0 12px' }}>
              Everything You Need to Know
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
              Straightforward answers about our pricing, subscriptions, and GST compliance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    borderRadius: 18,
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.2s',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                    }}
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#64748b', display: 'grid', placeItems: 'center' }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 24px 20px',
                            color: 'var(--gray)',
                            fontSize: '0.94rem',
                            lineHeight: 1.6,
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section style={{ padding: '80px 0 110px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 840, margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              background: '#1d1d1d',
              color: '#ffffff',
              borderRadius: 32,
              padding: '56px 40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -20px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(220, 249, 134, 0.15)',
                color: '#dcf986',
                border: '1px solid rgba(220, 249, 134, 0.3)',
                padding: '6px 16px',
                borderRadius: 999,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              START IN 60 SECONDS
            </span>

            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Modernize Your Billing Today
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 34px' }}>
              Experience zero calculation mistakes, instant e-Way bills, and effortless GSTR filing. Starting at ₹499/mo.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
              <button
                type="button"
                onClick={() => openCheckout('pro_yearly')}
                className="pill pill-lime pill-lg"
                style={{ fontWeight: 700, cursor: 'pointer' }}
              >
                Get Started — ₹4,999/yr
                <span className="pill-arrow" style={{ background: '#1d1d1d', color: '#dcf986' }}>
                  <ArrowRight size={18} />
                </span>
              </button>

              <a
                href={appUrl}
                className="pill pill-ghost pill-lg"
                style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                Launch App
                <span className="pill-arrow gray" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <Footer />

      {/* Embedded Razorpay & Supabase Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        initialPlan={checkoutPlan}
        appUrl={appUrl}
      />
    </div>
  );
}
