import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo logo-footer">
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
          <p className="footer-tagline">
            Multi-channel outreach.
            <br />
            One place to manage it.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <a href="#product">Content editor</a>
          <a href="#how-it-works">Sequence builder</a>
          <a href="#deliverability">Deliverability</a>
          <a href="#channels">Channels</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
          <a href="#">GDPR</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Reach. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M18.5 3a9.9 9.9 0 01-2.83.78A4.93 4.93 0 0018 1.5a9.86 9.86 0 01-3.13 1.2A4.93 4.93 0 008.4 6.17 14 14 0 012.1 2.2 4.93 4.93 0 003.63 8.8 4.9 4.9 0 011.4 8v.06a4.93 4.93 0 003.95 4.83 4.92 4.92 0 01-2.23.08 4.93 4.93 0 004.6 3.42A9.88 9.88 0 011 18.3a14 14 0 007.56 2.2c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10 10 0 0018.5 3z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <rect x="1.5" y="1.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M6 9v6M6 6v.01M10 15v-4a2 2 0 114 0v4M10 9v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
