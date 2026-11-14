'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  FileText,
  ShieldCheck,
  Globe2,
  Package,
  Clock,
  ArrowRight,
  Check,
  ChevronDown,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Receipt,
  Users,
  Search,
  Truck,
  HelpCircle,
  FileCheck,
  RefreshCw,
  Percent,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar';
import CheckoutModal from '@/components/CheckoutModal';
import BillFlowPipeline from '@/components/BillFlowPipeline';

interface FeatureItem {
  id: string;
  category: 'invoicing' | 'tax-engine' | 'compliance' | 'export' | 'inventory' | 'payments';
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  bullets: string[];
  gstRules: string;
  icon: React.ElementType;
}

const ALL_FEATURES: FeatureItem[] = [
  // 1. Statutory Invoicing
  {
    id: 'tax-invoices',
    category: 'invoicing',
    title: 'Statutory GST Tax Invoices',
    subtitle: 'Rule 46 & 49 Compliant Generation',
    badge: 'Core Engine',
    desc: 'Generate legally immutable tax invoices for B2B, B2C Large, and retail sales with zero manual formatting.',
    bullets: [
      '**Auto Place of Supply**: Identifies CGST + SGST vs. IGST from buyer GSTIN.',
      '**Atomic Numbering**: Continuous, non-repeating serials mandated by Section 31.',
      '**Dynamic UPI QR**: Auto-embeds scan-to-pay codes directly on invoice PDFs.',
    ],
    gstRules: 'Rule 46 & Section 31 Compliant',
    icon: FileText,
  },
  {
    id: 'credit-debit-notes',
    category: 'invoicing',
    title: 'Credit & Debit Notes (CDN)',
    subtitle: 'Section 34 Liability Adjustments',
    badge: 'Audit Ready',
    desc: 'Issue verified adjustment notes for sales returns, post-sale discounts, or supplementary price additions.',
    bullets: [
      '**Original Invoice Link**: Automatically binds credit notes to original invoice serials.',
      '**GSTR-1 Table 9B Sync**: Adjusts monthly output tax liability without manual entries.',
      '**Party Ledger Reversal**: One-click balance recalculation for supplier and buyer.',
    ],
    gstRules: 'Section 34 & GSTR-1 Table 9B Compliant',
    icon: Receipt,
  },
  {
    id: 'delivery-challans',
    category: 'invoicing',
    title: 'Delivery Challans & Proformas',
    subtitle: 'Rule 55 Non-Supply Movement',
    badge: 'Logistics',
    desc: 'Dispatch goods for job work, exhibitions, or trials without triggering a premature taxable event.',
    bullets: [
      '**Section 143 Job Work**: Auto-tracks 1-year and 3-year statutory return deadlines.',
      '**1-Click Tax Invoice**: Converts signed challans into final bills with one click.',
      '**Triplicate Set**: Mandated copies for consignee, transporter, and consignor.',
    ],
    gstRules: 'Rule 55 & Section 143 Compliant',
    icon: Truck,
  },

  // 2. Tax Calculation Engine
  {
    id: 'multi-rate-tax',
    category: 'tax-engine',
    title: 'Intelligent Tax Split Engine',
    subtitle: 'Zero Formula Mistakes',
    badge: 'Precision',
    desc: 'Automatic identification and calculation across intra-state and inter-state transactions.',
    bullets: [
      '**All Tax Slabs**: Full native support for 0%, 0.1%, 0.25%, 3%, 5%, 12%, 18%, 28% + Cess.',
      '**Rule 54 Rounding**: Rounds fractional paise to the nearest Rupee automatically.',
      '**Inclusive Tax Mode**: Reverse-computes base price and GST with 1-click toggle.',
    ],
    gstRules: 'Sections 7, 8, 9 & 15 of IGST/CGST Act',
    icon: Percent,
  },
  {
    id: 'hsn-sac-directory',
    category: 'tax-engine',
    title: 'HSN & SAC Code Radar',
    subtitle: '18,000+ Pre-Indexed Codes',
    badge: 'Automated',
    desc: 'Official CBIC commodity directory with auto-suggested tax rates and turnover threshold validation.',
    bullets: [
      '**Turnover Enforcement**: Automatically enforces 4-digit or 6/8-digit HSN codes.',
      '**Standard UQC Units**: Auto-maps PCS, KGS, MTR, NOS, and BOX to CBIC codes.',
      '**Rate Validation**: Immediate warning alerts if invalid tax rates are applied.',
    ],
    gstRules: 'Notification No. 78/2020-Central Tax',
    icon: Search,
  },

  // 3. Compliance & Filing
  {
    id: 'gstr1-json',
    category: 'compliance',
    title: 'GSTR-1 One-Click JSON Export',
    subtitle: 'Direct Upload Ready for GST Portal',
    badge: 'Zero Mismatch',
    desc: 'Export official schema-validated JSON files ready for direct upload into the GST Offline Tool or Portal.',
    bullets: [
      '**Table-by-Table Mapping**: Auto-compiles Tables 4A, 4B, 6B, 7, 8, 9B, 11, and 12.',
      '**Table 12 HSN Summary**: Quantity, UQC, and tax breakdowns formatted automatically.',
      '**Zero Portal Errors**: Validated against GSTN JSON Schema v1.4 prior to export.',
    ],
    gstRules: 'GSTN JSON Schema v1.4 Validated',
    icon: Layers,
  },
  {
    id: 'gstr3b-summary',
    category: 'compliance',
    title: 'GSTR-3B Tax & ITC Compiler',
    subtitle: 'Monthly Payable Calculation',
    badge: 'Monthly Filing',
    desc: 'Auto-computes outward taxable supplies and eligible Input Tax Credit for stress-free monthly filing.',
    bullets: [
      '**Table 3.1 Outward Liability**: Aggregates taxable values, IGST, CGST, SGST, and Cess.',
      '**Table 4 Eligible ITC**: Automatically classifies available and ineligible credit.',
      '**Reverse Charge Ledger**: Inward supplies liable to RCM compiled separately.',
    ],
    gstRules: 'Section 39 & Rule 61(5) Compliant',
    icon: FileCheck,
  },
  {
    id: 'eway-bills',
    category: 'compliance',
    title: 'Instant e-Way Bill Generator',
    subtitle: 'NIC Portal Compliant JSON',
    badge: 'High Speed',
    desc: 'Generate valid e-Way bills for consignments exceeding ₹50,000 with instant distance calculation.',
    bullets: [
      '**Pin-to-Pin Distance**: Automatically calculates statutory transit distance.',
      '**Multi-Vehicle Transit**: Supports transshipment logging and vehicle updates.',
      '**Bulk JSON Dispatch**: Export high-volume consignment files in seconds.',
    ],
    gstRules: 'Rule 138 of CGST Rules Compliant',
    icon: Truck,
  },
  {
    id: 'gstr2b-reconciliation',
    category: 'compliance',
    title: 'GSTR-2B Input Tax Credit Radar',
    subtitle: 'Never Claim Ineligible ITC',
    badge: 'Cash Protection',
    desc: 'Reconcile purchase registers against official GSTR-2B statements to catch missing vendor uploads.',
    bullets: [
      '**Vendor Compliance Audit**: Flags suppliers who collected tax but failed to file.',
      '**Rule 36(4) Safeguard**: Blocks excess ITC claims before filing to prevent tax notices.',
      '**1-Click WhatsApp Follow-ups**: Send vendor reminder statements directly.',
    ],
    gstRules: 'Section 16(2)(aa) & Rule 36(4) Compliant',
    icon: RefreshCw,
  },

  // 4. Global Export Billing
  {
    id: 'multi-currency-exports',
    category: 'export',
    title: 'Multi-Currency Export Suite',
    subtitle: '22 Foreign Currencies Supported',
    badge: 'Global Trade',
    desc: 'Bill international clients in foreign currencies with automatic statutory INR conversion notes.',
    bullets: [
      '**22 Global Currencies**: USD, EUR, GBP, AED, SGD, CAD, AUD, JPY and more.',
      '**Statutory INR Note**: Converts values using CBIC / RBI notified exchange rates.',
      '**LUT & Bond Compliance**: Auto-prints ARN and port codes on export tax invoices.',
    ],
    gstRules: 'Section 16 of IGST Act & Rule 96A Compliant',
    icon: Globe2,
  },

  // 5. Inventory & Stock Control
  {
    id: 'inventory-radar',
    category: 'inventory',
    title: 'Live Inventory & Stock Radar',
    subtitle: 'Real-Time Stock Depletion',
    badge: 'Real-Time Sync',
    desc: 'Maintain live stock levels that deduct on invoice creation and replenish on credit notes.',
    bullets: [
      '**Low-Stock Alerts**: Automated warning triggers prevent accidental overselling.',
      '**Batch & Expiry Dates**: Track manufacturing and shelf-life expiration on items.',
      '**Margin Analysis**: Real-time gross profit breakdown per line item.',
    ],
    gstRules: 'Section 35(1) Books of Accounts Compliant',
    icon: Package,
  },

  // 6. Payments, Ledger & TDS/TCS
  {
    id: 'party-ledgers-aging',
    category: 'payments',
    title: 'Party Ledgers & Aging Analysis',
    subtitle: 'Faster Debt Collections',
    badge: 'Collections',
    desc: 'Track every rupee owed with 30/60/90-day aging buckets and automated WhatsApp payment nudges.',
    bullets: [
      '**Dynamic UPI QR on PDF**: Direct PhonePe, GPay, and Paytm scan-to-pay QR.',
      '**WhatsApp Nudges**: Send 1-click invoice links and friendly balance reminders.',
      '**MSME 45-Day Radar**: Section 43B(h) compliance tracking to avoid tax penalties.',
    ],
    gstRules: 'MSME Section 43B(h) Ready',
    icon: Clock,
  },
  {
    id: 'tds-tcs-engine',
    category: 'payments',
    title: 'TDS & TCS Audit Automation',
    subtitle: 'High-Value ₹50L+ Compliance',
    badge: 'Tax Audit Ready',
    desc: 'Automates statutory TDS (0.1%) and TCS (0.1%) deductions on qualifying high-value transactions.',
    bullets: [
      '**Turnover Threshold Monitor**: Alerts when cumulative client receipts cross ₹50 Lakhs.',
      '**Section 194Q & 206C(1H)**: Automatic tax withholding on goods purchase and sale.',
      '**Quarterly Statements**: Pre-formatted data ready for Form 26Q and 27EQ filing.',
    ],
    gstRules: 'Income Tax Sec 194Q & 206C(1H) Compliant',
    icon: ShieldCheck,
  },
  {
    id: 'ca-collaboration',
    category: 'payments',
    title: 'CA Portal & Role Permissions',
    subtitle: 'Multi-User Audit Access',
    badge: 'Audit Portal',
    desc: 'Dedicated read-only portal for chartered accountants with an immutable activity audit log.',
    bullets: [
      '**Role Security**: Admin, Billing Operator, Accountant, and CA Auditor permissions.',
      '**Immutable Audit Trail**: Records user timestamp and IP address on all modifications.',
      '**Multi-GSTIN Console**: Switch between multiple companies and branches seamlessly.',
    ],
    gstRules: 'Rule 56 CGST Records & Accounts Compliant',
    icon: Users,
  },
];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_monthly');
  const [scrolled, setScrolled] = useState<boolean>(false);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.billenza.com';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        const target = ALL_FEATURES.find((item) => item.id === hash);
        if (target) {
          setSelectedCategory('all');
          setSearchQuery('');
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 150);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openCheckout = (plan: 'pro_monthly' | 'pro_yearly') => {
    setCheckoutPlan(plan);
    setCheckoutOpen(true);
  };

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'invoicing', label: 'Tax Invoicing' },
    { id: 'tax-engine', label: 'Tax Engine' },
    { id: 'compliance', label: 'GSTR & e-Way' },
    { id: 'export', label: 'Export Suite' },
    { id: 'inventory', label: 'Stock Radar' },
    { id: 'payments', label: 'Ledgers & Audit' },
  ];

  const filteredFeatures = ALL_FEATURES.filter((f) => {
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.gstRules.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.bullets.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              defaultActive={1}
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

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '20px auto 40px',
              maxWidth: 900,
              textAlign: 'center',
            }}
          >
            COMPLETE GST BILLING SOLUTION
          </h1>

          {/* ===================== ANIMATED DATA FLOW PIPELINE ===================== */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 auto 48px' }}>
            <BillFlowPipeline />
          </div>

          {/* Quick Metrics Badges with Generous Spacing */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 14,
              margin: '40px auto 36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999, background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '0.86rem', fontWeight: 600 }}>
              <CheckCircle2 size={16} color="#22c55e" />
              100% CBIC Compliant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999, background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '0.86rem', fontWeight: 600 }}>
              <Zap size={16} color="#dcf986" fill="#1d1d1d" />
              Instant e-Way Bill JSON
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999, background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '0.86rem', fontWeight: 600 }}>
              <Globe2 size={16} color="#0284c7" />
              22 Global Currencies
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999, background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '0.86rem', fontWeight: 600 }}>
              <ShieldCheck size={16} color="#4f46e5" />
              GSTR-1, 3B &amp; 2B Radar
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: 24,
              padding: '16px 20px',
              border: '1px solid var(--line)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              textAlign: 'left',
              maxWidth: 780,
              margin: '0 auto',
            }}
          >
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f8fafc', padding: '10px 18px', borderRadius: 14, border: '1px solid #e2e8f0' }}>
              <Search size={18} color="#64748b" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features (e.g. e-Way bill, GSTR-1, LUT, HSN, TDS)..."
                style={{
                  width: '100%',
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.94rem',
                  color: 'var(--ink)',
                  fontFamily: 'inherit',
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: '#64748b' }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: 999,
                      border: active ? '1px solid var(--ink)' : '1px solid #e2e8f0',
                      background: active ? 'var(--ink)' : '#fff',
                      color: active ? '#fff' : 'var(--gray)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES GRID WITH SPACIOUS LAYOUT ===================== */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
            <div style={{ fontSize: '0.94rem', color: 'var(--gray)', fontWeight: 500 }}>
              Showing <strong>{filteredFeatures.length}</strong> of {ALL_FEATURES.length} GST capabilities
            </div>
            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                style={{ background: 'none', border: 'none', color: '#0284c7', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Reset Filters
              </button>
            )}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: 24,
            }}
          >
            {filteredFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  id={feat.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    scrollMarginTop: 120,
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: 24,
                    padding: '34px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 22px 45px -15px rgba(0,0,0,0.1)',
                    borderColor: 'rgba(0,0,0,0.16)',
                  }}
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 14,
                          background: 'var(--bone)',
                          border: '1px solid var(--line-soft)',
                          display: 'grid',
                          placeItems: 'center',
                          color: 'var(--ink)',
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          padding: '4px 11px',
                          borderRadius: 999,
                          background: '#dcf986',
                          color: 'var(--ink)',
                        }}
                      >
                        {feat.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 style={{ fontSize: '1.24rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)', letterSpacing: '-0.015em' }}>
                      {feat.title}
                    </h3>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', marginBottom: 16 }}>
                      {feat.subtitle}
                    </div>

                    {/* Punchy 1-Sentence Summary */}
                    <p style={{ fontSize: '0.92rem', color: 'var(--gray)', lineHeight: 1.55, margin: '0 0 22px' }}>
                      {feat.desc}
                    </p>

                    {/* Clean Bullet Points with Bold Main Takeaways */}
                    <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 18, marginBottom: 22 }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {feat.bullets.map((b, i) => {
                          const parts = b.split('**:');
                          const hasBold = parts.length > 1;
                          const boldText = hasBold ? parts[0].replace('**', '') : '';
                          const restText = hasBold ? parts[1] : b;

                          return (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.85rem', color: '#334155', lineHeight: 1.45 }}>
                              <Check size={15} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                              <span>
                                {hasBold && <strong style={{ color: 'var(--ink)' }}>{boldText}:</strong>}
                                {restText}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Statutory Rule Pill */}
                  <div
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: 12,
                      padding: '9px 14px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                    }}
                  >
                    <ShieldCheck size={14} color="#0284c7" />
                    <span>{feat.gstRules}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredFeatures.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fafafa', borderRadius: 24, border: '1px dashed var(--line)' }}>
              <HelpCircle size={44} color="#94a3b8" style={{ margin: '0 auto 14px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px' }}>No matching features found</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.92rem', margin: '0 0 20px' }}>
                Try searching for different terms like &ldquo;invoicing&rdquo;, &ldquo;e-Way&rdquo;, &ldquo;export&rdquo;, or &ldquo;ITC&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="pill pill-ink"
                style={{ padding: '10px 22px', fontSize: '0.88rem' }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===================== BENCHMARK COMPARISON TABLE ===================== */}
      <section style={{ padding: '90px 0', background: 'var(--bone)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 48px' }}>
            <span className="eyebrow">EFFICIENCY BENCHMARK</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '12px 0 14px' }}>
              Why Indian Enterprises Choose Billenza
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '17px', lineHeight: 1.55 }}>
              Modern cloud architecture designed specifically for Indian GST without bulky multi-step manual reconciliations.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1px solid var(--line)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', width: '100%' }}>
              <div style={{ minWidth: 640 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    padding: '18px 26px',
                    background: '#1d1d1d',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                  }}
                >
                  <div>Capability</div>
                  <div style={{ textAlign: 'center', color: '#dcf986' }}>Billenza</div>
                  <div style={{ textAlign: 'center' }}>Legacy ERP / Tally</div>
                  <div style={{ textAlign: 'center' }}>Excel Spreadsheets</div>
                </div>

            {[
              { feat: 'Statutory CGST/SGST/IGST/Cess Auto-Split', b: 'Instant (100% accurate)', l: 'Manual setup / complex', e: 'Error-prone formulas' },
              { feat: 'Direct GSTR-1 JSON Schema Export', b: '1-Click validated JSON', l: 'Requires XML/JSON utility', e: 'Not supported' },
              { feat: 'Instant e-Way Bill JSON Generation', b: 'Built-in 1-Click', l: 'Add-on module required', e: 'Manual data entry' },
              { feat: '22 Foreign Currencies with Statutory Notes', b: 'Built-in natively', l: 'Manual exchange math', e: 'Manual' },
              { feat: 'Automated GSTR-2B vs Register ITC Radar', b: 'Automatic detection', l: 'Third-party plug-in', e: 'Extremely tedious' },
              { feat: 'Dynamic UPI QR Codes on Invoice PDF', b: 'Embedded live QR', l: 'Requires custom code', e: 'Static screenshot only' },
              { feat: 'WhatsApp 1-Click Payment Follow-up', b: 'Direct 1-Click send', l: 'Manual copy & paste', e: 'Not available' },
              { feat: 'Dedicated Read-Only CA Audit Access', b: 'Secure cloud link', l: 'Physical backup sharing', e: 'File emailing' },
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  padding: '18px 26px',
                  borderBottom: idx === 7 ? 'none' : '1px solid var(--line-soft)',
                  fontSize: '0.86rem',
                  alignItems: 'center',
                  background: idx % 2 === 0 ? '#fff' : '#fafafa',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{row.feat}</div>
                <div style={{ textAlign: 'center', fontWeight: 700, color: '#16a34a' }}>
                  {row.b}
                </div>
                <div style={{ textAlign: 'center', color: '#64748b' }}>{row.l}</div>
                <div style={{ textAlign: 'center', color: '#94a3b8' }}>{row.e}</div>
              </div>
            ))}
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
              READY TO MODERNIZE YOUR BILLING?
            </span>

            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Start Issuing Flawless GST Invoices Today
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 34px' }}>
              Full tax compliance, instant e-Way bills, and multi-currency invoicing for Indian SMEs. Starting at just ₹499/month.
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
