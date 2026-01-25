import { Link, useLocation } from 'react-router-dom';

import { Icon } from './Icon';

const tabs = [
  {
    label: '홈',
    path: '/todo',
    icon: <Icon name='Home' />,
  },
  {
    label: '캘린더',
    path: '/calendar',
    icon: <Icon name='Calendar' />,
  },
  {
    label: '프로필',
    path: '/profile',
    icon: <Icon name='Profile' />,
  },
];

export const BottomTabNavigator = () => {
  const location = useLocation();

  return (
    <nav className='flex h-14 shrink-0 justify-around border-t-[0.5px] border-gray-200 bg-white'>
      {tabs.map((tab) => {
        const isActive = location.pathname.startsWith(tab.path);

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-1 flex-col items-center justify-center ${
              isActive ? 'text-[#313131]' : 'text-[#b2b8c0]'
            }`}
          >
            <div className='mb-0.5'>{tab.icon}</div>
            <span className='text-xs font-medium'>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
