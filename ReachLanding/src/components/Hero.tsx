import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
} from 'lucide-react';
import { Navbar } from './Navbar';

type Channel = 'email' | 'whatsapp' | 'sms';

const campaignChannels: Array<{
  id: Channel;
  label: string;
  day: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
}> = [
  {
    id: 'email',
    label: 'Email',
    day: 'Day 1',
    description: 'Personalized introduc...',
    icon: <img src="/icons/gmail.png" alt="Email" style={{ width: 18, height: 18, objectFit: 'contain' }} />,
    accentClass: 'channel-icon-email',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    day: 'Day 3',
    description: 'Contextual follow-up',
    icon: <img src="/icons/whatsapp.png" alt="WhatsApp" style={{ width: 18, height: 18, objectFit: 'contain' }} />,
    accentClass: 'channel-icon-whatsapp',
  },
  {
    id: 'sms',
    label: 'SMS',
    day: 'Day 5',
    description: 'Timely final nudge',
    icon: <img src="/icons/sms.png" alt="SMS" style={{ width: 18, height: 18, objectFit: 'contain' }} />,
    accentClass: 'channel-icon-sms',
  },
];

export const Hero: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>('email');

  return (
    <section className="hero-section" id="top">
      {/* Navigation Header inside Hero */}
      <Navbar />

      <div className="hero-content-wrap">
        <div className="hero-layout">
          {/* Left Column: Copy & Actions */}
          <div className="hero-left animate-rise">
            {/* Main Headline */}
            <h1 className="hero-headline">
              One<br />
              campaign.<br />
              Every<br />
              channel.<br />
              More replies.
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              Find prospects, personalize every touch, and coordinate Email, WhatsApp and SMS — all from one campaign.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#start" className="hero-btn-primary">
                <span>Start free</span>
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a href="#demo" className="hero-btn-secondary">
                <span>Book a demo</span>
              </a>
            </div>

            {/* Reassurance Checks */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-check-badge">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span>No credit card required</span>
              </div>
              <div className="trust-item">
                <span className="trust-check-badge">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span>Set up in minutes</span>
              </div>
              <div className="trust-item">
                <span className="trust-check-badge">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span>Loved by growing teams</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Console */}
          <div className="hero-right animate-rise-late">
            <div className="console-wrapper">
              <div className="console-card">
                {/* Top window bar */}
                <div className="console-top-bar">
                  <div className="console-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-gray" />
                  </div>
                  <div className="console-status">
                    <span className="status-dot" />
                    <span className="status-text">LIVE</span>
                  </div>
                </div>

                {/* Campaign Header */}
                <div className="campaign-product-header">
                  <div className="campaign-product-text-block">
                    <div className="campaign-product-name">Reach Campaign</div>
                    <div className="campaign-product-sub">Product Introduction</div>
                  </div>
                </div>

                {/* Campaign Body: Sequence + Preview */}
                <div className="campaign-product-body">
                  {/* Left Column: Sequence */}
                  <div className="campaign-sequence-panel">
                    <div className="panel-kicker">CAMPAIGN SEQUENCE</div>
                    <div className="channel-sequence">
                      {campaignChannels.map((channel, index) => (
                        <div key={channel.id} className="sequence-stack">
                          <button
                            type="button"
                            className={`channel-row ${activeChannel === channel.id ? 'channel-row-active' : ''}`}
                            onClick={() => setActiveChannel(channel.id)}
                          >
                            <div className={`channel-icon ${channel.accentClass}`}>
                              {channel.icon}
                            </div>
                            <div className="channel-info">
                              <div className="channel-name">{channel.label}</div>
                              <div className="channel-desc">{channel.description}</div>
                            </div>
                            <div className="channel-day">{channel.day}</div>
                          </button>
                          {index < campaignChannels.length - 1 && (
                            <div className="sequence-delay-row">
                              <span className="delay-line" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Message Preview */}
                  <div className="campaign-preview-panel">
                    <div className="panel-kicker">MESSAGE PREVIEW</div>

                    <div className="preview-stage">
                      <div className={`panel-content-fade ${activeChannel === 'email' ? 'panel-visible' : 'panel-hidden'}`}>
                        <div className="email-preview-card">
                          <div className="meta-row">
                            <span className="meta-label">From</span>
                            <span className="meta-value">Alex from Reach</span>
                          </div>
                          <div className="meta-row">
                            <span className="meta-label">To</span>
                            <span className="meta-value">Sarah Johnson</span>
                          </div>
                          <div className="meta-row">
                            <span className="meta-label">Subject</span>
                            <span className="meta-value">A better way to start a conversation</span>
                          </div>
                          <div className="preview-divider" />
                          <div className="email-body">
                            <p>Hi Sarah,</p>
                            <p>I noticed your team is expanding into new regions. We help teams like yours turn outbound into a repeatable pipeline without adding complexity.</p>
                            <p>Would it make sense to compare notes next week?</p>
                          </div>
                          <div className="ai-personalized-tag">
                            <span>✦</span> AI personalized
                          </div>
                        </div>
                      </div>

                      <div className={`panel-content-fade ${activeChannel === 'whatsapp' ? 'panel-visible' : 'panel-hidden'}`}>
                        <div className="email-preview-card">
                          <div className="whatsapp-header">
                            <span className="meta-value">Sarah Johnson</span>
                            <span className="meta-label">9:42 AM</span>
                          </div>
                          <div className="preview-divider" />
                          <div className="whatsapp-bubble">
                            Hi Sarah — I noticed your team is expanding into new regions. We help teams like yours turn outbound into a repeatable pipeline without adding complexity. Would it make sense to compare notes?
                          </div>
                          <div className="whatsapp-status">✓✓ Read</div>
                          <div className="ai-personalized-tag">
                            <span>✦</span> Context adapted for WhatsApp
                          </div>
                        </div>
                      </div>

                      <div className={`panel-content-fade ${activeChannel === 'sms' ? 'panel-visible' : 'panel-hidden'}`}>
                        <div className="email-preview-card">
                          <div className="sms-topline">
                            <span className="meta-value">Sarah Johnson</span>
                            <span className="meta-label">Delivered</span>
                          </div>
                          <div className="preview-divider" />
                          <div className="sms-message">
                            Hi Sarah — quick idea for your team's expansion. Want a 10-minute intro next week?
                          </div>
                          <div className="sms-timestamp">9:41 AM</div>
                          <div className="ai-personalized-tag">
                            <span>✦</span> Shortened and optimized for SMS
                          </div>
                        </div>
                      </div>
                    </div>
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
