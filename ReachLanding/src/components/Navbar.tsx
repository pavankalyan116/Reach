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
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#deliverability">Deliverability</a>
          <a href="#trust">Customers</a>
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

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#product" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
          <a href="#deliverability" onClick={() => setMobileMenuOpen(false)}>Deliverability</a>
          <a href="#trust" onClick={() => setMobileMenuOpen(false)}>Customers</a>
          <div className="drawer-actions">
            <Link to="/login" className="btn btn-ghost btn-sm">Sign in</Link>
            <Link to="/dashboard" className="btn btn-primary btn-sm">Start free</Link>
          </div>
        </div>
      )}
    </header>
  );
};
