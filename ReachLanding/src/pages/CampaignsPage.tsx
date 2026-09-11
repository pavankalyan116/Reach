import React, { useState } from 'react';
import {
  Plus,
  Search,
  Send,
  Sparkles,
  CheckCircle2,
  X,
  Clock,
  Users,
} from 'lucide-react';
import { mockCampaigns } from '../data/mockData';
import type { Campaign, ChannelType } from '../types';
import { api } from '../services/api';

export const CampaignsPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Wizard state (7 stages)
  const [wizardStep, setWizardStep] = useState(1);
  const [newCampaignName, setNewCampaignName] = useState('');
  const [selectedChannels, setSelectedChannels] = useState<ChannelType[]>(['email', 'whatsapp']);
  const [emailSubject, setEmailSubject] = useState("Quick question about {{company}}'s Q3 plans");
  const [emailBody, setEmailBody] = useState("Hi {{first_name}},\n\nNoticed {{company}} just expanded. We help teams reach recipients across Email, WhatsApp, and SMS seamlessly.\n\nOpen to a brief demo?");
  const [recipientsCount] = useState(450);

  const toggleChannel = (ch: ChannelType) => {
    if (selectedChannels.includes(ch)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== ch));
      }
    } else {
      setSelectedChannels([...selectedChannels, ch]);
    }
  };

  const handleCreateCampaign = async () => {
    const created = await api.createCampaign({
      name: newCampaignName || 'New Multi-Channel Outreach',
      channels: selectedChannels,
      recipientsCount: recipientsCount,
    });
    setCampaigns([created, ...campaigns]);
    setIsWizardOpen(false);
    setWizardStep(1);
    setNewCampaignName('');
  };

  const filteredCampaigns = campaigns.filter((c) => {
    const matchesFilter = filter === 'all' || c.status === filter;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Campaigns</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Build, execute, and monitor unified multi-channel outreach campaigns.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsWizardOpen(true)}
          className="btn btn-brand"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={16} />
          Create Campaign
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'var(--surface)',
          padding: '14px 18px',
          border: '1px solid var(--border)',
          borderRadius: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['all', 'active', 'completed', 'draft'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? 'var(--ink)' : 'transparent',
                color: filter === f ? 'var(--paper)' : 'var(--muted)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.15s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', minWidth: '260px' }}>
          <Search
            size={16}
            color="var(--faint)"
            style={{ position: 'absolute', left: '12px', top: '10px' }}
          />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              background: 'var(--surface-2)',
              fontSize: '0.86rem',
              color: 'var(--ink)',
            }}
          />
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <table className="reach-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Channels</th>
              <th>Status</th>
              <th>Recipients</th>
              <th>Sent</th>
              <th>Open Rate</th>
              <th>Reply Rate</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.map((c) => (
              <tr key={c.id}>
                <td>
                  <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{c.name}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>ID: {c.id}</div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
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
                <td>{c.recipientsCount.toLocaleString()}</td>
                <td>{c.sentCount.toLocaleString()}</td>
                <td>{c.openRate > 0 ? `${c.openRate}%` : '—'}</td>
                <td>
                  <strong style={{ color: c.replyRate > 15 ? 'var(--good)' : 'inherit' }}>
                    {c.replyRate > 0 ? `${c.replyRate}%` : '—'}
                  </strong>
                </td>
                <td style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{c.lastTouch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 7-STAGE CAMPAIGN CREATION MODAL */}
      {isWizardOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(27, 23, 18, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--surface-2)',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem' }}>Create Multi-Channel Campaign</h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2px' }}>
                  Stage {wizardStep} of 7: {
                    [
                      '',
                      'Campaign Details',
                      'Select Recipients',
                      'Select Channels',
                      'Compose Content',
                      'Configure Sequence',
                      'Review',
                      'Launch',
                    ][wizardStep]
                  }
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsWizardOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Stepper Progress Bar */}
            <div style={{ display: 'flex', height: '4px', background: 'var(--border)' }}>
              <div
                style={{
                  width: `${(wizardStep / 7) * 100}%`,
                  background: 'var(--brand)',
                  transition: 'width 0.25s ease',
                }}
              />
            </div>

            {/* Modal Body per Stage */}
            <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
              {/* STAGE 1: Campaign Details */}
              {wizardStep === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                      Campaign Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Q4 VP Engineering Outreach"
                      value={newCampaignName}
                      onChange={(e) => setNewCampaignName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface-2)',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                      Target Objective
                    </label>
                    <select
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface-2)',
                        fontSize: '0.92rem',
                      }}
                    >
                      <option>Book Demos & Product Walkthroughs</option>
                      <option>Event / Webinar Registration</option>
                      <option>Customer Re-engagement</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STAGE 2: Select Recipients */}
              {wizardStep === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    style={{
                      border: '2px dashed var(--border-strong)',
                      borderRadius: '12px',
                      padding: '28px',
                      textAlign: 'center',
                      background: 'var(--surface-2)',
                    }}
                  >
                    <Users size={32} color="var(--brand)" style={{ margin: '0 auto 8px' }} />
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Imported CSV: Enterprise_Leads_Sept.csv</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '4px' }}>
                      450 records identified · 450 valid email & phone contacts
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'var(--good-soft)',
                      color: 'var(--good)',
                      fontSize: '0.84rem',
                    }}
                  >
                    <CheckCircle2 size={16} />
                    <span>Automatic list validation: 0 syntax errors, 0 duplicates, 0 suppressed opt-outs.</span>
                  </div>
                </div>
              )}

              {/* STAGE 3: Select Channels */}
              {wizardStep === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>
                    Choose which channels will be utilized in this outreach sequence:
                  </p>

                  <div
                    onClick={() => toggleChannel('email')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '10px',
                      border: `1.5px solid ${selectedChannels.includes('email') ? 'var(--brand)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      background: selectedChannels.includes('email') ? 'var(--brand-soft2)' : 'var(--surface)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>Email Channel</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        Connected Mailbox (Google Workspace / Office 365)
                      </div>
                    </div>
                    <span className="chan-chip">
                      <span className="d" style={{ background: '#EA580C' }}></span>
                      {selectedChannels.includes('email') ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleChannel('whatsapp')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '10px',
                      border: `1.5px solid ${selectedChannels.includes('whatsapp') ? 'var(--good)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      background: selectedChannels.includes('whatsapp') ? 'var(--good-soft)' : 'var(--surface)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>WhatsApp Business</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        Meta Cloud API · Template approval verified
                      </div>
                    </div>
                    <span className="chan-chip">
                      <span className="d" style={{ background: '#137A56' }}></span>
                      {selectedChannels.includes('whatsapp') ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleChannel('sms')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '10px',
                      border: `1.5px solid ${selectedChannels.includes('sms') ? 'var(--info)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      background: selectedChannels.includes('sms') ? 'var(--info-soft)' : 'var(--surface)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>SMS Gateway</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        10DLC Verified A2P Carrier Route
                      </div>
                    </div>
                    <span className="chan-chip">
                      <span className="d" style={{ background: '#2563EB' }}></span>
                      {selectedChannels.includes('sms') ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              )}

              {/* STAGE 4: Compose Content */}
              {wizardStep === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Subject Line (Email)
                    </label>
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface-2)',
                        fontSize: '0.88rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Body Content
                    </label>
                    <textarea
                      rows={5}
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface-2)',
                        fontSize: '0.88rem',
                        fontFamily: 'var(--sans)',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="chip chip-brand">
                      <Sparkles size={12} /> AI score: 92/100
                    </span>
                    <span className="chip chip-good">No spam triggers detected</span>
                  </div>
                </div>
              )}

              {/* STAGE 5: Configure Sequence */}
              {wizardStep === 5 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ padding: '14px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                      Step 1: Immediate Send
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      Initial Email touchpoint delivered through warmed-up sender mailbox.
                    </div>
                  </div>

                  <div style={{ padding: '14px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                      <Clock size={15} color="var(--brand)" /> Step 2: 2-Day Wait → WhatsApp Follow-up
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      Automatically triggers if no email reply is detected within 48 hours.
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <input type="checkbox" id="stopReply" defaultChecked />
                    <label htmlFor="stopReply" style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--ink)' }}>
                      Stop sequence automatically the moment recipient replies on ANY channel
                    </label>
                  </div>
                </div>
              )}

              {/* STAGE 6: Review */}
              {wizardStep === 6 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="card" style={{ padding: '16px', background: 'var(--surface-2)' }}>
                    <h4 style={{ fontSize: '0.98rem', marginBottom: '10px' }}>Campaign Summary</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.84rem' }}>
                      <div>
                        <span style={{ color: 'var(--faint)' }}>Name:</span>{' '}
                        <strong>{newCampaignName || 'Untitled Outreach'}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--faint)' }}>Recipients:</span>{' '}
                        <strong>{recipientsCount} verified</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--faint)' }}>Channels:</span>{' '}
                        <strong>{selectedChannels.join(', ').toUpperCase()}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--faint)' }}>Deliverability check:</span>{' '}
                        <strong style={{ color: 'var(--good)' }}>Passed (SPF/DKIM clean)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 7: Launch */}
              {wizardStep === 7 && (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--brand-soft)',
                      color: 'var(--brand-dk)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Send size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Ready to Launch</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 24px' }}>
                    Your campaign will be queued, warmed-up rate limits will be observed, and follow-up sequences will run automatically.
                  </p>
                  <button
                    type="button"
                    onClick={handleCreateCampaign}
                    className="btn btn-brand"
                    style={{ padding: '12px 28px', fontSize: '1rem' }}
                  >
                    Confirm & Launch Campaign
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            {wizardStep < 7 && (
              <div
                style={{
                  padding: '16px 24px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: 'var(--surface-2)',
                }}
              >
                <button
                  type="button"
                  disabled={wizardStep === 1}
                  onClick={() => setWizardStep(wizardStep - 1)}
                  className="btn btn-ghost btn-sm"
                  style={{ opacity: wizardStep === 1 ? 0.5 : 1 }}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(wizardStep + 1)}
                  className="btn btn-primary btn-sm"
                >
                  Next: {
                    [
                      '',
                      'Recipients',
                      'Channels',
                      'Compose',
                      'Sequence',
                      'Review',
                      'Launch',
                    ][wizardStep]
                  }
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
