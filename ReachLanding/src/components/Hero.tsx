import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="pip"></span>MULTI-CHANNEL OUTREACH
          </span>
          <h1 className="headline">One campaign. Every channel. More replies.</h1>
          <p className="lede">
            Reach helps teams plan, send, and improve outreach across email, WhatsApp,
            and SMS—without juggling separate tools or losing track of replies.
          </p>
          <div className="hero-ctas">
            <Link to="/dashboard" className="btn btn-primary">
              Start a campaign
            </Link>
            <a href="#how-it-works" className="btn btn-ghost">
              See how it works
            </a>
          </div>
          <p className="hero-reassure">
            No credit card required
            <span className="dot-sep"></span>
            Deliverability checks included
          </p>
        </div>

        <div className="hero-preview">
          <div className="campaign-card">
            {/* Campaign Header */}
            <div className="campaign-header">
              <div className="campaign-title">Q3 expansion outreach</div>
              <div className="campaign-meta">
                <span className="campaign-meta-item">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M8 4v4l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  3 steps · Stops on reply
                </span>
                <span className="campaign-meta-item">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M12 13.5v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                  1,248 recipients
                </span>
              </div>
            </div>

            {/* Channel Steps */}
            <div className="channel-steps">
              <div className="ch-step" style={{ background: '#F45B0810' }}>
                <span className="ch-dot" style={{ background: '#F45B08' }}></span>
                Email
              </div>
              <span className="ch-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="ch-step" style={{ background: '#16825D10' }}>
                <span className="ch-dot" style={{ background: '#16825D' }}></span>
                WhatsApp
              </div>
              <span className="ch-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="ch-step" style={{ background: '#356DFF10' }}>
                <span className="ch-dot" style={{ background: '#356DFF' }}></span>
                SMS
              </div>
            </div>

            {/* Delivery Summary */}
            <div className="campaign-summary">
              <div className="summary-stat">
                <span className="stat-val">98.4%</span>
                <span className="stat-label">Delivered</span>
              </div>
              <div className="summary-stat">
                <span className="stat-val">64</span>
                <span className="stat-label">Replies</span>
              </div>
              <div className="summary-stat">
                <span className="stat-val">1,248</span>
                <span className="stat-label">Recipients</span>
              </div>
              <div className="summary-stat">
                <span className="stat-val" style={{ color: '#16825D' }}>Active</span>
                <span className="stat-label">Status</span>
              </div>
            </div>
          </div>

          {/* Floating reply card */}
          <div className="reply-card">
            <div className="reply-avatar">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M13 12.5v-.83a2.5 2.5 0 00-2.5-2.5h-5A2.5 2.5 0 003 11.67v.83" stroke="#16825D" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="8" cy="4.5" r="2.5" stroke="#16825D" strokeWidth="1.3"/>
              </svg>
            </div>
            <div className="reply-text">
              <div>Sarah replied</div>
              <div className="reply-sub">"Sounds great, let's chat!"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
