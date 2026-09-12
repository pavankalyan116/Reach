import React, { useState } from 'react';

type TabType = 'email' | 'whatsapp' | 'sms';

export const ContentEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('email');

  return (
    <section id="product">
      <div className="wrap split">
        <div className="split-copy">
          <h2>Write once. Reach makes every channel feel native.</h2>
          <p>
            Author email subject lines, WhatsApp messages, and SMS text side by side in the same
            campaign workspace. Every channel stays in sync with the same recipient list and
            send schedule.
          </p>
          <ul className="split-list">
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#F45B08"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Personalization from recipient data
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#F45B08"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Shared templates for consistent campaigns
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#F45B08"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Channel-specific content without separate workflows
            </li>
          </ul>
        </div>

        <div className="split-visual">
          <div className="mock">
            <div className="mock-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mock-tabs">
              <button
                type="button"
                className={`mock-tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => setActiveTab('email')}
              >
                Email
              </button>
              <button
                type="button"
                className={`mock-tab ${activeTab === 'whatsapp' ? 'active' : ''}`}
                onClick={() => setActiveTab('whatsapp')}
              >
                WhatsApp
              </button>
              <button
                type="button"
                className={`mock-tab ${activeTab === 'sms' ? 'active' : ''}`}
                onClick={() => setActiveTab('sms')}
              >
                SMS
              </button>
            </div>

            <div className="mock-body">
              {activeTab === 'email' && (
                <>
                  <div className="mock-field">
                    <div className="lb">Subject</div>
                    <div className="val">Quick question about {`{{company}}`}&apos;s Q3 plans</div>
                  </div>
                  <div className="mock-field">
                    <div className="lb">Body</div>
                    <div className="val">Hi {`{{first_name}}`}, noticed {`{{company}}`} just expanded into new markets. We help teams like yours coordinate outreach across channels…</div>
                  </div>
                </>
              )}

              {activeTab === 'whatsapp' && (
                <>
                  <div className="mock-field">
                    <div className="lb">Template</div>
                    <div className="val">reach_outbound_followup_v2 (Approved)</div>
                  </div>
                  <div className="mock-field">
                    <div className="lb">Message</div>
                    <div className="val">
                      Hey {`{{first_name}}`}, following up on our note about {`{{company}}`}&apos;s expansion. Would 10 mins this week work?
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'sms' && (
                <>
                  <div className="mock-field">
                    <div className="lb">Sender ID</div>
                    <div className="val">REACH-NOTIFY (10DLC Registered)</div>
                  </div>
                  <div className="mock-field">
                    <div className="lb">SMS Body</div>
                    <div className="val">
                      Hi {`{{first_name}}`}, quick ping from Reach re {`{{company}}`}. Tap rch.to/demo for info. Reply STOP to opt out.
                    </div>
                  </div>
                </>
              )}

              {/* AI Review Panel */}
              <div className="ai-review-panel">
                <div className="ai-review-title">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M8 1l2 4.5L15 6l-3.5 3.5L12.5 15 8 12.5 3.5 15 4.5 9.5 1 6l5-0.5L8 1z" stroke="#F45B08" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  AI Review
                </div>
                <div className="ai-review-grid">
                  <div className="ai-review-item">
                    <span className="label">Quality</span>
                    <span className="value brand">92/100</span>
                  </div>
                  <div className="ai-review-item">
                    <span className="label">Spam risk</span>
                    <span className="value good">Low</span>
                  </div>
                  <div className="ai-review-item">
                    <span className="label">Personalization</span>
                    <span className="value good">Ready</span>
                  </div>
                  <div className="ai-review-item">
                    <span className="label">Tone</span>
                    <span className="value">Professional</span>
                  </div>
                </div>
                <div className="ai-review-actions">
                  <button className="btn btn-outline" type="button">Improve copy</button>
                  <button className="btn btn-ghost" type="button">Preview message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
