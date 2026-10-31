'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafafa',
      color: '#1d1d1d',
      padding: '2rem',
      fontFamily: 'inherit',
    }}>
      <div style={{
        maxWidth: 480,
        width: '100%',
        background: '#fff',
        borderRadius: 20,
        padding: '2.5rem 2rem',
        border: '1px solid #e2e8f0',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#fee2e2',
          color: '#dc2626',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}>
          <AlertCircle size={28} />
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px' }}>
          Something went wrong
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 1.75rem', lineHeight: 1.5 }}>
          An unexpected error occurred while loading this page. Our technical team has been notified.
        </p>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '0.75rem 1.25rem',
              borderRadius: 999,
              background: '#1d1d1d',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={14} />
            Try Again
          </button>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '0.75rem 1.25rem',
              borderRadius: 999,
              background: '#f1f5f9',
              color: '#334155',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Home size={14} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
