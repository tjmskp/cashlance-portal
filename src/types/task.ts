export type TaskCategory = 'survey' | 'video' | 'signup' | 'offer' | 'other';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: TaskCategory;
  reward: number;
  estimatedTime: string;
  requirements?: string[];
  isCompleted?: boolean;
  expiresAt?: Date;
  createdAt: Date;
  provider: string;
}

export interface TaskFilters {
  category?: TaskCategory;
  minReward?: number;
  maxTime?: string;
  showCompleted?: boolean;
  sortBy?: 'reward' | 'time' | 'newest';
  sortOrder?: 'asc' | 'desc';
} 