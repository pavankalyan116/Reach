import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Activity,
} from 'lucide-react';
import { mockDeliverability } from '../data/mockData';

export const DeliverabilityPage: React.FC = () => {
  const d = mockDeliverability;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Deliverability & Domain Health</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Monitor DNS authentication records, sender score, mailbox warm-up schedule, and inbox placement.
          </p>
        </div>

        <button type="button" className="btn btn-outline btn-sm">
          Run Real-time DNS Audit
        </button>
      </div>

      {/* Top 4 Metrics */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
        }}
      >
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Sender Reputation Score
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', background: 'var(--good-soft)', color: 'var(--good)' }}>
              <ShieldCheck size={16} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--good)' }}>
            {d.senderScore} <span style={{ fontSize: '1rem', color: 'var(--faint)' }}>/ 100</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--good)', fontWeight: 600, marginTop: '4px' }}>
            Top tier mailbox reputation
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Warm-up Progress
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', background: 'var(--brand-soft)', color: 'var(--brand-dk)' }}>
              <Flame size={16} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)' }}>
            Day {d.warmupCurrentDay} <span style={{ fontSize: '1rem', color: 'var(--faint)' }}>of {d.warmupTotalDays}</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '4px' }}>
            Ramping to 400 sends/day
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Bounce Rate
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', background: 'var(--good-soft)', color: 'var(--good)' }}>
              <Activity size={16} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)' }}>
            {d.bounceRate}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--good)', fontWeight: 600, marginTop: '4px' }}>
            Well below 2.0% threshold
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Spam Complaint Rate
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', background: 'var(--good-soft)', color: 'var(--good)' }}>
              <CheckCircle2 size={16} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)' }}>
            {d.spamComplaintRate}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--good)', fontWeight: 600, marginTop: '4px' }}>
            Google/Yahoo standard: &lt; 0.10%
          </div>
        </div>
      </div>

      {/* DNS Records Table & Warm-up Schedule */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }}>
        {/* DNS Status */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>DNS Authentication Records</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Required records verified across your sending domains
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>SPF (Sender Policy Framework)</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--faint)' }}>v=spf1 include:_spf.reachoutbound.com ~all</div>
              </div>
              <span className="chip chip-good">
                <CheckCircle2 size={12} /> Pass
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>DKIM (DomainKeys Identified Mail)</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--faint)' }}>reach._domainkey.company.com · 2048-bit RSA</div>
              </div>
              <span className="chip chip-good">
                <CheckCircle2 size={12} /> Pass
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>DMARC Policy</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--faint)' }}>v=DMARC1; p=quarantine; rua=mailto:dmarc@company.com</div>
              </div>
              <span className="chip chip-warn">
                <AlertTriangle size={12} /> Needs Attention (p=reject advised)
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>MX Records</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--faint)' }}>aspmx.l.google.com · Inbound delivery route healthy</div>
              </div>
              <span className="chip chip-good">
                <CheckCircle2 size={12} /> Pass
              </span>
            </div>
          </div>
        </div>

        {/* Mailbox Warm-up Ramp Chart Card */}
        <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Mailbox Warm-up Ramp</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Day 12 of 30 · Gradual volume scaling
              </p>
            </div>
            <span className="chip chip-brand">Active</span>
          </div>

          <div
            style={{
              flex: 1,
              background: 'var(--surface-2)',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.82rem' }}>
              <span style={{ color: 'var(--faint)' }}>Daily Velocity:</span>
              <strong style={{ color: 'var(--ink)' }}>
                {d.dailyCurrentSent} sent / {d.dailyQuota} daily cap
              </strong>
            </div>

            <svg viewBox="0 0 380 140" width="100%" height="130">
              <line x1="0" y1="110" x2="380" y2="110" stroke="#EEE7DF" strokeWidth="1" />
              <line x1="0" y1="75" x2="380" y2="75" stroke="#EEE7DF" strokeWidth="1" />
              <line x1="0" y1="40" x2="380" y2="40" stroke="#EEE7DF" strokeWidth="1" />
              <path
                d="M0,110 C 60,106 90,98 130,88 C 180,76 220,52 270,36 C 310,24 340,16 380,10"
                fill="none"
                stroke="#EA580C"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M0,110 C 60,106 90,98 130,88 C 180,76 220,52 270,36 C 310,24 340,16 380,10 L380,130 L0,130 Z"
                fill="#EA580C0f"
              />
              <circle cx="130" cy="88" r="4.5" fill="#C2410C" />
              <circle cx="270" cy="36" r="4.5" fill="#C2410C" />
            </svg>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--faint)', marginTop: '8px' }}>
              <span>Day 1 (20/day)</span>
              <span style={{ color: 'var(--brand-dk)', fontWeight: 600 }}>Day 12 (Current)</span>
              <span>Day 30 (400/day)</span>
            </div>
          </div>

          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--muted)' }}>
            Reach protects your domains from spam filters by enforcing realistic ramp intervals across Google Workspace, Office 365, and SMTP endpoints.
          </div>
        </div>
      </div>
    </div>
  );
};
