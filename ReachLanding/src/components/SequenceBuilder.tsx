import React from 'react';

export const SequenceBuilder: React.FC = () => {
  return (
    <section className="sequence-section" id="how-it-works">
      <div className="wrap">
        <span className="eyebrow eyebrow-dark">
          <span className="pip pip-brand"></span>SEQUENCE BUILDER
        </span>
        <h2 className="sequence-headline">
          Build multi-step sequences that feel human, not robotic.
        </h2>
        <p className="sequence-sub">
          Set up the order, timing, and conditions for your outreach. Reach pauses
          the sequence the moment someone replies — so you never spam a warm lead.
        </p>

        <div className="sequence-flow">
          {/* Step 1 */}
          <div className="seq-step">
            <div className="seq-marker">
              <div className="seq-number">1</div>
              <div className="seq-line"></div>
            </div>
            <div className="seq-card">
              <div className="seq-card-header">
                <span className="seq-channel-badge" style={{ background: '#F45B0815', color: '#F45B08' }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M2 5.5l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Email
                </span>
                <span className="seq-timing">Day 0</span>
              </div>
              <div className="seq-card-body">
                <div className="seq-label">Subject</div>
                <div className="seq-value">Quick question about {`{{company}}`}'s Q3 plans</div>
                <div className="seq-label">Preview</div>
                <div className="seq-value seq-preview">Hi {`{{first_name}}`}, noticed your team just expanded into new markets…</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="seq-step">
            <div className="seq-marker">
              <div className="seq-number">2</div>
              <div className="seq-line"></div>
            </div>
            <div className="seq-card">
              <div className="seq-card-header">
                <span className="seq-channel-badge" style={{ background: '#16825D15', color: '#16825D' }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M14 7.5a5.5 5.5 0 01-5.5 5.5H8L5 15v-2.5A5.5 5.5 0 1114 7.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp
                </span>
                <span className="seq-timing">Day 2 · If no reply</span>
              </div>
              <div className="seq-card-body">
                <div className="seq-label">Template</div>
                <div className="seq-value">reach_outbound_followup_v2</div>
                <div className="seq-label">Preview</div>
                <div className="seq-value seq-preview">Hey {`{{first_name}}`}, following up on our note about {`{{company}}`}'s expansion…</div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="seq-step">
            <div className="seq-marker">
              <div className="seq-number">3</div>
            </div>
            <div className="seq-card">
              <div className="seq-card-header">
                <span className="seq-channel-badge" style={{ background: '#356DFF15', color: '#356DFF' }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <rect x="4" y="2" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M6.5 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  SMS
                </span>
                <span className="seq-timing">Day 5 · If no reply</span>
              </div>
              <div className="seq-card-body">
                <div className="seq-label">Message</div>
                <div className="seq-value seq-preview">Hi {`{{first_name}}`}, quick ping from Reach. Tap rch.to/demo for info. Reply STOP to opt out.</div>
              </div>
            </div>
          </div>

          {/* Stop on reply indicator */}
          <div className="seq-stop">
            <div className="seq-stop-icon">
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                <circle cx="10" cy="10" r="8" stroke="#16825D" strokeWidth="1.5"/>
                <path d="M7 7h6v6H7z" fill="#16825D" rx="1"/>
              </svg>
            </div>
            <span>Sequence stops automatically when a reply is detected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
