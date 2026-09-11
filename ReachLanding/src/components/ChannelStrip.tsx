import React from 'react';

export const ChannelStrip: React.FC = () => {
  return (
    <div className="strip" id="channels">
      <div className="wrap strip-row">
        <div className="strip-text">
          <strong>One draft, every channel.</strong> Content adapts per channel — the same campaign,
          sent the way each recipient prefers.
        </div>
        <div className="strip-chans">
          <span className="chan-chip">
            <span className="d" style={{ background: '#EA580C' }}></span>
            Email
          </span>
          <span className="chan-chip">
            <span className="d" style={{ background: '#137A56' }}></span>
            WhatsApp
          </span>
          <span className="chan-chip">
            <span className="d" style={{ background: '#2563EB' }}></span>
            SMS
          </span>
        </div>
      </div>
    </div>
  );
};
