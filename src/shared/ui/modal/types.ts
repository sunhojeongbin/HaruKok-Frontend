interface ModalState {
  isOpen: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

interface ModalActions {
  open: (options: Omit<ModalState, 'isOpen'>) => void;
  close: () => void;
}

export type ModalStore = ModalState & ModalActions;
