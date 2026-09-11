import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
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
            <p>
              Multi-channel campaign software for teams who need Email, WhatsApp, and SMS to work
              as one workflow, not three.
            </p>
          </div>

          <div className="foot-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#channels">Channels</a>
              </li>
              <li>
                <a href="#workflow">Workflow</a>
              </li>
              <li>
                <a href="#platform">Platform</a>
              </li>
              <li>
                <a href="#deliverability">Deliverability</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about" onClick={(e) => e.preventDefault()}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => e.preventDefault()}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#privacy" onClick={(e) => e.preventDefault()}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => e.preventDefault()}>
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Reach. All rights reserved.</span>
          <span>Built for teams sending real outreach, not spam.</span>
        </div>
      </div>
    </footer>
  );
};
