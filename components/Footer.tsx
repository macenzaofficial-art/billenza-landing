import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Footer({ className, style }: FooterProps) {
  return (
    <footer className={`footer ${className || ''}`.trim()} style={style}>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand" style={{ marginBottom: 16, display: 'inline-block', textDecoration: 'none' }}>
              <Image
                src="/billenza-logo-white.webp"
                alt="Billenza"
                width={140}
                height={45}
                style={{ height: 38, width: 'auto', objectFit: 'contain' }}
              />
            </Link>
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
            <Link href="/features">All GST Features</Link>
            <Link href="/features#tax-invoices">Tax Invoicing</Link>
            <Link href="/features#eway-bills">e-Way Bill Generator</Link>
            <Link href="/features#gstr1-json">GSTR-1 &amp; 3B Filing</Link>
            <Link href="/features#multi-currency-exports">Multi-Currency Suite</Link>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/pricing">Pricing Plans</Link>
            <Link href="/#faq">Compliance &amp; Security</Link>
            <Link href="/contact">Contact &amp; Support</Link>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/about#credits">Open Source Notices</Link>
            <Link href="/refund-policy">Cancellation &amp; Refunds</Link>
            <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
            <Link href="/contact">Grievance Redressal</Link>
          </div>
        </div>

        <div className="foot-base">
          <div>&copy; 2026 Macenza / Billenza. All rights reserved.</div>
          <div>Operated by Macenza &bull; Incorporating open-source components under the MIT License.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
