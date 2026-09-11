import React from 'react';
import { Mail, MessageSquare, PhoneCall } from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Multi-Channel Analytics</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
          Compare performance across Email, WhatsApp, and SMS touchpoints.
        </p>
      </div>

      {/* Channel Comparison Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {/* Email */}
        <div className="card" style={{ borderTop: '4px solid #EA580C' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: '#EA580C14', color: '#C2410C' }}>
              <Mail size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem' }}>Email Performance</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>1,840 messages sent</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Open Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>64.2%</div>
            </div>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Reply Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--good)' }}>14.8%</div>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="card" style={{ borderTop: '4px solid #137A56' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: '#137A5614', color: '#137A56' }}>
              <MessageSquare size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem' }}>WhatsApp Performance</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>520 messages sent</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Read Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>89.4%</div>
            </div>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Reply Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--good)' }}>28.5%</div>
            </div>
          </div>
        </div>

        {/* SMS */}
        <div className="card" style={{ borderTop: '4px solid #2563EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: '#2563EB14', color: '#2563EB' }}>
              <PhoneCall size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem' }}>SMS Performance</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>220 messages sent</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Delivery Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>98.6%</div>
            </div>
            <div style={{ padding: '10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>Reply Rate</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--good)' }}>19.1%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement by Touchpoint Step */}
      <div className="card">
        <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>Sequence Touchpoint Conversion</h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '20px' }}>
          Cumulative reply conversion rate as recipients progress through sequence follow-up stages
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
              <span>Step 1: Initial Email Touch</span>
              <strong>7.2% replied</strong>
            </div>
            <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '25%', height: '100%', background: '#EA580C' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
              <span>Step 2: WhatsApp Follow-up (Day 2)</span>
              <strong>+8.4% additional replies (15.6% cumulative)</strong>
            </div>
            <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '58%', height: '100%', background: '#137A56' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
              <span>Step 3: SMS Follow-up (Day 5)</span>
              <strong>+3.1% additional replies (18.7% final)</strong>
            </div>
            <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '78%', height: '100%', background: '#2563EB' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
