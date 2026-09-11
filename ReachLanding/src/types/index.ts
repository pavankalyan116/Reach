export type ChannelType = 'email' | 'whatsapp' | 'sms';

export type CampaignStatus = 'active' | 'draft' | 'completed' | 'paused';

export interface Campaign {
  id: string;
  name: string;
  channels: ChannelType[];
  status: CampaignStatus;
  recipientsCount: number;
  sentCount: number;
  replyCount: number;
  openRate: number; // percentage
  replyRate: number; // percentage
  createdAt: string;
  updatedAt: string;
  lastTouch: string;
}

export interface Recipient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  title?: string;
  status: 'valid' | 'invalid' | 'unsubscribed' | 'bounced';
  lastChannelContacted?: ChannelType;
  replied: boolean;
}

export interface SequenceStep {
  id: string;
  stepNumber: number;
  channel: ChannelType;
  delayDays: number;
  subject?: string;
  body: string;
  enabled: boolean;
  stopOnReply: boolean;
  aiScore?: number;
  spamRisk?: 'low' | 'medium' | 'high';
}

export type ReplySentiment = 'positive' | 'objection' | 'unsubscribe' | 'question' | 'neutral';

export type ReplyAgentMode = 'assist' | 'approval' | 'autonomous';

export interface ReplyConversation {
  id: string;
  recipientName: string;
  recipientEmail: string;
  recipientCompany: string;
  channel: ChannelType;
  lastMessage: string;
  lastMessageTimestamp: string;
  sentiment: ReplySentiment;
  status: 'pending_review' | 'replied' | 'action_required' | 'archived';
  suggestedReply?: string;
  messages: {
    id: string;
    sender: 'user' | 'recipient' | 'agent';
    content: string;
    timestamp: string;
    channel: ChannelType;
  }[];
}

export interface DeliverabilityStatus {
  spf: 'pass' | 'fail' | 'neutral';
  dkim: 'pass' | 'fail' | 'neutral';
  dmarc: 'pass' | 'warning' | 'fail';
  mx: 'pass' | 'fail';
  senderScore: number; // 0 - 100
  warmupCurrentDay: number;
  warmupTotalDays: number;
  dailyCurrentSent: number;
  dailyQuota: number;
  bounceRate: number; // percentage
  spamComplaintRate: number; // percentage
}

export interface Workspace {
  id: string;
  name: string;
  tier: 'Free' | 'Starter' | 'Pro' | 'Enterprise';
  currentMonthlySends: number;
  monthlyLimit: number;
  activeMailboxes: number;
}
