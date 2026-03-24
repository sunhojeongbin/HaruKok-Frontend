export interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  isInitialized: boolean;
}

interface AuthActions {
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setInitialized: (isInitialized: boolean) => void;
  logout: () => void;
}

export type AuthStore = AuthState & AuthActions;
