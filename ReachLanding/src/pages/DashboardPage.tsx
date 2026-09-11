import React from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  MessageSquareReply,
  Eye,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { mockCampaigns, mockDeliverability } from '../data/mockData';

export const DashboardPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Banner / Welcome */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Campaign Overview</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Write once, sequence seamlessly across Email, WhatsApp, and SMS.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/dashboard/sequences" className="btn btn-outline btn-sm">
            Configure Sequences
          </Link>
          <Link to="/dashboard/inbox" className="btn btn-brand btn-sm">
            <Sparkles size={14} />
            Reply Agent (3 Pending)
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
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
              Total Messages Sent
            </span>
            <div
              style={{
                padding: '6px',
                borderRadius: '6px',
                background: 'var(--brand-soft)',
                color: 'var(--brand-dk)',
              }}
            >
              <Send size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.9rem', fontWeight: 700, fontFamily: 'var(--sans)', color: 'var(--ink)' }}>
            2,580
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--good)', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              <TrendingUp size={13} style={{ marginRight: '2px' }} /> +18.4%
            </span>
            <span style={{ color: 'var(--faint)' }}>vs last month</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Average Open Rate
            </span>
            <div
              style={{
                padding: '6px',
                borderRadius: '6px',
                background: 'var(--info-soft)',
                color: 'var(--info)',
              }}
            >
              <Eye size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.9rem', fontWeight: 700, fontFamily: 'var(--sans)', color: 'var(--ink)' }}>
            63.8%
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--good)', fontWeight: 600 }}>+4.2%</span>
            <span style={{ color: 'var(--faint)' }}>above B2B benchmark</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Overall Reply Rate
            </span>
            <div
              style={{
                padding: '6px',
                borderRadius: '6px',
                background: 'var(--good-soft)',
                color: 'var(--good)',
              }}
            >
              <MessageSquareReply size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.9rem', fontWeight: 700, fontFamily: 'var(--sans)', color: 'var(--ink)' }}>
            18.2%
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--good)', fontWeight: 600 }}>283 replies</span>
            <span style={{ color: 'var(--faint)' }}>across 3 channels</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
              Deliverability Score
            </span>
            <div
              style={{
                padding: '6px',
                borderRadius: '6px',
                background: 'var(--good-soft)',
                color: 'var(--good)',
              }}
            >
              <ShieldCheck size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.9rem', fontWeight: 700, fontFamily: 'var(--sans)', color: 'var(--good)' }}>
            {mockDeliverability.senderScore} / 100
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Warm-up Day {mockDeliverability.warmupCurrentDay}/30</span>
          </div>
        </div>
      </div>

      {/* Multi-Channel Distribution & Active Sequence summary */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Recent Campaigns Table */}
        <div className="card" style={{ padding: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Recent Campaigns</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Active sequences and performance across channels
              </p>
            </div>
            <Link
              to="/dashboard/campaigns"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--brand-dk)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>

          <div className="table-container">
            <table className="reach-table">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Channels</th>
                  <th>Status</th>
                  <th>Sent</th>
                  <th>Open %</th>
                  <th>Reply %</th>
                </tr>
              </thead>
              <tbody>
                {mockCampaigns.slice(0, 4).map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{c.name}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>{c.lastTouch}</div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {c.channels.includes('email') && (
                          <span className="chip chip-brand" style={{ fontSize: '0.7rem' }}>
                            Email
                          </span>
                        )}
                        {c.channels.includes('whatsapp') && (
                          <span className="chip chip-good" style={{ fontSize: '0.7rem' }}>
                            WhatsApp
                          </span>
                        )}
                        {c.channels.includes('sms') && (
                          <span className="chip chip-info" style={{ fontSize: '0.7rem' }}>
                            SMS
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`chip ${
                          c.status === 'active'
                            ? 'chip-good'
                            : c.status === 'completed'
                            ? 'chip-info'
                            : 'chip-muted'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td>{c.sentCount}</td>
                    <td>{c.openRate > 0 ? `${c.openRate}%` : '—'}</td>
                    <td>
                      <strong>{c.replyRate > 0 ? `${c.replyRate}%` : '—'}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deliverability & AI Reply Agent Snapshot */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Deliverability Card */}
          <div className="card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.05rem' }}>Deliverability Guard</h3>
              <Link
                to="/dashboard/deliverability"
                style={{ fontSize: '0.78rem', color: 'var(--brand-dk)', fontWeight: 600 }}
              >
                Inspect
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--muted)' }}>SPF Record</span>
                <span style={{ color: 'var(--good)', fontWeight: 600 }}>Verified</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--muted)' }}>DKIM Signature</span>
                <span style={{ color: 'var(--good)', fontWeight: 600 }}>Active 2048-bit</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--muted)' }}>DMARC Policy</span>
                <span style={{ color: 'var(--warn)', fontWeight: 600 }}>p=quarantine</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--muted)' }}>Warm-up Velocity</span>
                <span style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  {mockDeliverability.dailyCurrentSent} / {mockDeliverability.dailyQuota} today
                </span>
              </div>
            </div>
          </div>

          {/* Reply Agent Banner */}
          <div
            className="card"
            style={{
              padding: '20px',
              background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-strong)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: 'var(--brand)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={14} />
              </div>
              <h4 style={{ fontSize: '0.98rem', fontFamily: 'var(--sans)' }}>AI Reply Agent Active</h4>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '14px', lineHeight: 1.5 }}>
              Mode: <strong>Approval Required</strong>. 3 replies drafted and waiting for your review.
            </p>
            <Link to="/dashboard/inbox" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Open Reply Inbox
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
