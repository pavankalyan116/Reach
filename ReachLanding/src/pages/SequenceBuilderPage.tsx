import React, { useState } from 'react';
import {
  Plus,
  Clock,
  Trash2,
  Sparkles,
  CheckCircle,
  Save,
} from 'lucide-react';
import { mockSequenceSteps } from '../data/mockData';
import type { SequenceStep, ChannelType } from '../types';

export const SequenceBuilderPage: React.FC = () => {
  const [steps, setSteps] = useState<SequenceStep[]>(mockSequenceSteps);
  const [stopOnReplyAll, setStopOnReplyAll] = useState(true);
  const [savedNotification, setSavedNotification] = useState(false);

  const handleToggleStep = (id: string) => {
    setSteps(
      steps.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const handleUpdateStep = (id: string, updates: Partial<SequenceStep>) => {
    setSteps(
      steps.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const handleDeleteStep = (id: string) => {
    if (steps.length <= 1) return;
    setSteps(steps.filter((s) => s.id !== id));
  };

  const handleAddStep = () => {
    const nextNum = steps.length + 1;
    const newStep: SequenceStep = {
      id: `seq-${Date.now()}`,
      stepNumber: nextNum,
      channel: nextNum % 2 === 0 ? 'whatsapp' : 'email',
      delayDays: 3,
      body: "Hi {{first_name}}, following up on our previous note. Would love to share our 2-min case study.",
      enabled: true,
      stopOnReply: true,
      aiScore: 89,
      spamRisk: 'low',
    };
    setSteps([...steps, newStep]);
  };

  const handleSave = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2500);
  };

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
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Multi-Channel Sequence Builder</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Build automated branching touchpoints across Email, WhatsApp, and SMS.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {savedNotification && (
            <span
              style={{
                fontSize: '0.84rem',
                color: 'var(--good)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <CheckCircle size={15} /> Sequence Saved
            </span>
          )}
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-brand btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Save size={15} /> Save Sequence
          </button>
        </div>
      </div>

      {/* Global Sequence Policy Banner */}
      <div
        className="card"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'var(--surface-2)',
          padding: '16px 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: stopOnReplyAll ? 'var(--good)' : 'var(--warn)',
            }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--ink)' }}>
              Sequence Termination Condition
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              Automatically halt future follow-ups the millisecond a response is recorded on any channel.
            </div>
          </div>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={stopOnReplyAll}
            onChange={(e) => setStopOnReplyAll(e.target.checked)}
          />
          <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Active (Recommended)</span>
        </label>
      </div>

      {/* Visual Step by Step Flow */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            {/* Step Card */}
            <div
              className="card"
              style={{
                position: 'relative',
                border: step.enabled ? '1px solid var(--border-strong)' : '1px dashed var(--border)',
                opacity: step.enabled ? 1 : 0.6,
                padding: '24px',
              }}
            >
              {/* Step Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--brand)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                      Step {idx + 1}: {step.channel === 'email' ? 'Email Touchpoint' : step.channel === 'whatsapp' ? 'WhatsApp Message' : 'SMS Notification'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                      {idx === 0 ? 'Fires immediately upon campaign start' : `Triggered ${step.delayDays} days after previous step`}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <select
                    value={step.channel}
                    onChange={(e) => handleUpdateStep(step.id, { channel: e.target.value as ChannelType })}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      background: 'var(--surface-2)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                    }}
                  >
                    <option value="email">Email</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="sms">SMS</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => handleToggleStep(step.id)}
                    className="btn btn-outline btn-xs"
                  >
                    {step.enabled ? 'Enabled' : 'Disabled'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteStep(step.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--faint)', cursor: 'pointer' }}
                    title="Delete Step"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Message Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {step.channel === 'email' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--faint)', marginBottom: '4px' }}>
                      Subject Line
                    </label>
                    <input
                      type="text"
                      value={step.subject || ''}
                      onChange={(e) => handleUpdateStep(step.id, { subject: e.target.value })}
                      placeholder="Enter email subject..."
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: '6px',
                        border: '1px solid var(--border)',
                        background: 'var(--surface-2)',
                        fontSize: '0.88rem',
                      }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--faint)', marginBottom: '4px' }}>
                    Content Body ({step.channel.toUpperCase()})
                  </label>
                  <textarea
                    rows={3}
                    value={step.body}
                    onChange={(e) => handleUpdateStep(step.id, { body: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      background: 'var(--surface-2)',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--sans)',
                    }}
                  />
                </div>

                {/* Score & Chips */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="chip chip-brand" style={{ fontSize: '0.74rem' }}>
                      <Sparkles size={12} /> AI Score: {step.aiScore || 90}/100
                    </span>
                    <span className="chip chip-good" style={{ fontSize: '0.74rem' }}>
                      Low Spam Risk
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--faint)' }}>
                    Available tokens: <code>{`{{first_name}}`}</code>, <code>{`{{company}}`}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Delay Connector if not the last step */}
            {idx < steps.length - 1 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '12px 0',
                }}
              >
                <div style={{ width: '2px', height: '18px', background: 'var(--border-strong)' }}></div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border-strong)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--brand-dk)',
                  }}
                >
                  <Clock size={13} />
                  Wait {steps[idx + 1].delayDays} days if no response
                </div>
                <div style={{ width: '2px', height: '18px', background: 'var(--border-strong)' }}></div>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Add Step Button */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            type="button"
            onClick={handleAddStep}
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={16} /> Add Next Follow-up Step
          </button>
        </div>
      </div>
    </div>
  );
};
