import type {
  Campaign,
  Recipient,
  SequenceStep,
  ReplyConversation,
  DeliverabilityStatus,
  Workspace,
  ReplyAgentMode,
} from '../types';
import {
  mockCampaigns,
  mockRecipients,
  mockSequenceSteps,
  mockConversations,
  mockDeliverability,
  mockWorkspaces,
} from '../data/mockData';

// Base API configuration (ready for FastAPI URL e.g., import.meta.env.VITE_API_URL || 'http://localhost:8000')
const API_BASE_URL = (import.meta as unknown as { env?: { VITE_API_URL?: string } })?.env?.VITE_API_URL || '';

export const api = {
  // Campaigns
  async getCampaigns(): Promise<Campaign[]> {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/campaigns`);
      return res.json();
    }
    return Promise.resolve([...mockCampaigns]);
  },

  async createCampaign(data: Partial<Campaign>): Promise<Campaign> {
    const newCamp: Campaign = {
      id: `camp-${Date.now()}`,
      name: data.name || 'Untitled Campaign',
      channels: data.channels || ['email'],
      status: 'active',
      recipientsCount: data.recipientsCount || 0,
      sentCount: 0,
      replyCount: 0,
      openRate: 0,
      replyRate: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastTouch: 'Step 1',
    };
    return Promise.resolve(newCamp);
  },

  // Sequences
  async getSequenceSteps(): Promise<SequenceStep[]> {
    return Promise.resolve([...mockSequenceSteps]);
  },

  async saveSequenceSteps(steps: SequenceStep[]): Promise<{ success: boolean }> {
    void steps;
    return Promise.resolve({ success: true });
  },

  // Inbox & Reply Agent
  async getConversations(): Promise<ReplyConversation[]> {
    return Promise.resolve([...mockConversations]);
  },

  async setAgentMode(mode: ReplyAgentMode): Promise<{ mode: ReplyAgentMode; status: string }> {
    return Promise.resolve({ mode, status: 'updated' });
  },

  // Deliverability
  async getDeliverabilityStatus(): Promise<DeliverabilityStatus> {
    return Promise.resolve({ ...mockDeliverability });
  },

  // Recipients
  async getRecipients(): Promise<Recipient[]> {
    return Promise.resolve([...mockRecipients]);
  },

  // Workspaces
  async getWorkspaces(): Promise<Workspace[]> {
    return Promise.resolve([...mockWorkspaces]);
  },

  // AI Assistance
  async scoreContent(channel: string, text: string): Promise<{ score: number; spamTriggers: string[] }> {
    void channel;
    void text;
    return Promise.resolve({
      score: 92,
      spamTriggers: [],
    });
  },
};
