'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { X, ShieldCheck, ArrowRight, Loader2, AlertCircle, Sparkles, Building2, Mail, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature: string;
}

interface RazorpayFailureResponse {
  error?: {
    description?: string;
    code?: string;
    source?: string;
    step?: string;
    reason?: string;
  };
}

interface RazorpayOptions {
  key: string;
  name: string;
  description: string;
  prefill?: {
    email?: string;
    name?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
  handler: (response: RazorpayPaymentResponse) => void | Promise<void>;
  subscription_id?: string;
  order_id?: string;
  amount?: number;
  currency?: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (resp: RazorpayFailureResponse) => void) => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'pro_monthly' | 'pro_yearly';
  appUrl: string;
}

export default function CheckoutModal({ isOpen, onClose, initialPlan = 'pro_monthly', appUrl }: CheckoutModalProps) {
  const [plan, setPlan] = useState<'pro_monthly' | 'pro_yearly'>(initialPlan);
  const [prevInitialPlan, setPrevInitialPlan] = useState(initialPlan);
  if (initialPlan !== prevInitialPlan) {
    setPrevInitialPlan(initialPlan);
    setPlan(initialPlan);
  }

  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSubFound, setActiveSubFound] = useState<{ plan_tier: string } | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleClose = () => {
    setError(null);
    setActiveSubFound(null);
    setPaymentSuccess(false);
    setLoading(false);
    setPlan(initialPlan);
    onClose();
  };

  const isYearly = plan === 'pro_yearly';
  const planPrice = isYearly ? '₹4,999' : '₹499';

  const loadRazorpaySDK = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && window.Razorpay) return resolve(true);
      const existing = document.querySelector('script[src*="checkout.razorpay.com"]');
      if (existing) {
        if (typeof window !== 'undefined' && window.Razorpay) return resolve(true);
        existing.addEventListener('load', () => resolve(true));
        existing.addEventListener('error', () => resolve(false));
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      let currentUserId: string | null = null;
      const currentUserEmail: string = email.trim().toLowerCase();
      let userToken: string | null = null;

      // 1. Authenticate or Register with Supabase Auth
      if (authMode === 'signup') {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: currentUserEmail,
          password,
          options: {
            data: {
              business_name: businessName.trim(),
              selected_plan: plan,
            },
          },
        });

        if (signUpError) {
          if (signUpError.message?.toLowerCase().includes('already registered')) {
            setAuthMode('login');
            throw new Error('This email is already registered. Please enter your password to sign in and proceed.');
          }
          throw signUpError;
        }

        currentUserId = signUpData.user?.id || null;
        userToken = signUpData.session?.access_token || null;

        // Auto-provision basic organization row (inactive by default)
        if (currentUserId) {
          try {
            const { data: existingOrg } = await supabase
              .from('organizations')
              .select('id')
              .eq('owner_id', currentUserId)
              .maybeSingle();

            if (existingOrg?.id) {
              const { error: orgUpdateError } = await supabase
                .from('organizations')
                .update({
                  business_name: businessName.trim() || 'My Business',
                  updated_at: new Date().toISOString(),
                })
                .eq('id', existingOrg.id);
              if (orgUpdateError) console.warn('Organization auto-provision note:', orgUpdateError);
            } else {
              const { error: orgInsertError } = await supabase
                .from('organizations')
                .insert({
                  owner_id: currentUserId,
                  business_name: businessName.trim() || 'My Business',
                  subscription_status: 'inactive',
                  plan_tier: plan,
                  updated_at: new Date().toISOString(),
                });
              if (orgInsertError) console.warn('Organization auto-provision note:', orgInsertError);
            }
          } catch (orgInitErr) {
            console.warn('Organization auto-provision note:', orgInitErr);
          }
        }
      } else {
        // Login mode
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: currentUserEmail,
          password,
        });

        if (signInError) throw signInError;
        currentUserId = signInData.user?.id || null;
        userToken = signInData.session?.access_token || null;
      }

      if (!userToken) {
        const { data: sessionData } = await supabase.auth.getSession();
        userToken = sessionData.session?.access_token || null;
      }

      if (!currentUserId) {
        throw new Error('Authentication succeeded but user profile was not returned. Please try again.');
      }

      if (!userToken) {
        throw new Error('Please sign in or check your email to verify your account before subscribing.');
      }

      // 2. Strict Duplicate Subscription Check in Supabase DB
      const { data: orgData, error: orgError } = await supabase
        .from('organizations')
        .select('subscription_status, plan_tier')
        .eq('owner_id', currentUserId)
        .maybeSingle();

      if (!orgError && orgData?.subscription_status === 'active') {
        // DUPLICATE DETECTED! User already has an active subscription!
        setActiveSubFound({ plan_tier: orgData.plan_tier || 'pro' });
        setLoading(false);
        return;
      }

      // 3. Load Razorpay SDK
      const sdkReady = await loadRazorpaySDK();
      if (!sdkReady) {
        throw new Error('Failed to load Razorpay payment gateway. Please check your internet connection.');
      }

      // 4. Create Razorpay Subscription via Next.js API
      const res = await fetch('/api/razorpay/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
        body: JSON.stringify({
          planTier: plan,
          email: currentUserEmail,
          name: businessName.trim() || 'Billenza Customer',
          userId: currentUserId,
        }),
      });

      const orderData = await res.json();
      if (!res.ok) {
        throw new Error(orderData.error || 'Failed to initialize payment gateway.');
      }

      // 5. Open Razorpay Checkout Modal
      const options: RazorpayOptions = {
        key: orderData.keyId,
        name: 'Billenza',
        description: orderData.planName || (isYearly ? 'Billenza Pro Yearly — ₹4,999/yr' : 'Billenza Pro Monthly — ₹499/mo'),
        prefill: {
          email: currentUserEmail,
          name: businessName.trim() || '',
        },
        theme: { color: '#1D1D1D' },
        modal: {
          ondismiss: () => setLoading(false),
        },
        handler: async (response: RazorpayPaymentResponse) => {
          setLoading(true);
          try {
            // Secure server-side payment & signature verification
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                subscriptionId: response.razorpay_subscription_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                planTier: plan,
                userId: currentUserId,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.error || 'Server payment verification failed.');
            }

            setPaymentSuccess(true);
          } catch (e: unknown) {
            console.error('Failed to verify active subscription:', e);
            const msg = e instanceof Error ? e.message : 'Payment completed but failed to verify on server. Please contact support.';
            setError(msg);
          } finally {
            setLoading(false);
          }
        },
      };

      if (orderData.type === 'subscription' && orderData.subscriptionId) {
        options.subscription_id = orderData.subscriptionId;
      } else if (orderData.orderId) {
        options.order_id = orderData.orderId;
        options.amount = orderData.amount;
        options.currency = 'INR';
      }

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (resp: RazorpayFailureResponse) => {
        setError(resp.error?.description || 'Payment was declined or failed.');
        setLoading(false);
      });
      rzp.open();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred during checkout.';
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="checkout-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            fontFamily: 'inherit',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            key="checkout-card"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            style={{
              background: '#fff',
              borderRadius: 24,
              maxWidth: 500,
              width: '100%',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(0,0,0,0.08)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              type="button"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#f1f5f9',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
                zIndex: 10,
              }}
              aria-label="Close"
            >
              <X size={18} />
            </motion.button>

            <AnimatePresence mode="wait">
              {/* State 1: Active Subscription Already Detected */}
              {activeSubFound && (
                <motion.div
                  key="active-sub-found"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ padding: '2.5rem 2rem', textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: '#ecfdf5',
                      color: '#059669',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <ShieldCheck size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d1d1d', margin: '0 0 8px' }}>
                    Active Subscription Found!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 1.5rem', lineHeight: 1.5 }}>
                    Your account (<strong>{email}</strong>) already has an active{' '}
                    <strong>{activeSubFound.plan_tier === 'pro_yearly' ? 'Annual Pro' : 'Monthly Pro'}</strong>{' '}
                    subscription. You do not need to pay again.
                  </p>
                  <motion.a
                    href={`${appUrl}?mode=login`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      width: '100%',
                      padding: '0.9rem',
                      borderRadius: 999,
                      background: '#1d1d1d',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                    }}
                  >
                    Launch Billenza Workspace
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              )}

              {/* State 2: Payment Successfully Completed */}
              {!activeSubFound && paymentSuccess && (
                <motion.div
                  key="payment-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ padding: '2.5rem 2rem', textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: '#DCF986',
                      color: '#1D1D1D',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Sparkles size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d1d1d', margin: '0 0 8px' }}>
                    Welcome to Billenza!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 1.5rem', lineHeight: 1.5 }}>
                    Your payment for <strong>{isYearly ? 'Billenza Pro Yearly' : 'Billenza Pro Monthly'}</strong> was
                    successful. Your cloud workspace is now unlocked!
                  </p>
                  <motion.a
                    href={`${appUrl}?mode=login`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      width: '100%',
                      padding: '0.9rem',
                      borderRadius: 999,
                      background: '#1d1d1d',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                    }}
                  >
                    Open Your Billing Software
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              )}

              {/* State 3: Checkout Form */}
              {!activeSubFound && !paymentSuccess && (
                <motion.div
                  key="checkout-form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div style={{ padding: '2rem 2rem 1.25rem', background: '#fafafa', borderBottom: '1px solid #eee' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        backgroundColor: 'var(--lime)',
                        padding: '3px 10px',
                        borderRadius: 999,
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      Instant Cloud Setup
                    </span>
                    <h2
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: '#1d1d1d',
                        margin: '0 0 4px',
                        letterSpacing: '0px',
                      }}
                    >
                      Complete Your Subscription
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                      Unlock unlimited GST billing, GSTR-1 JSON exports, and cloud syncing.
                    </p>
                  </div>

                  {/* Plan Switcher */}
                  <div style={{ padding: '1.25rem 2rem 0' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10,
                      }}
                    >
                      <motion.button
                        type="button"
                        onClick={() => setPlan('pro_monthly')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: 14,
                          textAlign: 'left',
                          border: plan === 'pro_monthly' ? '2px solid #1d1d1d' : '1px solid #e2e8f0',
                          background: plan === 'pro_monthly' ? '#fcfcfc' : '#fff',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', height: 'var(--r)' }}>
                          MONTHLY PRO
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1d' }}>
                          ₹499<span style={{ fontSize: '0.75rem', fontWeight: 400 }}> /mo</span>
                        </div>
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={() => setPlan('pro_yearly')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: 14,
                          textAlign: 'left',
                          position: 'relative',
                          border: plan === 'pro_yearly' ? '2px solid #1d1d1d' : '1px solid #e2e8f0',
                          background: plan === 'pro_yearly' ? '#fcfcfc' : '#fff',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            top: -8,
                            right: 8,
                            background: '#DCF986',
                            color: '#1d1d1d',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: 999,
                          }}
                        >
                          SAVE 17%
                        </span>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', height: 'var(--r)' }}>
                          ANNUAL PRO
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1d' }}>
                          ₹4,999<span style={{ fontSize: '0.75rem', fontWeight: 400 }}> /yr</span>
                        </div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleCheckout} style={{ padding: '1.25rem 2rem 2rem' }}>
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -8, height: 0 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '0.75rem 1rem',
                            borderRadius: 10,
                            background: '#fee2e2',
                            color: '#dc2626',
                            fontSize: '0.8rem',
                            marginBottom: '1rem',
                            textAlign: 'left',
                            overflow: 'hidden',
                          }}
                        >
                          <AlertCircle size={16} style={{ flexShrink: 0 }} />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#334155',
                            marginBottom: 4,
                            letterSpacing: '0.5px',
                          }}
                        >
                          Email Address <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Mail size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                              borderRadius: 10,
                              border: '1px solid #cbd5e1',
                              fontSize: '0.85rem',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#334155',
                            marginBottom: 4,
                            letterSpacing: '0.5px',
                          }}
                        >
                          Password <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Lock size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
                          <input
                            type="password"
                            required
                            minLength={6}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                              borderRadius: 10,
                              border: '1px solid #cbd5e1',
                              fontSize: '0.85rem',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      </div>

                      {authMode === 'signup' && (
                        <div>
                          <label
                            style={{
                              display: 'block',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: '#334155',
                              marginBottom: 4,
                              letterSpacing: '0.5px',
                            }}
                          >
                            Business / Company Name (Optional)
                          </label>
                          <div style={{ position: 'relative' }}>
                            <Building2 size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
                            <input
                              type="text"
                              placeholder="Macenza Technologies"
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                                borderRadius: 10,
                                border: '1px solid #cbd5e1',
                                fontSize: '0.85rem',
                                outline: 'none',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mode switch */}
                    <div style={{ margin: '1rem 0', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                      {authMode === 'signup' ? (
                        <span>
                          Already have an account?{' '}
                          <button
                            type="button"
                            onClick={() => setAuthMode('login')}
                            style={{
                              color: '#1d1d1d',
                              fontWeight: 600,
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              textDecoration: 'underline',
                            }}
                          >
                            Sign in &amp; renew
                          </button>
                        </span>
                      ) : (
                        <span>
                          New customer?{' '}
                          <button
                            type="button"
                            onClick={() => setAuthMode('signup')}
                            style={{
                              color: '#1d1d1d',
                              fontWeight: 600,
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              textDecoration: 'underline',
                            }}
                          >
                            Create account
                          </button>
                        </span>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? {} : { scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.22)' }}
                      whileTap={loading ? {} : { scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: 999,
                        background: '#1d1d1d',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                      }}
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Connecting Gateway...
                        </>
                      ) : (
                        <>
                          Pay {planPrice} with Razorpay to Unlock
                          <ArrowRight size={16} />
                        </>
                      )}
                    </motion.button>

                    <div
                      style={{
                        marginTop: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        fontSize: '0.7rem',
                        color: '#94a3b8',
                      }}
                    >
                      <ShieldCheck size={14} color="#059669" />
                      <span>256-bit encrypted • Razorpay Secured • Instant activation</span>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
