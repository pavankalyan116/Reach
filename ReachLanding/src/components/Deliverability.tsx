import React from 'react';

export const Deliverability: React.FC = () => {
  return (
    <section className="deliver-section" id="deliverability">
      <div className="wrap">
        <span className="eyebrow">
          <span className="pip"></span>OPERATIONS & CREDIBILITY
        </span>
        <h2 className="deliver-headline">
          Land in the inbox, not the spam folder.
        </h2>
        <p className="deliver-sub">
          Reach runs domain-health and inbox-placement checks before every campaign.
          Problems are flagged with fix-it guidance so your sender reputation stays clean.
        </p>

        <div className="deliver-grid">
          {/* Domain Health Card */}
          <div className="deliver-card">
            <div className="deliver-card-header">
              <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                <path d="M10 1L2 5.5v4.5c0 4.5 3.2 8.7 8 9.8 4.8-1.1 8-5.3 8-9.8V5.5L10 1z" stroke="#16825D" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 10l2 2 4-4" stroke="#16825D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Domain health</span>
            </div>
            <div className="deliver-checks">
              <div className="check-item pass">
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <circle cx="8" cy="8" r="7" stroke="#16825D" strokeWidth="1.3"/>
                  <path d="M5 8.3l2 2 4-4.3" stroke="#16825D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>SPF record configured</span>
              </div>
              <div className="check-item pass">
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <circle cx="8" cy="8" r="7" stroke="#16825D" strokeWidth="1.3"/>
                  <path d="M5 8.3l2 2 4-4.3" stroke="#16825D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>DKIM signing active</span>
              </div>
              <div className="check-item pass">
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <circle cx="8" cy="8" r="7" stroke="#16825D" strokeWidth="1.3"/>
                  <path d="M5 8.3l2 2 4-4.3" stroke="#16825D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>DMARC policy set</span>
              </div>
              <div className="check-item warn">
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <circle cx="8" cy="8" r="7" stroke="#B4652F" strokeWidth="1.3"/>
                  <path d="M8 5v3M8 10.5v.5" stroke="#B4652F" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span>Custom tracking domain — recommended</span>
              </div>
            </div>
          </div>

          {/* Inbox Placement Card */}
          <div className="deliver-card">
            <div className="deliver-card-header">
              <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="#356DFF" strokeWidth="1.5"/>
                <path d="M2 8l8 4 8-4" stroke="#356DFF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Inbox placement</span>
            </div>
            <div className="placement-grid">
              <div className="placement-provider">
                <span className="provider-name">Gmail</span>
                <div className="placement-bar-track">
                  <div className="placement-bar" style={{ width: '97%', background: '#16825D' }}></div>
                </div>
                <span className="placement-pct">97%</span>
              </div>
              <div className="placement-provider">
                <span className="provider-name">Outlook</span>
                <div className="placement-bar-track">
                  <div className="placement-bar" style={{ width: '95%', background: '#16825D' }}></div>
                </div>
                <span className="placement-pct">95%</span>
              </div>
              <div className="placement-provider">
                <span className="provider-name">Yahoo</span>
                <div className="placement-bar-track">
                  <div className="placement-bar" style={{ width: '93%', background: '#16825D' }}></div>
                </div>
                <span className="placement-pct">93%</span>
              </div>
              <div className="placement-provider">
                <span className="provider-name">Apple Mail</span>
                <div className="placement-bar-track">
                  <div className="placement-bar" style={{ width: '98%', background: '#16825D' }}></div>
                </div>
                <span className="placement-pct">98%</span>
              </div>
            </div>
          </div>

          {/* Campaign Metrics Card */}
          <div className="deliver-card">
            <div className="deliver-card-header">
              <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                <path d="M3 17V8l4-5 4 3 4-4 2 2v13H3z" stroke="#F45B08" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span>Live metrics</span>
            </div>
            <div className="metrics-grid">
              <div className="metric-item">
                <span className="metric-val">98.4%</span>
                <span className="metric-label">Delivery rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">52.1%</span>
                <span className="metric-label">Open rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">12.8%</span>
                <span className="metric-label">Reply rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">0.3%</span>
                <span className="metric-label">Bounce rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
