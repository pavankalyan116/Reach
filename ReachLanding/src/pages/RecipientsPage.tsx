import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, Ban } from 'lucide-react';
import { mockRecipients } from '../data/mockData';
import type { Recipient } from '../types';

export const RecipientsPage: React.FC = () => {
  const [recipients] = useState<Recipient[]>(mockRecipients);
  const [filter, setFilter] = useState<'all' | 'valid' | 'unsubscribed' | 'invalid'>('all');

  const filtered = recipients.filter((r) => filter === 'all' || r.status === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Recipient Management & Validation</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Import contact lists with automated syntax validation and cross-workspace suppression enforcement.
          </p>
        </div>

        <button type="button" className="btn btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Upload size={15} /> Import Recipients (CSV)
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div className="card" style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600 }}>Total Contacts</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)' }}>2,450</div>
        </div>
        <div className="card" style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--good)', fontWeight: 600 }}>Verified & Valid</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--good)' }}>2,398</div>
        </div>
        <div className="card" style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--warn)', fontWeight: 600 }}>Suppressed / Opt-outs</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--warn)' }}>42</div>
        </div>
        <div className="card" style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--danger)', fontWeight: 600 }}>Invalid Syntax / Bounces</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--danger)' }}>10</div>
        </div>
      </div>

      {/* Recipients Table */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)', display: 'flex', gap: '6px' }}>
          {(['all', 'valid', 'unsubscribed', 'invalid'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? 'var(--ink)' : 'transparent',
                color: filter === f ? 'var(--paper)' : 'var(--muted)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <table className="reach-table">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Validation Status</th>
              <th>Last Touch</th>
              <th>Reply Recorded</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <td>
                  <div style={{ fontWeight: 600, color: 'var(--ink)' }}>
                    {r.firstName} {r.lastName}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--muted)' }}>{r.email}</div>
                </td>
                <td>
                  <div>{r.company}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>{r.title}</div>
                </td>
                <td style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>{r.phone || '—'}</td>
                <td>
                  <span
                    className={`chip ${
                      r.status === 'valid'
                        ? 'chip-good'
                        : r.status === 'unsubscribed'
                        ? 'chip-warn'
                        : 'chip-muted'
                    }`}
                  >
                    {r.status === 'valid' && <CheckCircle2 size={12} />}
                    {r.status === 'unsubscribed' && <Ban size={12} />}
                    {r.status === 'invalid' && <AlertCircle size={12} />}
                    <span style={{ textTransform: 'capitalize' }}>{r.status}</span>
                  </span>
                </td>
                <td>
                  {r.lastChannelContacted ? (
                    <span className="chip chip-muted" style={{ fontSize: '0.72rem' }}>
                      {r.lastChannelContacted.toUpperCase()}
                    </span>
                  ) : (
                    '—'
                  )}
                </td>
                <td>
                  {r.replied ? (
                    <span style={{ color: 'var(--good)', fontWeight: 600, fontSize: '0.82rem' }}>Yes</span>
                  ) : (
                    <span style={{ color: 'var(--faint)', fontSize: '0.82rem' }}>No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
