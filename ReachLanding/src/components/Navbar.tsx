import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-row">
        <Link to="/" className="logo">
          <span className="mk">
            <svg viewBox="0 0 24 24" fill="none">
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

        <nav className="links">
          <a href="#channels">Channels</a>
          <a href="#workflow">Workflow</a>
          <a href="#platform">Platform</a>
          <a href="#deliverability">Deliverability</a>
        </nav>

        <div className="nav-cta">
          <Link to="/login" className="signin">
            Sign in
          </Link>
          <Link to="/dashboard" className="btn btn-primary btn-sm">
            Start free
          </Link>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a
            href="#channels"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, color: 'var(--ink)' }}
          >
            Channels
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, color: 'var(--ink)' }}
          >
            Workflow
          </a>
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, color: 'var(--ink)' }}
          >
            Platform
          </a>
          <a
            href="#deliverability"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, color: 'var(--ink)' }}
          >
            Deliverability
          </a>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <Link
              to="/login"
              className="btn btn-ghost btn-sm"
              style={{ flex: 1, textAlign: 'center' }}
            >
              Sign in
            </Link>
            <Link
              to="/dashboard"
              className="btn btn-primary btn-sm"
              style={{ flex: 1, textAlign: 'center' }}
            >
              Start free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
