import { create } from 'zustand';

import type { SignupStore } from './types';

export const useSignupStore = create<SignupStore>((set) => ({
  step: 'email',
  email: '',
  signupToken: '',

  setStep: (step) => set({ step }),
  setEmail: (email) => set({ email }),
  setSignupToken: (token) => set({ signupToken: token }),
  reset: () => set({ step: 'email', email: '', signupToken: '' }),
}));
