'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Percent,
  Layers,
  ArrowUpDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GSTCalculatorWidget() {
  const [amount, setAmount] = useState<number>(10000);
  const [selectedRate, setSelectedRate] = useState<number>(18);
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState<string>('18');
  const [taxMode, setTaxMode] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [supplyType, setSupplyType] = useState<'intra' | 'inter'>('intra');
  const [copied, setCopied] = useState(false);

  const rate = isCustomRate ? parseFloat(customRate) || 0 : selectedRate;

  const result = useMemo(() => {
    const rawAmt = Math.max(0, amount || 0);
    if (taxMode === 'exclusive') {
      // Amount is net (base price), add GST
      const taxTotal = (rawAmt * rate) / 100;
      const grossTotal = rawAmt + taxTotal;
      const cgst = supplyType === 'intra' ? taxTotal / 2 : 0;
      const sgst = supplyType === 'intra' ? taxTotal / 2 : 0;
      const igst = supplyType === 'inter' ? taxTotal : 0;
      return {
        baseAmount: rawAmt,
        taxTotal,
        grossTotal,
        cgst,
        sgst,
        igst,
        taxPercent: rate,
      };
    } else {
      // Amount is inclusive of GST, extract GST
      const baseAmount = (rawAmt * 100) / (100 + rate);
      const taxTotal = rawAmt - baseAmount;
      const cgst = supplyType === 'intra' ? taxTotal / 2 : 0;
      const sgst = supplyType === 'intra' ? taxTotal / 2 : 0;
      const igst = supplyType === 'inter' ? taxTotal : 0;
      return {
        baseAmount,
        taxTotal,
        grossTotal: rawAmt,
        cgst,
        sgst,
        igst,
        taxPercent: rate,
      };
    }
  }, [amount, rate, taxMode, supplyType]);

  const copySummary = () => {
    const text = `Billenza GST Calculation Summary:
• Base / Net Amount: ₹${result.baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
• GST Rate: ${result.taxPercent}% (${supplyType === 'intra' ? 'Intra-State: CGST + SGST' : 'Inter-State: IGST'})
• ${supplyType === 'intra' ? `CGST (${result.taxPercent / 2}%): ₹${result.cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n• SGST (${result.taxPercent / 2}%): ₹${result.sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}` : `IGST (${result.taxPercent}%): ₹${result.igst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`}
• Total GST Amount: ₹${result.taxTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
• Total Invoice Value: ₹${result.grossTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
Generated via Billenza GST Engine (https://billenza.com/tools/gst-calculator)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const basePercent = (result.baseAmount / (result.grossTotal || 1)) * 100;
  const taxPercent = (result.taxTotal / (result.grossTotal || 1)) * 100;

  return (
    <div className="calc-card" style={{ maxWidth: 940, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
        {/* Input parameters */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <span className="badge-chip lime">
              <Calculator size={13} /> GST Calculator Engine
            </span>
            <button
              onClick={() => {
                setAmount(10000);
                setSelectedRate(18);
                setIsCustomRate(false);
                setTaxMode('exclusive');
                setSupplyType('intra');
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 12,
                color: '#71717a',
                fontWeight: 600,
              }}
              title="Reset values"
            >
              <RefreshCw size={13} /> Reset
            </button>
          </div>

          {/* Amount Input */}
          <div className="calc-input-group">
            <label htmlFor="gst-amount">
              {taxMode === 'exclusive' ? 'Base Amount (Excl. Tax)' : 'Total Invoice Value (Incl. Tax)'}
            </label>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--ink)',
                }}
              >
                ₹
              </span>
              <input
                id="gst-amount"
                type="number"
                min="0"
                step="100"
                value={amount === 0 ? '' : amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="10000"
                className="calc-input"
                style={{ paddingLeft: 38 }}
              />
            </div>
          </div>

          {/* Tax Mode Switcher */}
          <div className="calc-input-group">
            <label>GST Calculation Mode</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button
                type="button"
                onClick={() => setTaxMode('exclusive')}
                className={`slab-btn ${taxMode === 'exclusive' ? 'active' : ''}`}
                style={{ fontSize: 13, padding: '10px 12px' }}
              >
                GST Exclusive (+ Tax)
              </button>
              <button
                type="button"
                onClick={() => setTaxMode('inclusive')}
                className={`slab-btn ${taxMode === 'inclusive' ? 'active' : ''}`}
                style={{ fontSize: 13, padding: '10px 12px' }}
              >
                GST Inclusive (Reverse)
              </button>
            </div>
          </div>

          {/* Slab Selector */}
          <div className="calc-input-group">
            <label>Standard GST Tax Slab</label>
            <div className="slab-selector">
              {[0, 5, 12, 18, 28].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSelectedRate(s);
                    setIsCustomRate(false);
                  }}
                  className={`slab-btn ${!isCustomRate && selectedRate === s ? 'active' : ''}`}
                >
                  {s}%
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsCustomRate(true)}
                className={`slab-btn ${isCustomRate ? 'active' : ''}`}
                style={{ fontSize: 13 }}
              >
                Custom
              </button>
            </div>
            {isCustomRate && (
              <div style={{ marginTop: 8 }}>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  placeholder="Enter custom rate %"
                  className="calc-input"
                  style={{ fontSize: 15, padding: '8px 12px' }}
                />
              </div>
            )}
          </div>

          {/* Intra vs Inter-State */}
          <div className="calc-input-group" style={{ marginBottom: 0 }}>
            <label>Jurisdiction of Supply</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button
                type="button"
                onClick={() => setSupplyType('intra')}
                className={`slab-btn ${supplyType === 'intra' ? 'active' : ''}`}
                style={{ fontSize: 13, padding: '10px 12px' }}
              >
                Intra-State (CGST + SGST)
              </button>
              <button
                type="button"
                onClick={() => setSupplyType('inter')}
                className={`slab-btn ${supplyType === 'inter' ? 'active' : ''}`}
                style={{ fontSize: 13, padding: '10px 12px' }}
              >
                Inter-State (IGST)
              </button>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="result-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Statutory Breakdown
              </span>
              <button
                type="button"
                onClick={copySummary}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  color: '#fff',
                  padding: '4px 10px',
                  fontSize: 12,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                {copied ? <Check size={13} color="#dcf986" /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Proportion Bar */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  height: 10,
                  width: '100%',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.15)',
                  overflow: 'hidden',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    width: `${basePercent}%`,
                    background: '#ffffff',
                    transition: 'width 0.3s ease',
                  }}
                  title={`Base Price: ${basePercent.toFixed(1)}%`}
                />
                <div
                  style={{
                    width: `${taxPercent}%`,
                    background: '#dcf986',
                    transition: 'width 0.3s ease',
                  }}
                  title={`GST Tax: ${taxPercent.toFixed(1)}%`}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
                <span>Base ({basePercent.toFixed(1)}%)</span>
                <span style={{ color: '#dcf986' }}>GST ({taxPercent.toFixed(1)}%)</span>
              </div>
            </div>

            {/* Line items */}
            <div className="result-row">
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Base (Net) Amount</span>
              <span style={{ fontWeight: 600 }}>
                ₹{result.baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
              </span>
            </div>

            {supplyType === 'intra' ? (
              <>
                <div className="result-row">
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>CGST ({result.taxPercent / 2}%)</span>
                  <span style={{ fontWeight: 600, color: '#dcf986' }}>
                    + ₹{result.cgst.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="result-row">
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>SGST ({result.taxPercent / 2}%)</span>
                  <span style={{ fontWeight: 600, color: '#dcf986' }}>
                    + ₹{result.sgst.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                  </span>
                </div>
              </>
            ) : (
              <div className="result-row">
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>IGST ({result.taxPercent}%)</span>
                <span style={{ fontWeight: 600, color: '#dcf986' }}>
                  + ₹{result.igst.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </span>
              </div>
            )}

            <div className="result-row">
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Total GST Calculated</span>
              <span style={{ fontWeight: 700, color: '#dcf986' }}>
                ₹{result.taxTotal.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="result-row" style={{ paddingTop: 18, borderTop: '2px solid rgba(255,255,255,0.2)' }}>
              <div>
                <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)' }}>
                  Total Invoice Value
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
                  (Statutory Gross Payable)
                </div>
              </div>
              <div className="result-total">
                ₹{result.grossTotal.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div style={{ marginTop: 20 }}>
            <Link
              href="/pricing"
              className="pill pill-ink"
              style={{ width: '100%', justifyContent: 'center', height: 48, fontSize: 14 }}
            >
              Generate GST Invoice With These Numbers
              <span className="pill-arrow" style={{ width: 32, height: 32 }}>
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
