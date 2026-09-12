import React from 'react';
import {
  ArrowRight,
  Play,
  Check,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { MailIcon, WhatsAppIcon, SmsIcon } from './ChannelIcons';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section hero-grid" id="top">
      {/* Navigation Header inside Hero */}
      <Navbar />

      <div className="hero-content-wrap">
        <div className="hero-layout">
          {/* Left Column: Copy & Actions */}
          <div className="hero-left animate-rise">

            {/* Main Headline */}
            <h1 className="hero-headline">
              One campaign.<br />
              Every channel.<br />
              <span className="hero-headline-gradient">More replies.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              Find prospects, personalize every touch, and coordinate Email, WhatsApp, and SMS from one intelligent workspace.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a href="#start" className="cta-primary cta-large">
                <span>Start a campaign</span>
                <ArrowRight size={18} strokeWidth={2.4} />
              </a>
              <a href="#platform" className="cta-secondary cta-large">
                <Play size={16} fill="currentColor" />
                <span>See how it works</span>
              </a>
            </div>

            {/* Trust microcopy */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <Check size={16} className="trust-check" />
                <span>No credit card required</span>
              </div>
              <div className="trust-item">
                <Check size={16} className="trust-check" />
                <span>Deliverability controls</span>
              </div>
              <div className="trust-item">
                <Check size={16} className="trust-check" />
                <span>Fast setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Console */}
          <div className="hero-right animate-rise-late">
            <div className="console-wrapper">
              <div className="signal-halo" aria-hidden="true" />

              {/* Glassmorphic Console Card */}
              <div className="console-card shadow-console">
                {/* Console Top Bar */}
                <div className="console-top-bar">
                  <div className="console-dots">
                    <span className="dot dot-brand" />
                    <span className="dot dot-cyan" />
                    <span className="dot dot-dim" />
                    <span className="console-title">Q4 expansion campaign</span>
                  </div>
                </div>

                {/* Split Interior Panels */}
                <div className="console-panels">
                  {/* Left panel: Sequence */}
                  <div className="console-left-panel">
                    <div className="panel-header">
                      <div className="panel-kicker">Campaign</div>
                      <div className="campaign-name-row">
                        <span className="campaign-title">Enterprise leaders</span>
                        <span className="badge-auto-followup">Auto follow-up</span>
                      </div>
                    </div>

                    <div className="channel-sequence">
                      <div className="channel-row">
                        <div className="channel-icon">
                          <MailIcon size={20} />
                        </div>
                        <div className="channel-info">
                          <div className="channel-name">Email</div>
                          <div className="channel-desc">Personalized introduction</div>
                        </div>
                        <div className="channel-day">DAY 1</div>
                      </div>

                      <div className="channel-row">
                        <div className="channel-icon">
                          <WhatsAppIcon size={20} />
                        </div>
                        <div className="channel-info">
                          <div className="channel-name">WhatsApp</div>
                          <div className="channel-desc">Contextual follow-up</div>
                        </div>
                        <div className="channel-day">DAY 3</div>
                      </div>

                      <div className="channel-row">
                        <div className="channel-icon">
                          <SmsIcon size={20} />
                        </div>
                        <div className="channel-info">
                          <div className="channel-name">SMS</div>
                          <div className="channel-desc">Timely final nudge</div>
                        </div>
                        <div className="channel-day">DAY 5</div>
                      </div>
                    </div>
                  </div>

                  {/* Right panel: Recent replies */}
                  <div className="console-right-panel">
                    <div className="replies-header">
                      <span className="replies-title">Recent replies</span>
                      <span className="replies-count">12 new</span>
                    </div>

                    <div className="replies-list">
                      <div className="reply-card">
                        <div className="reply-card-top">
                          <div className="avatar">SC</div>
                          <div className="reply-sender-meta">
                            <span className="sender-name">Sarah Chen</span>
                            <span className="sender-time">Email · 2m ago</span>
                          </div>
                        </div>
                        <p className="reply-text">"Looks relevant. Can we talk next week?"</p>
                        <div className="reply-badge-row">
                          <span className="reply-badge badge-positive">
                            <Check size={12} strokeWidth={2.6} />
                            Interested
                          </span>
                        </div>
                      </div>

                      <div className="reply-card reply-card-alt">
                        <div className="reply-card-top">
                          <div className="avatar avatar-alt">DP</div>
                          <div className="reply-sender-meta">
                            <span className="sender-name">David Park</span>
                            <span className="sender-time">WhatsApp · 8m ago</span>
                          </div>
                        </div>
                        <p className="reply-text">"Send me the details."</p>
                        <div className="reply-badge-row">
                          <span className="reply-badge badge-classified">
                            <Check size={12} strokeWidth={2.6} />
                            Replied
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom metrics grid (4 cols) */}
                <div className="console-metrics-grid">
                  <div className="console-metric">
                    <div className="metric-number">1,248</div>
                    <div className="metric-label">Recipients</div>
                  </div>
                  <div className="console-metric">
                    <div className="metric-number">98.4%</div>
                    <div className="metric-label">Delivered</div>
                  </div>
                  <div className="console-metric">
                    <div className="metric-number">64</div>
                    <div className="metric-label">Replies</div>
                  </div>
                  <div className="console-metric">
                    <div className="metric-number">12</div>
                    <div className="metric-label">Meetings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="hero-bottom-strip">
          <span className="bottom-strip-kicker">Built for modern revenue teams</span>
          <div className="bottom-strip-line" />
          <span className="bottom-strip-tagline">From first touch to real conversation.</span>
        </div>
      </div>
    </section>
  );
};
