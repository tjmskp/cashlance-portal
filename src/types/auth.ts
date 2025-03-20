export interface User {
  id: number;
  username: string;
  email: string;
  points: number;
  createdAt: Date;
  lastLoginAt?: Date;
  isVerified: boolean;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  username: string;
  confirmPassword: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 