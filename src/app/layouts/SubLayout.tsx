import { Outlet } from 'react-router-dom';

export const SubLayout = () => {
  return (
    <>
      <main className='pt-18'>
        <Outlet />
      </main>
    </>
  );
};
