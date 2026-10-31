import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, CheckCircle2, ShieldCheck, Mail, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Shipping & Delivery Policy — Billenza',
  description: 'Digital service fulfillment terms and instant provisioning policy for Billenza GST Billing SaaS.',
};

export default function ShippingPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', color: '#1d1d1d', fontFamily: 'inherit' }}>
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#1d1d1d', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} />
            Back to Billenza
          </Link>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Last updated: October 2026</span>
        </div>
      </header>

      <main style={{ maxWidth: 840, margin: '2.5rem auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCF986', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            <Truck size={14} />
            DIGITAL FULFILLMENT &amp; SERVICE DELIVERY
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Shipping &amp; Delivery Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0 0 2rem' }}>
            Digital Service Delivery &amp; Subscription Fulfillment Terms for Billenza, a product of Macenza.
          </p>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>1. 100% Digital Service Delivery (No Physical Shipping)</h2>
            <p>
              Billenza is a cloud-hosted Software-as-a-Service (SaaS) financial compliance and GST invoicing platform operated by <strong>Macenza</strong> (Sole Proprietorship: <strong>Shashank Shubham</strong>).
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              We provide electronic software services exclusively. <strong>No physical products, hardware, paper invoices, or installation media are shipped, couriered, or dispatched to your physical postal address.</strong> All tools, reports, calculation engines, and databases are accessed entirely through our secure web portal.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>2. Provisioning &amp; Activation Timeline</h2>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: '#0f172a' }}>Instant Automated Activation (Within 5 Minutes):</strong>
                  <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                    Upon successful authorization and settlement of your subscription payment via our Reserve Bank of India (RBI) authorized payment aggregator (Razorpay), your account subscription tier is upgraded automatically and provisioned immediately.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Once your payment is confirmed:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Your cloud invoicing workspace on <code>app.billenza.com</code> unlocks instantly with unlimited document generation, inventory tracking, and GSTR export tools.</li>
              <li>A formal digital payment receipt, tax invoice for your subscription, and account confirmation are immediately dispatched to your registered account email address.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>3. Shipping &amp; Fulfillment Charges</h2>
            <p>
              Because Billenza is provisioned electronically over secure cloud networks, <strong>shipping and delivery charges are ₹0.00 (Free / Zero)</strong> across all plans and subscription cycles. You will never be charged any delivery, courier, customs, or handling fee.
            </p>
          </section>

          <section style={{ marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>4. Delivery Failure &amp; Technical Support</h2>
            <p>
              In rare instances where technical network latency or banking communication delays prevent your workspace from upgrading automatically after payment:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Check your registered email address for the Razorpay transaction confirmation and payment ID.</li>
              <li>Log out and log back in to your Billenza console to refresh your active session token.</li>
              <li>If your account remains locked or displays an inactive status after 15 minutes, reach out immediately to our technical fulfillment desk with your payment ID.</li>
            </ol>
            <p style={{ marginTop: '0.75rem' }}>
              Our engineering support team guarantees account activation resolution within <strong>24 business hours</strong> of receiving your notification.
            </p>
          </section>

          <section style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1d', margin: '1.5rem 0 0.5rem' }}>5. Fulfillment Support Channels</h2>
            <p>For any queries regarding subscription activation, receipt delivery, or billing access, contact our fulfillment desk:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#1d1d1d', marginBottom: 4 }}>
                  <Mail size={16} /> Email Support
                </div>
                <a href="mailto:info@macenza.com" style={{ color: '#1d1d1d', textDecoration: 'none', fontSize: '0.9rem' }}>
                  info@macenza.com
                </a>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#1d1d1d', marginBottom: 4 }}>
                  <Phone size={16} /> Phone Support
                </div>
                <a href="tel:+919414660123" style={{ color: '#1d1d1d', textDecoration: 'none', fontSize: '0.9rem' }}>
                  +91 94146 60123
                </a>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#1d1d1d', marginBottom: 4 }}>
                  <Clock size={16} /> Operating Hours
                </div>
                <div style={{ color: '#475569', fontSize: '0.9rem' }}>
                  Mon – Sat, 10:00 AM – 6:00 PM IST
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
