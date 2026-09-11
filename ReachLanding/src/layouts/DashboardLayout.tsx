import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Send,
  GitFork,
  Inbox,
  ShieldCheck,
  BarChart3,
  Settings,
  Plus,
  ChevronDown,
  ArrowUpRight,
  LogOut,
} from 'lucide-react';
import { mockWorkspaces } from '../data/mockData';

export const DashboardLayout: React.FC = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(mockWorkspaces[0]);
  const [wsDropdownOpen, setWsDropdownOpen] = useState(false);

  const navItems = [
    { to: '/dashboard', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/dashboard/campaigns', label: 'Campaigns', icon: Send },
    { to: '/dashboard/sequences', label: 'Sequence Builder', icon: GitFork },
    { to: '/dashboard/inbox', label: 'Inbox & Agent', icon: Inbox, badge: '3' },
    { to: '/dashboard/deliverability', label: 'Deliverability', icon: ShieldCheck },
    { to: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { to: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="dash-layout">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        {/* Brand & Workspace */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Link to="/" className="logo" style={{ fontSize: '1.2rem' }}>
              <span className="mk" style={{ width: '26px', height: '26px' }}>
                <svg viewBox="0 0 24 24" fill="none" style={{ width: '14px', height: '14px' }}>
                  <path
                    d="M3 12H21M13 5L21 12L13 19"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Reach
            </Link>
            <Link
              to="/"
              title="Visit Landing Page"
              style={{ color: 'var(--faint)', display: 'flex', alignItems: 'center' }}
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Workspace Switcher */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setWsDropdownOpen(!wsDropdownOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border-strong)',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)' }}>
                  {activeWorkspace.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--faint)' }}>
                  {activeWorkspace.tier} Plan · {activeWorkspace.activeMailboxes} mailboxes
                </div>
              </div>
              <ChevronDown size={14} color="var(--muted)" />
            </button>

            {wsDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: '4px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-card)',
                  zIndex: 50,
                  overflow: 'hidden',
                }}
              >
                {mockWorkspaces.map((ws) => (
                  <button
                    key={ws.id}
                    type="button"
                    onClick={() => {
                      setActiveWorkspace(ws);
                      setWsDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      textAlign: 'left',
                      background: ws.id === activeWorkspace.id ? 'var(--surface-2)' : 'transparent',
                      border: 'none',
                      borderBottom: '1px solid var(--border)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{ws.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                      {ws.tier} · {(ws.currentMonthlySends / 1000).toFixed(1)}k / {(ws.monthlyLimit / 1000).toFixed(0)}k sends
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '16px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--brand-dk)' : 'var(--muted)',
                background: isActive ? 'var(--brand-soft)' : 'transparent',
                transition: 'all 0.15s ease',
              })}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <item.icon size={17} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  style={{
                    background: 'var(--brand)',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    borderRadius: '999px',
                    padding: '1px 7px',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Profile / Status */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--surface-2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--ink)',
                color: 'var(--paper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              RG
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)' }}>
                Reach Admin
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--faint)' }}>
                demo@reachoutbound.com
              </div>
            </div>
          </div>
          <Link to="/login" title="Sign out" style={{ color: 'var(--faint)' }}>
            <LogOut size={16} />
          </Link>
        </div>
      </aside>

      {/* Main Area */}
      <div className="dash-main">
        {/* Header */}
        <header className="dash-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem' }}>
              <span style={{ color: 'var(--faint)' }}>Workspace:</span>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{activeWorkspace.name}</span>
            </div>
            <div style={{ height: '14px', width: '1px', background: 'var(--border)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--good)',
                }}
              ></span>
              <span style={{ color: 'var(--good)', fontWeight: 500 }}>Warm-up Day 12/30 (Healthy)</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/dashboard/campaigns" className="btn btn-primary btn-sm">
              <Plus size={15} />
              New Campaign
            </Link>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="dash-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
