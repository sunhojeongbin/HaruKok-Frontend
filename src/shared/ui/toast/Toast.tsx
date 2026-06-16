import { Icon } from '../Icon';

import { useToastStore } from './store';
import type { ToastType } from './types';

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return <Icon name='CheckCircle' size={16} />;
    case 'error':
      return <Icon name='AlertCirCle' size={16} />;
    default:
      return null;
  }
};

export const Toast = () => {
  const { message, type, isVisible } = useToastStore();

  return (
    <div
      className={`pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <div className='bg-app-toast text-app-toast-foreground flex max-w-[340px] items-center gap-2 rounded-full px-4 py-3 text-sm font-medium whitespace-nowrap'>
        {getIcon(type)}
        {message}
      </div>
    </div>
  );
};
