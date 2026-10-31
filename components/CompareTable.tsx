'use client';

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function CompareTable() {
  const comparisonData = [
    {
      feature: 'Cloud Access Anywhere (Mac, PC, Mobile)',
      billenza: true,
      tally: false,
      vyapar: 'Desktop lock-in',
      zoho: true,
    },
    {
      feature: 'Setup & First Invoice Time',
      billenza: '< 60 seconds',
      tally: 'Several days / trained staff',
      vyapar: '1-2 hours',
      zoho: '30-45 mins',
    },
    {
      feature: 'Multi-Currency Export Billing (22 Currencies)',
      billenza: true,
      tally: 'Complex add-ons',
      vyapar: false,
      zoho: 'Higher tiers only',
    },
    {
      feature: 'Statutory LUT Reference & Zero-Rated Notes',
      billenza: true,
      tally: 'Manual customization',
      vyapar: false,
      zoho: 'Partial',
    },
    {
      feature: 'NIC 1-Click e-Way Bill JSON Generation',
      billenza: true,
      tally: 'Extra module required',
      vyapar: 'Limited/paid add-on',
      zoho: 'Add-on fees',
    },
    {
      feature: 'GSTR-1 & GSTR-3B Offline Tool-Ready JSON',
      billenza: true,
      tally: true,
      vyapar: 'Basic Excel only',
      zoho: true,
    },
    {
      feature: 'GSTR-2B ITC Reconciliation Engine',
      billenza: true,
      tally: 'Manual audit',
      vyapar: false,
      zoho: 'Higher tiers only',
    },
    {
      feature: 'Smart Inventory Radar & Low-Stock Alerts',
      billenza: true,
      tally: true,
      vyapar: true,
      zoho: 'Separate app (Zoho Inventory)',
    },
    {
      feature: 'Direct Razorpay UPI / Card Payment Links',
      billenza: true,
      tally: false,
      vyapar: 'Basic QR',
      zoho: true,
    },
    {
      feature: 'Transparent All-Inclusive Pricing',
      billenza: '₹499/mo (All engines)',
      tally: '₹18,000+ upfront + AMC',
      vyapar: 'Per-device license fees',
      zoho: 'Tiered + per-user charges',
    },
  ];

  return (
    <div className="compare-container">
      <table className="compare-table">
        <thead>
          <tr>
            <th style={{ width: '34%' }}>Platform Capability</th>
            <th className="highlight" style={{ width: '22%', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Sparkles size={14} /> Billenza Pro
              </div>
            </th>
            <th style={{ width: '15%', textAlign: 'center' }}>TallyPrime</th>
            <th style={{ width: '15%', textAlign: 'center' }}>Vyapar</th>
            <th style={{ width: '14%', textAlign: 'center' }}>Zoho Books</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, idx) => (
            <tr key={idx}>
              <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{row.feature}</td>

              {/* Billenza */}
              <td className="highlight" style={{ textAlign: 'center' }}>
                {typeof row.billenza === 'boolean' ? (
                  <span className="check-icon">
                    <Check size={14} strokeWidth={3} />
                  </span>
                ) : (
                  <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{row.billenza}</span>
                )}
              </td>

              {/* Tally */}
              <td style={{ textAlign: 'center', color: '#64748b' }}>
                {typeof row.tally === 'boolean' ? (
                  row.tally ? (
                    <span className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="cross-icon">
                      <X size={14} />
                    </span>
                  )
                ) : (
                  row.tally
                )}
              </td>

              {/* Vyapar */}
              <td style={{ textAlign: 'center', color: '#64748b' }}>
                {typeof row.vyapar === 'boolean' ? (
                  row.vyapar ? (
                    <span className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="cross-icon">
                      <X size={14} />
                    </span>
                  )
                ) : (
                  row.vyapar
                )}
              </td>

              {/* Zoho */}
              <td style={{ textAlign: 'center', color: '#64748b' }}>
                {typeof row.zoho === 'boolean' ? (
                  row.zoho ? (
                    <span className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="cross-icon">
                      <X size={14} />
                    </span>
                  )
                ) : (
                  row.zoho
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
