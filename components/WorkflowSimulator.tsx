'use client';

import React, { useState, useEffect } from 'react';
import {
  Building2,
  FileText,
  Truck,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  QrCode,
  ShieldCheck,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StepData {
  id: number;
  badge: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  sub: string;
  highlights: string[];
}

const STEPS: StepData[] = [
  {
    id: 1,
    badge: '15 Seconds',
    tabLabel: '01. Profile & GSTIN',
    icon: Building2,
    title: 'Instant GSTIN Auto-Discovery',
    sub: 'Enter your 15-digit GSTIN. Billenza instantly resolves your legal trade name, state code, and tax configuration.',
    highlights: [
      'Automatic state code & Place of Supply (POS) rules configured',
      'Atomic, non-repeating invoice prefix series created',
      'Bank NEFT/RTGS & UPI QR code auto-bound',
    ],
  },
  {
    id: 2,
    badge: '20 Seconds',
    tabLabel: '02. Smart Billing',
    icon: FileText,
    title: 'Zero-Error GST Invoicing',
    sub: 'Add items or services. Billenza detects buyer state and automatically splits intra-state vs inter-state tax.',
    highlights: [
      'Auto-suggests 18,000+ official CBIC HSN & SAC codes',
      'Automatic CGST+SGST or IGST calculation with Rule 54 rounding',
      'Dynamic UPI QR code embedded for instant customer scan-to-pay',
    ],
  },
  {
    id: 3,
    badge: '10 Seconds',
    tabLabel: '03. e-Way Bill',
    icon: Truck,
    title: '1-Click Transit Logistics',
    sub: 'Consignments over ₹50,000 generate official NIC e-Way bills with pin-to-pin transit distance calculations.',
    highlights: [
      'Automatic distance calculation between pickup and delivery pins',
      'Official Part-A & Part-B schema ready for transporter verification',
      'Consolidated multi-vehicle and transshipment tracking',
    ],
  },
  {
    id: 4,
    badge: '1-Click',
    tabLabel: '04. GSTR & Returns',
    icon: Layers,
    title: 'Autonomous GST Portal Filing',
    sub: 'Monthly filing takes one click. Schema-validated JSON export ready for the GST Offline Tool or government portal.',
    highlights: [
      'GSTR-1 JSON with Table 4A, 7, 9B, and Table 12 HSN summaries',
      'GSTR-3B monthly tax liability & eligible ITC calculated automatically',
      'GSTR-2B purchase reconciliation catches missing vendor invoices',
    ],
  },
];

export default function WorkflowSimulator() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  // Auto-advance stepper every 6 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 60; // 60ms steps
    const totalDuration = 6000; // 6s per step
    const stepIncrement = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((s) => (s >= 4 ? 1 : s + 1));
          return 0;
        }
        return prev + stepIncrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, activeStep]);

  const handleSelectStep = (id: number) => {
    setActiveStep(id);
    setProgress(0);
  };

  const current = STEPS.find((s) => s.id === activeStep) || STEPS[0];
  const StepIcon = current.icon;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1140,
        margin: '0 auto',
        borderRadius: 28,
        background: '#ffffff',
        border: '1px solid var(--line)',
        boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.07)',
        overflow: 'hidden',
      }}
    >
      {/* Top Stepper Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderBottom: '1px solid var(--line-soft)',
          background: '#f8fafc',
        }}
      >
        {STEPS.map((s) => {
          const active = s.id === activeStep;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelectStep(s.id)}
              style={{
                position: 'relative',
                background: active ? '#ffffff' : 'transparent',
                border: 'none',
                padding: '20px 16px',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                transition: 'background 0.2s',
                borderRight: s.id < 4 ? '1px solid var(--line-soft)' : 'none',
              }}
            >
              {/* Active Step Progress Underline */}
              {active && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: '#1d1d1d',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      background: '#dcf986',
                      width: `${progress}%`,
                      transition: 'width 0.06s linear',
                    }}
                  />
                </div>
              )}

              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: active ? 'var(--ink)' : 'var(--bone)',
                  color: active ? '#dcf986' : 'var(--gray)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s',
                }}
              >
                <Icon size={18} />
              </div>

              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: active ? 'var(--ink)' : 'var(--gray)',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {s.tabLabel}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                  {s.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div
        style={{
          padding: '44px 40px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1.15fr',
          gap: 44,
          alignItems: 'center',
        }}
      >
        {/* Left Column: Punchy Explanation & Controls */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                borderRadius: 999,
                background: '#dcf986',
                color: 'var(--ink)',
              }}
            >
              Step 0{current.id} of 04
            </span>
            <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
              {current.badge} execution
            </span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              margin: '0 0 14px',
            }}
          >
            {current.title}
          </h3>

          <p
            style={{
              fontSize: '1.02rem',
              color: 'var(--gray)',
              lineHeight: 1.6,
              margin: '0 0 24px',
            }}
          >
            {current.sub}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {current.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontSize: '0.9rem',
                  color: '#334155',
                  lineHeight: 1.45,
                }}
              >
                <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Stepper Navigation button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              type="button"
              onClick={() => {
                setActiveStep((s) => (s >= 4 ? 1 : s + 1));
                setProgress(0);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 999,
                background: 'var(--ink)',
                color: '#fff',
                border: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Next Step
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Mockup Component */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {activeStep === 1 && (
              <motion.div
                key="step-1-visual"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, #181920 0%, #0d0e12 100%)',
                  borderRadius: 22,
                  padding: '28px',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', color: '#94a3b8' }}>
                      GSTN IDENTITY VERIFIED
                    </span>
                  </div>
                  <span style={{ background: '#dcf986', color: '#1d1d1d', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                    Active Status
                  </span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '16px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }}>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Legal Entity Name
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                    Your Business Name
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#dcf986', marginTop: 4, fontFamily: 'monospace' }}>
                    GSTIN: Your GSTIN &bull; Your State (Code)
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: 3 }}>Invoice Series</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>
                      INV/2026/001 &rarr; Auto Generated
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: 3 }}>Bank &amp; UPI ID</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>
                      yourname@bank
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                key="step-2-visual"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, #181920 0%, #0d0e12 100%)',
                  borderRadius: 22,
                  padding: '28px',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', color: '#94a3b8' }}>
                    INVOICE #BZ-2026-104
                  </span>
                  <span style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                    Inter-State IGST (POS: Delhi)
                  </span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', fontWeight: 600 }}>
                    <span>Cloud Architecture &amp; SaaS API</span>
                    <span>₹85,000.00</span>
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: 4 }}>
                    SAC: 998313 &bull; Qty: 1 Month &bull; Rate: 18%
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: '#94a3b8', padding: '0 6px 8px' }}>
                  <span>IGST @ 18% (Automated Split)</span>
                  <span style={{ color: '#dcf986', fontWeight: 600 }}>+₹15,300.00</span>
                </div>

                <div style={{ borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 6, paddingRight: 6 }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Total Payable (Rupee Rounded)</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>₹1,00,300.00</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: 10, fontSize: '0.75rem', color: '#dcf986' }}>
                    <QrCode size={16} />
                    <span>UPI QR Embedded</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div
                key="step-3-visual"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, #181920 0%, #0d0e12 100%)',
                  borderRadius: 22,
                  padding: '28px',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Truck size={16} color="#dcf986" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', color: '#dcf986' }}>
                      E-WAY BILL #2410-9821-4320
                    </span>
                  </div>
                  <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                    NIC Validated
                  </span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '16px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Pin 305001 (Ajmer)</span>
                    <span style={{ fontSize: '0.75rem', color: '#dcf986', fontWeight: 700 }}>412 KM (Auto-Calculated)</span>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Pin 110001 (Delhi)</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: '10%', right: '10%', height: '100%', background: '#dcf986' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: 3 }}>Vehicle Number</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>
                      DL01-AB-XXXX
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: 3 }}>Validity Period</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4ade80' }}>
                      2 Days &bull; Active
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div
                key="step-4-visual"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, #181920 0%, #0d0e12 100%)',
                  borderRadius: 22,
                  padding: '28px',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Layers size={16} color="#dcf986" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', color: '#dcf986' }}>
                      GSTR-1 JSON SCHEMA v1.4
                    </span>
                  </div>
                  <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                    Ready to Upload
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: 10 }}>
                    <span style={{ fontSize: '0.82rem', color: '#fff' }}>Table 4A (B2B Regular Invoices)</span>
                    <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 700 }}>48 Invoices Checked &bull; ₹14.2L</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: 10 }}>
                    <span style={{ fontSize: '0.82rem', color: '#fff' }}>Table 12 (HSN-wise Summary)</span>
                    <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 700 }}>Compiled with Standard UQC</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: 10 }}>
                    <span style={{ fontSize: '0.82rem', color: '#fff' }}>GSTR-2B ITC Match Radar</span>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>100% Eligible Credit Reconciled</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: 14 }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Validated Against GST Offline Tool</div>
                  <span
                    style={{
                      background: 'rgba(220, 249, 134, 0.15)',
                      color: '#dcf986',
                      border: '1px solid rgba(220, 249, 134, 0.3)',
                      borderRadius: 8,
                      padding: '4px 10px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    SCHEMA VALIDATED
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
