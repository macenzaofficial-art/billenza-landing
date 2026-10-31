import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

export default function NotFound() {
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
        padding: '3rem 2rem',
        border: '1px solid #e2e8f0',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: '#DCF986',
          color: '#1d1d1d',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}>
          <Zap size={28} />
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
          404 &bull; Page Not Found
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 10px' }}>
          This page does not exist
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 2rem', lineHeight: 1.5 }}>
          The link you navigated to might be broken or the resource has been relocated.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '0.8rem 1.75rem',
            borderRadius: 999,
            background: '#1d1d1d',
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} />
          Back to Billenza Home
        </Link>
      </div>
    </div>
  );
}
