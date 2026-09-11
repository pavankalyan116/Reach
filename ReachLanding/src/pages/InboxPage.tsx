import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle,
  ThumbsUp,
  AlertTriangle,
  HelpCircle,
  UserX,
} from 'lucide-react';
import { mockConversations } from '../data/mockData';
import type { ReplyConversation, ReplyAgentMode } from '../types';

export const InboxPage: React.FC = () => {
  const [conversations, setConversations] = useState<ReplyConversation[]>(mockConversations);
  const [selectedConv, setSelectedConv] = useState<ReplyConversation>(conversations[0]);
  const [agentMode, setAgentMode] = useState<ReplyAgentMode>('approval');
  const [draftReply, setDraftReply] = useState<string>(selectedConv.suggestedReply || '');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSelectConv = (conv: ReplyConversation) => {
    setSelectedConv(conv);
    setDraftReply(conv.suggestedReply || '');
  };

  const handleSendReply = () => {
    if (!draftReply.trim()) return;
    const updatedMessages = [
      ...selectedConv.messages,
      {
        id: `m-${Date.now()}`,
        sender: 'agent' as const,
        content: draftReply,
        timestamp: 'Just now',
        channel: selectedConv.channel,
      },
    ];

    const updatedConv: ReplyConversation = {
      ...selectedConv,
      status: 'replied',
      messages: updatedMessages,
    };

    setSelectedConv(updatedConv);
    setConversations(conversations.map((c) => (c.id === updatedConv.id ? updatedConv : c)));
    setStatusMessage('Response dispatched successfully via ' + selectedConv.channel.toUpperCase());
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <ThumbsUp size={13} color="var(--good)" />;
      case 'unsubscribe':
        return <UserX size={13} color="var(--warn)" />;
      case 'objection':
        return <AlertTriangle size={13} color="var(--warn)" />;
      default:
        return <HelpCircle size={13} color="var(--info)" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header & Agent Mode Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '4px' }}>Unified Inbox & Reply Agent</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem' }}>
            Consolidated inbound replies from Email, WhatsApp, and SMS with intelligent AI response handling.
          </p>
        </div>

        {/* Reply Agent Mode Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            padding: '4px',
            borderRadius: '10px',
          }}
        >
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--faint)', margin: '0 8px' }}>
            Agent Mode:
          </span>
          {(['assist', 'approval', 'autonomous'] as ReplyAgentMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setAgentMode(mode)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                background: agentMode === mode ? 'var(--brand)' : 'transparent',
                color: agentMode === mode ? '#ffffff' : 'var(--muted)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.15s ease',
              }}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {statusMessage && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            background: 'var(--good-soft)',
            color: 'var(--good)',
            fontWeight: 600,
            fontSize: '0.86rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <CheckCircle size={16} />
          {statusMessage}
        </div>
      )}

      {/* Main Inbox Grid (Conversation List + Active Thread) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.9fr',
          gap: '20px',
          minHeight: '620px',
        }}
      >
        {/* Left: Conversation List */}
        <div className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--surface-2)',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            Inbound Messages ({conversations.length})
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {conversations.map((conv) => {
              const isSelected = conv.id === selectedConv.id;
              return (
                <div
                  key={conv.id}
                  onClick={() => handleSelectConv(conv)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--border)',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--surface-2)' : 'var(--surface)',
                    borderLeft: isSelected ? '3px solid var(--brand)' : '3px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>
                      {conv.recipientName}
                    </div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>
                      {conv.lastMessageTimestamp}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '8px' }}>
                    {conv.recipientCompany}
                  </div>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--ink)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginBottom: '10px',
                    }}
                  >
                    &ldquo;{conv.lastMessage}&rdquo;
                  </p>

                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span
                      className={`chip ${
                        conv.channel === 'email'
                          ? 'chip-brand'
                          : conv.channel === 'whatsapp'
                          ? 'chip-good'
                          : 'chip-info'
                      }`}
                      style={{ fontSize: '0.7rem' }}
                    >
                      {conv.channel.toUpperCase()}
                    </span>

                    <span
                      className="chip"
                      style={{
                        fontSize: '0.7rem',
                        background: 'var(--surface)',
                        border: '1px solid var(--border-strong)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {getSentimentIcon(conv.sentiment)}
                      <span style={{ textTransform: 'capitalize' }}>{conv.sentiment}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Thread & Reply Agent Workspace */}
        <div className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Thread Header */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--surface-2)',
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)' }}>
                {selectedConv.recipientName} · {selectedConv.recipientCompany}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--faint)' }}>
                {selectedConv.recipientEmail} · Channel: <strong>{selectedConv.channel.toUpperCase()}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="chip chip-good">
                Status: {selectedConv.status.replace('_', ' ')}
              </span>
            </div>
          </div>

          {/* Messages Feed */}
          <div
            style={{
              flex: 1,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              overflowY: 'auto',
              background: 'var(--paper)',
            }}
          >
            {selectedConv.messages.map((m) => {
              const isMe = m.sender === 'user' || m.sender === 'agent';
              return (
                <div
                  key={m.id}
                  style={{
                    alignSelf: isMe ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                    background: isMe ? 'var(--ink)' : 'var(--surface)',
                    color: isMe ? 'var(--paper)' : 'var(--ink)',
                    border: isMe ? 'none' : '1px solid var(--border)',
                    padding: '14px 18px',
                    borderRadius: isMe ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      opacity: 0.7,
                      marginBottom: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <span>{m.sender === 'agent' ? 'Reach AI Agent' : m.sender === 'user' ? 'You' : selectedConv.recipientName}</span>
                    <span>{m.timestamp}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', lineHeight: 1.55 }}>{m.content}</div>
                </div>
              );
            })}
          </div>

          {/* AI Reply Drafting Area */}
          <div
            style={{
              padding: '20px 24px',
              borderTop: '1px solid var(--border)',
              background: 'var(--surface)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--brand-dk)' }}>
                <Sparkles size={15} />
                AI Suggested Response
              </div>
              <span style={{ fontSize: '0.74rem', color: 'var(--faint)' }}>
                Personalized based on {selectedConv.recipientCompany} profile
              </span>
            </div>

            <textarea
              rows={3}
              value={draftReply}
              onChange={(e) => setDraftReply(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border-strong)',
                background: 'var(--surface-2)',
                fontSize: '0.88rem',
                fontFamily: 'var(--sans)',
                lineHeight: 1.5,
                color: 'var(--ink)',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                Agent mode: <strong>{agentMode.toUpperCase()}</strong> · Send will be recorded into activity log
              </div>

              <button
                type="button"
                onClick={handleSendReply}
                className="btn btn-brand btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Send size={14} /> Send Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
