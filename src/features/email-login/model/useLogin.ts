import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authApi, useAuthStore } from '../../../entities/auth';

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAccessToken, setUser } = useAuthStore();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ accessToken, id, email, name }) => {
      setAccessToken(accessToken);
      setUser({ id, email, name });

      // 로그인 페이지로 뒤로 가기 방지
      navigate('/todo', { replace: true });
    },
  });
};
