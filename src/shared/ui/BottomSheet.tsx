import { useId } from 'react';

import { Icon } from './Icon';

interface BottomSheetProps {
  open: boolean;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

// TODO: iOS 웹뷰에서 키보드가 올라올 때 레이아웃 깨짐 이슈 해결
export const BottomSheet = ({
  open,
  children,
  title,
  showCloseButton = true,
  onClose,
  onConfirm,
}: BottomSheetProps) => {
  const titleId = useId();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <div
        role='dialog'
        aria-modal={open}
        aria-hidden={!open}
        aria-labelledby={titleId}
        className={`fixed right-0 bottom-0 left-0 z-50 rounded-t-3xl bg-white transition-transform duration-300 ease-out ${open ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      >
        <div className='grid grid-cols-3 items-center px-4 pt-4'>
          <div className='flex items-center'>
            {showCloseButton && (
              <button
                type='button'
                onClick={onClose}
                aria-label='Close'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] shadow-sm'
              >
                <Icon name='X' color='#b2b8c0' />
              </button>
            )}
          </div>

          <span id={titleId} className='text-center font-semibold'>
            {title}
          </span>

          <div className='flex justify-end'>
            {onConfirm && (
              <button
                type='button'
                onClick={onConfirm}
                aria-label='Confirm'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-[#1ea958] shadow-sm'
              >
                <Icon name='Check' color='white' />
              </button>
            )}
          </div>
        </div>

        <div className='p-4'>{children}</div>
      </div>
    </>
  );
};
