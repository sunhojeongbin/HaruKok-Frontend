import { Outlet } from 'react-router-dom';
import { BottomTabNavigator } from '../../shared/ui';

export const MainLayout = () => {
    return (
        <main>
            <Outlet />
            <BottomTabNavigator />
        </main>
    );
};
