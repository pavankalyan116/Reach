import React from 'react';
import emailIcon from '../assets/icons/gmail.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import smsIcon from '../assets/icons/sms.png';
import multichannelIcon from '../assets/icons/multi-channel.png';
import replyIcon from '../assets/icons/reply.png';
import scheduledIcon from '../assets/icons/Scheduled.png';
import personalizedIcon from '../assets/icons/Personalized.png';
import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Search, 
  MoreVertical, 
  ChevronDown,
  Calendar,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  // Generate random heights for the mock bar chart
  const chartBars = Array.from({ length: 45 }).map((_, i) => {
    // Generate a mostly random pattern but with an upward trend
    const baseHeight = 10 + (i * 0.8);
    const randomVariation = Math.random() * 40;
    const sentHeight = Math.min(100, baseHeight + randomVariation);
    const replyHeight = sentHeight * (0.15 + Math.random() * 0.2);
    
    return {
      sent: sentHeight,
      reply: replyHeight
    };
  });

  return (
    <section className="analytics-section" id="analytics">
      <div className="section-wrap">
        
        {/* Analytics Header */}
        <div className="analytics-header">
          <span className="section-kicker">BUILT FOR TEAMS THAT SCALE</span>
          <h2 className="section-title text-center">
            One workspace.<br />
            Every campaign, <span className="text-orange">under control.</span>
          </h2>
          <p className="section-copy text-center mx-auto">
            Organize your team, track what matters, and keep your client data secure — all in one place.
          </p>
        </div>

        <div className="analytics-bento-grid">
          
          {/* Left Column (Stacked Cards) */}
          <div className="analytics-left-col">
            
            {/* Card 1: Separate workspaces */}
            <div className="bento-card animate-on-scroll stagger-1">
              <div className="bento-card-content">
                <div className="analytics-icon-box">
                  <Users size={22} className="analytics-icon-orange" />
                </div>
                <h3 className="analytics-card-title">Separate workspaces</h3>
                <p className="analytics-card-copy">
                  Keep each client's campaigns, contacts, and team permissions organized.
                </p>
                <button className="btn-light-orange mt-auto">
                  + New workspace
                </button>
              </div>
              
              {/* Mock UI: Workspaces */}
              <div className="bento-mock-ui mock-workspaces">
                <div className="mock-ui-header">
                  <span className="mock-ui-title">Your workspaces</span>
                  <Search size={14} className="mock-icon-muted" />
                </div>
                <div className="mock-list">
                  <div className="mock-list-item">
                    <div className="mock-avatar avatar-orange">A</div>
                    <div className="mock-item-text">
                      <span className="mock-item-title">Acme Corp</span>
                      <span className="mock-item-subtitle">12 campaigns &middot; 3,482 contacts</span>
                    </div>
                    <div className="mock-badge badge-active">Active</div>
                    <MoreVertical size={14} className="mock-icon-muted ml-2" />
                  </div>
                  <div className="mock-list-item">
                    <div className="mock-avatar avatar-blue">N</div>
                    <div className="mock-item-text">
                      <span className="mock-item-title">Nova Labs</span>
                      <span className="mock-item-subtitle">8 campaigns &middot; 1,920 contacts</span>
                    </div>
                    <div className="mock-badge badge-active">Active</div>
                    <MoreVertical size={14} className="mock-icon-muted ml-2" />
                  </div>
                  <div className="mock-list-item">
                    <div className="mock-avatar avatar-purple">V</div>
                    <div className="mock-item-text">
                      <span className="mock-item-title">Vertex Media</span>
                      <span className="mock-item-subtitle">5 campaigns &middot; 962 contacts</span>
                    </div>
                    <div className="mock-badge badge-active">Active</div>
                    <MoreVertical size={14} className="mock-icon-muted ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Role-based control */}
            <div className="bento-card animate-on-scroll stagger-2">
              <div className="bento-card-content">
                <div className="analytics-icon-box">
                  <ShieldCheck size={22} className="analytics-icon-orange" />
                </div>
                <h3 className="analytics-card-title">Role-based control</h3>
                <p className="analytics-card-copy">
                  Give every teammate the right access without mixing client data.
                </p>
                <button className="btn-light-orange mt-auto">
                  Manage team access <ArrowRight size={14} className="ml-1" />
                </button>
              </div>

              {/* Mock UI: Roles */}
              <div className="bento-mock-ui mock-roles">
                <div className="mock-table-header">
                  <div className="col-member">Team member</div>
                  <div className="col-role">Role</div>
                  <div className="col-access">Access</div>
                </div>
                <div className="mock-table-row">
                  <div className="col-member">
                    <div className="mock-avatar-small avatar-green">PK</div>
                    <span className="mock-member-name">Pavan Kalyan</span>
                  </div>
                  <div className="col-role">
                    <div className="mock-dropdown">Admin <ChevronDown size={12} /></div>
                  </div>
                  <div className="col-access">
                    <div className="mock-badge badge-all-clients">All clients</div>
                  </div>
                </div>
                <div className="mock-table-row">
                  <div className="col-member">
                    <div className="mock-avatar-small avatar-olive">SD</div>
                    <span className="mock-member-name">Sai Durga</span>
                  </div>
                  <div className="col-role">
                    <div className="mock-dropdown">Manager <ChevronDown size={12} /></div>
                  </div>
                  <div className="col-access">
                    <div className="mock-badge badge-selected-clients">Selected clients</div>
                  </div>
                </div>
                <div className="mock-table-row">
                  <div className="col-member">
                    <div className="mock-avatar-small avatar-olive-light">AR</div>
                    <span className="mock-member-name">Aarav Reddy</span>
                  </div>
                  <div className="col-role">
                    <div className="mock-dropdown">Member <ChevronDown size={12} /></div>
                  </div>
                  <div className="col-access">
                    <div className="mock-badge badge-view-only">View only</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Large Card) */}
          <div className="analytics-right-col animate-on-scroll stagger-3">
            <div className="bento-card card-tall">
              
              <div className="bento-tall-header">
                <div className="bento-tall-title-group">
                  <div className="analytics-icon-box mb-0 mr-4">
                    <BarChart3 size={22} className="analytics-icon-orange" />
                  </div>
                  <div>
                    <h3 className="analytics-card-title mb-1">Outcome analytics</h3>
                    <p className="analytics-card-copy mb-0" style={{maxWidth: '350px'}}>
                      Follow sent, delivered, opens, clicks, replies, follow-ups, and outcomes.
                    </p>
                  </div>
                </div>
                <div className="mock-dropdown dropdown-outline">
                  <Calendar size={14} className="mr-2" />
                  Last 30 days <ChevronDown size={14} className="ml-2" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="mock-stats-grid">
                <div className="mock-stat-box">
                  <div className="stat-value">1,248</div>
                  <div className="stat-label">Sent</div>
                  <div className="stat-icon"><img src={multichannelIcon} width={28} height={28} alt="Sent" /></div>
                </div>
                <div className="mock-stat-box">
                  <div className="stat-value text-green">982</div>
                  <div className="stat-label">Delivered</div>
                  <div className="stat-icon"><img src={emailIcon} width={28} height={28} alt="Delivered" /></div>
                </div>
                <div className="mock-stat-box">
                  <div className="stat-value">64</div>
                  <div className="stat-label">Replies</div>
                  <div className="stat-icon"><img src={replyIcon} width={28} height={28} alt="Replies" /></div>
                </div>
                <div className="mock-stat-box">
                  <div className="stat-value text-orange">12</div>
                  <div className="stat-label">Meetings</div>
                  <div className="stat-icon"><img src={scheduledIcon} width={28} height={28} alt="Meetings" /></div>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="mock-chart-legend">
                <span className="legend-item"><span className="legend-dot dot-orange"></span> Sent</span>
                <span className="legend-item"><span className="legend-dot dot-light-orange"></span> Replies</span>
              </div>

              {/* Mock Bar Chart */}
              <div className="mock-chart-container">
                <div className="chart-y-axis">
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                <div className="chart-bars-area">
                  {chartBars.map((bar, idx) => (
                    <div className="chart-bar-group" key={idx}>
                      <div className="bar-sent" style={{ height: `${bar.sent}%` }}></div>
                      <div className="bar-reply" style={{ height: `${bar.reply}%` }}></div>
                    </div>
                  ))}
                </div>
                <div className="chart-x-axis">
                  <span>Mar 1</span>
                  <span>Mar 5</span>
                  <span>Mar 10</span>
                  <span>Mar 15</span>
                  <span>Mar 20</span>
                  <span>Mar 25</span>
                  <span>Mar 30</span>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="mock-bottom-banner">
                <div className="banner-icon-box">
                  <TrendingUp size={20} className="text-orange" />
                </div>
                <div className="banner-text">
                  <div className="banner-title">3.2x higher reply rate</div>
                  <div className="banner-subtitle">Compared to manual outreach</div>
                </div>
                <a href="#" className="banner-link">View full analytics <ArrowRight size={14} className="ml-1" /></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

