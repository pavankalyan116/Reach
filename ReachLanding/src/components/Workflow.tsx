import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Upload your audience',
    desc: 'Import a CSV or paste contacts. Reach deduplicates and validates emails automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 16V4m0 0L8 8m4-4l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Build your sequence',
    desc: 'Pick channels, write content, set timing and conditions. AI reviews your copy before send.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Check deliverability',
    desc: 'Run SPF, DKIM, and inbox-placement checks. Fix issues before your campaign goes live.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v6c0 5.25 3.75 10.2 9 11.25C17.25 23.2 21 18.25 21 13V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & monitor',
    desc: 'Hit send. Track opens, clicks, replies, and bounces across every channel in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Close the loop',
    desc: 'AI sorts replies by intent. Focus on hot leads while Reach handles the rest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export const Workflow: React.FC = () => {
  return (
    <section className="how-it-works">
      <div className="wrap">
        <span className="eyebrow">
          <span className="pip"></span>HOW IT WORKS
        </span>
        <h2 className="how-headline">From list to reply in five steps.</h2>
        <p className="how-sub">
          No onboarding call needed. Most teams send their first campaign in under 15 minutes.
        </p>

        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.num}>
              <div className="step-icon">{s.icon}</div>
              <div className="step-num">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
