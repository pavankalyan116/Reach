import React from 'react';
import { MailIcon, WhatsAppIcon, SmsIcon } from './ChannelIcons';

export const UnderstandSection: React.FC = () => {
  return (
    <section className="understand-section" id="channels">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="understand-header">
          <h2 className="section-title">
            Every reply, understood.<br />
            Every next move, clear.
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="understand-grid">
          {/* Left Column: Inbox panel */}
          <div className="understand-left">
            <div className="inbox-panel">
              <div className="inbox-panel-header">
                <span className="inbox-panel-title">Unified replies</span>
                <span className="inbox-panel-mono">ALL CHANNELS</span>
              </div>

              <div className="inbox-rows-list">
                {/* Row 1 */}
                <div className="inbox-row">
                  <div className="avatar">SC</div>
                  <div className="inbox-row-content">
                    <div className="inbox-row-top">
                      <div className="inbox-sender-meta">
                        <span className="inbox-sender-name">Sarah Chen</span>
                        <span className="inbox-channel-via">
                          <MailIcon size={14} />
                          <span>Email</span>
                        </span>
                      </div>
                      <span className="reply-state state-green">Positive</span>
                    </div>
                    <p className="inbox-row-message">
                      "Looks relevant. Can we talk next week?"
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="inbox-row">
                  <div className="avatar avatar-alt">DP</div>
                  <div className="inbox-row-content">
                    <div className="inbox-row-top">
                      <div className="inbox-sender-meta">
                        <span className="inbox-sender-name">David Park</span>
                        <span className="inbox-channel-via">
                          <WhatsAppIcon size={14} />
                          <span>WhatsApp</span>
                        </span>
                      </div>
                      <span className="reply-state state-cyan">Interested</span>
                    </div>
                    <p className="inbox-row-message">
                      "Can you send me the details?"
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="inbox-row">
                  <div className="avatar avatar-orange">MO</div>
                  <div className="inbox-row-content">
                    <div className="inbox-row-top">
                      <div className="inbox-sender-meta">
                        <span className="inbox-sender-name">Maya Okafor</span>
                        <span className="inbox-channel-via">
                          <SmsIcon size={14} />
                          <span>SMS</span>
                        </span>
                      </div>
                      <span className="reply-state state-orange">Follow-up</span>
                    </div>
                    <p className="inbox-row-message">
                      "Try me again next quarter."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coordination Explanation */}
          <div className="understand-right">
            <div className="ai-quote-container">
              <div className="quote-badge-box">
                <span className="quote-badge">Unified Conversation Engine</span>
              </div>
              <blockquote className="ai-quote-text">
                Personalize every touchpoint, categorize incoming intent automatically, and surface the right next action for your team.
              </blockquote>
              <p className="ai-sub-text">
                Your team keeps full context and control. Reach handles the repetitive outreach coordination between moments that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
