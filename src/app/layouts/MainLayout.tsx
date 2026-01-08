import { Outlet } from 'react-router-dom';

import { BottomTabNavigator, MainHeader } from '../../shared/ui';

export const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <BottomTabNavigator />
    </>
  );
};
