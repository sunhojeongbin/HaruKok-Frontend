export type ModalConfirmVariant = 'primary' | 'danger';

export interface ModalState {
  isOpen: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  confirmVariant?: ModalConfirmVariant;
  onConfirm?: () => void;
}

interface ModalActions {
  open: (options: Omit<ModalState, 'isOpen'>) => void;
  close: () => void;
}

export type ModalStore = ModalState & ModalActions;
