'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BillFlowPipeline() {
  const [pulseCount, setPulseCount] = useState<number>(1483);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const dur = 2.4;

  return (
    <div
      className="bill-flow-pipeline-card"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1140,
        margin: '0 auto',
        borderRadius: 28,
        background: 'linear-gradient(180deg, #0d0f17 0%, #06070a 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
        padding: '24px 18px 24px',
        color: '#ffffff',
      }}
    >
      {/* Background ambient radial glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 250,
          background: 'radial-gradient(circle, rgba(220, 249, 134, 0.15) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: 320,
          height: 200,
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      {/* Header bar of the animation stage */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 14,
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 12px',
              borderRadius: 999,
              background: 'rgba(220, 249, 134, 0.12)',
              border: '1px solid rgba(220, 249, 134, 0.3)',
              color: '#dcf986',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={13} />
            Live Processing Flow
          </div>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            Every raw business bill converted into solved accounting
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 10px #22c55e',
                display: 'inline-block',
              }}
            />
            Processed Today: <strong style={{ color: '#fff' }}>{pulseCount.toLocaleString()} Bills</strong>
          </div>
        </div>
      </div>

      {/* Scoped responsive display & padding rules */}
      <style>{`
        .bill-flow-pipeline-card {
          padding: 24px 18px 24px !important;
        }
        @media (min-width: 640px) {
          .bill-flow-pipeline-card {
            padding: 30px 24px 28px !important;
          }
        }
        @media (min-width: 1024px) {
          .bill-flow-pipeline-card {
            padding: 36px 30px 32px !important;
          }
        }
        .pipeline-desktop-stage {
          display: none !important;
        }
        .pipeline-mobile-stage {
          display: block !important;
        }
        @media (min-width: 1024px) {
          .pipeline-desktop-stage {
            display: block !important;
          }
          .pipeline-mobile-stage {
            display: none !important;
          }
        }
      `}</style>

      {/* ================= DESKTOP HORIZONTAL STAGE (lg screens and above) ================= */}
      <div className="pipeline-desktop-stage" style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'relative', width: 1000, height: 460, margin: '0 auto' }}>
          {/* SVG Drawing Layer for Curved Paths & Animated Dots */}
          <svg
            viewBox="0 0 1000 460"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 1000,
              height: 460,
              overflow: 'visible',
              pointerEvents: 'none',
            }}
          >
            <defs>
              {/* Glow Filters */}
              <filter id="neon-blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="neon-lime-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="neon-green-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Path Gradients */}
              <linearGradient id="stream-in" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#dcf986" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="stream-out" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dcf986" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* ================= INCOMING PATHS (Bill 1, 2, N -> Billenza) ================= */}
            {/* Path 1: Bill 1 (x: 230, y: 75) to Center Hub (x: 430, y: 230) */}
            <path
              id="path-bill-1"
              d="M 230 75 C 330 75, 330 230, 430 230"
              fill="none"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Path 2: Bill 2 (x: 230, y: 230) to Center Hub (x: 430, y: 230) */}
            <path
              id="path-bill-2"
              d="M 230 230 L 430 230"
              fill="none"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Path 3: Bill N (x: 230, y: 385) to Center Hub (x: 430, y: 230) */}
            <path
              id="path-bill-n"
              d="M 230 385 C 330 385, 330 230, 430 230"
              fill="none"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* ================= OUTGOING PATHS (Billenza -> Solved 1, 2, 3) ================= */}
            {/* Path 4: Center Hub (x: 570, y: 230) to Solved 1 (x: 770, y: 75) */}
            <path
              id="path-solved-1"
              d="M 570 230 C 670 230, 670 75, 770 75"
              fill="none"
              stroke="rgba(34, 197, 94, 0.18)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Path 5: Center Hub (x: 570, y: 230) to Solved 2 (x: 770, y: 230) */}
            <path
              id="path-solved-2"
              d="M 570 230 L 770 230"
              fill="none"
              stroke="rgba(34, 197, 94, 0.18)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Path 6: Center Hub (x: 570, y: 230) to Solved 3 (x: 770, y: 385) */}
            <path
              id="path-solved-3"
              d="M 570 230 C 670 230, 670 385, 770 385"
              fill="none"
              stroke="rgba(34, 197, 94, 0.18)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* ================= ANIMATED GLOWING DOTS (Incoming & Outgoing) ================= */}
            <g style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.25s ease' }}>
              {/* Dots from Bill 1 */}
              <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-1" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.33}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-1" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#60a5fa" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.66}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-1" />
                </animateMotion>
              </circle>

              {/* Dots from Bill 2 */}
              <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin="-0.2s" repeatCount="indefinite">
                  <mpath href="#path-bill-2" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.45}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-2" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#93c5fd" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.75}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-2" />
                </animateMotion>
              </circle>

              {/* Dots from Bill N */}
              <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.4s" repeatCount="indefinite">
                  <mpath href="#path-bill-n" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.55}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-n" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#60a5fa" filter="url(#neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.85}s`} repeatCount="indefinite">
                  <mpath href="#path-bill-n" />
                </animateMotion>
              </circle>

              {/* Dots out to Solved 1 */}
              <circle r="5" fill="#dcf986" filter="url(#neon-lime-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.3s" repeatCount="indefinite">
                  <mpath href="#path-solved-1" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.65}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-1" />
                </animateMotion>
              </circle>
              <circle r="4.5" fill="#22c55e" filter="url(#neon-green-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.95}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-1" />
                </animateMotion>
              </circle>

              {/* Dots out to Solved 2 */}
              <circle r="5" fill="#22c55e" filter="url(#neon-green-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin="-0.2s" repeatCount="indefinite">
                  <mpath href="#path-solved-2" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#ffffff">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.55}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-2" />
                </animateMotion>
              </circle>
              <circle r="4.5" fill="#dcf986" filter="url(#neon-lime-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.85}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-2" />
                </animateMotion>
              </circle>

              {/* Dots out to Solved 3 */}
              <circle r="5" fill="#10b981" filter="url(#neon-green-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.5s" repeatCount="indefinite">
                  <mpath href="#path-solved-3" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.75}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-3" />
                </animateMotion>
              </circle>
              <circle r="4.5" fill="#dcf986" filter="url(#neon-lime-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.9}s`} repeatCount="indefinite">
                  <mpath href="#path-solved-3" />
                </animateMotion>
              </circle>
            </g>
          </svg>

          {/* HTML / React Card Nodes Overlaid on the Stage */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: 1000,
              height: 460,
              display: 'grid',
              gridTemplateColumns: '230px 1fr 230px',
            }}
          >
            {/* ================= LEFT COLUMN: BILL 1, BILL 2, BILL N ================= */}
            <div
              style={{
                position: 'relative',
                width: 230,
                height: 460,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 6,
                  left: 0,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <FileText size={13} />
                Raw Business Inputs
              </div>

              {/* Bill 1 (Center y = 75, height = 86, top = 32) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
                style={{
                  position: 'absolute',
                  top: 32,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Bill 1</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                    ₹18,400 • 18%
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35 }}>
                  Vendor supply invoice with raw items &amp; multi-slab GST
                </div>
              </motion.div>

              {/* Bill 2 (Center y = 230, height = 86, top = 187) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
                style={{
                  position: 'absolute',
                  top: 187,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Bill 2</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                    ₹64,200 • IGST
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35 }}>
                  Inter-state purchase &amp; freight slip with IGST liability
                </div>
              </motion.div>

              {/* Bill N ... (Center y = 385, height = 86, top = 342) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
                style={{
                  position: 'absolute',
                  top: 342,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Bill N ...</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                    Bulk Receipts
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35 }}>
                  100s of monthly inward &amp; POS bills awaiting reconciliation
                </div>
              </motion.div>
            </div>

            {/* ================= CENTER COLUMN: BILLENZA CORE NEXUS ================= */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 460,
              }}
            >
              {/* Animated Pulser Rings */}
              <div
                style={{
                  position: 'absolute',
                  top: 230,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 170,
                  height: 170,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '2px solid rgba(220, 249, 134, 0.4)',
                    animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: -8,
                    borderRadius: '50%',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    animation: 'pulse 2.2s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />

                {/* The Billenza Central Core */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #232833 0%, #0d0e14 90%)',
                    border: '2px solid #dcf986',
                    boxShadow: '0 0 35px rgba(220, 249, 134, 0.35), inset 0 0 25px rgba(220, 249, 134, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: 6,
                      border: '1px solid rgba(220, 249, 134, 0.4)',
                      boxShadow: '0 4px 14px rgba(220, 249, 134, 0.25)',
                    }}
                  >
                    <Image
                      src="/billenza-icon.webp"
                      alt="Billenza"
                      width={32}
                      height={32}
                      style={{ height: 28, width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                    }}
                  >
                    BILLENZA
                  </div>
                  <div
                    style={{
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      color: '#dcf986',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    GST AI Hub
                  </div>
                </div>
              </div>

              {/* Hub Status Tagline */}
              <div
                style={{
                  position: 'absolute',
                  top: 335,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: '0.78rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  zIndex: 3,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#dcf986',
                    boxShadow: '0 0 8px #dcf986',
                  }}
                />
                Auto-Matching HSN &bull; Splitting Taxes &bull; Syncing Ledgers
              </div>
            </div>

            {/* ================= RIGHT COLUMN: SOLVED OUTCOMES ================= */}
            <div
              style={{
                position: 'relative',
                width: 230,
                height: 460,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 6,
                  left: 0,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#22c55e',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <CheckCircle2 size={13} />
                Solved For Your Business
              </div>

              {/* Solved 1: Invoicing (Center y = 75, height = 86, top = 32) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
                style={{
                  position: 'absolute',
                  top: 32,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Solved Invoicing</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                    Rule 46 Ready
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35 }}>
                  100% compliant tax invoices with dynamic UPI QR &amp; IRN
                </div>
              </motion.div>

              {/* Solved 2: Accounting (Center y = 230, height = 86, top = 187) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
                style={{
                  position: 'absolute',
                  top: 187,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Solved Accounting</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                    GSTR-1, 3B &amp; 2B
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35 }}>
                  Auto-reconciled ITC &amp; 1-click JSON export for portal filing
                </div>
              </motion.div>

              {/* Solved 3: Business Problem (Center y = 385, height = 86, top = 342) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
                style={{
                  position: 'absolute',
                  top: 342,
                  left: 0,
                  width: '100%',
                  height: 86,
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: 16,
                  padding: '12px 14px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Solved Cash Flow</span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                    MSME Protected
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35 }}>
                  Automated WhatsApp payment reminders &amp; zero tax disputes
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VERTICAL PIPELINE (mobile & tablet < lg) ================= */}
      <div className="pipeline-mobile-stage" style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto' }}>
        {/* ================= TOP SECTION: RAW BUSINESS INPUTS ================= */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#38bdf8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 12,
            }}
          >
            <FileText size={13} />
            Raw Business Inputs
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Bill 1 */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#38bdf8' }}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#38bdf8',
                      boxShadow: '0 0 8px #38bdf8',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Bill 1</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontWeight: 600,
                  }}
                >
                  ₹18,400 • 18%
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35, paddingLeft: 14 }}>
                Vendor supply invoice with raw items &amp; multi-slab GST
              </div>
            </motion.div>

            {/* Bill 2 */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#38bdf8' }}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#60a5fa',
                      boxShadow: '0 0 8px #60a5fa',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Bill 2</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontWeight: 600,
                  }}
                >
                  ₹64,200 • IGST
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35, paddingLeft: 14 }}>
                Inter-state purchase &amp; freight slip with IGST liability
              </div>
            </motion.div>

            {/* Bill N ... */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#38bdf8' }}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#93c5fd',
                      boxShadow: '0 0 8px #93c5fd',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Bill N ...</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontWeight: 600,
                  }}
                >
                  Bulk Receipts
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35, paddingLeft: 14 }}>
                100s of monthly inward &amp; POS bills awaiting reconciliation
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= CONNECTOR 1: INPUTS FUNNEL TO BILLENZA HUB ================= */}
        <div style={{ position: 'relative', width: '100%', height: 100, margin: '22px auto 14px' }}>
          <svg
            viewBox="0 0 320 100"
            style={{
              width: '100%',
              maxWidth: 320,
              height: 100,
              display: 'block',
              margin: '0 auto',
              overflow: 'visible',
              pointerEvents: 'none',
            }}
          >
            <defs>
              <filter id="m-neon-blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="m-neon-lime-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="m-neon-green-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Origin node ports */}
            <circle cx="50" cy="4" r="3.5" fill="#38bdf8" />
            <circle cx="160" cy="4" r="3.5" fill="#60a5fa" />
            <circle cx="270" cy="4" r="3.5" fill="#93c5fd" />

            {/* Stream 1: Bill 1 -> Hub */}
            <path
              id="m-path-bill-1"
              d="M 50 4 C 50 55, 144 50, 144 98"
              fill="none"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Stream 2: Bill 2 -> Hub */}
            <path
              id="m-path-bill-2"
              d="M 160 4 L 160 98"
              fill="none"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Stream 3: Bill N -> Hub */}
            <path
              id="m-path-bill-n"
              d="M 270 4 C 270 55, 176 50, 176 98"
              fill="none"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Animated glowing dots */}
            <g style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.25s ease' }}>
              {/* Dots from Bill 1 */}
              <circle r="4" fill="#38bdf8" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-1" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.33}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-1" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#60a5fa" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.66}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-1" />
                </animateMotion>
              </circle>

              {/* Dots from Bill 2 */}
              <circle r="4" fill="#38bdf8" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin="-0.2s" repeatCount="indefinite">
                  <mpath href="#m-path-bill-2" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.45}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-2" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#93c5fd" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.75}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-2" />
                </animateMotion>
              </circle>

              {/* Dots from Bill N */}
              <circle r="4" fill="#38bdf8" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.4s" repeatCount="indefinite">
                  <mpath href="#m-path-bill-n" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.55}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-n" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#60a5fa" filter="url(#m-neon-blue-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.85}s`} repeatCount="indefinite">
                  <mpath href="#m-path-bill-n" />
                </animateMotion>
              </circle>
            </g>
          </svg>
        </div>

        {/* ================= MIDDLE SECTION: BILLENZA CENTRAL CORE ================= */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 0 16px',
          }}
        >
          {/* Animated Pulser Rings */}
          <div
            style={{
              position: 'relative',
              width: 132,
              height: 132,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(220, 249, 134, 0.4)',
                animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                animation: 'pulse 2.2s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            />

            {/* The Billenza Central Core */}
            <div
              style={{
                position: 'relative',
                width: 118,
                height: 118,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #232833 0%, #0d0e14 90%)',
                border: '2px solid #dcf986',
                boxShadow: '0 0 28px rgba(220, 249, 134, 0.35), inset 0 0 20px rgba(220, 249, 134, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: 3,
                  border: '1px solid rgba(220, 249, 134, 0.4)',
                  boxShadow: '0 4px 12px rgba(220, 249, 134, 0.25)',
                }}
              >
                <Image
                  src="/billenza-icon.webp"
                  alt="Billenza"
                  width={24}
                  height={24}
                  style={{ height: 22, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                }}
              >
                BILLENZA
              </div>
              <div
                style={{
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  color: '#dcf986',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                GST AI Hub
              </div>
            </div>
          </div>

          {/* Hub Status Tagline */}
          <div
            style={{
              marginTop: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '5px 14px',
              borderRadius: 999,
              fontSize: '0.7rem',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'center',
              zIndex: 3,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#dcf986',
                boxShadow: '0 0 6px #dcf986',
                flexShrink: 0,
              }}
            />
            <span>Auto-Matching HSN &bull; Splitting Taxes &bull; Syncing Ledgers</span>
          </div>
        </div>

        {/* ================= CONNECTOR 2: HUB OUTFLOW TO SOLVED ================= */}
        <div style={{ position: 'relative', width: '100%', height: 100, margin: '14px auto 22px' }}>
          <svg
            viewBox="0 0 320 100"
            style={{
              width: '100%',
              maxWidth: 320,
              height: 100,
              display: 'block',
              margin: '0 auto',
              overflow: 'visible',
              pointerEvents: 'none',
            }}
          >
            {/* Stream 4: Center Hub to Solved 1 */}
            <path
              id="m-path-solved-1"
              d="M 144 2 C 144 50, 50 45, 50 96"
              fill="none"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Stream 5: Center Hub to Solved 2 */}
            <path
              id="m-path-solved-2"
              d="M 160 2 L 160 96"
              fill="none"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Stream 6: Center Hub to Solved 3 */}
            <path
              id="m-path-solved-3"
              d="M 176 2 C 176 50, 270 45, 270 96"
              fill="none"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Destination node ports */}
            <circle cx="50" cy="96" r="3.5" fill="#dcf986" />
            <circle cx="160" cy="96" r="3.5" fill="#22c55e" />
            <circle cx="270" cy="96" r="3.5" fill="#10b981" />

            {/* Animated glowing dots */}
            <g style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.25s ease' }}>
              {/* Dots out to Solved 1 */}
              <circle r="4" fill="#dcf986" filter="url(#m-neon-lime-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.3s" repeatCount="indefinite">
                  <mpath href="#m-path-solved-1" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.65}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-1" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#22c55e" filter="url(#m-neon-green-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.95}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-1" />
                </animateMotion>
              </circle>

              {/* Dots out to Solved 2 */}
              <circle r="4" fill="#22c55e" filter="url(#m-neon-green-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin="-0.2s" repeatCount="indefinite">
                  <mpath href="#m-path-solved-2" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.55}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-2" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#dcf986" filter="url(#m-neon-lime-glow)">
                <animateMotion dur={`${dur * 0.85}s`} begin={`-${dur * 0.85}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-2" />
                </animateMotion>
              </circle>

              {/* Dots out to Solved 3 */}
              <circle r="4" fill="#10b981" filter="url(#m-neon-green-glow)">
                <animateMotion dur={`${dur}s`} begin="-0.5s" repeatCount="indefinite">
                  <mpath href="#m-path-solved-3" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="#ffffff">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.75}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-3" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#dcf986" filter="url(#m-neon-lime-glow)">
                <animateMotion dur={`${dur}s`} begin={`-${dur * 0.9}s`} repeatCount="indefinite">
                  <mpath href="#m-path-solved-3" />
                </animateMotion>
              </circle>
            </g>
          </svg>
        </div>

        {/* ================= BOTTOM SECTION: SOLVED FOR YOUR BUSINESS ================= */}
        <div style={{ position: 'relative', width: '100%', marginBottom: 28 }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#22c55e',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 12,
            }}
          >
            <CheckCircle2 size={13} />
            Solved For Your Business
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Solved 1 */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#22c55e' }}
              style={{
                width: '100%',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#dcf986',
                      boxShadow: '0 0 8px #dcf986',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Solved Invoicing</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(34, 197, 94, 0.18)',
                    color: '#4ade80',
                    fontWeight: 600,
                  }}
                >
                  Rule 46 Ready
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35, paddingLeft: 14 }}>
                100% compliant tax invoices with dynamic UPI QR &amp; IRN
              </div>
            </motion.div>

            {/* Solved 2 */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#22c55e' }}
              style={{
                width: '100%',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Solved Accounting</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(34, 197, 94, 0.18)',
                    color: '#4ade80',
                    fontWeight: 600,
                  }}
                >
                  GSTR-1, 3B &amp; 2B
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35, paddingLeft: 14 }}>
                Auto-reconciled ITC &amp; 1-click JSON export for portal filing
              </div>
            </motion.div>

            {/* Solved 3 */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: '#22c55e' }}
              style={{
                width: '100%',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 14,
                padding: '10px 14px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px -6px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 8px #10b981',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>Solved Cash Flow</span>
                </div>
                <span
                  style={{
                    fontSize: '0.66rem',
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: 'rgba(34, 197, 94, 0.18)',
                    color: '#4ade80',
                    fontWeight: 600,
                  }}
                >
                  MSME Protected
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35, paddingLeft: 14 }}>
                Automated WhatsApp payment reminders &amp; zero tax disputes
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer banner of the animation stage */}
      <div
        style={{
          marginTop: 24,
          paddingTop: 16,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.65)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ShieldCheck size={16} color="#dcf986" style={{ flexShrink: 0 }} />
          <span>No more manual Excel reconciliations, late fees, or mismatched GST notices.</span>
        </div>
        <div style={{ fontWeight: 600, color: '#dcf986', flexShrink: 0 }}>
          Input chaos in &rarr; Audit-ready accounting out.
        </div>
      </div>
    </div>
  );
}
