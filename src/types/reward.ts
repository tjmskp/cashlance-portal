export type RewardType = 'gift_card' | 'crypto' | 'paypal' | 'other';

export interface Reward {
  id: number;
  title: string;
  description: string;
  type: RewardType;
  points: number;
  value: number;
  currency: string;
  provider: string;
  isAvailable: boolean;
  image?: string;
  expiresAt?: Date;
}

export interface RewardFilters {
  type?: RewardType;
  minValue?: number;
  maxPoints?: number;
  showUnavailable?: boolean;
  sortBy?: 'value' | 'points' | 'newest';
  sortOrder?: 'asc' | 'desc';
} 