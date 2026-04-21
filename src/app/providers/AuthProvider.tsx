import { useEffect } from 'react';

import { authApi, useAuthStore } from '../../entities/auth';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setAccessToken, setUser, setInitialized } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { accessToken } = await authApi.refresh();
        setAccessToken(accessToken);

        const user = await authApi.me();
        setUser(user);
      } catch {
        setAccessToken(null);
        setUser(null);
      } finally {
        setInitialized(true);
      }
    };

    initializeAuth();
  }, [setAccessToken, setUser, setInitialized]);

  return <>{children}</>;
};
