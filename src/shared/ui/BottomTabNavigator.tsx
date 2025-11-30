import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {
        label: '홈',
        path: '/todo',
        icon: <img src='/icons/ic-home.svg' alt='홈' />,
    },
    {
        label: '캘린더',
        path: '/calendar',
        icon: <img src='/icons/ic-calendar.svg' alt='캘린더' />,
    },
    {
        label: '마이페이지',
        path: '/my',
        icon: <img src='/icons/ic-my.svg' alt='마이페이지' />,
    },
];

export const BottomTabNavigator = () => {
    const location = useLocation();

    return (
        <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-4xl flex justify-around h-14 shadow-lg'>
            {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center justify-center flex-1 transition-colors duration-200 ${
                            isActive ? 'text-[#313131]' : 'text-[#b2b8c0]'
                        }`}
                    >
                        <div className='mb-1'>{item.icon}</div>
                        <span className='text-xs font-medium'>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};
