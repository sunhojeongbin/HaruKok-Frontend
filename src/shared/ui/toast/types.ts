export type ToastType = 'info' | 'success' | 'error';

interface ToastState {
  message: string;
  type: ToastType;
  isVisible: boolean;
}

interface ToastActions {
  showToast: (message: string, type: ToastType) => void;
}

export type ToastStore = ToastState & ToastActions;
