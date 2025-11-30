import { Outlet } from 'react-router-dom';
import { BottomTabNavigator, HeaderTest } from '../../shared/ui';

export const MainLayout = () => {
    return (
        <main>
            <HeaderTest />
            <Outlet />
            <BottomTabNavigator />
        </main>
    );
};
