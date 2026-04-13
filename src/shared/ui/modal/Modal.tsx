import { useModalStore } from './store';

const buttonClasses = 'h-12 flex-1 rounded-xl text-[15px]';

export const Modal = () => {
  const { isOpen, title, description, confirmText, onConfirm, close } = useModalStore();

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
        className='flex w-[calc(100%-32px)] max-w-[340px] flex-col gap-6 rounded-2xl bg-white p-6'
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
            className={`${buttonClasses} bg-[#f3f4f6] font-medium`}
          >
            취소
          </button>
          <button
            type='button'
            onClick={handleConfirm}
            className={`${buttonClasses} bg-[#1ea958] font-semibold text-white`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
