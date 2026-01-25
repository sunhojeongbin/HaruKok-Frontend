import { useLocation } from 'react-router-dom';

import { IconButton } from './IconButton';

export const MainHeader = () => {
  const location = useLocation();

  // 현재 경로가 프로필 페이지인지 확인
  const isProfilePage = location.pathname.startsWith('/profile');

  return (
    <header
      className={`flex h-14 shrink-0 items-center justify-end gap-4 px-4 ${isProfilePage ? 'bg-white' : 'bg-[#f3f4f6]'}`}
    >
      {isProfilePage ? (
        <IconButton icon='Settings' onClick={() => {}} />
      ) : (
        <>
          <IconButton icon='Search' onClick={() => {}} />
          <IconButton icon='Notification' onClick={() => {}} />
          <IconButton icon='Management' onClick={() => {}} />
        </>
      )}
    </header>
  );
};
