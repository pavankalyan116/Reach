import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="final-cta-section" id="start">
      <div className="section-wrap">
        <div className="final-cta-layout">
          {/* Left Column: Kicker & Headline */}
          <div className="final-cta-left">
            <span className="final-cta-kicker">Your next campaign</span>
            <h2 className="final-cta-headline">
              Start one conversation.<br />
              Carry it everywhere.
            </h2>
          </div>

          {/* Right Column: Large Circular Button */}
          <div className="final-cta-right">
            <a
              href="#top"
              className="cta-circle-btn"
              aria-label="Start a campaign"
            >
              <ArrowRight size={32} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
