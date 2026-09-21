import React, { useState, useEffect } from 'react';
import { ArrowRight, MoreVertical, CornerUpLeft, Clock } from 'lucide-react';
import { MailIcon, WhatsAppIcon, SmsIcon } from './ChannelIcons';

type Tab = 'personalized' | 'scheduled' | 'stops' | 'multi';

export const OrchestrateSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('personalized');

  useEffect(() => {
    const tabs: Tab[] = ['personalized', 'scheduled', 'stops', 'multi'];
    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="orchestrate-section" id="platform">
      <div className="section-wrap">
        <div className="orchestrate-grid">
          {/* Left column */}
          <div className="orchestrate-left">
            <div className="eyebrow">TURN CONTEXT INTO CONVERSATIONS</div>
            <h2 className="section-title">
              A single brief<br />
              becomes a<br />
              <span className="text-orange">complete campaign.</span>
            </h2>
            <p className="section-copy">
              Reach turns prospect context into personalized sequences, chooses the right channel for each touch, and stops the moment a reply arrives.
            </p>
            <a href="#channels" className="text-link">
              <span>Explore the campaign flow</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right column: Workflow console */}
          <div className="orchestrate-right">
            <div className="orch-console shadow-soft">
              {/* Header */}
              <div className="orch-console-header">
                <h3 className="orch-console-title">Growth Outreach Campaign</h3>
                <div className="orch-console-actions">
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    LIVE
                  </div>
                  <button className="icon-btn">
                    <MoreVertical size={18} color="#666" />
                  </button>
                </div>
              </div>

              {/* Tabs Row */}
              <div className="orch-tabs-row">
                <button
                  className={`orch-tab ${activeTab === 'personalized' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personalized')}
                >
                  <img src={`${import.meta.env.BASE_URL}icons/Personalized.png`} alt="Personalized" width={24} height={24} className="tab-icon" />
                  <h4>Personalized</h4>
                </button>
                <button
                  className={`orch-tab ${activeTab === 'scheduled' ? 'active' : ''}`}
                  onClick={() => setActiveTab('scheduled')}
                >
                  <img src={`${import.meta.env.BASE_URL}icons/Scheduled.png`} alt="Scheduled" width={24} height={24} className="tab-icon" />
                  <h4>Scheduled</h4>
                </button>
                <button
                  className={`orch-tab ${activeTab === 'stops' ? 'active' : ''}`}
                  onClick={() => setActiveTab('stops')}
                >
                  <img src={`${import.meta.env.BASE_URL}icons/reply.png`} alt="Stops on reply" width={24} height={24} className="tab-icon" />
                  <h4>Stops on reply</h4>
                </button>
                <button
                  className={`orch-tab ${activeTab === 'multi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('multi')}
                >
                  <img src={`${import.meta.env.BASE_URL}icons/multi-channel.png`} alt="Multi-channel" width={24} height={24} className="tab-icon" />
                  <h4>Multi-channel</h4>
                </button>
              </div>

              {/* Dynamic Body */}
              <div className="orch-console-body">
                {activeTab === 'personalized' && (
                  <div className="orch-tab-content fade-in-up">
                    <div className="orch-sequence">
                      <div className="orch-step active-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num orange-fill">1</div>
                          <div className="orch-step-icon"><MailIcon size={32} /></div>
                          <div className="orch-line orange-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 1 &gt; Email</div>
                          <div className="orch-step-desc">Personalized introduction, adapted to prospect context.</div>
                        </div>
                        <div className="orch-step-meta">
                          <span className="orch-day">DAY 1</span>
                          <span className="orch-badge active-badge">Active</span>
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">2</div>
                          <div className="orch-step-icon"><WhatsAppIcon size={32} /></div>
                          <div className="orch-line orange-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 2 &gt; WhatsApp</div>
                          <div className="orch-step-desc">Contextual follow-up, adapted to prospect context.</div>
                        </div>
                        <div className="orch-step-meta">
                          <span className="orch-day">DAY 3</span>
                          <span className="orch-badge">Scheduled</span>
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">3</div>
                          <div className="orch-step-icon"><SmsIcon size={32} /></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 3 &gt; SMS</div>
                          <div className="orch-step-desc">Timely final nudge, adapted to prospect context.</div>
                        </div>
                        <div className="orch-step-meta">
                          <span className="orch-day">DAY 5</span>
                          <span className="orch-badge">Scheduled</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="orch-bottom-bar green-bar">
                      <div className="bar-left">
                        <CornerUpLeft size={16} />
                        <span>Automatically stops when the prospect replies.</span>
                      </div>
                      <div className="bar-right">
                        <span>Reply detected &rarr;</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'scheduled' && (
                  <div className="orch-tab-content fade-in-up">
                    <div className="orch-sub-header">
                      <div className="sub-header-left">
                        <div>
                          <div className="sub-title">Scheduled for maximum impact</div>
                          <div className="sub-desc">Messages are sent at the right time, with smart delays between steps to improve engagement.</div>
                        </div>
                      </div>
                      <div className="sub-badge orange-sub-badge"><Clock size={14} /> Auto-scheduled</div>
                    </div>
                    
                    <div className="orch-sequence scheduled-sequence">
                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num orange-bg-light">1</div>
                          <div className="orch-step-icon"><MailIcon size={32} /></div>
                          <div className="orch-line orange-dashed-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 1 &gt; Email</div>
                          <div className="orch-step-desc">Sent immediately</div>
                        </div>
                        <div className="orch-step-meta time-meta">
                          <Clock size={14} /> Day 1 at 10:00 AM
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">2</div>
                          <div className="orch-step-icon"><WhatsAppIcon size={32} /></div>
                          <div className="orch-line orange-dashed-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 2 &gt; WhatsApp</div>
                          <div className="orch-step-desc">Sent 2 days later</div>
                        </div>
                        <div className="orch-step-meta time-meta">
                          <Clock size={14} /> Day 3 at 10:00 AM
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">3</div>
                          <div className="orch-step-icon"><SmsIcon size={32} /></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 3 &gt; SMS</div>
                          <div className="orch-step-desc">Sent 2 days later</div>
                        </div>
                        <div className="orch-step-meta time-meta">
                          <Clock size={14} /> Day 5 at 10:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'stops' && (
                   <div className="orch-tab-content fade-in-up">
                   <div className="orch-sub-header">
                     <div className="sub-header-left">
                       <div>
                         <div className="sub-title">Intelligent reply detection</div>
                         <div className="sub-desc">Reach monitors all connected channels and automatically halts outreach the moment a prospect responds.</div>
                       </div>
                     </div>
                   </div>
                   
                   <div className="orch-sequence">
                      <div className="orch-step active-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num green-fill"><CornerUpLeft size={14}/></div>
                          <div className="orch-step-icon"><MailIcon size={32} /></div>
                          <div className="orch-line gray-dashed-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 1 &gt; Email</div>
                          <div className="orch-step-desc text-green">Reply received: "Let's chat next week."</div>
                        </div>
                        <div className="orch-step-meta">
                          <span className="orch-day">DAY 1</span>
                          <span className="orch-badge green-badge">Responded</span>
                        </div>
                      </div>

                      <div className="orch-step disabled-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">2</div>
                          <div className="orch-step-icon"><WhatsAppIcon size={32} /></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 2 &gt; WhatsApp</div>
                          <div className="orch-step-desc">Sequence halted.</div>
                        </div>
                        <div className="orch-step-meta">
                          <span className="orch-badge gray-badge">Cancelled</span>
                        </div>
                      </div>
                   </div>
                 </div>
                )}

                {activeTab === 'multi' && (
                  <div className="orch-tab-content fade-in-up">
                    <div className="orch-sub-header">
                      <div className="sub-header-left">
                        <div>
                          <div className="sub-title">Omnichannel coordination</div>
                          <div className="sub-desc">Combine Email, WhatsApp, and SMS touches smoothly to maximize your chances of connecting.</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="orch-sequence">
                      {/* Same sequence structure as personalized, but maybe different line colors or badges to look generic */}
                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">1</div>
                          <div className="orch-step-icon"><MailIcon size={32} /></div>
                          <div className="orch-line blue-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 1 &gt; Email</div>
                          <div className="orch-step-desc">High-deliverability email touch.</div>
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">2</div>
                          <div className="orch-step-icon"><WhatsAppIcon size={32} /></div>
                          <div className="orch-line blue-line"></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 2 &gt; WhatsApp</div>
                          <div className="orch-step-desc">High-engagement instant message.</div>
                        </div>
                      </div>

                      <div className="orch-step">
                        <div className="orch-step-left">
                          <div className="orch-step-num">3</div>
                          <div className="orch-step-icon"><SmsIcon size={32} /></div>
                        </div>
                        <div className="orch-step-content">
                          <div className="orch-step-title">Step 3 &gt; SMS</div>
                          <div className="orch-step-desc">Direct-to-device final touch.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
