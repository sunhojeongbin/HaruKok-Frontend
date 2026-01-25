import { Outlet } from 'react-router-dom';

import { BottomTabNavigator, MainHeader } from '../../shared/ui';

export const MainLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <MainHeader />
      <main className='flex-1 overflow-y-auto overscroll-none'>
        <Outlet />
      </main>
      <BottomTabNavigator />
    </div>
  );
};
