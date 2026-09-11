import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">
            <span className="pip"></span>Email, WhatsApp and SMS in one campaign
          </span>
          <h1 className="headline">Write the message once. Reach lands it everywhere.</h1>
          <p className="lede">
            Reach is where campaigns get built, sequenced, and delivered — across every channel your
            recipients actually use, with automatic follow-ups and AI that drafts, scores, and
            replies alongside you.
          </p>
          <div className="hero-ctas">
            <Link to="/dashboard" className="btn btn-primary">
              Start a campaign
            </Link>
            <a href="#workflow" className="btn btn-ghost">
              See how sequences work
            </a>
          </div>
          <p className="hero-note">No credit card needed to try the free plan.</p>
        </div>

        <div className="hero-art">
          <div className="art-card">
            <div className="cap">One message, sent down three paths</div>
            <svg
              className="art-svg"
              viewBox="0 0 460 300"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Multi-channel campaign flow diagram"
            >
              {/* Paths */}
              <path
                id="pathEmail"
                d="M40,60 C 180,60 260,150 400,150"
                stroke="#EEE7DF"
                strokeWidth="2"
                fill="none"
              />
              <path
                id="pathWa"
                d="M40,150 C 180,150 260,150 400,150"
                stroke="#EEE7DF"
                strokeWidth="2"
                fill="none"
              />
              <path
                id="pathSms"
                d="M40,240 C 180,240 260,150 400,150"
                stroke="#EEE7DF"
                strokeWidth="2"
                fill="none"
              />

              {/* Source node 1: Email */}
              <g transform="translate(6,42)">
                <rect width="68" height="36" rx="9" fill="#EA580C14" stroke="#EA580C33" />
                <path
                  d="M12 14 L34 26 L56 14"
                  stroke="#C2410C"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="12" y="10" width="44" height="18" rx="3" fill="none" stroke="#C2410C" strokeWidth="1.6" />
              </g>

              {/* Source node 2: WhatsApp */}
              <g transform="translate(6,132)">
                <rect width="68" height="36" rx="9" fill="#137A5614" stroke="#137A5633" />
                <path
                  d="M20 10 h28 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-16 l-8 7 v-7 h-4 a6 6 0 0 1 -6 -6 v-10 a6 6 0 0 1 6 -6 z"
                  fill="none"
                  stroke="#137A56"
                  strokeWidth="1.6"
                />
              </g>

              {/* Source node 3: SMS */}
              <g transform="translate(6,222)">
                <rect width="68" height="36" rx="9" fill="#2563EB14" stroke="#2563EB33" />
                <rect x="20" y="9" width="28" height="18" rx="3" fill="none" stroke="#2563EB" strokeWidth="1.6" />
                <path
                  d="M26 27 v4 l5 -4"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Recipient node */}
              <g transform="translate(396,128)">
                <circle cx="22" cy="22" r="22" fill="#1B1712" />
                <circle cx="22" cy="16" r="6.5" fill="#FBF7F3" />
                <path
                  d="M10 34c2.5-7 9-9 12-9s9.5 2 12 9"
                  stroke="#FBF7F3"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Travelling animated dots */}
              <circle
                r="4.2"
                fill="#C2410C"
                className="dot-travel"
                style={{
                  offsetPath: "path('M40,60 C 180,60 260,150 400,150')",
                  animationDelay: '0s',
                }}
              />
              <circle
                r="4.2"
                fill="#137A56"
                className="dot-travel"
                style={{
                  offsetPath: "path('M40,150 C 180,150 260,150 400,150')",
                  animationDelay: '1.05s',
                }}
              />
              <circle
                r="4.2"
                fill="#2563EB"
                className="dot-travel"
                style={{
                  offsetPath: "path('M40,240 C 180,240 260,150 400,150')",
                  animationDelay: '2.1s',
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
