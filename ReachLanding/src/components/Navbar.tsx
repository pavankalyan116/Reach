import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <BrandMark />
            <button 
              className="mobile-menu-close" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="mobile-nav">
            <a href="#platform" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Platform</a>
            <a href="#channels" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Channels</a>
            <a href="#deliverability" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Deliverability</a>
            <a href="#analytics" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Analytics</a>
          </nav>
          
          <div className="mobile-menu-footer">
            <a href="#platform" className="mobile-nav-link text-center mb-4 block" onClick={() => setIsMobileMenuOpen(false)}>Sign in</a>
            <a href="#start" className="hero-btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Start free</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
