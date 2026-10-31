'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px 24px' }}>
          {/* Brand info */}
          <div className="foot-brand" style={{ maxWidth: 300 }}>
            <Link href="/" className="brand" aria-label="Billenza Home">
              <span className="brand-chip" aria-hidden="true">
                <Zap size={20} fill="#DCF986" stroke="#1D1D1D" />
              </span>
              <span className="brand-word light" style={{ color: '#fff' }}>Billenza</span>
            </Link>
            <p>
              Precision GST Invoicing, GSTR-1/3B Returns, Inventory Radar, and Multi-Currency Financial Suite engineered for Indian enterprises.
            </p>
            <div className="status-line">
              <span className="ndot live"></span>
              ALL SYSTEMS OPERATIONAL &bull; GSTN SYNC 100%
            </div>
            <div style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={14} color="#dcf986" /> 256-Bit SSL &bull; Data Localized in India
            </div>
          </div>

          {/* Platform Features */}
          <div className="foot-col">
            <h4>Features</h4>
            <Link href="/features">All Capabilities</Link>
            <Link href="/features/gst-invoicing">GST Tax Invoicing</Link>
            <Link href="/features/eway-bill">e-Way Bill Generator</Link>
            <Link href="/features/gstr-reports">GSTR-1 &amp; 3B Returns</Link>
            <Link href="/features/multi-currency">Multi-Currency Suite</Link>
            <Link href="/features/inventory">Inventory Radar</Link>
          </div>

          {/* Solutions */}
          <div className="foot-col">
            <h4>Solutions</h4>
            <Link href="/solutions/freelancers-exporters">Freelancers &amp; Exporters</Link>
            <Link href="/solutions/retail-wholesale">Retail &amp; Wholesale</Link>
            <Link href="/solutions/chartered-accountants">Chartered Accountants</Link>
            <Link href="/compare">Billenza vs Traditional</Link>
          </div>

          {/* Resources & Free Tools */}
          <div className="foot-col">
            <h4>Free Resources</h4>
            <Link href="/tools/gst-calculator">Free GST Calculator</Link>
            <Link href="/pricing">Pricing &amp; ROI Calculator</Link>
            <Link href="/compare">Compare Alternatives</Link>
            <a href="https://services.gst.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              GST Portal (Official) <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Company */}
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/about">About Billenza</Link>
            <Link href="/pricing">Pricing Plans</Link>
            <Link href="/contact">Contact Support</Link>
            <Link href="/about#security">Security Standards</Link>
          </div>

          {/* Legal */}
          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/refund-policy">Cancellation &amp; Refunds</Link>
            <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
            <Link href="/contact">Grievance Redressal</Link>
          </div>
        </div>

        {/* Base strip */}
        <div className="foot-base" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 24 }}>
          <div>
            &copy; {new Date().getFullYear()} Macenza / Billenza. All statutory rights reserved.
          </div>
          <div>
            Operated by <strong>Macenza</strong> (Proprietor: <strong>Shashank Shubham</strong>) &bull; Ajmer, Rajasthan, India.
          </div>
        </div>
      </div>
    </footer>
  );
}
