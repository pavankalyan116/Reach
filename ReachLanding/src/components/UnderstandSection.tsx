import React from 'react';
import { ArrowRight, Zap, Users, BarChart2 } from 'lucide-react';

export const UnderstandSection: React.FC = () => {
  return (
    <section className="understand-section" id="channels">
      {/* Background Graphic Elements */}
      <div className="understand-bg-dots"></div>
      <div className="understand-bg-shape-top-right"></div>
      <div className="understand-bg-shape-bottom-left"></div>
      <div className="understand-bg-shape-bottom-right"></div>

      <div className="section-wrap">
        <div className="understand-header">
          <div className="section-kicker">CONVERSATIONS THAT COMPOUND</div>
          <h2 className="section-title">
            <span className="text-orange">Every next move, clear.</span>
          </h2>
          <p className="section-copy">
            Reach turns scattered replies into structured intent, so your team always knows what to do next.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="understand-grid">
          {/* Left Column: Unified replies widget */}
          <div className="understand-left">
            <div className="unified-panel">
              <div className="unified-panel-header">
                <div>
                  <h3 className="unified-panel-title">Unified replies</h3>
                  <p className="unified-panel-sub">All your conversations. One place.</p>
                </div>
                <div className="unified-channel-dropdown">
                  All channels <span className="dropdown-arrow"></span>
                </div>
              </div>

              <div className="unified-rows-list">
                {/* Row 1 */}
                <div className="unified-row">
                  <div className="avatar avatar-orange">SC</div>
                  <div className="unified-row-content">
                    <div className="unified-row-top">
                      <div className="unified-sender-meta">
                        <span className="unified-sender-name">Sarah Chen</span>
                        <span className="unified-channel-via">
                          <img src={`${import.meta.env.BASE_URL}icons/gmail.png`} alt="Email" className="channel-img-icon" />
                          <span>Email</span>
                        </span>
                      </div>
                      <div className="unified-right-meta">
                        <span className="reply-state state-green">Positive</span>
                        <span className="reply-time">9:42 AM</span>
                      </div>
                    </div>
                    <p className="unified-row-message">
                      "Looks relevant. Can we talk next week?"
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="unified-row">
                  <div className="avatar avatar-gray">DP</div>
                  <div className="unified-row-content">
                    <div className="unified-row-top">
                      <div className="unified-sender-meta">
                        <span className="unified-sender-name">David Park</span>
                        <span className="unified-channel-via">
                          <img src={`${import.meta.env.BASE_URL}icons/whatsapp.png`} alt="WhatsApp" className="channel-img-icon" />
                          <span>WhatsApp</span>
                        </span>
                      </div>
                      <div className="unified-right-meta">
                        <span className="reply-state state-blue">Interested</span>
                        <span className="reply-time">Yesterday</span>
                      </div>
                    </div>
                    <p className="unified-row-message">
                      "Can you send me the details?"
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="unified-row">
                  <div className="avatar avatar-gray">MO</div>
                  <div className="unified-row-content">
                    <div className="unified-row-top">
                      <div className="unified-sender-meta">
                        <span className="unified-sender-name">Maya Okafor</span>
                        <span className="unified-channel-via">
                          <img src={`${import.meta.env.BASE_URL}icons/sms.png`} alt="SMS" className="channel-img-icon" />
                          <span>SMS</span>
                        </span>
                      </div>
                      <div className="unified-right-meta">
                        <span className="reply-state state-orange">Follow-up</span>
                        <span className="reply-time">Tue, 12 Sep</span>
                      </div>
                    </div>
                    <p className="unified-row-message">
                      "Try me again next quarter."
                    </p>
                  </div>
                </div>
              </div>

              <div className="unified-panel-footer">
                <div className="unified-footer-left">
                  <Users size={16} /> <span>12 new replies this week</span>
                </div>
                <div className="unified-footer-right">
                  <ArrowRight size={16} /> <span>View all replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="understand-right">
            <div className="engine-quote-container">
              <div className="engine-badge">
                <span className="engine-dot"></span> UNIFIED CONVERSATION ENGINE
              </div>
              <h3 className="engine-title">
                Personalize every touchpoint, categorize incoming intent automatically, and surface the <span className="text-orange">right next action</span> for your team.
              </h3>
              <p className="engine-sub-text">
                Your team keeps full context and control. Reach handles the repetitive outreach coordination between moments that matter.
              </p>
              
              <div className="engine-features">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <Zap size={22} strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <div className="feature-text">
                    <h4>Auto-categorize intent</h4>
                    <p>Turn replies into actionable signals</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <Users size={22} strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <div className="feature-text">
                    <h4>Full context for your team</h4>
                    <p>All conversations, one unified view</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <BarChart2 size={22} strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <div className="feature-text">
                    <h4>Surface the next best action</h4>
                    <p>Help your team move faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
