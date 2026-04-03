import { create } from 'zustand';

import type { ToastStore } from './types';

let timer: ReturnType<typeof setTimeout>;

export const useToastStore = create<ToastStore>((set) => ({
  message: '',
  type: 'info',
  isVisible: false,

  showToast: (message, type) => {
    clearTimeout(timer);

    set({ message, type, isVisible: true });

    timer = setTimeout(() => {
      set({ isVisible: false });
    }, 3000);
  },
}));

export const toast = {
  info: (message: string) => useToastStore.getState().showToast(message, 'info'),
  success: (message: string) => useToastStore.getState().showToast(message, 'success'),
  error: (message: string) => useToastStore.getState().showToast(message, 'error'),
};
