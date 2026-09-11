import React from 'react';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow">
      <div className="wrap">
        <div className="section-head">
          <h2>How a campaign moves, start to reply</h2>
          <p>Five stages, most of them automatic once you&apos;ve set the first one up.</p>
        </div>

        <div className="flow">
          <div className="flow-line"></div>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="flow-num">1</div>
              <div className="flow-content">
                <h3>Import and validate recipients</h3>
                <p>
                  Upload a spreadsheet, and Reach checks every row for missing or malformed contact
                  details before anything sends.
                </p>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-num">2</div>
              <div className="flow-content">
                <h3>Draft and review content</h3>
                <p>
                  Write by hand or let AI draft a first pass per channel, then run the automatic
                  review for spam risk and inbox placement.
                </p>
                <span className="tag">AI-assisted</span>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-num">3</div>
              <div className="flow-content">
                <h3>Send the first touch</h3>
                <p>
                  Delivers through your connected mailbox, SMTP, or the SMS gateway — warmed-up and
                  rate-limited so a new sender doesn&apos;t spike.
                </p>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-num">4</div>
              <div className="flow-content">
                <h3>Follow up automatically</h3>
                <p>
                  A sequence of timed steps runs across channels on its own, and stops the moment a
                  recipient replies or opts out.
                </p>
                <span className="tag">Runs unattended</span>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-num">5</div>
              <div className="flow-content">
                <h3>Track replies, let the agent help</h3>
                <p>
                  Every open and reply lands in one inbox view. The reply agent can draft, hold for
                  approval, or answer on its own — your call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
