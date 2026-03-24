import { create } from 'zustand';

import type { AuthStore } from './types';

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  user: null,
  isInitialized: false,

  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),
  setInitialized: (value) => set({ isInitialized: value }),
  logout: () => set({ accessToken: null, user: null }),
}));
