import React from 'react';

export const Deliverability: React.FC = () => {
  return (
    <section id="deliverability">
      <div className="wrap">
        <div className="deliver">
          <div className="deliver-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', maxWidth: '11em', lineHeight: 1.18 }}>
                Protect the sender reputation your campaigns depend on
              </h2>
              <p className="muted" style={{ marginTop: '16px', fontSize: '1.02rem', maxWidth: '34em' }}>
                A new mailbox that sends at full volume on day one gets flagged. Reach ramps it up
                gradually, and checks the DNS records that inbox providers actually trust.
              </p>
              <div className="checklist">
                <div className="check-row">
                  <span>SPF record</span>
                  <span className="check-status" style={{ color: '#137A56' }}>
                    <span className="d" style={{ background: '#137A56' }}></span>
                    Pass
                  </span>
                </div>
                <div className="check-row">
                  <span>DKIM signature</span>
                  <span className="check-status" style={{ color: '#137A56' }}>
                    <span className="d" style={{ background: '#137A56' }}></span>
                    Pass
                  </span>
                </div>
                <div className="check-row">
                  <span>DMARC policy</span>
                  <span className="check-status" style={{ color: '#B4652F' }}>
                    <span className="d" style={{ background: '#B4652F' }}></span>
                    Needs attention
                  </span>
                </div>
                <div className="check-row">
                  <span>MX records</span>
                  <span className="check-status" style={{ color: '#137A56' }}>
                    <span className="d" style={{ background: '#137A56' }}></span>
                    Pass
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="ramp-card">
                <div className="ramp-head">
                  <span className="t">Mailbox warm-up</span>
                  <span className="v">Day 12 of 30</span>
                </div>
                <svg
                  viewBox="0 0 380 160"
                  width="100%"
                  height="160"
                  aria-label="Mailbox warm-up send volume ramp curve"
                >
                  <line x1="0" y1="130" x2="380" y2="130" stroke="#EEE7DF" strokeWidth="1" />
                  <line x1="0" y1="90" x2="380" y2="90" stroke="#EEE7DF" strokeWidth="1" />
                  <line x1="0" y1="50" x2="380" y2="50" stroke="#EEE7DF" strokeWidth="1" />
                  <path
                    d="M0,128 C 60,126 90,118 130,108 C 180,96 220,72 270,52 C 310,36 340,26 380,18"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,128 C 60,126 90,118 130,108 C 180,96 220,72 270,52 C 310,36 340,26 380,18 L380,150 L0,150 Z"
                    fill="#EA580C0f"
                  />
                  <circle cx="130" cy="108" r="4" fill="#C2410C" />
                  <circle cx="270" cy="52" r="4" fill="#C2410C" />
                </svg>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.76rem',
                    color: 'var(--faint)',
                    marginTop: '4px',
                  }}
                >
                  <span>Day 1 · 20/day</span>
                  <span>Day 30 · 400/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
