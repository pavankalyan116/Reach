import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { OrchestrateSection } from '../components/OrchestrateSection';
import { UnderstandSection } from '../components/UnderstandSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { DeliverabilitySection } from '../components/DeliverabilitySection';
import { AnalyticsSection } from '../components/AnalyticsSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-page-root">
      <main>
        {/* Navigation & Hero Section */}
        <Hero />

        {/* 01 / Orchestrate */}
        <OrchestrateSection />

        {/* 02 / Understand */}
        <UnderstandSection />

        {/* How It Works (Abstract Diagram) */}
        <HowItWorksSection />

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
