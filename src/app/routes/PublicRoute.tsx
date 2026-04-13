import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../../entities/auth/model/store';

export const PublicRoute = () => {
  const isInitialized = useAuthStore((state) => state.isInitialized);
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!isInitialized)
    return (
      <div className='flex h-screen items-center justify-center gap-1 bg-[#1ea958] text-white'>
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]' />
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]' />
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current' />
      </div>
    );

  if (accessToken) return <Navigate to='/todo' replace />;

  return <Outlet />;
};
