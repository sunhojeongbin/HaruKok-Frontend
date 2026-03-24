import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authApi } from '../../../entities/auth/api/authApi';

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      // 이메일 회원가입 페이지로 뒤로 가기 방지
      navigate('/login/email', { replace: true });
    },
  });
};
