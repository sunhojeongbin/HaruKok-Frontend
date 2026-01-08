import { Outlet } from 'react-router-dom';

export const SubLayout = () => {
  return (
    <>
      <main className='pt-16'>
        <Outlet />
      </main>
    </>
  );
};
