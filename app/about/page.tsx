import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Database,
  Lock,
  Globe,
  Calculator,
  RefreshCw,
  BarChart3,
  Users,
  Zap,
  FileSpreadsheet,
  Server,
  Layers,
  Award,
} from 'lucide-react';

export const metadata = {
  title: 'About Us — Billenza | GST Invoicing & Compliance Cloud',
  description:
    'Discover Billenza: precision GST billing, e-Way bills, multi-currency invoicing, and real-time statutory compliance engineered for modern Indian enterprises.',
};

export default function AboutUsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      {/* Top Header */}
      <header
        style={{
          padding: '1.25rem 2rem',
          borderBottom: '1px solid #e2e8f0',
          background: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              color: '#1d1d1d',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            <ArrowLeft size={16} />
            <Image
              src="/billenza-logo.webp"
              alt="Billenza"
              width={110}
              height={34}
              style={{ height: 26, width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#15803d',
                background: '#dcfce7',
                padding: '4px 10px',
                borderRadius: 999,
              }}
            >
              Statutory GST Engine v2.4
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: 1080, margin: '2.5rem auto', padding: '0 1.5rem 5rem' }}>
        {/* Hero Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 24,
            padding: '3rem 2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#DCF986',
              padding: '5px 12px',
              borderRadius: 999,
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '1.25rem',
              color: '#1d1d1d',
            }}
          >
            <Sparkles size={14} />
            ABOUT BILLENZA &bull; CLOUD FINANCIAL INFRASTRUCTURE
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 0 1rem',
              color: '#0f172a',
            }}
          >
            Billing Made Simple.
            <br />
            Business Made Smarter.
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              maxWidth: 780,
              margin: '0 0 2rem',
            }}
          >
            Billenza is a cloud billing, inventory management, and statutory tax compliance suite
            crafted specifically for Indian small-to-medium enterprises (SMEs), chartered accountants,
            traders, and cross-border exporters.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #f1f5f9',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  flexShrink: 0,
                }}
              >
                <Calculator size={18} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                  Deterministic Math
                </h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
                  Zero round-off discrepancies with sub-paisa calculation precision.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                  Statutory Rule 46
                </h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
                  Atomic, sequential un-gapped document numbering per financial year.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  flexShrink: 0,
                }}
              >
                <Lock size={18} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                  Isolated Multi-Tenancy
                </h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
                  Cryptographically separated tenant records and TLS 1.3 transport.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Platform Purpose & The Indian Tax Landscape */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <Layers size={16} /> 1. The Statutory Challenge &amp; Platform Mission
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>
            Solving Indian Tax Complexity with Pure Algorithmic Precision
          </h2>
          <div style={{ fontSize: '0.96rem', lineHeight: 1.75, color: '#334155' }}>
            <p style={{ margin: '0 0 1rem' }}>
              The Indian Goods and Services Tax framework is one of the most comprehensive and dynamic
              indirect tax systems in the world. Operating an enterprise requires balancing multiple
              concurrent tax heads: Central GST (CGST), State GST (SGST), Integrated GST (IGST), Union
              Territory GST (UTGST), and statutory Compensation Cess. A minor rounding discrepancy, a
              misclassified Place of Supply (POS), or an incorrect 4, 6, or 8-digit HSN/SAC code can
              trigger audit notices, block Input Tax Credit (ITC), and hold up vendor reconciliations.
            </p>
            <p style={{ margin: '0 0 1rem' }}>
              Billenza was created to eliminate this operational friction. By encoding statutory tax
              rules directly into a real-time deterministic calculation engine, every invoice, bill of
              supply, and credit note created inside Billenza is verified against official GSTN rules
              before the document is locked and sealed.
            </p>
            <p style={{ margin: 0 }}>
              Our platform bridges the gap between everyday business operations and formal tax
              filings, giving Indian business owners complete clarity over their revenue, inventory, and
              tax liabilities.
            </p>
          </div>
        </section>

        {/* Section 2: Core Architectural Pillars */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <Server size={16} /> 2. Architectural Pillars
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1.25rem', color: '#0f172a' }}>
            Engineered for Reliability, Determinism &amp; Speed
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: 16,
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#e0f2fe',
                  color: '#0369a1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Calculator size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#0f172a' }}>
                Deterministic Tax Calculation
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Every tax calculation runs on verified integer-based or exact decimal algorithms to avoid
                floating-point rounding anomalies. Place of Supply (POS) rules automatically differentiate
                between intra-state (CGST + SGST) and inter-state (IGST) transactions.
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: 16,
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#fef3c7',
                  color: '#b45309',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <FileText size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#0f172a' }}>
                Atomic Sequential Numbering
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Adheres strictly to Rule 46(b) of the CGST Rules. Invoices maintain uninterrupted,
                strictly sequential numbering across custom series prefixes (e.g. BLZ/24-25/0001) per
                financial year, preventing duplicate or skipped invoice numbers.
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: 16,
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#dcfce7',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Database size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#0f172a' }}>
                Tenant-Isolated Architecture
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Every business organization operates in an isolated tenant workspace. Sensitive client
                directories, price books, and financial ledgers are bounded by strict tenancy checks,
                ensuring complete commercial privacy.
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: 16,
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#f3e8ff',
                  color: '#7e22ce',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Zap size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#0f172a' }}>
                Instant Client-Side Rendering
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Engineered for ultra-low latency. Invoices, delivery notes, and tax reports render
                instantly without sluggish server roundtrips, backed by resilient cloud sync and instant
                PDF print generation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Full Statutory Feature Stack */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <FileSpreadsheet size={16} /> 3. The Comprehensive Compliance Stack
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1.25rem', color: '#0f172a' }}>
            Full-Spectrum Billing, Inventory &amp; Filing Tools
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                Statutory Invoicing Suite
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Generate regular B2B Tax Invoices, B2C Retail Invoices, Bills of Supply for composition
                dealers, Delivery Challans for job work, and Credit/Debit Notes compliant with Section 34
                of the CGST Act.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                NIC e-Way Bill Compilation
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Instant compilation of standard JSON payloads matching the National Informatics Centre
                (NIC) schema for consignments exceeding ₹50,000, supporting Part-A and Part-B vehicle
                updates.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                GSTR-1 &amp; GSTR-3B Return Mapping
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Automated monthly and quarterly aggregation across Tables 4A/4B (B2B), 5A (B2C Large), 7
                (B2C Small), 9B (Credit Notes), and 12 (HSN Summary), compatible with official GST Offline
                Tools.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                Multi-Currency Global Invoicing
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Bill foreign clients in 22 world currencies (USD, EUR, GBP, AED, SGD, AUD, CAD, etc.) with
                live exchange rate documentation, mandatory INR tax conversions, and LUT/Bond tracking for
                zero-rated supplies.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                Inventory &amp; Stock Radar
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Real-time stock deduction, HSN/SAC code cataloguing, standardized Unique Quantity Codes
                (UQC — NOS, KGS, MTR, PCS), batch tracking, and proactive low-stock threshold alerts.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
                Accountant &amp; CA Desk
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                Grant secure, read-only audit access to your tax consultant or Chartered Accountant.
                Export complete financial ledgers in Excel/CSV and standardized JSON formats with one click.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Security, Encryption & Data Sovereignty */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <ShieldCheck size={16} /> 4. Security, Cryptography &amp; Data Sovereignty
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>
            Uncompromising Safeguards for Financial Information
          </h2>
          <div style={{ fontSize: '0.96rem', lineHeight: 1.75, color: '#334155' }}>
            <p style={{ margin: '0 0 1rem' }}>
              We understand that an enterprise&apos;s financial ledgers, customer pricing lists, and
              transaction volumes are strictly confidential assets. Billenza enforces defense-in-depth
              security across every layer of the application stack:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
                margin: '1.5rem 0',
              }}
            >
              <div
                style={{
                  padding: '1.25rem',
                  background: '#f8fafc',
                  borderRadius: 14,
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Lock size={16} color="#059669" /> TLS 1.3 &amp; AES-256
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                  All network traffic is encrypted using TLS 1.3. Stored database records and generated
                  documents utilize AES-256 standard cryptographic encryption at rest.
                </div>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  background: '#f8fafc',
                  borderRadius: 14,
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={16} color="#0284c7" /> RBI-Compliant Billing
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                  Subscription processing is handled through Reserve Bank of India (RBI) authorized payment
                  aggregators (Razorpay). No credit card numbers or banking secrets are ever stored on our
                  servers.
                </div>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  background: '#f8fafc',
                  borderRadius: 14,
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Database size={16} color="#7c3aed" /> 100% Data Sovereignty
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                  Your business data belongs exclusively to you. You can export complete customer, inventory,
                  and transaction records at any time in standard open formats with zero vendor lock-in.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Who We Serve */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <Users size={16} /> 5. Who Billenza Powers
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1.25rem', color: '#0f172a' }}>
            Tailored for Every Segment of Indian Commerce
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Retailers &amp; Wholesalers
              </h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                Fast point-of-sale invoicing, barcode item lookups, instant WhatsApp sharing, and automated
                stock balancing.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Manufacturers &amp; Distributors
              </h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                Multi-tier dispatch challans, e-Way bills with vehicle details, bulk HSN cataloguing, and
                consignment tracking.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Service Providers &amp; Agencies
              </h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                SAC-coded professional billing, milestone payment schedules, client retainers, and GST TDS
                deduction tracking.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                background: '#f8fafc',
                borderRadius: 12,
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Exporters &amp; Tech Startups
              </h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                Zero-rated foreign currency invoices, automatic INR bank conversion rates, and Letter of
                Undertaking (LUT) record keeping.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Open Source Credits & Attribution (Mandatory Verbatim) */}
        <section
          id="credits"
          style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <Award size={16} /> 6. Open Source Credits &amp; Attribution
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 1rem', color: '#0f172a' }}>
            Open Source Credits &amp; Attribution
          </h2>
          <div style={{ fontSize: '0.96rem', lineHeight: 1.75, color: '#334155' }}>
            <p style={{ margin: '0 0 1rem' }}>
              Billenza is powered by and incorporates code from{' '}
              <a
                href="https://github.com/IamRamgarhia/Free-GST-Billing-Software"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0f172a', fontWeight: 700, textDecoration: 'underline' }}
              >
                Free GST Billing Software
              </a>
              , an open-source project authored and maintained by{' '}
              <a
                href="https://github.com/IamRamgarhia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0f172a', fontWeight: 700, textDecoration: 'underline' }}
              >
                IamRamgarhia
              </a>{' '}
              along with <strong>DiceCodes</strong> and community contributors under the MIT License.
            </p>
            <p style={{ margin: 0 }}>
              We gratefully acknowledge and give full credit to the repository authors for their foundational
              software engineering and contributions to the open-source community.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <div
          style={{
            background: '#0f172a',
            color: '#ffffff',
            borderRadius: 24,
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 0.75rem' }}>
            Ready to Streamline Your Business Invoicing?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#94a3b8',
              maxWidth: 600,
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            Join modern Indian enterprises managing GST compliance, e-Way bills, and real-time inventory
            with effortless precision.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link
              href="/#pricing"
              style={{
                background: '#DCF986',
                color: '#0f172a',
                padding: '12px 28px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Get Started — ₹499/mo
            </Link>
            <Link
              href="/features"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Explore Features
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #e2e8f0',
          background: '#ffffff',
          padding: '3.5rem 2rem 2.5rem',
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <Image
              src="/billenza-logo.webp"
              alt="Billenza"
              width={120}
              height={36}
              style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: '1rem' }}
            />
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Precision GST billing, inventory, and compliance infrastructure for modern Indian commerce.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0f172a', margin: '0 0 1rem' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
              <li><Link href="/features" style={{ color: '#475569', textDecoration: 'none' }}>Features</Link></li>
              <li><Link href="/how-it-works" style={{ color: '#475569', textDecoration: 'none' }}>How It Works</Link></li>
              <li><Link href="/pricing" style={{ color: '#475569', textDecoration: 'none' }}>Pricing Plans</Link></li>
              <li><Link href="/#faq" style={{ color: '#475569', textDecoration: 'none' }}>FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0f172a', margin: '0 0 1rem' }}>
              Compliance &amp; Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
              <li><Link href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms &amp; Conditions</Link></li>
              <li><Link href="/refund-policy" style={{ color: '#475569', textDecoration: 'none' }}>Refund Policy</Link></li>
              <li><Link href="#credits" style={{ color: '#475569', textDecoration: 'none' }}>Open Source Credits</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0f172a', margin: '0 0 1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
              <li><Link href="/about" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/contact" style={{ color: '#475569', textDecoration: 'none' }}>Contact &amp; Support</Link></li>
              <li><a href="mailto:info@macenza.com" style={{ color: '#475569', textDecoration: 'none' }}>info@macenza.com</a></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            paddingTop: '2rem',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>&copy; {new Date().getFullYear()} Billenza. All rights reserved.</div>
          <div>Operated commercially by Macenza.</div>
        </div>
      </footer>
    </div>
  );
}
