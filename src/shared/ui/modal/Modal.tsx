import { useTranslation } from '@shared/lib/i18n';

import { useModalStore } from './store';
import type { ModalConfirmVariant } from './types';

const buttonClasses = 'h-12 flex-1 rounded-xl text-[15px] font-semibold';
const confirmVariantClasses: Record<ModalConfirmVariant, string> = {
  primary: 'bg-app-primary text-app-primary-foreground',
  danger: 'bg-app-danger text-app-danger-foreground',
};

export const Modal = () => {
  const { t } = useTranslation();

  const { isOpen, title, description, confirmText, confirmVariant, onConfirm, close } =
    useModalStore();

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm?.();

    close();
  };

  return (
    <div
      onClick={close}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
    >
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        aria-describedby={description ? 'modal-description' : undefined}
        onClick={(e) => e.stopPropagation()}
        className='bg-app-surface flex w-[calc(100%-32px)] max-w-[340px] flex-col gap-6 rounded-2xl p-6'
      >
        <div className='flex flex-col gap-2'>
          <p id='modal-title' className='font-semibold'>
            {title}
          </p>
          {description && (
            <p id='modal-description' className='text-sm'>
              {description}
            </p>
          )}
        </div>

        <div className='flex gap-2'>
          <button
            type='button'
            onClick={close}
            className={`${buttonClasses} bg-app-muted font-medium`}
          >
            {t('common.cancel')}
          </button>
          <button
            type='button'
            onClick={handleConfirm}
            className={` ${buttonClasses} ${confirmVariantClasses[confirmVariant ?? 'primary']}`}
          >
            {confirmText ?? t('common.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};
