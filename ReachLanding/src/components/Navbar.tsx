import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { BrandMark } from './BrandMark';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Left: Brand mark */}
        <BrandMark />

        {/* Center: Desktop navigation links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#channels" className="nav-link">Channels</a>
          <a href="#deliverability" className="nav-link">Deliverability</a>
          <a href="#analytics" className="nav-link">Analytics</a>
        </nav>

        {/* Right: Desktop actions */}
        <div className="desktop-actions">
          <a href="#platform" className="nav-link signin-link">Sign in</a>
          <a href="#start" className="cta-primary nav-cta">
            <span>Start free</span>
            <ArrowRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};
