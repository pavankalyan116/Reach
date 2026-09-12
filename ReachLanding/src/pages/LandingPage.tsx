import React from 'react';
import { Hero } from '../components/Hero';
import { OrchestrateSection } from '../components/OrchestrateSection';
import { UnderstandSection } from '../components/UnderstandSection';
import { DeliverabilitySection } from '../components/DeliverabilitySection';
import { AnalyticsSection } from '../components/AnalyticsSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-root">
      <main>
        {/* Navigation & Hero Section */}
        <Hero />

        {/* 01 / Orchestrate */}
        <OrchestrateSection />

        {/* 02 / Understand */}
        <UnderstandSection />

        {/* 03 / Deliver */}
        <DeliverabilitySection />

        {/* Analytics / Features */}
        <AnalyticsSection />

        {/* Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
