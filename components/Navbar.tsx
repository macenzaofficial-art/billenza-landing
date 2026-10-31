'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ArrowRight,
  FileText,
  ShieldCheck,
  Globe2,
  Package,
  Layers,
  Zap,
  Calculator,
  Building2,
  CheckCircle2,
  Scale,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenCheckout?: (plan?: 'pro_monthly' | 'pro_yearly') => void;
}

export default function Navbar({ onOpenCheckout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.billenza.com';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="site-header"
      id="top"
      style={{
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
      }}
    >
      <nav className="nav container">
        {/* Brand Logo */}
        <Link href="/" className="brand" aria-label="Billenza Home">
          <span className="brand-chip" aria-hidden="true">
            <Zap size={20} fill="#DCF986" stroke="#1D1D1D" />
          </span>
          <span className="brand-word">Billenza</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {/* Features Dropdown */}
          <div className="nav-item has-menu">
            <button
              className={`nav-link ${pathname?.startsWith('/features') ? 'font-bold text-black' : ''}`}
              type="button"
            >
              Features
              <ChevronDown size={14} className="chev" />
            </button>
            <div className="mega" style={{ minWidth: 320 }}>
              <Link href="/features/gst-invoicing">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FileText size={16} /> GST Tax Invoicing
                </span>
                <span className="mega-s">Automated CGST/SGST/IGST, QR codes &amp; atomic sequences</span>
              </Link>
              <Link href="/features/eway-bill">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={16} /> e-Way Bill Automation
                </span>
                <span className="mega-s">1-click NIC JSON export, Part A/B and vehicle validity</span>
              </Link>
              <Link href="/features/gstr-reports">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Layers size={16} /> GSTR-1 &amp; GSTR-3B Filing
                </span>
                <span className="mega-s">Zero-error GSTN returns &amp; GSTR-2B ITC reconciliation</span>
              </Link>
              <Link href="/features/multi-currency">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Globe2 size={16} /> Multi-Currency &amp; Exports
                </span>
                <span className="mega-s">22 currencies, statutory INR notes &amp; zero-rated LUT tracking</span>
              </Link>
              <Link href="/features/inventory">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Package size={16} /> Inventory Radar
                </span>
                <span className="mega-s">Live stock deduction, low-stock radar &amp; HSN units</span>
              </Link>
              <div style={{ padding: '8px 16px', borderTop: '1px solid var(--line-soft)', marginTop: 4 }}>
                <Link
                  href="/features"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  Explore All Capabilities <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="nav-item has-menu">
            <button
              className={`nav-link ${pathname?.startsWith('/solutions') ? 'font-bold text-black' : ''}`}
              type="button"
            >
              Solutions
              <ChevronDown size={14} className="chev" />
            </button>
            <div className="mega" style={{ minWidth: 290 }}>
              <Link href="/solutions/freelancers-exporters">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Globe2 size={16} /> Freelancers &amp; Exporters
                </span>
                <span className="mega-s">LUT zero-rated invoices &amp; cross-border client billing</span>
              </Link>
              <Link href="/solutions/retail-wholesale">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Package size={16} /> Retail &amp; Wholesale
                </span>
                <span className="mega-s">High-speed POS billing, thermal print &amp; stock sync</span>
              </Link>
              <Link href="/solutions/chartered-accountants">
                <span className="mega-t" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Building2 size={16} /> Chartered Accountants
                </span>
                <span className="mega-s">Multi-client dashboards &amp; GSTN offline utility files</span>
              </Link>
            </div>
          </div>

          {/* Free Tools */}
          <Link
            href="/tools/gst-calculator"
            className={`nav-link ${pathname === '/tools/gst-calculator' ? 'font-bold text-black' : ''}`}
          >
            <Calculator size={15} style={{ marginRight: 2 }} />
            GST Calculator
          </Link>

          {/* Compare */}
          <Link
            href="/compare"
            className={`nav-link ${pathname === '/compare' ? 'font-bold text-black' : ''}`}
          >
            Compare
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={`nav-link ${pathname === '/pricing' ? 'font-bold text-black' : ''}`}
          >
            Pricing
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`nav-link ${pathname === '/about' ? 'font-bold text-black' : ''}`}
          >
            About
          </Link>
        </div>

        {/* Right CTA cluster */}
        <div className="nav-right">
          <a
            href={`${appUrl}?mode=login`}
            className="nav-link"
            style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)', padding: '6px 12px' }}
          >
            Sign In
          </a>

          {onOpenCheckout ? (
            <button
              onClick={() => onOpenCheckout('pro_monthly')}
              className="pill pill-ink nav-cta"
            >
              Get Started
              <span className="pill-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </button>
          ) : (
            <Link href="/pricing" className="pill pill-ink nav-cta">
              Get Started
              <span className="pill-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
          )}

          {/* Mobile hamburger button */}
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

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-sheet"
          >
            <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>
              Platform Features
            </div>
            <Link href="/features/gst-invoicing" onClick={() => setMobileMenuOpen(false)}>
              GST Invoicing Engine
            </Link>
            <Link href="/features/eway-bill" onClick={() => setMobileMenuOpen(false)}>
              e-Way Bill Automation
            </Link>
            <Link href="/features/gstr-reports" onClick={() => setMobileMenuOpen(false)}>
              GSTR-1 &amp; GSTR-3B Return Files
            </Link>
            <Link href="/features/multi-currency" onClick={() => setMobileMenuOpen(false)}>
              Multi-Currency &amp; LUT Exports
            </Link>
            <Link href="/features/inventory" onClick={() => setMobileMenuOpen(false)}>
              Inventory Radar
            </Link>
            <Link href="/features" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--ink)', fontWeight: 700 }}>
              All Features &rarr;
            </Link>

            <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 14 }}>
              Solutions
            </div>
            <Link href="/solutions/freelancers-exporters" onClick={() => setMobileMenuOpen(false)}>
              Freelancers &amp; Exporters
            </Link>
            <Link href="/solutions/retail-wholesale" onClick={() => setMobileMenuOpen(false)}>
              Retailers &amp; Wholesalers
            </Link>
            <Link href="/solutions/chartered-accountants" onClick={() => setMobileMenuOpen(false)}>
              Chartered Accountants
            </Link>

            <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 14 }}>
              Resources &amp; Pricing
            </div>
            <Link href="/tools/gst-calculator" onClick={() => setMobileMenuOpen(false)}>
              Free GST Calculator
            </Link>
            <Link href="/compare" onClick={() => setMobileMenuOpen(false)}>
              Compare Alternatives
            </Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
              Pricing &amp; Plans
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Billenza
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact &amp; Support
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16, marginBottom: 8 }}>
              <a
                href={`${appUrl}?mode=login`}
                className="pill"
                style={{ justifyContent: 'center', border: '1px solid var(--line)', background: '#fff', color: 'var(--ink)' }}
              >
                Sign In to Account
              </a>
              {onOpenCheckout ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckout('pro_monthly');
                  }}
                  className="pill pill-ink"
                  style={{ justifyContent: 'center' }}
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </button>
              ) : (
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pill pill-ink"
                  style={{ justifyContent: 'center' }}
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
