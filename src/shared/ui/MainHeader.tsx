import { useLocation } from 'react-router-dom';

import { IconButton } from './IconButton';

export const MainHeader = () => {
  const location = useLocation();

  return location.pathname.startsWith('/my') ? (
    <header className='flex justify-end p-4 bg-white'>
      <IconButton icon='Settings' onClick={() => {}} />
    </header>
  ) : (
    <header className='flex justify-end gap-4 p-4 bg-[#f3f4f6]'>
      <IconButton icon='Search' onClick={() => {}} />
      <IconButton icon='Notification' onClick={() => {}} />
      <IconButton icon='Management' onClick={() => {}} />
    </header>
  );
};
