import { create } from 'zustand';

import type { SignupStore } from './types';

export const useSignupStore = create<SignupStore>((set) => ({
  step: 'email',
  email: '',

  setStep: (step) => set({ step }),
  setEmail: (email) => set({ email }),
  reset: () => set({ step: 'email', email: '' }),
}));
