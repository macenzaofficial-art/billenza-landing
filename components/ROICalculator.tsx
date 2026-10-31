'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp, Clock, ShieldCheck, IndianRupee } from 'lucide-react';

export default function ROICalculator() {
  const [invoicesPerMonth, setInvoicesPerMonth] = useState<number>(150);
  const [hourlyRate, setHourlyRate] = useState<number>(400);

  const stats = useMemo(() => {
    // Assumptions:
    // Manual invoicing + e-way generation + return reconciliation takes ~12 mins (0.2 hr) per invoice.
    // Billenza cuts this down to ~1.5 mins (0.025 hr) per invoice.
    const manualHours = (invoicesPerMonth * 12) / 60;
    const billenzaHours = (invoicesPerMonth * 1.5) / 60;
    const hoursSavedMonthly = Math.max(1, Math.round(manualHours - billenzaHours));

    const grossMonthlySavings = hoursSavedMonthly * hourlyRate;
    const annualSavingsGross = grossMonthlySavings * 12;
    const billenzaAnnualCost = 4999; // Annual Pro plan
    const netAnnualSavings = Math.max(0, annualSavingsGross - billenzaAnnualCost);
    const roiMultiplier = Math.round((annualSavingsGross / (billenzaAnnualCost || 1)) * 10) / 10;

    return {
      hoursSavedMonthly,
      grossMonthlySavings,
      netAnnualSavings,
      roiMultiplier,
    };
  }, [invoicesPerMonth, hourlyRate]);

  return (
    <div className="card-premium" style={{ maxWidth: 840, margin: '0 auto', background: '#fafafa' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <span className="badge-chip lime" style={{ marginBottom: 10 }}>
          <TrendingUp size={13} /> Return on Investment
        </span>
        <h3 style={{ fontSize: 26, fontWeight: 700, margin: '4px 0 8px' }}>
          Calculate Your Time &amp; Cost Savings
        </h3>
        <p style={{ color: 'var(--gray)', fontSize: 14, maxWidth: 540, margin: '0 auto' }}>
          See how much manual accounting labor and filing fees you eliminate by automating GST compliance with Billenza.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
        {/* Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14, fontWeight: 700 }}>
              <span>Monthly Invoices Generated</span>
              <span style={{ color: 'var(--ink)', fontSize: 16 }}>{invoicesPerMonth} invoices</span>
            </div>
            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={invoicesPerMonth}
              onChange={(e) => setInvoicesPerMonth(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--ink)', cursor: 'pointer', height: 6 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 4 }}>
              <span>20</span>
              <span>500</span>
              <span>1,000+</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14, fontWeight: 700 }}>
              <span>Estimated Team / CA Hourly Cost</span>
              <span style={{ color: 'var(--ink)', fontSize: 16 }}>₹{hourlyRate}/hr</span>
            </div>
            <input
              type="range"
              min="150"
              max="1500"
              step="50"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--ink)', cursor: 'pointer', height: 6 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 4 }}>
              <span>₹150/hr</span>
              <span>₹750/hr</span>
              <span>₹1,500/hr</span>
            </div>
          </div>
        </div>

        {/* Dynamic ROI Display */}
        <div
          style={{
            background: 'var(--ink)',
            color: '#ffffff',
            borderRadius: 20,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lime)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Projected Annual Value
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#ffffff', margin: '8px 0 4px', letterSpacing: '-0.02em' }}>
              ₹{stats.netAnnualSavings.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)' }}>
              Net annual savings after ₹4,999/yr Pro subscription
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 16, marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Hours Saved Monthly</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--lime)' }}>{stats.hoursSavedMonthly} hrs/mo</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Estimated ROI</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--lime)' }}>{stats.roiMultiplier}x return</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
