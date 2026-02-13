import { useNavigate } from 'react-router-dom';

import { IconButton } from './IconButton';

interface ISubHeaderProps {
  children: React.ReactNode;
  onPlus?: () => void;
}

export const SubHeader = ({ children, onPlus }: ISubHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className='grid h-14 shrink-0 grid-cols-3 items-center px-4'>
      <div className='flex items-center'>
        <IconButton icon='ArrowLeft' onClick={() => navigate(-1)} />
      </div>

      <div className='text-center font-semibold'>{children}</div>

      <div className='flex justify-end'>
        {onPlus && <IconButton icon='Plus' onClick={onPlus} />}
      </div>
    </header>
  );
};
