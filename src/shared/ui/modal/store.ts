import { create } from 'zustand';

import type { ModalStore } from './types';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  title: '',
  description: undefined,
  confirmText: '확인',
  onConfirm: undefined,

  open: (options) => set({ isOpen: true, ...options }),
  close: () =>
    set({
      isOpen: false,
      title: '',
      description: undefined,
      confirmText: '확인',
      onConfirm: undefined,
    }),
}));
