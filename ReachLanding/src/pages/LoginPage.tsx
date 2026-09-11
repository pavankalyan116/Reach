import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@reachoutbound.com');
  const [workspace, setWorkspace] = useState('Acme Growth Labs');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'var(--paper)',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <Link to="/" className="logo" style={{ fontSize: '1.6rem' }}>
          <span className="mk" style={{ width: '36px', height: '36px' }}>
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '20px', height: '20px' }}>
              <path
                d="M3 12H21M13 5L21 12L13 19"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Reach
        </Link>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '36px 32px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <h2 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Sign in to your workspace</h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
          Manage your Email, WhatsApp, and SMS campaigns in one place.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '6px',
              }}
            >
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border-strong)',
                background: 'var(--surface-2)',
                fontSize: '0.92rem',
                color: 'var(--ink)',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '6px',
              }}
            >
              Select Workspace
            </label>
            <select
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border-strong)',
                background: 'var(--surface-2)',
                fontSize: '0.92rem',
                color: 'var(--ink)',
              }}
            >
              <option value="Acme Growth Labs">Acme Growth Labs (Pro)</option>
              <option value="Enterprise GTM Team">Enterprise GTM Team (Enterprise)</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px', padding: '13px' }}
          >
            Continue to Dashboard
          </button>
        </form>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--muted)',
          }}
        >
          Don&apos;t have an account yet?{' '}
          <Link to="/" style={{ color: 'var(--brand-dk)', fontWeight: 600 }}>
            Start free
          </Link>
        </div>
      </div>
    </div>
  );
};
