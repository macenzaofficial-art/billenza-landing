'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import CheckoutModal from './CheckoutModal';

interface PricingTableProps {
  initialCadence?: 'monthly' | 'yearly';
}

export default function PricingTable({ initialCadence = 'monthly' }: PricingTableProps) {
  const [cadence, setCadence] = useState<'monthly' | 'yearly'>(initialCadence);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'pro_monthly' | 'pro_yearly'>('pro_monthly');

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.billenza.com';

  const handleOpenCheckout = (plan: 'pro_monthly' | 'pro_yearly') => {
    setCheckoutPlan(plan);
    setCheckoutOpen(true);
  };

  return (
    <>
      {/* Cadence switch */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: 4,
            background: 'var(--bone)',
            borderRadius: 999,
            border: '1px solid var(--line)',
          }}
        >
          <button
            type="button"
            onClick={() => setCadence('monthly')}
            style={{
              padding: '10px 24px',
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              background: cadence === 'monthly' ? '#1d1d1d' : 'transparent',
              color: cadence === 'monthly' ? '#ffffff' : '#64748b',
              transition: 'all 0.2s ease',
            }}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setCadence('yearly')}
            style={{
              padding: '10px 24px',
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: cadence === 'yearly' ? '#1d1d1d' : 'transparent',
              color: cadence === 'yearly' ? '#ffffff' : '#64748b',
              transition: 'all 0.2s ease',
            }}
          >
            Annual Billing
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                background: '#dcf986',
                color: '#1d1d1d',
                padding: '2px 8px',
                borderRadius: 999,
              }}
            >
              2 MONTHS FREE
            </span>
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="plans" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, maxWidth: 960, margin: '0 auto' }}>
        {/* Starter Plan */}
        <div
          className="plan"
          style={{
            background: '#ffffff',
            border: '1px solid var(--line)',
            borderRadius: 24,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="badge-chip">EVALUATION TIER</div>
            <h3 style={{ fontSize: 24, margin: '14px 0 6px', fontWeight: 700 }}>Starter Free</h3>
            <p style={{ color: 'var(--gray)', fontSize: 14, lineHeight: 1.5, minHeight: 42 }}>
              Ideal for new solopreneurs and freelancers issuing initial domestic tax invoices.
            </p>

            <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' }}>₹0</span>
              <span style={{ color: 'var(--gray)', fontSize: 14 }}>/ forever free</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              {[
                'Up to 30 GST Invoices / month',
                'Automatic CGST / SGST / IGST calculation',
                'Standard PDF Invoice templates',
                'Customer & Client directory',
                'Community documentation & guide',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="check-icon" style={{ width: 18, height: 18 }}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`${appUrl}?mode=signup`}
            className="pill pill-ghost"
            style={{ width: '100%', justifyContent: 'center', height: 50 }}
          >
            Start Free
            <span className="pill-arrow gray" style={{ width: 34, height: 34 }}>
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* Pro Cloud Plan (Highlighted) */}
        <div
          className="plan featured"
          style={{
            background: 'var(--ink)',
            color: '#ffffff',
            borderRadius: 24,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 24px 60px -15px rgba(29, 29, 29, 0.4)',
            border: '2px solid rgba(220, 249, 134, 0.4)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -14,
              right: 32,
              background: '#dcf986',
              color: '#1d1d1d',
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: 999,
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            }}
          >
            MOST POPULAR &bull; ALL ENGINES
          </div>

          <div>
            <div className="badge-chip lime" style={{ color: '#1d1d1d' }}>
              <Zap size={13} /> COMPLETE COMPLIANCE
            </div>
            <h3 style={{ fontSize: 24, margin: '14px 0 6px', fontWeight: 700, color: '#ffffff' }}>Pro Cloud</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14, lineHeight: 1.5, minHeight: 42 }}>
              For growing SMEs, traders, exporters, and chartered accountants managing statutory returns.
            </p>

            <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: 6 }}>
              {cadence === 'monthly' ? (
                <>
                  <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', color: '#dcf986' }}>₹499</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14 }}>/ month + GST</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', color: '#dcf986' }}>₹4,999</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14 }}>/ year (₹416/mo)</span>
                </>
              )}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              {[
                'Unlimited GST Tax Invoices & Delivery Challans',
                'Instant e-Way Bill NIC JSON generation (Part A & B)',
                'GSTR-1 & GSTR-3B compilation & GSTR-2B ITC reconciliation',
                'Multi-Currency Export Invoicing in 22 global currencies with LUT',
                'Smart Inventory Radar with real-time stock alert thresholds',
                'Customer Ledger Accounts & outstanding payment tracking',
                'Priority Phone & Email Help Desk with CA support',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ffffff' }}>
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 999,
                      background: '#dcf986',
                      color: '#1d1d1d',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handleOpenCheckout(cadence === 'monthly' ? 'pro_monthly' : 'pro_yearly')}
            className="pill pill-lime"
            style={{ width: '100%', justifyContent: 'center', height: 50, fontWeight: 700 }}
          >
            Upgrade to Pro — {cadence === 'monthly' ? '₹499/mo' : '₹4,999/yr'}
            <span className="pill-arrow" style={{ width: 34, height: 34, background: '#1d1d1d', color: '#dcf986' }}>
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        initialPlan={checkoutPlan}
        appUrl={appUrl}
      />
    </>
  );
}
