import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ChannelStrip } from '../components/ChannelStrip';
import { ContentEditor } from '../components/ContentEditor';
import { SequenceBuilder } from '../components/SequenceBuilder';
import { ReplyAgent } from '../components/ReplyAgent';
import { Workflow } from '../components/Workflow';
import { Deliverability } from '../components/Deliverability';
import { TrustStrip } from '../components/TrustStrip';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main id="top">
        {/* 1. Problem → Solution */}
        <Hero />
        {/* 2. Channel proof */}
        <ChannelStrip />
        {/* 3. Product capabilities */}
        <ContentEditor />
        <SequenceBuilder />
        <ReplyAgent />
        {/* 4. How it works */}
        <Workflow />
        {/* 5. Operations & Credibility */}
        <Deliverability />
        {/* 6. Trust */}
        <TrustStrip />
        {/* 7. Final CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
