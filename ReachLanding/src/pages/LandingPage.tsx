import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ChannelStrip } from '../components/ChannelStrip';
import { ContentEditor } from '../components/ContentEditor';
import { Workflow } from '../components/Workflow';
import { PlatformFeatures } from '../components/PlatformFeatures';
import { Deliverability } from '../components/Deliverability';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main id="top">
        <Hero />
        <ChannelStrip />
        <ContentEditor />
        <Workflow />
        <PlatformFeatures />
        <Deliverability />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
