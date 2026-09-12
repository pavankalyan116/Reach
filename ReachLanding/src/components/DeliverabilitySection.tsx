import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const DeliverabilitySection: React.FC = () => {
  return (
    <section className="deliverability-section" id="deliverability">
      <div className="section-wrap">
        <div className="deliverability-grid">
          {/* Left Column: Visual Card */}
          <div className="deliverability-left">
            <div className="deliverability-visual">
              <div className="deliverability-card shadow-soft">
                {/* Header */}
                <div className="deliverability-card-header">
                  <div className="header-title-box">
                    <ShieldCheck size={20} className="shield-green-icon" />
                    <span className="deliverability-card-title">Sender health</span>
                  </div>
                  <span className="status-badge badge-protected">Protected</span>
                </div>

                {/* Health Bars */}
                <div className="health-bars-container">
                  {/* Metric 1 */}
                  <div className="health-bar-item">
                    <div className="health-bar-labels">
                      <span className="metric-name">Domain reputation</span>
                      <span className="metric-status-label">Healthy</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill fill-reputation" style={{ width: '90%' }} />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="health-bar-item">
                    <div className="health-bar-labels">
                      <span className="metric-name">Bounce risk</span>
                      <span className="metric-status-label">Low</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill fill-bounce" style={{ width: '24%' }} />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="health-bar-item">
                    <div className="health-bar-labels">
                      <span className="metric-name">Sending capacity</span>
                      <span className="metric-status-label">Balanced</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill fill-capacity" style={{ width: '72%' }} />
                    </div>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="deliverability-card-footer">
                  <span className="footer-pill">Warm-up</span>
                  <span className="footer-pill">Bounce handling</span>
                  <span className="footer-pill">Spam controls</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="deliverability-right">
            <span className="section-kicker">03 / Deliver</span>
            <h2 className="section-title">
              Protect the<br />
              reputation<br />
              behind every<br />
              send.
            </h2>
            <p className="section-copy">
              Monitor sender health, control limits, handle bounces, and reduce spam risk before they turn into missed opportunities.
            </p>

            <div className="deliverability-checklist">
              <div className="checklist-item">
                <div className="check-icon-circle">
                  <Check size={14} strokeWidth={2.4} />
                </div>
                <span>Sender reputation and domain health</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon-circle">
                  <Check size={14} strokeWidth={2.4} />
                </div>
                <span>Bounce handling and suppression</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon-circle">
                  <Check size={14} strokeWidth={2.4} />
                </div>
                <span>Sending limits and warm-up controls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
