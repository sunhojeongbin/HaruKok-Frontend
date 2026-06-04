import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from '../lib/i18n';

import { Icon } from './Icon';

const tabs = [
  {
    labelKey: 'tabs.home',
    path: '/todo',
    icon: <Icon name='Home' />,
  },
  // {
  //   labelKey: 'tabs.calendar',
  //   path: '/calendar',
  //   icon: <Icon name='Calendar' />,
  // },
  {
    labelKey: 'tabs.profile',
    path: '/profile',
    icon: <Icon name='Profile' />,
  },
] as const;

export const BottomTabNavigator = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className='border-app-border bg-app-surface flex h-14 shrink-0 justify-around border-t-[0.5px]'>
      {tabs.map((tab) => {
        const isActive = location.pathname.startsWith(tab.path);

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-1 flex-col items-center justify-center ${
              isActive ? 'text-app-text' : 'text-app-text-muted'
            }`}
          >
            <div className='mb-0.5'>{tab.icon}</div>
            <span className='text-xs font-medium'>{t(tab.labelKey)}</span>
          </Link>
        );
      })}
    </nav>
  );
};
