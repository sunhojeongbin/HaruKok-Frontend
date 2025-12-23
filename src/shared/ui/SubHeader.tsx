import { IconButton } from './IconButton';

interface IHeaderProps {
  children: React.ReactNode;
}

export const SubHeader = ({ children }: IHeaderProps) => {
  return (
    <header className='w-full h-12 grid mb-4 grid-cols-3 items-center'>
      <div className='flex items-center'>
        <IconButton icon='ArrowLeft' onClick={() => window.history.back()} />
      </div>

      <div className='text-[#313131] text-lg font-[500] text-center'>{children}</div>
    </header>
  );
};
