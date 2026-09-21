import React, { useState, useEffect } from 'react';
import { Database, Brain, Send, Check } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  // States: 0=Idle/Transition, 1=Data, 2=Brain, 3=Delivery, 4=Completed, -1=Resetting
  const [activeStage, setActiveStage] = useState<number>(0);
  const [dotProgress, setDotProgress] = useState<number>(15); // 15%, 50%, 85% for centers
  const [subStep, setSubStep] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveStage(1);
      setDotProgress(15);
      return;
    }

    let isMounted = true;
    
    const runSequence = async () => {
      // Start slightly before 15 to make it glide in
      setDotProgress(0);
      setActiveStage(-1);
      await new Promise(r => setTimeout(r, 100));
      if (!isMounted) return;

      while (isMounted) {
        // T=0.0s -> Stage 1 Active
        setActiveStage(1);
        setDotProgress(15); // Move to card 1
        setSubStep(0);
        await new Promise(r => setTimeout(r, 1400));
        if (!isMounted) break;
        
        // T=1.4s -> Transition to Stage 2
        setActiveStage(0); 
        setDotProgress(50); // Move to card 2
        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) break;

        // T=1.8s -> Stage 2 Active
        setActiveStage(2);
        setSubStep(0); // Intent detected
        await new Promise(r => setTimeout(r, 530));
        if (!isMounted) break;
        setSubStep(1); // Personalizing
        await new Promise(r => setTimeout(r, 530));
        if (!isMounted) break;
        setSubStep(2); // Selecting channel
        await new Promise(r => setTimeout(r, 540));
        if (!isMounted) break;

        // T=3.4s -> Transition to Stage 3
        setActiveStage(0);
        setDotProgress(85); // Move to card 3
        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) break;

        // T=3.8s -> Stage 3 Active
        setActiveStage(3);
        setSubStep(0); // Email
        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) break;
        setSubStep(1); // WhatsApp
        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) break;
        setSubStep(2); // SMS
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) break;

        // T=5.4s -> Completion pause
        setActiveStage(4); 
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) break;
        
        // Reset sequence
        setActiveStage(-1);
        await new Promise(r => setTimeout(r, 300));
        if (!isMounted) break;
        setDotProgress(0); // Instantly move to start while invisible
        await new Promise(r => setTimeout(r, 100));
        if (!isMounted) break;
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [prefersReducedMotion]);

  const stage1Completed = activeStage > 1 || (activeStage === 0 && dotProgress > 15);
  const stage2Completed = activeStage > 2 || (activeStage === 0 && dotProgress > 50);
  const stage3Completed = activeStage === 4;

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-wrap hiw-section-wrap">
        <div className="hiw-header">
          <span className="section-kicker">BEHIND THE SCENES</span>
          <h2 className="section-title">How Reach Works</h2>
          <p className="section-copy">
            A secure, intelligent pipeline that transforms raw data into orchestrated conversations.
          </p>
        </div>

        <div className="hiw-diagram-container">
          
          {/* Connecting line behind cards */}
          <div className="hiw-continuous-line-wrapper">
            <div className="hiw-continuous-line">
              <div 
                className="hiw-continuous-line-fill" 
                style={{ '--progress': prefersReducedMotion ? '15%' : `${Math.max(0, dotProgress)}%` } as React.CSSProperties} 
              />
            </div>
            
            {!prefersReducedMotion && (
              <div 
                className={`hiw-traveling-dot ${activeStage === -1 ? 'dot-hidden' : ''} ${activeStage > 0 && activeStage < 4 ? 'dot-active' : ''}`}
                style={{ '--progress': `${dotProgress}%` } as React.CSSProperties}
              />
            )}
          </div>

          <div className="hiw-nodes">
            
            {/* Node 1: Your Data */}
            <div className={`hiw-node node-data ${activeStage === 1 ? 'is-active' : ''}`}>
              <div className="node-header">
                <span className="node-number">01</span>
                {stage1Completed ? (
                  <span className="node-badge-completed"><Check size={12} strokeWidth={3} /> Completed</span>
                ) : (
                  activeStage === 1 && <span className="node-badge-processing"><span className="pulse-dot" /> Importing</span>
                )}
              </div>
              <div className="node-icon-wrapper">
                <Database size={24} className="node-icon" />
              </div>
              <span className="node-label">Your Data</span>
              <p className="node-desc">Securely connected via<br/>API or CSV.</p>
              
              <div className={`node-micro-status ${activeStage === 1 ? 'show' : ''}`}>
                <div className="data-sources-pill">
                  <span className="source-pill">API</span>
                  <span className="source-pill">CSV</span>
                  <span className="source-pill">CRM</span>
                </div>
              </div>
            </div>

            {/* Node 2: Reach AI Brain */}
            <div className={`hiw-node node-brain ${activeStage === 2 ? 'is-active' : ''}`}>
              <div className="node-header">
                <span className="node-number">02</span>
                {stage2Completed ? (
                  <span className="node-badge-completed"><Check size={12} strokeWidth={3} /> Completed</span>
                ) : activeStage === 2 ? (
                  <span className="node-badge-processing"><span className="pulse-dot" /> Processing</span>
                ) : (
                  <span className="node-badge-upcoming"><span className="empty-dot" /> Upcoming</span>
                )}
              </div>
              <div className="node-icon-wrapper">
                <Brain size={28} className="node-icon" />
              </div>
              <span className="node-label">Reach AI Brain</span>
              <p className="node-desc">Analyzing intent &<br/>personalizing messaging.</p>
              
              <div className={`node-micro-status ${activeStage === 2 ? 'show' : ''}`}>
                <ul className="ai-steps-list">
                  <li className={subStep >= 0 ? 'step-active' : ''}>
                    <span className={`step-dot ${subStep >= 0 ? 'dot-filled' : ''}`} />
                    Intent detected
                  </li>
                  <li className={subStep >= 1 ? 'step-active' : ''}>
                    <span className={`step-dot ${subStep >= 1 ? 'dot-filled' : ''}`} />
                    Personalizing message
                  </li>
                  <li className={subStep >= 2 ? 'step-active' : ''}>
                    <span className={`step-dot ${subStep >= 2 ? 'dot-filled' : ''}`} />
                    Selecting best channel
                  </li>
                </ul>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: subStep === 0 ? '33%' : subStep === 1 ? '66%' : '100%' }} />
                  <span className="progress-text">{subStep === 0 ? '33%' : subStep === 1 ? '66%' : '100%'}</span>
                </div>
              </div>
            </div>

            {/* Node 3: Orchestrated Delivery */}
            <div className={`hiw-node node-delivery ${activeStage === 3 ? 'is-active' : ''}`}>
              <div className="node-header">
                <span className="node-number">03</span>
                {stage3Completed ? (
                  <span className="node-badge-completed"><Check size={12} strokeWidth={3} /> Completed</span>
                ) : activeStage === 3 ? (
                  <span className="node-badge-processing"><span className="pulse-dot" /> Sending</span>
                ) : (
                  <span className="node-badge-upcoming"><span className="empty-dot" /> Upcoming</span>
                )}
              </div>
              <div className="node-icon-wrapper">
                <Send size={24} className="node-icon" />
              </div>
              <span className="node-label">Orchestrated Delivery</span>
              <p className="node-desc">Dispatched across Email,<br/>WhatsApp & SMS.</p>
              
              <div className={`node-micro-status ${activeStage === 3 ? 'show' : ''}`}>
                <div className="delivery-channels-list">
                  <div className="delivery-channel-row">
                    <span className="ch-name"><img src={`${import.meta.env.BASE_URL}icons/gmail.png`} alt="" className="ch-tiny-icon"/> Email</span>
                    <span className={`ch-status ${subStep >= 0 ? 'ch-done' : ''}`}>{subStep >= 0 ? 'Sent' : 'Pending'}</span>
                  </div>
                  <div className="delivery-channel-row">
                    <span className="ch-name"><img src={`${import.meta.env.BASE_URL}icons/whatsapp.png`} alt="" className="ch-tiny-icon"/> WhatsApp</span>
                    <span className={`ch-status ${subStep >= 1 ? 'ch-done' : ''}`}>{subStep >= 1 ? 'Sent' : 'Pending'}</span>
                  </div>
                  <div className="delivery-channel-row">
                    <span className="ch-name"><img src={`${import.meta.env.BASE_URL}icons/sms.png`} alt="" className="ch-tiny-icon"/> SMS</span>
                    <span className={`ch-status ${subStep >= 2 ? 'ch-done' : ''}`}>{subStep >= 2 ? 'Sent' : 'Pending'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Bottom Story Timeline */}
          <div className="hiw-footer-story">
            <div className="story-step-container">
              <div className={`story-step ${activeStage >= 1 || dotProgress > 0 ? 'active' : ''}`}>
                {stage1Completed ? (
                  <Check size={18} className="text-orange" strokeWidth={3} />
                ) : activeStage === 1 ? (
                  <span className="story-dot filled" />
                ) : (
                  <span className="story-dot outline" />
                )}
                <span>YOUR DATA</span>
              </div>
              
              <div className="story-line">
                <div className="story-line-fill" style={{ '--progress': dotProgress > 15 ? '100%' : '0%' } as React.CSSProperties} />
              </div>
              
              <div className={`story-step ${activeStage >= 2 || dotProgress > 50 ? 'active' : ''}`}>
                {stage2Completed ? (
                  <Check size={18} className="text-orange" strokeWidth={3} />
                ) : activeStage === 2 ? (
                  <span className="story-dot filled" />
                ) : (
                  <span className="story-dot outline" />
                )}
                <span>AI PROCESSING</span>
              </div>
              
              <div className="story-line">
                <div className="story-line-fill" style={{ '--progress': dotProgress > 50 ? '100%' : '0%' } as React.CSSProperties} />
              </div>
              
              <div className={`story-step ${activeStage >= 3 || dotProgress > 85 ? 'active' : ''}`}>
                {stage3Completed ? (
                  <Check size={18} className="text-orange" strokeWidth={3} />
                ) : activeStage === 3 ? (
                  <span className="story-dot filled" />
                ) : (
                  <span className="story-dot outline" />
                )}
                <span>DELIVERY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
