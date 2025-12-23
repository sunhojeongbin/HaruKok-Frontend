import { Link, useLocation } from 'react-router-dom';

import { Icon } from './Icon';

const tabs = [
  {
    label: '홈',
    path: '/todo',
    icon: <Icon name='Home' size={24} />,
  },
  {
    label: '캘린더',
    path: '/calendar',
    icon: <Icon name='Calendar' size={24} />,
  },
  {
    label: '마이페이지',
    path: '/my',
    icon: <Icon name='My' size={24} />,
  },
];

export const BottomTabNavigator = () => {
  const location = useLocation();

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-4xl flex justify-around h-14 shadow-lg'>
      {tabs.map((tab) => {
        const isActive = location.pathname.startsWith(tab.path);

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-col items-center justify-center flex-1 ${
              isActive ? 'text-[#313131]' : 'text-[#b2b8c0]'
            }`}
          >
            <div className='mb-1'>{tab.icon}</div>
            <span className='text-xs font-medium'>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
