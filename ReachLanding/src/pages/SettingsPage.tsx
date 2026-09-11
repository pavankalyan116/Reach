import React, { useState } from 'react';
import {
  Check,
  Mail,
  MessageSquare,
  PhoneCall,
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'channels' | 'billing'>('workspace');
  const [workspaceName, setWorkspaceName] = useState('Acme Growth Labs');
  const [teamMembers] = useState([
    { name: 'Reach Admin', email: 'demo@reachoutbound.com', role: 'Owner' },
    { name: 'Sarah Miller', email: 's.miller@acme.com', role: 'Campaign Manager' },
    { name: 'David Kim', email: 'd.kim@acme.com', role: 'SDR / Operator' },
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Workspace Settings</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
          Configure tenant workspaces, channel integrations, and subscription plans.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}>
        <button
          type="button"
          onClick={() => setActiveTab('workspace')}
          style={{
            padding: '8px 16px',
            border: 'none',
            background: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'workspace' ? 'var(--brand-dk)' : 'var(--muted)',
            borderBottom: activeTab === 'workspace' ? '2px solid var(--brand)' : '2px solid transparent',
          }}
        >
          General & Team
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('channels')}
          style={{
            padding: '8px 16px',
            border: 'none',
            background: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'channels' ? 'var(--brand-dk)' : 'var(--muted)',
            borderBottom: activeTab === 'channels' ? '2px solid var(--brand)' : '2px solid transparent',
          }}
        >
          Channel Gateways
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('billing')}
          style={{
            padding: '8px 16px',
            border: 'none',
            background: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeTab === 'billing' ? 'var(--brand-dk)' : 'var(--muted)',
            borderBottom: activeTab === 'billing' ? '2px solid var(--brand)' : '2px solid transparent',
          }}
        >
          Subscription & Plans
        </button>
      </div>

      {/* Tab 1: General & Team */}
      {activeTab === 'workspace' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.15rem', marginBottom: '14px' }}>Workspace Profile</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                  Workspace Name
                </label>
                <input
                  type="text"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-strong)',
                    background: 'var(--surface-2)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem' }}>Team Members & Role-Based Access</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                  Manage users who have permission to create campaigns and review replies
                </p>
              </div>
              <button type="button" className="btn btn-outline btn-xs">
                + Invite User
              </button>
            </div>

            <div className="table-container">
              <table className="reach-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((m) => (
                    <tr key={m.email}>
                      <td style={{ fontWeight: 600 }}>{m.name}</td>
                      <td style={{ color: 'var(--muted)' }}>{m.email}</td>
                      <td>
                        <span className="chip chip-brand" style={{ fontSize: '0.72rem' }}>
                          {m.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Channel Gateways */}
      {activeTab === 'channels' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
          {/* Email Gateways */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--brand-soft)', color: 'var(--brand-dk)' }}>
                <Mail size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem' }}>Email Service Connections</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Google Workspace, Microsoft 365, or Custom SMTP</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'var(--surface-2)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>4 Active Google Workspace Mailboxes</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--good)' }}>Warm-up in progress · SPF/DKIM Verified</div>
              </div>
              <button type="button" className="btn btn-outline btn-xs">Manage Mailboxes</button>
            </div>
          </div>

          {/* WhatsApp Cloud API */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--good-soft)', color: 'var(--good)' }}>
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem' }}>WhatsApp Cloud API</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Direct integration via Meta Business Platform</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'var(--surface-2)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Meta Business Account: REACH-PRO-WABA</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--good)' }}>Status: Active · Quality Rating: HIGH</div>
              </div>
              <button type="button" className="btn btn-outline btn-xs">Configure WABA</button>
            </div>
          </div>

          {/* SMS Carrier Gateway */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--info-soft)', color: 'var(--info)' }}>
                <PhoneCall size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem' }}>SMS A2P 10DLC Gateway</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Registered US/Global carrier routing with auto opt-out enforcement</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'var(--surface-2)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>10DLC Campaign Registry: Verified</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--good)' }}>TCR Status: Approved for Outbound Marketing</div>
              </div>
              <button type="button" className="btn btn-outline btn-xs">View Numbers</button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Subscription Plans */}
      {activeTab === 'billing' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            {
              name: 'Starter',
              price: '$49',
              period: '/mo',
              desc: 'For individual founders and small teams.',
              features: ['5,000 monthly sends', 'Email + WhatsApp', 'Basic warm-up', '1 Workspace'],
              current: false,
            },
            {
              name: 'Pro',
              price: '$149',
              period: '/mo',
              desc: 'For high-velocity outbound teams.',
              features: ['50,000 monthly sends', 'Email, WhatsApp & SMS', 'Full AI Reply Agent', 'DNS Reputation Guard', 'Up to 5 Workspaces'],
              current: true,
            },
            {
              name: 'Enterprise',
              price: '$499',
              period: '/mo',
              desc: 'Dedicated IPs, custom limits, and SLA.',
              features: ['Unlimited sends', 'Custom dedicated IPs', 'Autonomous Reply Agent', 'Custom FastApi Webhooks', 'Unlimited Workspaces'],
              current: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="card"
              style={{
                position: 'relative',
                border: plan.current ? '2px solid var(--brand)' : '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.current && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '16px',
                    background: 'var(--brand)',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '999px',
                  }}
                >
                  Current Plan
                </span>
              )}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{plan.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '14px' }}>{plan.desc}</p>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '18px' }}>
                {plan.price} <span style={{ fontSize: '0.9rem', color: 'var(--faint)' }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem' }}>
                    <Check size={14} color="var(--brand)" /> {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${plan.current ? 'btn-ghost' : 'btn-primary'} btn-sm`}
                style={{ width: '100%' }}
              >
                {plan.current ? 'Manage Billing' : 'Upgrade to ' + plan.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
