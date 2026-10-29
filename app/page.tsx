"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FileText,
  ShieldCheck,
  Globe2,
  Package,
  Clock,
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Layers,
  BarChart3,
  Sparkles,
  Building2,
  Zap,
} from "lucide-react";

export default function BillenzaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [consoleTilt, setConsoleTilt] = useState({ x: 0, y: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const [counts, setCounts] = useState({
    volume: 0,
    accuracy: 90.0,
    speed: 60,
    currencies: 0,
  });

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubscribe = (planTier: string) => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.billenza.com";
    const cycle = billingCycle;
    window.location.href = `${appUrl}/signup?plan=${planTier}&billing=${cycle}`;
  };

  // Track window scroll progress & header sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for animated numeric counters in metrics band
  useEffect(() => {
    const metricsSection = document.getElementById("metrics-section");
    if (!metricsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Smooth ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCounts({
                volume: Math.floor(easeOut * 500),
                accuracy: Number((90 + easeOut * 9.99).toFixed(2)),
                speed: Math.max(20, Math.floor(60 - easeOut * 40)),
                currencies: Math.floor(easeOut * 22),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(metricsSection);
    return () => observer.disconnect();
  }, [hasCounted]);

  // Mouse tilt handlers for the hero console mockup
  const handleMouseMoveConsole = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;
    setConsoleTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeaveConsole = () => {
    setConsoleTilt({ x: 0, y: 0 });
  };

  // Mouse spotlight for feature cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Trust badges dataset for the infinite marquee
  const trustBadges = [
    { icon: <ShieldCheck size={16} color="#22c55e" />, text: "GSTN Compliant & Verified" },
    { icon: <Globe2 size={16} color="#1d1d1d" />, text: "22 Global Currencies" },
    { icon: <Building2 size={16} color="#1d1d1d" />, text: "Multi-GSTIN Architecture" },
    { icon: <FileText size={16} color="#1d1d1d" />, text: "Instant e-Way Bill JSON" },
    { icon: <BarChart3 size={16} color="#1d1d1d" />, text: "Form 26Q & 27EQ Ready" },
    { icon: <Zap size={16} color="#22c55e" />, text: "99.99% Calculation SLA" },
    { icon: <Layers size={16} color="#1d1d1d" />, text: "GSTR-2B Auto-Reconciliation" },
    { icon: <Clock size={16} color="#1d1d1d" />, text: "Instant WhatsApp Invoicing" },
  ];

  const ringCircumference = 2 * Math.PI * 22; // ~138.23

  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      {/* Top Scroll Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ===================== HEADER ===================== */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`} id="top">
        <nav className="nav container">
          <a href="#top" className="brand" aria-label="Billenza home">
            <span className="brand-chip" aria-hidden="true">
              <Zap size={20} fill="#DCF986" stroke="#1D1D1D" />
            </span>
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

          <div className="nav-right">
            <a
              href="https://app.billenza.com"
              className="pill pill-ink nav-cta"
            >
              Launch App
              <span className="pill-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </a>
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
          <a
            href="https://app.billenza.com"
            className="pill pill-ink"
            style={{ justifyContent: "center", marginTop: 10 }}
          >
            Launch Billenza App
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-grid" aria-hidden="true"></div>

        <div className="container hero-content">
          <div className="reveal in-view">
            <span className="eyebrow-badge">
              <Zap size={14} fill="#1D1D1D" stroke="#1D1D1D" />
              PRECISION GST INVOICING &bull; COMPLIANCE SUITE
            </span>
          </div>

          <h1 className="reveal in-view stagger-1 hero-headline-shimmer">
            Issue Flawless GST Invoices With Ironclad Precision.
          </h1>

          <p className="hero-sub reveal in-view stagger-2">
            India&apos;s most dependable financial billing platform for SMEs,
            exporters, and CAs. Tax invoices, GSTR-1 / 3B filing JSONs, e-Way bills,
            and 22-currency billing — zero bloat.
          </p>

          <div className="hero-actions reveal in-view stagger-3">
            <a href="#pricing" className="pill pill-ink pill-lg">
              Get Started — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </a>
            <a href="#features" className="pill pill-ghost pill-lg">
              Explore Features
              <span className="pill-arrow gray">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* Hero Console Mockup with 3D tilt & scanline */}
          <div
            className="console-wrap reveal-scale in-view stagger-4"
            onMouseMove={handleMouseMoveConsole}
            onMouseLeave={handleMouseLeaveConsole}
          >
            <div className="glow glow-lime"></div>
            <div className="glow glow-ink"></div>

            <div
              className="console"
              style={{
                transform: `rotateX(${consoleTilt.x}deg) rotateY(${consoleTilt.y}deg)`,
              }}
            >
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

              {/* App Image Centerpiece with animated scanline and floating pills */}
              <div className="console-preview-body">
                <div className="console-scanline" aria-hidden="true" />

                <Image
                  src="/billenza-app.jpg"
                  alt="Billenza Invoicing Console Dashboard"
                  width={1920}
                  height={960}
                  priority
                  className="app-screenshot"
                />

                {/* Floating Badge Top Right */}
                <div className="float-pill-top">
                  <ShieldCheck size={16} color="#22c55e" />
                  GSTN API Verified &bull; Realtime Sync
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="float-pill-bottom">
                  <Sparkles size={16} color="#DCF986" />
                  ₹14,80,240 Invoiced &bull; 0 Errors
                </div>
              </div>

              {/* Status Nodes */}
              <div className="console-status">
                <div className="node">
                  <span className="ndot live"></span>
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

      {/* ===================== TRUST STRIP (INFINITE MARQUEE) ===================== */}
      <section className="trust reveal">
        <div className="container">
          <div className="trust-eyebrow">
            BUILT FOR INDIAN SMES, EXPORTERS, MANUFACTURERS & CA FIRMS
          </div>
        </div>

        <div className="marquee-container" aria-label="Partner and compliance badges">
          <div className="marquee-track">
            {/* Primary Track */}
            {trustBadges.map((badge, i) => (
              <div key={`badge-1-${i}`} className="logo-badge">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
            {/* Duplicate Track for Seamless Loop */}
            {trustBadges.map((badge, i) => (
              <div key={`badge-2-${i}`} className="logo-badge" aria-hidden="true">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES GRID ===================== */}
      <section className="features" id="features">
        <div className="container">
          <div className="sec-head reveal">
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
            <div
              className="feat reveal stagger-1"
              onMouseMove={handleCardMouseMove}
            >
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
            <div
              className="feat reveal stagger-2"
              onMouseMove={handleCardMouseMove}
            >
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
            <div
              className="feat reveal stagger-3"
              onMouseMove={handleCardMouseMove}
            >
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
            <div
              className="feat reveal stagger-4"
              onMouseMove={handleCardMouseMove}
            >
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
            <div
              className="feat reveal stagger-5"
              onMouseMove={handleCardMouseMove}
            >
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
            <div
              className="feat reveal stagger-6"
              onMouseMove={handleCardMouseMove}
            >
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

      {/* ===================== METRICS BAND (ANIMATED COUNTERS) ===================== */}
      <section className="metrics-band reveal" id="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric">
              <div className="m-num">₹{counts.volume}Cr+</div>
              <div className="m-lab">Total Invoiced Volume</div>
            </div>
            <div className="metric">
              <div className="m-num">{counts.accuracy.toFixed(2)}%</div>
              <div className="m-lab">Tax Calculation Accuracy</div>
            </div>
            <div className="metric">
              <div className="m-num">&lt;{counts.speed}s</div>
              <div className="m-lab">Average Time to Issue Bill</div>
            </div>
            <div className="metric">
              <div className="m-num">{counts.currencies}</div>
              <div className="m-lab">Global Currencies Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="how" id="how-it-works">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">SEAMLESS WORKFLOW</span>
            <h2>From Zero to First Invoice in 60 Seconds</h2>
            <p>
              Get started without long onboarding calls or complicated setups.
              Everything is pre-configured for Indian businesses.
            </p>
          </div>

          <div className="how-rows">
            {/* Step 1 */}
            <div className="how-row reveal stagger-1">
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
                  <span style={{ background: "var(--lime)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>VERIFIED</span>
                </div>
                <div style={{ background: "var(--card)", padding: 18, borderRadius: 14, border: "1px solid var(--line-soft)" }}>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>Macenza Technologies Pvt Ltd</div>
                  <div style={{ fontSize: 12, color: "var(--gray)", marginTop: 4 }}>GSTIN: 27AABCA1234F1Z5 &bull; Rajasthan (27)</div>
                  <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: "#fff", border: "1px solid var(--line)", padding: "5px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>HDFC Bank &bull; A/C 5020008819</span>
                    <span style={{ background: "#fff", border: "1px solid var(--line)", padding: "5px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600, color: "#22c55e" }}>UPI: macenza@hdfc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="how-row rev reveal stagger-2">
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
                  <span style={{ background: "var(--lime)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>TAX INVOICE</span>
                </div>
                <div style={{ background: "var(--card)", padding: 18, borderRadius: 14, border: "1px solid var(--line-soft)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600 }}>
                    <span>Cloud Architecture Consulting</span>
                    <span>₹85,000.00</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--gray)", marginTop: 8 }}>
                    <span>IGST @ 18% (Inter-State Supply)</span>
                    <span style={{ fontWeight: 600, color: "var(--ink)" }}>₹15,300.00</span>
                  </div>
                  <div style={{ borderTop: "1px dashed var(--line)", marginTop: 14, paddingTop: 12, display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700 }}>
                    <span>Total Amount Due</span>
                    <span style={{ color: "var(--ink)", background: "var(--lime)", padding: "2px 8px", borderRadius: 6 }}>₹1,00,300.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="how-row reveal stagger-3">
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
                  <span style={{ background: "#22c55e", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>PORTAL VALIDATED</span>
                </div>
                <div style={{ background: "var(--card)", padding: 18, borderRadius: 14, border: "1px solid var(--line-soft)" }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>GSTR-1 JSON Package (B2B, B2CL, EXP, HSN)</div>
                  <div style={{ fontSize: 12, color: "var(--gray)", marginTop: 4 }}>Period: October 2026 &bull; 142 Documents</div>
                  <div style={{ marginTop: 16 }}>
                    <span className="pill pill-ink" style={{ fontSize: 12, padding: "8px 16px" }}>
                      Download Official JSON
                      <ArrowRight size={14} />
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
          <div className="sec-head reveal">
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h2>Simple, Predictable Plans For Every Business</h2>
            <p>
              No hidden fees, no per-invoice penalties. Get unlimited invoicing
              and full GST compliance right out of the box.
            </p>
          </div>

          {/* Interactive Billing Cycle Switch Toggle */}
          <div className="pricing-switch-wrap reveal">
            <div className="pricing-toggle">
              <button
                type="button"
                className={`toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                className={`toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
                onClick={() => setBillingCycle("yearly")}
              >
                Annual Billing
              </button>
            </div>
            <span className="save-badge">SAVE ~17% YEARLY</span>
          </div>

          <div className="plans">
            {/* Plan 1: Monthly Pro */}
            <div className="plan reveal stagger-1">
              <div className="plan-name">MONTHLY PRO</div>
              <div className="plan-price">
                {billingCycle === "yearly" ? "₹415" : "₹499"}
                <span> / month</span>
              </div>
              <div className="plan-desc">
                {billingCycle === "yearly"
                  ? "Billed annually (₹4,980/yr). Fast, reliable GST billing for modern startups."
                  : "Billed monthly. Cancel anytime with full data export freedom."}
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
                onClick={() => handleSubscribe(billingCycle === "yearly" ? "pro_yearly_basic" : "pro_monthly")}
                className="pill pill-ink plan-cta"
              >
                {billingCycle === "yearly" ? "Get Started — ₹415/mo" : "Subscribe Monthly — ₹499"}
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            {/* Plan 2: Annual Pro (Featured with Glowing Border) */}
            <div className="plan featured reveal-scale stagger-2">
              <span className="pop">MOST POPULAR &bull; SAVE 17%</span>
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
                onClick={() => handleSubscribe("pro_yearly")}
                className="pill pill-lime plan-cta"
                style={{ fontWeight: 700 }}
              >
                Get Annual Pro — ₹4,999
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            {/* Plan 3: Custom / Enterprise */}
            <div className="plan reveal stagger-3">
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

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="sec-head reveal">
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
                className={`faq-item reveal stagger-${(idx % 4) + 1} ${openFaq === idx ? "active" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
                <div className={`faq-a-wrapper ${openFaq === idx ? "open" : ""}`}>
                  <div className="faq-a-inner">
                    <div className="faq-a">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner reveal-scale">
            <div className="cta-aura" aria-hidden="true"></div>
            <div className="hero-grid sm" aria-hidden="true"></div>
            <h2>Ready To Streamline Your GST Billing?</h2>
            <p>
              Join thousands of Indian businesses generating compliant invoices
              and filing GSTR returns with ironclad confidence.
            </p>
            <a href="#pricing" className="pill pill-lime pill-lg">
              Get Started Now — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </a>
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

      {/* ===================== SCROLL TO TOP FLOATING BUTTON ===================== */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${scrollProgress > 12 ? "visible" : ""}`}
        aria-label="Scroll back to top"
      >
        <svg className="progress-ring" viewBox="0 0 52 52">
          <circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="3"
          />
          <circle
            className="progress-ring-circle"
            cx="26"
            cy="26"
            r="22"
            fill="none"
            strokeWidth="3"
            strokeDasharray={ringCircumference}
            strokeDashoffset={ringCircumference - (scrollProgress / 100) * ringCircumference}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
