import React from 'react';

export const ReplyAgent: React.FC = () => {
  return (
    <section className="reply-section">
      <div className="wrap split split-reverse">
        <div className="split-copy">
          <span className="eyebrow">
            <span className="pip"></span>SMART REPLIES
          </span>
          <h2>AI reads every reply so you don't miss a lead.</h2>
          <p>
            Reach automatically categorizes incoming replies as interested, not now, unsubscribe, or
            bounce — and surfaces the hot leads at the top of your inbox. Spend your time on
            conversations that matter.
          </p>
          <ul className="split-list">
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6"/>
                <path d="M6.5 10.3l2.3 2.3 4.7-5" stroke="#F45B08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Instant classification: interested, not now, unsubscribe
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6"/>
                <path d="M6.5 10.3l2.3 2.3 4.7-5" stroke="#F45B08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Suggested follow-up drafts powered by AI
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#F45B08" strokeWidth="1.6"/>
                <path d="M6.5 10.3l2.3 2.3 4.7-5" stroke="#F45B08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Automatic sequence pausing on engagement
            </li>
          </ul>
        </div>

        <div className="split-visual">
          <div className="mock">
            <div className="mock-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="mock-body reply-mock">
              {/* Conversation */}
              <div className="reply-thread">
                <div className="reply-msg outbound">
                  <div className="reply-msg-label">You → Sarah Chen</div>
                  <div className="reply-msg-text">
                    Hi Sarah, noticed Acme just expanded into APAC. We help teams like yours coordinate outreach across channels…
                  </div>
                  <div className="reply-msg-time">Sent via Email · 2 days ago</div>
                </div>

                <div className="reply-msg inbound">
                  <div className="reply-msg-label">Sarah Chen → You</div>
                  <div className="reply-msg-text">
                    Thanks for reaching out! We've been looking for something like this. Can we set up a call next week?
                  </div>
                  <div className="reply-msg-time">Email reply · 1 hour ago</div>
                </div>
              </div>

              {/* AI Classification Panel */}
              <div className="ai-classify">
                <div className="ai-classify-header">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M8 1l2 4.5L15 6l-3.5 3.5L12.5 15 8 12.5 3.5 15 4.5 9.5 1 6l5-0.5L8 1z" stroke="#F45B08" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  AI Classification
                </div>
                <div className="ai-classify-badge interested">
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5.5 8.2l1.7 1.7 3.3-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Interested — High intent
                </div>
                <div className="ai-classify-actions">
                  <button type="button" className="btn btn-primary btn-sm">Send suggested reply</button>
                  <button type="button" className="btn btn-ghost btn-sm">View in inbox</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
