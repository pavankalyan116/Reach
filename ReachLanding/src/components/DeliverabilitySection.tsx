import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Info, 
  TrendingUp, 
  MailX, 
  ShieldAlert, 
  Shield,
  Mail,
  BarChart2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

type PillKey = 'warmup' | 'bounce' | 'spam';

const pillContent: Record<PillKey, {
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: { title: string; desc: string }[];
  statusBanner: React.ReactNode;
}> = {
  warmup: {
    title: 'Smart Warm-up',
    icon: <TrendingUp size={20} className="text-orange" />,
    description: 'We gradually increase your sending volume, build positive reputation and keep you out of spam — automatically.',
    steps: [
      { title: 'Start slow', desc: 'Begin with a safe sending volume.' },
      { title: 'Engage real inboxes', desc: 'Target high-quality, responsive leads.' },
      { title: 'Monitor signals', desc: 'Track reputation and adjust in real time.' },
      { title: 'Scale automatically', desc: 'Increase volume as trust grows.' },
    ],
    statusBanner: (
      <>
        <CheckCircle2 size={16} className="text-green-600" />
        <span className="status-text flex-1">Your domain is 3.2x less likely to land in spam compared to manual outreach.</span>
        <a href="#" className="status-link">Learn more &rarr;</a>
      </>
    )
  },
  bounce: {
    title: 'Automatic Bounce Handling',
    icon: <MailX size={20} className="text-orange" />,
    description: 'Reach detects bounced addresses, suppresses them automatically, and keeps future campaigns clean.',
    steps: [
      { title: 'Detect', desc: 'Identify hard and soft bounces.' },
      { title: 'Classify', desc: 'Determine whether the bounce is temporary or permanent.' },
      { title: 'Suppress', desc: 'Automatically prevent risky addresses from receiving future messages.' },
      { title: 'Protect', desc: 'Keep bounce rates low and sender reputation healthy.' },
    ],
    statusBanner: (
      <>
        <CheckCircle2 size={16} className="text-green-600" />
        <span className="status-text flex-1"><strong>Suppression active</strong> &bull; Hard bounce &rarr; Suppressed &bull; Soft bounce &rarr; Retrying</span>
      </>
    )
  },
  spam: {
    title: 'Smart Spam Protection',
    icon: <ShieldAlert size={20} className="text-orange" />,
    description: 'Reach continuously checks sending behavior and applies safeguards before problems affect your reputation.',
    steps: [
      { title: 'Monitor', desc: 'Track sending patterns and engagement signals.' },
      { title: 'Detect risk', desc: 'Identify unusual activity or rising spam signals.' },
      { title: 'Adjust limits', desc: 'Automatically control sending volume when necessary.' },
      { title: 'Protect reputation', desc: 'Keep your domain healthy while campaigns continue.' },
    ],
    statusBanner: (
      <>
        <CheckCircle2 size={16} className="text-green-600" />
        <span className="status-text flex-1"><strong>Protection active</strong> &bull; Risk level: Low</span>
      </>
    )
  },
};

