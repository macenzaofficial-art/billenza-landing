'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onOpenCheckout?: (plan?: 'pro_monthly' | 'pro_yearly') => void;
}

export default function CTASection({
  title = 'Ready To Streamline Your GST Billing?',
  description = 'Join thousands of Indian businesses, exporters, and chartered accountants generating compliant invoices and filing GSTR returns with ironclad confidence.',
  buttonText = 'Get Started Now — ₹499/mo',
  buttonHref = '/pricing',
  onOpenCheckout,
}: CTASectionProps) {
  return (
    <section className="cta-band" style={{ padding: '64px 0' }}>
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero-grid sm" aria-hidden="true"></div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 14px',
              borderRadius: 999,
              fontSize: '12px',
              fontWeight: 700,
              color: '#dcf986',
              marginBottom: 16,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} />
            ZERO SETUP HASSLE &bull; INSTANT GSTN SYNC
          </div>

          <h2>{title}</h2>
          <p>{description}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 12 }}>
            {onOpenCheckout ? (
              <button
                onClick={() => onOpenCheckout('pro_monthly')}
                className="pill pill-lime pill-lg"
              >
                {buttonText}
                <span className="pill-arrow">
                  <ArrowRight size={20} />
                </span>
              </button>
            ) : (
              <Link href={buttonHref} className="pill pill-lime pill-lg">
                {buttonText}
                <span className="pill-arrow">
                  <ArrowRight size={20} />
                </span>
              </Link>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 24,
              marginTop: 28,
              fontSize: 13,
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#dcf986" /> 14-Day Free Evaluation
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#dcf986" /> Cancel Anytime, Zero Lock-in
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#dcf986" /> Razorpay Verified &amp; Encrypted
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
