import React, { useState } from 'react';

type TabType = 'email' | 'whatsapp' | 'sms';

export const ContentEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('email');

  return (
    <section>
      <div className="wrap split">
        <div className="split-copy">
          <h2>Draft content that fits each channel, without three separate workflows</h2>
          <p>
            Author subject lines, WhatsApp copy, and SMS text side by side on the same campaign.
            Switch tabs, not tools — every channel stays in sync with the same recipient list and
            send schedule.
          </p>
          <ul className="split-list">
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#EA580C" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#EA580C"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Personalization tokens pull straight from your imported recipient data
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#EA580C" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#EA580C"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Branded email templates keep formatting consistent without writing HTML
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#EA580C" strokeWidth="1.6" />
                <path
                  d="M6.5 10.3l2.3 2.3 4.7-5"
                  stroke="#EA580C"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              A shared template library means good copy gets reused, not rewritten
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
                    <div className="val">Hi {`{{first_name}}`}, noticed {`{{company}}`} just expanded into…</div>
                  </div>
                  <div className="mock-chip-row">
                    <span className="mock-chip" style={{ background: '#EA580C14', color: '#C2410C' }}>
                      AI-scored: 92/100
                    </span>
                    <span className="mock-chip" style={{ background: '#137A5614', color: '#137A56' }}>
                      No spam triggers
                    </span>
                  </div>
                </>
              )}

              {activeTab === 'whatsapp' && (
                <>
                  <div className="mock-field">
                    <div className="lb">Template Identifier</div>
                    <div className="val">reach_outbound_followup_v2 (Approved)</div>
                  </div>
                  <div className="mock-field">
                    <div className="lb">Message Body</div>
                    <div className="val">
                      Hey {`{{first_name}}`}, following up on our note regarding {`{{company}}`}&apos;s expansion. Would 10 mins this week work?
                    </div>
                  </div>
                  <div className="mock-chip-row">
                    <span className="mock-chip" style={{ background: '#137A5614', color: '#137A56' }}>
                      Meta Approved Template
                    </span>
                    <span className="mock-chip" style={{ background: '#2563EB14', color: '#2563EB' }}>
                      24h Session Window
                    </span>
                  </div>
                </>
              )}

              {activeTab === 'sms' && (
                <>
                  <div className="mock-field">
                    <div className="lb">Sender ID</div>
                    <div className="val">REACH-NOTIFY (10DLC A2P Registered)</div>
                  </div>
                  <div className="mock-field">
                    <div className="lb">SMS Body</div>
                    <div className="val">
                      Hi {`{{first_name}}`}, quick ping from Reach for {`{{company}}`}. Tap rch.to/demo for info. Reply STOP to opt out.
                    </div>
                  </div>
                  <div className="mock-chip-row">
                    <span className="mock-chip" style={{ background: '#2563EB14', color: '#2563EB' }}>
                      128/160 chars (1 segment)
                    </span>
                    <span className="mock-chip" style={{ background: '#137A5614', color: '#137A56' }}>
                      Opt-out keyword active
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