export const DeliverabilitySection: React.FC = () => {
  const [activePill, setActivePill] = useState<PillKey>('warmup');
  const pillData = pillContent[activePill];

  return (
    <section className="deliverability-section" id="deliverability">
      <div className="section-wrap">
        <div className="deliverability-grid">
          {/* Left Column: Visual Card */}
          <div className="deliverability-left animate-on-scroll stagger-1">
            <div className="deliverability-card shadow-soft">
              {/* Header */}
              <div className="deliverability-card-header">
                <div className="header-title-box">
                  <div className="shield-icon-wrapper">
                    <ShieldCheck size={22} className="shield-green-icon" />
                  </div>
                  <div className="header-text-group">
                    <span className="deliverability-card-title">Sender health</span>
                    <span className="deliverability-card-subtitle">Your sending infrastructure is in a good shape.</span>
                  </div>
                </div>
                <div className="status-badge badge-protected">
                  <span className="protected-dot"></span> Protected
                </div>
              </div>

              {/* Health Bars */}
              <div className="health-bars-container">
                {/* Metric 1 */}
                <div className="health-bar-item">
                  <div className="health-bar-labels">
                    <span className="metric-name">Domain reputation <Info size={12} className="info-icon" /></span>
                    <span className="metric-status-label">Healthy <span className="metric-pct">92%</span></span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-reputation" style={{ width: '92%' }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="health-bar-item">
                  <div className="health-bar-labels">
                    <span className="metric-name">Bounce risk <Info size={12} className="info-icon" /></span>
                    <span className="metric-status-label">Low <span className="metric-pct">18%</span></span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-bounce" style={{ width: '18%' }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="health-bar-item">
                  <div className="health-bar-labels">
                    <span className="metric-name">Sending capacity <Info size={12} className="info-icon" /></span>
                    <span className="metric-status-label">Balanced <span className="metric-pct">78%</span></span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-capacity" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="deliverability-tabs">
                <button 
                  className={`d-tab ${activePill === 'warmup' ? 'active' : ''}`}
                  onClick={() => setActivePill('warmup')}
                >
                  <TrendingUp size={16} /> Warm-up
                </button>
                <button 
                  className={`d-tab ${activePill === 'bounce' ? 'active' : ''}`}
                  onClick={() => setActivePill('bounce')}
                >
                  <MailX size={16} /> Bounce handling
                </button>
                <button 
                  className={`d-tab ${activePill === 'spam' ? 'active' : ''}`}
                  onClick={() => setActivePill('spam')}
                >
                  <ShieldAlert size={16} /> Spam controls
                </button>
              </div>

              {/* Dynamic Panel */}
              <div className="deliverability-dynamic-panel">
                <div key={activePill} className="panel-content fade-in-up">
                  <div className="panel-header">
                    <div className="panel-icon">{pillData.icon}</div>
                    <div className="panel-title-group">
                      <h4>{pillData.title}</h4>
                      <p>{pillData.description}</p>
                    </div>
                  </div>

                  <div className="horizontal-process">
                    <div className="process-line-bg"></div>
                    <div className="process-line-fill animate-line"></div>
                    {pillData.steps.map((step, idx) => (
                      <div className="process-step" key={idx}>
                        <div className="step-circle">{idx + 1}</div>
                        <div className="step-text">
                          <span className="step-title">{step.title}</span>
                          <span className="step-desc">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="panel-status-banner">
                    {pillData.statusBanner}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Features */}
          <div className="deliverability-right animate-on-scroll stagger-2">
            <span className="section-kicker">03 / DELIVER</span>
            <h2 className="section-title">
              Protect the<br />
              reputation<br />
              behind <span className="text-orange">every send.</span>
            </h2>
            <p className="section-copy">
              Monitor sender health, control limits, handle bounces, and reduce spam risk before they turn into missed opportunities.
            </p>

            <div className="deliverability-features">
              <div className="d-feature-block">
                <div className="d-feature-icon">
                  <Shield size={20} className="text-orange" />
                </div>
                <div className="d-feature-text">
                  <h4>Maintain a strong sender reputation</h4>
                  <p>Keep your domains healthy with automated monitoring and proactive safeguards.</p>
                </div>
              </div>
              <div className="d-feature-block">
                <div className="d-feature-icon">
                  <Mail size={20} className="text-orange" />
                </div>
                <div className="d-feature-text">
                  <h4>Automatic bounce handling</h4>
                  <p>Detect, suppress, and manage bounces in real time.</p>
                </div>
              </div>
              <div className="d-feature-block">
                <div className="d-feature-icon">
                  <BarChart2 size={20} className="text-orange" />
                </div>
                <div className="d-feature-text">
                  <h4>Smart sending limits</h4>
                  <p>Built-in warm-up and adaptive limits to maximize deliverability.</p>
                </div>
              </div>
            </div>

            <div className="deliverability-cta-group">
              <button className="hero-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontSize: '0.95rem' }}>
                See deliverability in action <ArrowRight size={18} />
              </button>
              <a href="#" className="btn-link">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
