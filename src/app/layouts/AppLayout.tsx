import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className='px-4'>
      <Outlet />
    </div>
  );
};
