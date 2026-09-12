import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { MailIcon, WhatsAppIcon, SmsIcon } from './ChannelIcons';

export const OrchestrateSection: React.FC = () => {
  return (
    <section className="orchestrate-section" id="platform">
      <div className="section-wrap">
        <div className="orchestrate-grid">
          {/* Left column (sticky on desktop) */}
          <div className="orchestrate-left">
            <h2 className="section-title">
              A single brief<br />
              becomes a<br />
              complete<br />
              campaign.
            </h2>
            <p className="section-copy">
              Reach turns prospect context into personalized sequences, chooses the right channel for each touch, and stops the moment a reply arrives.
            </p>
            <a href="#channels" className="text-link">
              <span>Explore the campaign flow</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right column: Workflow panel */}
          <div className="orchestrate-right">
            <div className="workflow-panel shadow-soft">
              {/* Header */}
              <div className="workflow-panel-header">
                <div className="workflow-title-meta">
                  <h3 className="workflow-campaign-title">Q4 expansion campaign</h3>
                  <span className="workflow-campaign-sub">3 steps · Stops on reply · Multi-channel</span>
                </div>
              </div>

              {/* Steps List */}
              <div className="workflow-steps-list">
                <div className="workflow-step-item">
                  <div className="workflow-step-icon">
                    <MailIcon size={24} />
                  </div>
                  <div className="workflow-step-content">
                    <div className="step-title-line">
                      <span className="step-num-name">Step 1 &gt; Email</span>
                    </div>
                    <p className="step-desc-text">
                      Personalized introduction, adapted to prospect context.
                    </p>
                  </div>
                  <div className="step-day-badge">DAY 1</div>
                </div>

                <div className="workflow-step-item">
                  <div className="workflow-step-icon">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div className="workflow-step-content">
                    <div className="step-title-line">
                      <span className="step-num-name">Step 2 &gt; WhatsApp</span>
                    </div>
                    <p className="step-desc-text">
                      Contextual follow-up, adapted to prospect context.
                    </p>
                  </div>
                  <div className="step-day-badge">DAY 3</div>
                </div>

                <div className="workflow-step-item">
                  <div className="workflow-step-icon">
                    <SmsIcon size={24} />
                  </div>
                  <div className="workflow-step-content">
                    <div className="step-title-line">
                      <span className="step-num-name">Step 3 &gt; SMS</span>
                    </div>
                    <p className="step-desc-text">
                      Timely final nudge, adapted to prospect context.
                    </p>
                  </div>
                  <div className="step-day-badge">DAY 5</div>
                </div>
              </div>

              {/* Footer Row (3 cols with Check icon) */}
              <div className="workflow-footer-row">
                <div className="workflow-footer-col">
                  <Check size={14} className="wf-check" />
                  <span>Personalized</span>
                </div>
                <div className="workflow-footer-col">
                  <Check size={14} className="wf-check" />
                  <span>Scheduled</span>
                </div>
                <div className="workflow-footer-col">
                  <Check size={14} className="wf-check" />
                  <span>Stops on reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
