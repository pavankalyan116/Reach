import React from 'react';

export const PlatformFeatures: React.FC = () => {
  return (
    <section id="platform">
      <div className="wrap">
        <div className="section-head">
          <h2>Everything a real sending operation needs</h2>
          <p>
            Not just a send button — the tooling around it that keeps campaigns landing in the inbox
            and the workspace under control.
          </p>
        </div>

        <div className="bento">
          {/* Bento Item 1: Large */}
          <div className="b-card large">
            <div className="b-icon" style={{ background: '#EA580C14' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l2.1 6.3H21l-5.3 4 2 6.2-5.7-4.1-5.7 4.1 2-6.2L3 9.3h6.9z"
                  stroke="#C2410C"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>AI content and review, built in</h3>
            <p>
              Generate on-brand subject lines and body copy per channel and per follow-up step,
              then score the result for spam triggers and inbox placement before you commit to
              sending.
            </p>
            <div
              style={{
                marginTop: '6px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '14px 16px',
              }}
            >
              <div style={{ fontSize: '0.84rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                &ldquo;Quick question about {`{{company}}`}&apos;s Q3 plans&rdquo;
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                <span className="b-pill" style={{ borderColor: '#EA580C33', color: '#C2410C' }}>
                  92 / 100 inbox score
                </span>
                <span className="b-pill" style={{ borderColor: '#137A5633', color: '#137A56' }}>
                  No spam triggers
                </span>
              </div>
            </div>
            <div className="b-foot">
              <span className="b-pill">Draft</span>
              <span className="b-pill">Improve</span>
              <span className="b-pill">Score</span>
            </div>
          </div>

          {/* Bento Item 2: Medium */}
          <div className="b-card med">
            <div className="b-icon" style={{ background: '#2563EB14' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  stroke="#2563EB"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Reply agent</h3>
            <p>
              Classifies inbound replies, drafts a response, and sends, holds, or blocks it based
              on a policy your team sets.
            </p>
            <div className="b-foot">
              <span className="b-pill">Assist</span>
              <span className="b-pill">Approval</span>
              <span className="b-pill">Autonomous</span>
            </div>
          </div>

          {/* Bento Item 3: Medium */}
          <div className="b-card med">
            <div className="b-icon" style={{ background: '#137A5614' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="#137A56" strokeWidth="1.6" />
                <path d="M3 9h18" stroke="#137A56" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>Multi-tenant workspaces</h3>
            <p>
              Separate tenants, plans, and usage limits with role-based access down to which
              projects a person can touch.
            </p>
            <div className="b-foot">
              <span className="b-pill">Free</span>
              <span className="b-pill">Starter</span>
              <span className="b-pill">Pro</span>
              <span className="b-pill">Enterprise</span>
            </div>
          </div>

          {/* Bento Item 4: Wide */}
          <div className="b-card wide">
            <div className="b-icon" style={{ background: '#B4652F14' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21c4-4 8-8.5 8-13a8 8 0 10-16 0c0 4.5 4 9 8 13z"
                  stroke="#B4652F"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="8" r="2.6" stroke="#B4652F" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>Suppression, honored everywhere</h3>
            <p>
              Opt-outs and bounces are excluded automatically from every send and every follow-up
              step, per project — no manual list-scrubbing.
            </p>
          </div>

          {/* Bento Item 5: Wide */}
          <div className="b-card wide">
            <div className="b-icon" style={{ background: '#EA580C14' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 17l6-6 4 4 8-8"
                  stroke="#C2410C"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Tracking that answers the actual question</h3>
            <p>
              Opens, replies, and engagement status per recipient, exportable as a report — not just
              a top-line send count.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
