import React from 'react';
import { Users, BarChart3, ShieldCheck } from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  return (
    <section className="analytics-section" id="analytics">
      <div className="section-wrap">
        <div className="analytics-grid">
          {/* Card 1 */}
          <div className="analytics-card">
            <div className="analytics-icon-box">
              <Users size={22} className="analytics-icon-orange" />
            </div>
            <h3 className="analytics-card-title">Separate workspaces</h3>
            <p className="analytics-card-copy">
              Keep each client's campaigns, contacts, and team permissions organized.
            </p>
          </div>

          {/* Card 2 */}
          <div className="analytics-card">
            <div className="analytics-icon-box">
              <BarChart3 size={22} className="analytics-icon-orange" />
            </div>
            <h3 className="analytics-card-title">Outcome analytics</h3>
            <p className="analytics-card-copy">
              Follow sent, delivered, opens, clicks, replies, follow-ups, and outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="analytics-card">
            <div className="analytics-icon-box">
              <ShieldCheck size={22} className="analytics-icon-orange" />
            </div>
            <h3 className="analytics-card-title">Role-based control</h3>
            <p className="analytics-card-copy">
              Give every teammate the right access without mixing client data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
