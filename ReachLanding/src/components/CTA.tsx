import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="wrap">
        <div className="cta-panel">
          <h2 className="cta-headline">
            Ready to reach more people?
          </h2>
          <p className="cta-sub">
            Start your first multi-channel campaign in minutes.
            No credit card, no commitment, no onboarding call.
          </p>
          <div className="cta-actions">
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Start a campaign — free
            </Link>
          </div>
          <p className="cta-reassure">
            Free forever for up to 500 recipients per month
          </p>
        </div>
      </div>
    </section>
  );
};
