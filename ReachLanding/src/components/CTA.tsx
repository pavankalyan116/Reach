import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="tight">
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Send your first campaign this week.</h2>
            <p>
              Set up a project, import a list, and let the first sequence run — most teams are
              sending inside an hour.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/dashboard" className="btn btn-primary">
              Start a campaign
            </Link>
            <Link to="/login" className="btn btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
