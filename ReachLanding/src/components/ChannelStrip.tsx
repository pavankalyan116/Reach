import React from 'react';

export const ChannelStrip: React.FC = () => {
  return (
    <section className="channel-proof" id="channels">
      <div className="wrap">
        <h2 className="channel-proof-headline">One message, adapted for every channel.</h2>

        <div className="channel-pills">
          <div className="channel-pill">
            <div className="pill-icon" style={{ background: '#F45B0810' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#F45B08" strokeWidth="1.6"/>
                <path d="M3 7l9 6 9-6" stroke="#F45B08" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="pill-content">
              <span className="pill-name">Email</span>
              <span className="pill-desc">Rich, personalized messages</span>
            </div>
          </div>

          <div className="channel-pill">
            <div className="pill-icon" style={{ background: '#16825D10' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 10.5a7.5 7.5 0 01-7.5 7.5h-1L7 21v-3.5A7.5 7.5 0 1120 10.5z" stroke="#16825D" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="pill-content">
              <span className="pill-name">WhatsApp</span>
              <span className="pill-desc">Direct follow-ups</span>
            </div>
          </div>

          <div className="channel-pill">
            <div className="pill-icon" style={{ background: '#356DFF10' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="5" y="3" width="14" height="18" rx="2" stroke="#356DFF" strokeWidth="1.6"/>
                <path d="M9 18h6" stroke="#356DFF" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pill-content">
              <span className="pill-name">SMS</span>
              <span className="pill-desc">Timely nudges</span>
            </div>
          </div>
        </div>

        <p className="channel-proof-note">
          Same audience · Same sequence · One place to manage it
        </p>
      </div>
    </section>
  );
};
