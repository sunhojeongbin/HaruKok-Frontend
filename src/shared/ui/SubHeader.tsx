import { useNavigate } from 'react-router-dom';

import { IconButton } from './IconButton';

interface SubHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  onPlus?: () => void;
  onSubmit?: () => void;
}

export const SubHeader = ({ children, disabled, onPlus, onSubmit }: SubHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className='grid h-14 shrink-0 grid-cols-3 items-center px-4'>
      <div className='flex items-center'>
        <IconButton icon='ArrowLeft' onClick={() => navigate(-1)} />
      </div>

      <div className='text-center font-semibold'>{children}</div>

      <div className='flex justify-end'>
        {onPlus && <IconButton icon='Plus' onClick={onPlus} />}

        {onSubmit && (
          <button
            type='button'
            onClick={onSubmit}
            disabled={disabled}
            className='px-2 text-sm font-medium disabled:text-[#b2b8c0]'
          >
            완료
          </button>
        )}
      </div>
    </header>
  );
};
