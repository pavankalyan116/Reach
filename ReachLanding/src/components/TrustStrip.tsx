import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip" id="trust">
      <div className="wrap">
        <span className="eyebrow">
          <span className="pip"></span>TRUSTED BY GROWING TEAMS
        </span>

        <div className="trust-numbers">
          <div className="trust-stat">
            <span className="trust-val">2,400+</span>
            <span className="trust-label">Campaigns sent</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-val">98.4%</span>
            <span className="trust-label">Average delivery rate</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-val">3 channels</span>
            <span className="trust-label">Email · WhatsApp · SMS</span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="testimonial-card">
          <blockquote className="testimonial-quote">
            "Reach replaced three separate tools for us. We now run all our outbound
            from one place and our reply rate went up 40% in the first month."
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="5" stroke="#F45B08" strokeWidth="1.5"/>
                <path d="M6 27c0-4.4 4.5-8 10-8s10 3.6 10 8" stroke="#F45B08" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="author-name">James Rivera</div>
              <div className="author-role">Head of Growth, Sola Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
