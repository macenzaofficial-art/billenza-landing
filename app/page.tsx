"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  Building2,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function BillenzaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_monthly');
  const [scrolled, setScrolled] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const glowLimeRef = useRef<HTMLDivElement>(null);
  const glowInkRef = useRef<HTMLDivElement>(null);

  // Metric counter refs for GSAP ScrollTrigger
  const metric1Ref = useRef<HTMLDivElement>(null);
  const metric2Ref = useRef<HTMLDivElement>(null);
  const metric3Ref = useRef<HTMLDivElement>(null);
  const metric4Ref = useRef<HTMLDivElement>(null);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.billenza.com";

  // Track window scroll for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCheckout = (plan: 'pro_monthly' | 'pro_yearly') => {
    setCheckoutPlan(plan);
    setCheckoutOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('pricing');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/#pricing');
    }
  };

  // GSAP Animations Hook
  useGSAP(() => {
    // 1. Hero Entrance Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .from(".hero .eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.6,
      })
      .from(
        ".hero h1",
        {
          opacity: 0,
          y: 35,
          duration: 0.85,
        },
        "-=0.3"
      )
      .from(
        ".hero-sub",
        {
          opacity: 0,
          y: 20,
          duration: 0.75,
        },
        "-=0.5"
      )
      .from(
        ".hero-actions > *",
        {
          opacity: 0,
          y: 16,
          scale: 0.96,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.4"
      )
      .from(
        ".console-wrap",
        {
          opacity: 0,
          y: 45,
          scale: 0.94,
          rotationX: 8,
          transformPerspective: 1000,
          duration: 1.1,
        },
        "-=0.3"
      )
      .from(
        ".console-status .node",
        {
          opacity: 0,
          y: 10,
          stagger: 0.08,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        ".float-pill-bottom",
        {
          opacity: 0,
          scale: 0.85,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.3"
      );

    // 2. Ambient Glow Breathing / Floating Loop
    gsap.to(".glow-lime", {
      x: 22,
      y: -16,
      scale: 1.15,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".glow-ink", {
      x: -25,
      y: 20,
      scale: 1.2,
      duration: 6.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 3. Trust Logos Staggered ScrollTrigger
    gsap.from(".logo-badge", {
      scrollTrigger: {
        trigger: ".trust",
        start: "top 85%",
        once: true,
      },
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
    });

    // 5. Metrics Band Animated Counters with ScrollTrigger
    gsap.from(".metric", {
      scrollTrigger: {
        trigger: ".metrics-band",
        start: "top 82%",
        once: true,
      },
      opacity: 0,
      y: 25,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
    });

    // Numerical counter interpolations
    const c1 = { val: 0 };
    const c2 = { val: 0 };
    const c3 = { val: 0 };
    const c4 = { val: 0 };

    gsap.to(c1, {
      val: 500,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".metrics-band",
        start: "top 82%",
        once: true,
      },
      onUpdate: () => {
        if (metric1Ref.current) {
          metric1Ref.current.textContent = `₹${Math.floor(c1.val)}Cr+`;
        }
      },
    });

    gsap.to(c2, {
      val: 99.99,
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".metrics-band",
        start: "top 82%",
        once: true,
      },
      onUpdate: () => {
        if (metric2Ref.current) {
          metric2Ref.current.textContent = `${c2.val.toFixed(2)}%`;
        }
      },
    });

    gsap.to(c3, {
      val: 20,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".metrics-band",
        start: "top 82%",
        once: true,
      },
      onUpdate: () => {
        if (metric3Ref.current) {
          metric3Ref.current.textContent = `<${Math.floor(c3.val)}s`;
        }
      },
    });

    gsap.to(c4, {
      val: 22,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".metrics-band",
        start: "top 82%",
        once: true,
      },
      onUpdate: () => {
        if (metric4Ref.current) {
          metric4Ref.current.textContent = `${Math.floor(c4.val)}`;
        }
      },
    });

    // 6. How it works step rows with ScrollTrigger
    const howRows = gsap.utils.toArray<HTMLElement>(".how-row");
    howRows.forEach((row) => {
      const isRev = row.classList.contains("rev");
      const copy = row.querySelector(".how-copy");
      const card = row.querySelector(".how-card");
      const ticks = row.querySelectorAll(".ticks li");

      const rowTl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          once: true,
        },
      });

      rowTl
        .from(copy, {
          opacity: 0,
          x: isRev ? 35 : -35,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          card,
          {
            opacity: 0,
            x: isRev ? -35 : 35,
            scale: 0.95,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ticks,
          {
            opacity: 0,
            x: -12,
            stagger: 0.08,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        );
    });
  }, { scope: mainRef });

  // 3D Parallax Mouse Tracking on the Console Mockup (triggers only on proximity/hover)
  const handleConsoleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!consoleRef.current) return;
    const rect = consoleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    const clampedX = Math.max(-1, Math.min(1, normX));
    const clampedY = Math.max(-1, Math.min(1, normY));

    // Controlled, subtle tilt
    gsap.to(consoleRef.current, {
      rotationY: clampedX * 1.5,
      rotationX: -clampedY * 1.5,
      transformPerspective: 1200,
      ease: "power2.out",
      duration: 0.5,
      overwrite: "auto",
    });

    if (glowLimeRef.current) {
      gsap.to(glowLimeRef.current, {
        x: clampedX * 6,
        y: clampedY * 6,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleConsoleMouseLeave = () => {
    if (!consoleRef.current) return;
    gsap.to(consoleRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 0.6,
      overwrite: "auto",
    });
    if (glowLimeRef.current) {
      gsap.to(glowLimeRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-white text-[#1d1d1d] overflow-x-hidden">
      {/* ===================== HEADER ===================== */}
      <header
        className="site-header"
        id="top"
        style={{
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease, background 0.3s ease",
          background: scrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.85)",
        }}
      >
        <nav className="nav container">
          <a
            href="#top"
            className="brand"
            aria-label="Billenza home"
          >
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
            <motion.a
              href={`${appUrl}?mode=login`}
              className="nav-link"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--ink)", padding: "6px 12px" }}
            >
              Sign In
            </motion.a>
            <Link
              href="/#pricing"
              onClick={scrollToPricing}
              className="pill pill-ink nav-cta"
            >
              Get Started
              <span className="pill-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
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
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-sheet"
            >
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                Platform Features
              </a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing &amp; Plans
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
                <Link
                  href="/#pricing"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToPricing(e);
                  }}
                  className="pill pill-ink"
                  style={{ justifyContent: "center" }}
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            <a
              href="#pricing"
              className="pill pill-ink pill-lg"
            >
              Get Started — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </a>
            <a
              href={appUrl}
              className="pill pill-ghost pill-lg"
            >
              Launch App
              <span className="pill-arrow gray">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* Hero Console Mockup with real app image and 3D parallax */}
          <div
            className="console-wrap"
            onMouseMove={handleConsoleMouseMove}
            onMouseLeave={handleConsoleMouseLeave}
          >
            <div ref={glowLimeRef} className="glow glow-lime"></div>
            <div ref={glowInkRef} className="glow glow-ink"></div>

            <div ref={consoleRef} className="console">
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
                  GSTR-1 &amp; 3B: Auto-Sync
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
            BUILT FOR INDIAN SMES, EXPORTERS, MANUFACTURERS &amp; CA FIRMS
          </div>
          <div className="logos">
            <motion.div
              className="logo-badge"
              whileHover={{ y: -3, scale: 1.04, backgroundColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <ShieldCheck size={16} color="#22c55e" />
              GSTN Compliant &amp; Verified
            </motion.div>
            <motion.div
              className="logo-badge"
              whileHover={{ y: -3, scale: 1.04, backgroundColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <Globe2 size={16} color="#1d1d1d" />
              22 Global Currencies
            </motion.div>
            <motion.div
              className="logo-badge"
              whileHover={{ y: -3, scale: 1.04, backgroundColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <Building2 size={16} color="#1d1d1d" />
              Multi-GSTIN Architecture
            </motion.div>
            <motion.div
              className="logo-badge"
              whileHover={{ y: -3, scale: 1.04, backgroundColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <FileText size={16} color="#1d1d1d" />
              Instant e-Way Bill JSON
            </motion.div>
            <motion.div
              className="logo-badge"
              whileHover={{ y: -3, scale: 1.04, backgroundColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 size={16} color="#1d1d1d" />
              Form 26Q &amp; 27EQ Ready
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES GRID ===================== */}
      <section className="features" id="features">
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">ENTERPRISE INVOICING SUITE</span>
            <h2>Engineered For Flawless Tax Accuracy</h2>
            <p>
              Say goodbye to Excel formulas and bulky legacy software. Billenza
              automates your tax calculations, reconciliations, and filings from
              one clean control center.
            </p>
          </motion.div>

          <motion.div
            className="feature-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {[
              {
                icon: FileText,
                title: "Tax Invoicing & e-Way Bills",
                desc: "Issue Tax Invoices, Bills of Supply, Proformas, and Delivery Challans with automatic CGST, SGST, IGST, UTGST, and cess calculations.",
              },
              {
                icon: Layers,
                title: "Automated GSTR Returns",
                desc: "Generate official GSTR-1 and GSTR-3B filing JSONs with one click. Reconcile your inward supply purchases against GSTR-2B effortlessly.",
              },
              {
                icon: Globe2,
                title: "22 Global Currencies",
                desc: "Bill foreign clients in USD, EUR, GBP, AED, SGD, and 17 other currencies with automatic INR conversion notes and statutory LUT compliance.",
              },
              {
                icon: Package,
                title: "Inventory & Low-Stock Radar",
                desc: "Track product stock in real time. Set minimum threshold alerts and deduct inventory automatically when an invoice is finalized.",
              },
              {
                icon: Clock,
                title: "Party Outstanding & Ledger",
                desc: "Comprehensive aging analysis for every debtor. Send polite payment reminders with dynamic UPI QR codes directly via WhatsApp or email.",
              },
              {
                icon: ShieldCheck,
                title: "TDS & TCS Audit Reports",
                desc: "Full compliance with Section 194Q and 206C. Export Form 26Q and Form 27EQ statements ready for quarterly income tax submissions.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="feat"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 42px -16px rgba(0, 0, 0, 0.14)",
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                >
                  <motion.div
                    className="feat-ic"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== METRICS BAND ===================== */}
      <section className="metrics-band">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric">
              <div className="m-num" ref={metric1Ref}>₹500Cr+</div>
              <div className="m-lab">Total Invoiced Volume</div>
            </div>
            <div className="metric">
              <div className="m-num" ref={metric2Ref}>99.99%</div>
              <div className="m-lab">Tax Calculation Accuracy</div>
            </div>
            <div className="metric">
              <div className="m-num" ref={metric3Ref}>&lt;20s</div>
              <div className="m-lab">Average Time to Issue Bill</div>
            </div>
            <div className="metric">
              <div className="m-num" ref={metric4Ref}>22</div>
              <div className="m-lab">Global Currencies Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="how" id="how-it-works">
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">SEAMLESS WORKFLOW</span>
            <h2>From Zero to First Invoice in 60 Seconds</h2>
            <p>
              Get started without long onboarding calls or complicated setups.
              Everything is pre-configured for Indian businesses.
            </p>
          </motion.div>

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
                    Bank account &amp; UPI QR code embedding
                  </li>
                </ul>
              </div>

              <motion.div
                className="how-card"
                whileHover={{ y: -6, boxShadow: "0 28px 56px -24px rgba(0,0,0,0.22)" }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="how-row rev">
              <div className="how-copy">
                <span className="step-no">STEP 02</span>
                <h3>Add Items &amp; Issue GST Bill</h3>
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

              <motion.div
                className="how-card"
                whileHover={{ y: -6, boxShadow: "0 28px 56px -24px rgba(0,0,0,0.22)" }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="how-row">
              <div className="how-copy">
                <span className="step-no">STEP 03</span>
                <h3>One-Click GSTR &amp; e-Way Exports</h3>
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
                    Instant bulk Excel &amp; CSV exports for CAs
                  </li>
                </ul>
              </div>

              <motion.div
                className="how-card"
                whileHover={{ y: -6, boxShadow: "0 28px 56px -24px rgba(0,0,0,0.22)" }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="pricing" id="pricing">
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h2>Simple, Predictable Plans For Every Business</h2>
            <p>
              No hidden fees, no per-invoice penalties. Get unlimited invoicing
              and full GST compliance right out of the box.
            </p>
          </motion.div>

          <motion.div
            className="plans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Plan 1: Monthly */}
            <motion.div
              className="plan"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 22px 45px -18px rgba(0, 0, 0, 0.14)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
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
                  Unlimited GST Invoices &amp; Delivery Challans
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  GSTR-1 &amp; GSTR-3B JSON exports
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Real-time Inventory &amp; Stock Radar
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
                  Standard Email &amp; Chat Support
                </li>
              </ul>

              <motion.button
                type="button"
                onClick={() => openCheckout('pro_monthly')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.12 }}
                className="pill pill-ink plan-cta"
                style={{ width: "100%", justifyContent: "center", cursor: "pointer", border: "none" }}
              >
                Subscribe Monthly — ₹499
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            </motion.div>

            {/* Plan 2: Annual Pro (Featured) */}
            <motion.div
              className="plan featured"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 28px 56px -20px rgba(0, 0, 0, 0.22)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              <motion.span
                className="pop"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                SAVE ~17% YEARLY
              </motion.span>
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
                  <strong>Unlimited Business Profiles &amp; GSTINs</strong>
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
                  Priority CA &amp; Compliance Assistance
                </li>
              </ul>

              <motion.button
                type="button"
                onClick={() => openCheckout('pro_yearly')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.12 }}
                className="pill pill-lime plan-cta"
                style={{ width: "100%", justifyContent: "center", fontWeight: 700, cursor: "pointer", border: "none" }}
              >
                Get Annual Pro — ₹4,999
                <span className="pill-arrow">
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            </motion.div>

            {/* Plan 3: Custom / Enterprise */}
            <motion.div
              className="plan"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 22px 45px -18px rgba(0, 0, 0, 0.14)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
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
                  Multi-Branch &amp; Team Roles / Permissions
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Custom ERP &amp; Accounting Integrations
                </li>
                <li>
                  <span className="tick-icon">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Dedicated CA &amp; Account Manager
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
                  Custom SLA &amp; 99.99% Uptime Guarantee
                </li>
              </ul>

              <Link
                href="/contact"
                className="pill pill-ghost plan-cta"
              >
                Contact Sales
                <span className="pill-arrow gray">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="faq-section" id="faq">
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions about billing, compliance, or account security?
              We&apos;ve got answers.
            </p>
          </motion.div>

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
              <motion.div
                key={idx}
                className="faq-item"
                onClick={() => toggleFaq(idx)}
                whileHover={{ y: -2, borderColor: "rgba(0, 0, 0, 0.25)" }}
                layout
                transition={{ duration: 0.2 }}
              >
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    style={{ display: "inline-flex" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-a">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="cta-band">
        <div className="container">
          <motion.div
            className="cta-inner"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero-grid sm" aria-hidden="true"></div>
            <h2>Ready To Streamline Your GST Billing?</h2>
            <p>
              Join thousands of Indian businesses generating compliant invoices
              and filing GSTR returns with ironclad confidence.
            </p>
            <Link
              href="/#pricing"
              onClick={scrollToPricing}
              id="footer-cta-btn"
              className="pill pill-lime pill-lg"
            >
              Get Started Now — ₹499/mo
              <span className="pill-arrow">
                <ArrowRight size={20} />
              </span>
            </Link>
          </motion.div>
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
              <a href="#features">GSTR-1 &amp; 3B Filing</a>
              <a href="#features">Inventory Radar</a>
              <a href="#features">Multi-Currency Suite</a>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <a href="#pricing">Pricing Plans</a>
              <a href="#faq">Compliance &amp; Security</a>
              <Link href="/contact">Contact &amp; Support</Link>
            </div>

            <div className="foot-col">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/refund-policy">Cancellation &amp; Refunds</Link>
              <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
              <Link href="/contact">Grievance Redressal</Link>
            </div>
          </div>

          <div className="foot-base">
            <div>&copy; 2026 Macenza / Billenza. All rights reserved.</div>
            <div>Operated by Macenza (Proprietor: Shashank Shubham) &bull; Ajmer, Rajasthan, India.</div>
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
