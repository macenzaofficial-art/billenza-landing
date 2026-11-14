'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FileText,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
  RefreshCw,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BillFlowPipeline() {
  const [activeSpeed, setActiveSpeed] = useState<'normal' | 'fast'>('normal');
  const [pulseCount, setPulseCount] = useState<number>(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const dur = activeSpeed === 'normal' ? 2.8 : 1.6;

  return (
    <div
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
        padding: '36px 24px 32px',
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
          gap: 16,
          marginBottom: 32,
          paddingBottom: 20,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
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
          <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
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
              gap: 6,
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

          <button
            type="button"
            onClick={() => setActiveSpeed((s) => (s === 'normal' ? 'fast' : 'normal'))}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 999,
              padding: '4px 12px',
              color: '#fff',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
            title="Toggle simulation speed"
          >
            <RefreshCw size={12} className={activeSpeed === 'fast' ? 'spin' : ''} />
            {activeSpeed === 'normal' ? 'Speed: 1x' : 'Speed: 2x'}
          </button>
        </div>
      </div>

      {/* Main Interactive SVG & Stage Layout */}
      <div style={{ position: 'relative', width: '100%', minHeight: 460 }}>
        {/* SVG Drawing Layer for Curved Paths & Animated Dots */}
        <svg
          viewBox="0 0 1000 460"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
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

          {/* ================= ANIMATED GLOWING DOTS (Incoming) ================= */}
          {/* Dots from Bill 1 */}
          <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur}s`} repeatCount="indefinite">
              <mpath href="#path-bill-1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.33}s`} repeatCount="indefinite">
              <mpath href="#path-bill-1" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#60a5fa" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.66}s`} repeatCount="indefinite">
              <mpath href="#path-bill-1" />
            </animateMotion>
          </circle>

          {/* Dots from Bill 2 */}
          <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur * 0.85}s`} begin="0.1s" repeatCount="indefinite">
              <mpath href="#path-bill-2" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff">
            <animateMotion dur={`${dur * 0.85}s`} begin={`${dur * 0.45}s`} repeatCount="indefinite">
              <mpath href="#path-bill-2" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#93c5fd" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur * 0.85}s`} begin={`${dur * 0.75}s`} repeatCount="indefinite">
              <mpath href="#path-bill-2" />
            </animateMotion>
          </circle>

          {/* Dots from Bill N */}
          <circle r="4.5" fill="#38bdf8" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur}s`} begin="0.3s" repeatCount="indefinite">
              <mpath href="#path-bill-n" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.55}s`} repeatCount="indefinite">
              <mpath href="#path-bill-n" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#60a5fa" filter="url(#neon-blue-glow)">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.85}s`} repeatCount="indefinite">
              <mpath href="#path-bill-n" />
            </animateMotion>
          </circle>

          {/* ================= ANIMATED GLOWING DOTS (Outgoing to Solved) ================= */}
          {/* Dots out to Solved 1 */}
          <circle r="5" fill="#dcf986" filter="url(#neon-lime-glow)">
            <animateMotion dur={`${dur}s`} begin="0.4s" repeatCount="indefinite">
              <mpath href="#path-solved-1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.65}s`} repeatCount="indefinite">
              <mpath href="#path-solved-1" />
            </animateMotion>
          </circle>
          <circle r="4.5" fill="#22c55e" filter="url(#neon-green-glow)">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.95}s`} repeatCount="indefinite">
              <mpath href="#path-solved-1" />
            </animateMotion>
          </circle>

          {/* Dots out to Solved 2 */}
          <circle r="5" fill="#22c55e" filter="url(#neon-green-glow)">
            <animateMotion dur={`${dur * 0.85}s`} begin="0.25s" repeatCount="indefinite">
              <mpath href="#path-solved-2" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#ffffff">
            <animateMotion dur={`${dur * 0.85}s`} begin={`${dur * 0.55}s`} repeatCount="indefinite">
              <mpath href="#path-solved-2" />
            </animateMotion>
          </circle>
          <circle r="4.5" fill="#dcf986" filter="url(#neon-lime-glow)">
            <animateMotion dur={`${dur * 0.85}s`} begin={`${dur * 0.85}s`} repeatCount="indefinite">
              <mpath href="#path-solved-2" />
            </animateMotion>
          </circle>

          {/* Dots out to Solved 3 */}
          <circle r="5" fill="#10b981" filter="url(#neon-green-glow)">
            <animateMotion dur={`${dur}s`} begin="0.5s" repeatCount="indefinite">
              <mpath href="#path-solved-3" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff">
            <animateMotion dur={`${dur}s`} begin={`${dur * 0.75}s`} repeatCount="indefinite">
              <mpath href="#path-solved-3" />
            </animateMotion>
          </circle>
          <circle r="4.5" fill="#dcf986" filter="url(#neon-lime-glow)">
            <animateMotion dur={`${dur}s`} begin={`${dur * 1.05}s`} repeatCount="indefinite">
              <mpath href="#path-solved-3" />
            </animateMotion>
          </circle>
        </svg>

        {/* HTML / React Card Nodes Overlaid on the Stage */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'minmax(210px, 240px) 1fr minmax(230px, 260px)',
            gap: 20,
            alignItems: 'center',
            minHeight: 460,
          }}
        >
          {/* ================= LEFT COLUMN: BILL 1, BILL 2, BILL N ================= */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
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
                marginBottom: -12,
              }}
            >
              <FileText size={13} />
              Raw Business Inputs
            </div>

            {/* Bill 1 */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Bill 1</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                  ₹18,400 • 18%
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Vendor supply invoice with raw items
              </div>
            </motion.div>

            {/* Bill 2 */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Bill 2</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                  ₹64,200 • IGST
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Inter-state purchase &amp; freight slip
              </div>
            </motion.div>

            {/* Bill N */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#38bdf8' }}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Bill N ...</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                  Bulk Receipts
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                100s of monthly inward &amp; POS bills
              </div>
            </motion.div>
          </div>

          {/* ================= CENTER COLUMN: BILLENZA CORE NEXUS ================= */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 10px',
            }}
          >
            {/* Animated Pulser Rings */}
            <div style={{ position: 'relative', width: 170, height: 170, margin: '0 auto 16px' }}>
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: '0.78rem',
                color: 'rgba(255, 255, 255, 0.85)',
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
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
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
                marginBottom: -12,
              }}
            >
              <CheckCircle2 size={13} />
              Solved For Your Business
            </div>

            {/* Solved 1: Invoicing */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
              style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Solved Invoicing</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                  Rule 46 Ready
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                100% compliant tax invoices with dynamic UPI QR &amp; IRN
              </div>
            </motion.div>

            {/* Solved 2: Accounting */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
              style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Solved Accounting</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                  GSTR-1, 3B &amp; 2B
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Auto-reconciled ITC &amp; 1-click JSON export for portal filing
              </div>
            </motion.div>

            {/* Solved 3: Business Problem */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: '#22c55e' }}
              style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: 16,
                padding: '14px 16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Solved Cash Flow</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80', fontWeight: 600 }}>
                  MSME Protected
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Automated WhatsApp payment reminders &amp; zero tax disputes
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer banner of the animation stage */}
      <div
        style={{
          marginTop: 28,
          paddingTop: 18,
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
          <ShieldCheck size={16} color="#dcf986" />
          <span>No more manual Excel reconciliations, late fees, or mismatched GST notices.</span>
        </div>
        <div style={{ fontWeight: 600, color: '#dcf986' }}>
          Input chaos in &rarr; Audit-ready accounting out.
        </div>
      </div>
    </div>
  );
}
