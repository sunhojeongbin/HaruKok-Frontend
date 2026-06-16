import { create } from 'zustand';

import type { ModalState, ModalStore } from './types';

const initialModalState: ModalState = {
  isOpen: false,
  title: '',
  description: undefined,
  confirmText: undefined,
  confirmVariant: 'primary',
  onConfirm: undefined,
};

export const useModalStore = create<ModalStore>((set) => ({
  ...initialModalState,

  open: (options) =>
    set({
      ...initialModalState,
      isOpen: true,
      ...options,
    }),
  close: () => set(initialModalState),
}));
