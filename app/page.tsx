"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CheckoutModal from "../components/CheckoutModal";
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
  BarChart3,
  Sparkles,
  HelpCircle,
  Building2,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function BillenzaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_monthly');
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.billenza.com";

  const openCheckout = (plan: 'pro_monthly' | 'pro_yearly') => {
    setCheckoutPlan(plan);
    setCheckoutOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      {/* ===================== HEADER ===================== */}
      <header className="site-header" id="top">
        <nav className="nav container">
          <a href="#top" className="brand" aria-label="Billenza home">
            <span className="brand-word">Billenza</span>
          </a>

          <div className="nav-links">
            <div className="nav-item has-menu">
              <button className="nav-link" type="button">
                Platform
                <ChevronDown size={14} className="chev" />
              </button>
              <div className="mega">
                <a href="#features">
                  <span className="mega-t">GST Tax Invoicing</span>
                  <span className="mega-s">Tax invoices, delivery challans & credit notes</span>
                </a>
                <a href="#features">
                  <span className="mega-t">GSTR Returns & 2B</span>
                  <span className="mega-s">One-click GSTR-1/3B filing JSONs</span>
                </a>
                <a href="#features">
                  <span className="mega-t">Inventory Radar</span>
                  <span className="mega-s">Real-time stock deduction & alert triggers</span>
                </a>
                <a href="#features">
                  <span className="mega-t">Multi-Currency Suite</span>
                  <span className="mega-s">Export invoicing across 22 global currencies</span>
                </a>
              </div>
            </div>
            <a className="nav-link" href="#features">
              Features
            </a>
            <a className="nav-link" href="#how-it-works">
              How It Works
            </a>
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </div>

          <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={`${appUrl}?mode=login`}
              className="nav-link"
              style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--ink)", padding: "6px 12px" }}
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => openCheckout('pro_monthly')}
              className="pill pill-ink nav-cta"
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Get Started
              <span className="pill-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile menu sheet */}
        <div className={`mobile-sheet ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>
            Platform Features
          </a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing & Plans
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
            <a
              href={`${appUrl}?mode=login`}
              className="pill"
              style={{ justifyContent: "center", border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openCheckout('pro_monthly');
              }}
              className="pill pill-ink"
              style={{ justifyContent: "center", cursor: "pointer", border: "none" }}
            >
              Get Started Free
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-grid" aria-hidden="true"></div>

        <div className="container hero-content">
          <span className="eyebrow">
            PRECISION GST INVOICING &bull; COMPLIANCE SUITE
          </span>

          <h1>Issue Flawless GST Invoices With Ironclad Precision.</h1>

          <p className="hero-sub">
            India&apos;s most dependable financial billing platform for SMEs,
            exporters, and CAs. Tax invoices, GSTR-1 / 3B filing JSONs, e-Way bills,
            and 22-currency billing — zero bloat.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="pill pill-ink pill-lg">
              Get Started — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </a>
            <a href={appUrl} className="pill pill-ghost pill-lg">
              Launch App
              <span className="pill-arrow gray">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* Hero Console Mockup with real app image */}
          <div className="console-wrap">
            <div className="glow glow-lime"></div>
            <div className="glow glow-ink"></div>

            <div className="console">
              <div className="console-head">
                <div className="console-id">
                  <div className="id-chip">
                    <Zap size={22} fill="#1D1D1D" stroke="#DCF986" />
                  </div>
                  <div>
                    <div className="id-eyebrow">BILLENZA FINANCIAL CLOUD</div>
                    <h3>GST Workspace Console</h3>
                  </div>
                </div>

                <div className="node" style={{ color: "var(--ink)", fontWeight: 600 }}>
                  <span className="ndot live"></span>
                  LIVE AUDIT ENGINE
                </div>
              </div>

              {/* App Image Centerpiece */}
              <div className="console-preview-body">
                <Image
                  src="/billenza-app.jpg"
                  alt="Billenza Invoicing Console Dashboard"
                  width={1920}
                  height={960}
                  priority
                  className="app-screenshot"
                />

                {/* Floating Badges */}
                <div className="float-pill-bottom">
                  <Sparkles size={16} color="#DCF986" />
                  ₹14,80,240 Invoiced &bull; 0 Errors
                </div>
              </div>

              {/* Status Nodes */}
              <div className="console-status">
                <div className="node">
                  <span className="ndot live" style={{ color: "var(--ink)", backgroundColor: "var(--lime)" }}></span>
                  GSTN API: Connected
                </div>
                <div className="node">
                  <span className="ndot lime"></span>
                  e-Way Bill Engine: Active
                </div>
                <div className="node">
                  <span className="ndot live"></span>
                  GSTR-1 & 3B: Auto-Sync
                </div>
                <div className="node">
                  <span className="ndot live"></span>
                  99.99% Cloud Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="trust">
        <div className="container">
          <div className="trust-eyebrow">
            BUILT FOR INDIAN SMES, EXPORTERS, MANUFACTURERS & CA FIRMS
          </div>
          <div className="logos">
            <div className="logo-badge">
              <ShieldCheck size={16} color="#22c55e" />
              GSTN Compliant & Verified
            </div>
            <div className="logo-badge">
              <Globe2 size={16} color="#1d1d1d" />
              22 Global Currencies
            </div>
            <div className="logo-badge">
              <Building2 size={16} color="#1d1d1d" />
              Multi-GSTIN Architecture
            </div>
            <div className="logo-badge">
              <FileText size={16} color="#1d1d1d" />
              Instant e-Way Bill JSON
            </div>
            <div className="logo-badge">
              <BarChart3 size={16} color="#1d1d1d" />
              Form 26Q & 27EQ Ready
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES GRID ===================== */}
      <section className="features" id="features">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">ENTERPRISE INVOICING SUITE</span>
            <h2>Engineered For Flawless Tax Accuracy</h2>
            <p>
              Say goodbye to Excel formulas and bulky legacy software. Billenza
              automates your tax calculations, reconciliations, and filings from
              one clean control center.
            </p>
          </div>

          <div className="feature-grid">
            {/* Feature 1 */}
            <div className="feat">
              <div className="feat-ic">
                <FileText size={24} />
              </div>
              <h3>Tax Invoicing & e-Way Bills</h3>
              <p>
                Issue Tax Invoices, Bills of Supply, Proformas, and Delivery
                Challans with automatic CGST, SGST, IGST, UTGST, and cess calculations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feat">
              <div className="feat-ic">
                <Layers size={24} />
              </div>
              <h3>Automated GSTR Returns</h3>
              <p>
                Generate official GSTR-1 and GSTR-3B filing JSONs with one click.
                Reconcile your inward supply purchases against GSTR-2B effortlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feat">
              <div className="feat-ic">
                <Globe2 size={24} />
              </div>
              <h3>22 Global Currencies</h3>
              <p>
                Bill foreign clients in USD, EUR, GBP, AED, SGD, and 17 other currencies
                with automatic INR conversion notes and statutory LUT compliance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feat">
              <div className="feat-ic">
                <Package size={24} />
              </div>
              <h3>Inventory & Low-Stock Radar</h3>
              <p>
                Track product stock in real time. Set minimum threshold alerts and
                deduct inventory automatically when an invoice is finalized.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feat">
              <div className="feat-ic">
                <Clock size={24} />
              </div>
              <h3>Party Outstanding & Ledger</h3>
              <p>
                Comprehensive aging analysis for every debtor. Send polite payment
                reminders with dynamic UPI QR codes directly via WhatsApp or email.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feat">
              <div className="feat-ic">
                <ShieldCheck size={24} />
              </div>
              <h3>TDS & TCS Audit Reports</h3>
              <p>
                Full compliance with Section 194Q and 206C. Export Form 26Q and
                Form 27EQ statements ready for quarterly income tax submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== METRICS BAND ===================== */}
      <section className="metrics-band">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric">
              <div className="m-num">₹500Cr+</div>
              <div className="m-lab">Total Invoiced Volume</div>
            </div>
            <div className="metric">
              <div className="m-num">99.99%</div>
              <div className="m-lab">Tax Calculation Accuracy</div>
            </div>
            <div className="metric">
              <div className="m-num">&lt;20s</div>
              <div className="m-lab">Average Time to Issue Bill</div>
            </div>
            <div className="metric">
              <div className="m-num">22</div>
              <div className="m-lab">Global Currencies Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="how" id="how-it-works">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">SEAMLESS WORKFLOW</span>
            <h2>From Zero to First Invoice in 60 Seconds</h2>
            <p>
              Get started without long onboarding calls or complicated setups.
              Everything is pre-configured for Indian businesses.
            </p>
          </div>

          <div className="how-rows">
            {/* Step 1 */}
            <div className="how-row">
              <div className="how-copy">
                <span className="step-no">STEP 01</span>
                <h3>Setup Your Business Profile</h3>
                <p>
                  Add your legal business name, GSTIN, PAN, bank details, and
                  upload your signature and company logo. You can manage multiple
                  business profiles under one single account.
                </p>
                <ul className="ticks">
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Automatic state code detection from GSTIN
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Custom invoice numbering series per firm
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Bank account & UPI QR code embedding
                  </li>
                </ul>
              </div>

              <div className="how-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--gray)" }}>PROFILE INITIALIZATION</span>
                  <span style={{ background: "var(--lime)", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>VERIFIED</span>
                </div>
                <div style={{ background: "var(--card)", padding: 16, borderRadius: 12, border: "1px solid var(--line-soft)" }}>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>Macenza Technologies Pvt Ltd</div>
                  <div style={{ fontSize: 12, color: "var(--gray)", marginTop: 4 }}>GSTIN: 27AABCA1234F1Z5 &bull; Rajasthan (27)</div>
                  <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                    <span style={{ background: "#fff", border: "1px solid var(--line)", padding: "4px 8px", borderRadius: 6, fontSize: 11 }}>HDFC Bank</span>
                    <span style={{ background: "#fff", border: "1px solid var(--line)", padding: "4px 8px", borderRadius: 6, fontSize: 11 }}>UPI ID: macenza@hdfc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="how-row rev">
              <div className="how-copy">
                <span className="step-no">STEP 02</span>
                <h3>Add Items & Issue GST Bill</h3>
                <p>
                  Select existing inventory or add new products. Billenza automatically
                  detects whether to apply CGST + SGST (intra-state) or IGST (inter-state)
                  based on the place of supply.
                </p>
                <ul className="ticks">
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Auto-fill HSN codes and statutory tax rates
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Dynamic UPI QR code for instant client payments
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    One-click WhatsApp and PDF invoice sharing
                  </li>
                </ul>
              </div>

              <div className="how-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--gray)" }}>INVOICE GENERATION</span>
                  <span style={{ background: "var(--lime)", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>TAX INVOICE</span>
                </div>
                <div style={{ background: "var(--card)", padding: 16, borderRadius: 12, border: "1px solid var(--line-soft)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600 }}>
                    <span>Cloud Architecture Consulting</span>
                    <span>₹85,000.00</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--gray)", marginTop: 6 }}>
                    <span>IGST @ 18%</span>
                    <span>₹15,300.00</span>
                  </div>
                  <div style={{ borderTop: "1px dashed var(--line)", marginTop: 12, paddingTop: 10, display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700 }}>
                    <span>Total Due</span>
                    <span style={{ color: "var(--ink)" }}>₹1,00,300.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="how-row">
              <div className="how-copy">
                <span className="step-no">STEP 03</span>
                <h3>One-Click GSTR & e-Way Exports</h3>
                <p>
                  At tax filing time, click one button to generate portal-compliant
                  JSON files for GSTR-1 and GSTR-3B. Directly upload them to the GSTN portal
                  without manual re-entry.
                </p>
                <ul className="ticks">
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Zero validation errors on GSTN portal upload
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    GSTR-2B purchase reconciliation matrix
                  </li>
                  <li>
                    <span className="tick-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Instant bulk Excel & CSV exports for CAs
                  </li>
                </ul>
              </div>

              <div className="how-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--gray)" }}>GSTN EXPORT READY</span>
                  <span style={{ background: "var(--lime)", color: "var(--ink)", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>VALIDATED</span>
                </div>
                <div style={{ background: "var(--card)", padding: 16, borderRadius: 12, border: "1px solid var(--line-soft)" }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>GSTR-1 JSON Package (B2B, B2CL, EXP, HSN)</div>
                  <div style={{ fontSize: 12, color: "var(--gray)", marginTop: 4 }}>Period: October 2026 &bull; 142 Documents</div>
                  <div style={{ marginTop: 14 }}>
                    <span style={{ background: "var(--ink)", color: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, display: "inline-block" }}>
                      Download Official JSON
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h2>Simple, Predictable Plans For Every Business</h2>
            <p>
              No hidden fees, no per-invoice penalties. Get unlimited invoicing
              and full GST compliance right out of the box.
            </p>
          </div>

          <div className="plans">
            {/* Plan 1: Monthly */}
            <div className="plan">
              <div className="plan-name">MONTHLY PRO</div>
              <div className="plan-price">
                ₹499
                <span> / month</span>
              </div>
              <div className="plan-desc">
                Ideal for growing startups and independent businesses needing fast, reliable GST billing.
              </div>

              <ul className="ticks">
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Unlimited GST Invoices & Delivery Challans
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  GSTR-1 & GSTR-3B JSON exports
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Real-time Inventory & Stock Radar
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Up to 2 Business Profiles
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Standard Email & Chat Support
                </li>
              </ul>

              <button
                type="button"
                onClick={() => openCheckout('pro_monthly')}
                className="pill pill-ink plan-cta"
                style={{ width: "100%", justifyContent: "center", cursor: "pointer", border: "none" }}
              >
                Subscribe Monthly — ₹499
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            {/* Plan 2: Annual Pro (Featured) */}
            <div className="plan featured">
              <span className="pop">SAVE ~17% YEARLY</span>
              <div className="plan-name">ANNUAL PRO</div>
              <div className="plan-price">
                ₹4,999
                <span> / year</span>
              </div>
              <div className="plan-desc">
                Everything in Monthly plus multi-GSTIN management, priority CA support, and cloud backup.
              </div>

              <ul className="ticks">
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <strong>Everything in Monthly Pro</strong>
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <strong>Unlimited Business Profiles & GSTINs</strong>
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Multi-Currency Invoicing (22 Currencies)
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom Numbering Series per business
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  GSTR-2B Automated Purchase Matching
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Priority CA & Compliance Assistance
                </li>
              </ul>

              <button
                type="button"
                onClick={() => openCheckout('pro_yearly')}
                className="pill pill-lime plan-cta"
                style={{ width: "100%", justifyContent: "center", fontWeight: 700, cursor: "pointer", border: "none" }}
              >
                Get Annual Pro — ₹4,999
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            {/* Plan 3: Custom / Enterprise */}
            <div className="plan">
              <div className="plan-name">CUSTOM ENTERPRISE</div>
              <div className="plan-price">Custom</div>
              <div className="plan-desc">
                For large enterprises, multi-branch corporations, and accounting agencies requiring custom workflows.
              </div>

              <ul className="ticks">
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Multi-Branch & Team Roles / Permissions
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom ERP & Accounting Integrations
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Dedicated CA & Account Manager
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom Branded Print Templates
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom SLA & 99.99% Uptime Guarantee
                </li>
              </ul>

              <a
                href="mailto:enterprise@billenza.com?subject=Enterprise%20Inquiry%20-%20Billenza"
                className="pill pill-ghost plan-cta"
              >
                Contact Sales
                <span className="pill-arrow gray">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions about billing, compliance, or account security?
              We&apos;ve got answers.
            </p>
          </div>

          <div className="faq-list">
            {[
              {
                q: "Is Billenza fully compliant with current Indian GST laws?",
                a: "Yes. Billenza is built from the ground up to follow Indian GST rules. It automatically splits intra-state (CGST + SGST) and inter-state (IGST) taxes, handles UTGST, e-Way bills, RCM (Reverse Charge), and exports official JSON files for GSTR-1 and GSTR-3B that upload directly to the GSTN portal without errors.",
              },
              {
                q: "Can I bill international clients in foreign currencies?",
                a: "Yes. Billenza includes multi-currency invoicing across 22 global currencies (USD, EUR, GBP, AED, SGD, CAD, etc.). It automatically includes mandatory LUT (Letter of Undertaking) export notes and INR conversion values required by the GST department.",
              },
              {
                q: "Can I manage multiple businesses under one account?",
                a: "Yes! On our Annual Pro plan, you can create and manage unlimited business profiles with distinct GSTINs, logos, bank details, and custom invoice numbering series.",
              },
              {
                q: "How does payment and subscription authorization work?",
                a: "When you subscribe via Razorpay using UPI, Card, or NetBanking, your account is immediately authorized. You can log in directly at app.billenza.com and begin generating invoices.",
              },
              {
                q: "Can I export my data for my Chartered Accountant?",
                a: "Absolutely. You can export complete GSTR JSONs, CSV sales summaries, client ledger balance sheets, and inventory reports in one click to share with your CA.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="faq-item"
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </div>
                {openFaq === idx && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div className="hero-grid sm" aria-hidden="true"></div>
            <h2>Ready To Streamline Your GST Billing?</h2>
            <p>
              Join thousands of Indian businesses generating compliant invoices
              and filing GSTR returns with ironclad confidence.
            </p>
            <button
              type="button"
              onClick={() => openCheckout('pro_monthly')}
              id="footer-cta-btn"
              className="pill pill-lime pill-lg"
              style={{ cursor: "pointer", border: "none" }}
            >
              Get Started Now — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand">
                <span className="brand-chip" aria-hidden="true">
                  <Zap size={20} fill="#DCF986" stroke="#1D1D1D" />
                </span>
                <span className="brand-word light" style={{ color: "#fff" }}>Billenza</span>
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
              <a href="#features">Tax Invoicing</a>
              <a href="#features">e-Way Bill Generator</a>
              <a href="#features">GSTR-1 & 3B Filing</a>
              <a href="#features">Inventory Radar</a>
              <a href="#features">Multi-Currency Suite</a>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <a href="#top">About Billenza</a>
              <a href="#pricing">Pricing Plans</a>
              <a href="#faq">Compliance & Security</a>
              <a href="mailto:support@billenza.com">Support & CA Desk</a>
            </div>

            <div className="foot-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">GST Compliance Guarantee</a>
              <a href="#">RBI Payment Safety</a>
            </div>
          </div>

          <div className="foot-base">
            <div>&copy; 2026 Billenza Inc. All rights reserved.</div>
            <div>Precision-engineered for Indian businesses &amp; global trade.</div>
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
