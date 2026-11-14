'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  FileText,
  Truck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Check,
  Globe2,
  RefreshCw,
  QrCode,
  Share2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar';
import CheckoutModal from '@/components/CheckoutModal';
import WorkflowSimulator from '@/components/WorkflowSimulator';

export default function HowItWorksPage() {
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Quick Interactive GST Split Mini-Demo state
  const [sampleAmount, setSampleAmount] = useState<number>(50000);
  const [isInterState, setIsInterState] = useState<boolean>(false);
  const [gstRate, setGstRate] = useState<number>(18);

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

  // Calculations for interactive mini-demo
  const taxAmount = (sampleAmount * gstRate) / 100;
  const totalAmount = sampleAmount + taxAmount;
  const halfTax = taxAmount / 2;

  const STEPS_DETAIL = [
    {
      num: '01',
      badge: '15 Seconds',
      title: 'Setup Your Business & GSTIN',
      desc: 'Enter your 15-digit GSTIN. Billenza instantly configures your business profile, state code, and legal prefix series.',
      points: [
        { label: 'Auto State Code', text: 'Identifies home state & Place of Supply (POS) rules automatically.' },
        { label: 'Atomic Numbering', text: 'Sets up continuous Rule 46 sequential prefix series.' },
        { label: 'Payment Binding', text: 'Embeds your bank NEFT/RTGS and UPI QR credentials.' },
      ],
      icon: Building2,
      preview: {
        tag: 'GSTIN DISCOVERY',
        title: 'Your Business Name',
        meta: 'GSTIN: Your GSTIN • Your State (Code)',
        submeta: 'Invoice Series: INV/2026/001 → Auto Generated • UPI: yourname@bank',
      },
    },
    {
      num: '02',
      badge: '20 Seconds',
      title: 'Add Items & Generate Invoice',
      desc: 'Select or scan items. Billenza determines buyer state, auto-fills HSN codes, and splits taxes with zero formula errors.',
      points: [
        { label: 'HSN Auto-Suggest', text: '18,000+ official CBIC codes with mandatory digit rules.' },
        { label: 'Symmetrical Tax Split', text: 'CGST + SGST (intra-state) or IGST (inter-state) calculated live.' },
        { label: 'Dynamic UPI QR', text: 'Embeds scan-to-pay QR for PhonePe, GPay, and Paytm.' },
      ],
      icon: FileText,
      preview: {
        tag: 'TAX CALCULATION',
        title: 'Cloud Architecture & SaaS Consulting',
        meta: 'SAC: 998313 • Base: ₹85,000 • IGST 18%: ₹15,300',
        submeta: 'Total Payable: ₹1,00,300 • Dynamic QR Embedded',
      },
    },
    {
      num: '03',
      badge: '10 Seconds',
      title: 'Generate e-Way Bill & Dispatch',
      desc: 'Consignments exceeding ₹50,000 trigger automated e-Way bill JSON generation with instant pin-to-pin transit distance calculations.',
      points: [
        { label: 'Pincode Distance', text: 'Calculates statutory transit distance between pickup & delivery.' },
        { label: 'Part-A & Part-B', text: 'Official NIC portal schema ready for transporter verification.' },
        { label: 'Multi-Vehicle Transit', text: 'Supports vehicle updating and transshipment tracking.' },
      ],
      icon: Truck,
      preview: {
        tag: 'NIC LOGISTICS',
        title: 'e-Way Bill #2410-9821-4320',
        meta: 'Pin 305001 → Pin 110001 (412 KM Auto-Calculated)',
        submeta: 'Vehicle: DL01-AB-XXXX • 2 Days Validity • Active',
      },
    },
    {
      num: '04',
      badge: '1-Click',
      title: 'Export GSTR-1, 3B & ITC Radar',
      desc: 'Monthly filing takes one click. Schema-validated JSON export ready for direct upload to the GST Offline Tool or government portal.',
      points: [
        { label: 'GSTR-1 JSON Schema', text: 'Pre-compiled Tables 4A, 7, 9B, and Table 12 HSN summaries.' },
        { label: 'GSTR-3B Tax Net', text: 'Outward tax payable and eligible input tax credit aggregated.' },
        { label: 'GSTR-2B ITC Radar', text: 'Catches missing supplier uploads before you file.' },
      ],
      icon: Layers,
      preview: {
        tag: 'STATUTORY FILING',
        title: 'GSTR-1 JSON Schema v1.4 Ready',
        meta: 'Table 4A & Table 12 HSN Compliant • 0 Mismatches',
        submeta: 'GSTR-2B Radar: 100% Eligible ITC Reconciled',
      },
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
              defaultActive={2}
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
                  href: '/#faq',
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
                    href: '/pricing',
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
                  href="/pricing"
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

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 1040, margin: '0 auto', padding: '0 24px' }}>
          <h1
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '20px auto 24px',
              maxWidth: 880,
            }}
          >
            How Billenza Works.
          </h1>

          <p
            style={{
              fontSize: '19px',
              color: 'var(--gray)',
              lineHeight: 1.6,
              maxWidth: 620,
              margin: '0 auto 50px',
            }}
          >
            From entering your GSTIN to generating portal-ready GSTR-1 JSONs — four simple, automated steps with zero friction.
          </p>

          {/* ===================== INTERACTIVE WORKFLOW SIMULATOR ===================== */}
          <div style={{ margin: '0 auto 60px' }}>
            <WorkflowSimulator />
          </div>
        </div>
      </section>

      {/* ===================== 4-STEP DETAILED CARDS WITH GENEROUS SPACING ===================== */}
      <section style={{ padding: '50px 0 100px', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
            <span className="eyebrow">STEP-BY-STEP BREAKDOWN</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '12px 0 14px', letterSpacing: '-0.02em' }}>
              Built For Zero Setup Time
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '17px', lineHeight: 1.55 }}>
              No complex ERP installations or hours of manual configuration. Everything is pre-tuned for Indian tax compliance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {STEPS_DETAIL.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={step.num}
                  className="subpage-step-grid"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: 28,
                    padding: '36px 30px',
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1.15fr 1fr' : '1fr 1.15fr',
                    gap: 36,
                    alignItems: 'center',
                    boxShadow: '0 15px 35px -15px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Step Text Info */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          padding: '4px 12px',
                          borderRadius: 999,
                          background: '#dcf986',
                          color: 'var(--ink)',
                        }}
                      >
                        STEP {step.num}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                        {step.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                      {step.title}
                    </h3>

                    <p style={{ fontSize: '0.96rem', color: 'var(--gray)', lineHeight: 1.6, margin: '0 0 24px' }}>
                      {step.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {step.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem' }}>
                          <CheckCircle2 size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ color: '#334155', lineHeight: 1.45 }}>
                            <strong style={{ color: 'var(--ink)' }}>{pt.label}:</strong> {pt.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Preview Mockup Card */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        background: 'linear-gradient(145deg, #181920 0%, #0d0e12 100%)',
                        borderRadius: 22,
                        padding: '28px',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                        <span style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', color: '#dcf986' }}>
                          {step.preview.tag}
                        </span>
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: 'rgba(255,255,255,0.08)',
                            display: 'grid',
                            placeItems: 'center',
                            color: '#dcf986',
                          }}
                        >
                          <Icon size={18} />
                        </div>
                      </div>

                      <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                        {step.preview.title}
                      </div>

                      <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)', marginBottom: 14, lineHeight: 1.5 }}>
                        {step.preview.meta}
                      </div>

                      <div
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: 12,
                          padding: '10px 14px',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontSize: '0.8rem',
                          color: '#4ade80',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <ShieldCheck size={16} />
                        <span>{step.preview.submeta}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE TEST DRIVE MINI-CALCULATOR ===================== */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
            <span className="eyebrow">INTERACTIVE PREVIEW</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, margin: '12px 0 12px', letterSpacing: '-0.02em' }}>
              See How Billenza Calculates Taxes Instantly
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
              Test the real-time Place of Supply tax split engine with custom amounts.
            </p>
          </div>

          <div
            className="subpage-preview-grid"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 24,
              padding: '32px 24px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 36,
              alignItems: 'center',
            }}
          >
            {/* Input Controls */}
            <div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  Taxable Amount (₹)
                </label>
                <input
                  type="number"
                  value={sampleAmount}
                  onChange={(e) => setSampleAmount(Math.max(0, Number(e.target.value)))}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '1px solid #cbd5e1',
                    background: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  Transaction Type (Place of Supply)
                </label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => setIsInterState(false)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: !isInterState ? '2px solid var(--ink)' : '1px solid #cbd5e1',
                      background: !isInterState ? 'var(--ink)' : '#fff',
                      color: !isInterState ? '#fff' : 'var(--gray)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Intra-State (Same State)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInterState(true)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: isInterState ? '2px solid var(--ink)' : '1px solid #cbd5e1',
                      background: isInterState ? 'var(--ink)' : '#fff',
                      color: isInterState ? '#fff' : 'var(--gray)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Inter-State (Other State)
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  GST Slab Rate
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[5, 12, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setGstRate(rate)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: gstRate === rate ? '2px solid var(--ink)' : '1px solid #cbd5e1',
                        background: gstRate === rate ? 'var(--ink)' : '#fff',
                        color: gstRate === rate ? '#fff' : 'var(--ink)',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div
              style={{
                background: '#1d1d1d',
                color: '#fff',
                borderRadius: 20,
                padding: '28px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', color: '#dcf986' }}>
                  LIVE BREAKDOWN
                </span>
                <span style={{ background: 'rgba(220, 249, 134, 0.15)', color: '#dcf986', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: 6 }}>
                  {isInterState ? 'IGST APPLIED' : 'CGST + SGST SPLIT'}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#94a3b8', marginBottom: 8 }}>
                <span>Taxable Value:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>₹{sampleAmount.toLocaleString()}</span>
              </div>

              {!isInterState ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#94a3b8', marginBottom: 6 }}>
                    <span>CGST @ {(gstRate / 2).toFixed(1)}%:</span>
                    <span style={{ color: '#dcf986', fontWeight: 600 }}>+₹{halfTax.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#94a3b8', marginBottom: 14 }}>
                    <span>SGST @ {(gstRate / 2).toFixed(1)}%:</span>
                    <span style={{ color: '#dcf986', fontWeight: 600 }}>+₹{halfTax.toLocaleString()}</span>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#94a3b8', marginBottom: 14 }}>
                  <span>IGST @ {gstRate}%:</span>
                  <span style={{ color: '#dcf986', fontWeight: 600 }}>+₹{taxAmount.toLocaleString()}</span>
                </div>
              )}

              <div style={{ borderTop: '1px dashed rgba(255,255,255,0.2)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Total Invoice Amount</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#4ade80' }}>
                  <QrCode size={18} />
                  <span>QR Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section style={{ padding: '100px 0', textAlign: 'center' }}>
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
              READY TO ISSUE YOUR FIRST INVOICE?
            </span>

            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Experience the 60-Second Workflow
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 34px' }}>
              Join thousands of Indian businesses generating flawless GST invoices and autonomous e-Way bills. Starting at ₹499/mo.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
              <button
                type="button"
                onClick={() => openCheckout('pro_monthly')}
                className="pill pill-lime pill-lg"
                style={{ fontWeight: 700, cursor: 'pointer' }}
              >
                Get Started — ₹499/mo
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
      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand" style={{ marginBottom: 16 }}>
                <Image
                  src="/billenza-logo-white.webp"
                  alt="Billenza"
                  width={140}
                  height={45}
                  style={{ height: 38, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p>
                Precision GST Invoicing, GSTR-1/3B Returns, Inventory Radar, and
                Multi-Currency Financial Suite.
              </p>
              <div className="status-line">
                <span className="ndot live"></span>
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>

                        <div className="foot-col">
              <h4>Platform</h4>
              <Link href="/features">All GST Features</Link>
              <Link href="/features#tax-invoices">Tax Invoicing</Link>
              <Link href="/features#eway-bills">e-Way Bill Generator</Link>
              <Link href="/features#gstr1-json">GSTR-1 &amp; 3B Filing</Link>
              <Link href="/features#multi-currency-exports">Multi-Currency Suite</Link>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/#pricing">Pricing Plans</Link>
              <Link href="/#faq">Compliance &amp; Security</Link>
              <Link href="/contact">Contact &amp; Support</Link>
            </div>

            <div className="foot-col">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/open-source">Open Source Notices</Link>
              <Link href="/refund-policy">Cancellation &amp; Refunds</Link>
              <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
              <Link href="/contact">Grievance Redressal</Link>
            </div>
          </div>

          <div className="foot-base">
            <div>&copy; 2026 Macenza / Billenza. All rights reserved.</div>
            <div>Operated by Macenza &bull; Incorporating open-source components under the MIT License.</div>
          </div>
        </div>
      </footer>

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
