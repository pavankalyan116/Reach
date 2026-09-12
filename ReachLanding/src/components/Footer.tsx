import React from 'react';
import { BrandMark } from './BrandMark';

export const Footer: React.FC = () => {
  return (
    <footer className="landing-footer">
      <div className="section-wrap">
        <div className="footer-content-row">
          {/* Left: Brand mark */}
          <div className="footer-left">
            <BrandMark textColor="var(--hero-foreground)" />
          </div>

          {/* Center: Tagline */}
          <div className="footer-center">
            <p className="footer-tagline">
              Multi-channel outreach across Email, WhatsApp, and SMS.
            </p>
          </div>

          {/* Right: Navigation links */}
          <div className="footer-right">
            <a href="#platform" className="footer-nav-link">Product</a>
            <a href="#deliverability" className="footer-nav-link">Deliverability</a>
            <a href="#analytics" className="footer-nav-link">Analytics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
