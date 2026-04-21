import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { authApi } from '../../../entities/auth';

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      toast.success('회원가입이 완료됐어요.');

      // 이메일 회원가입 페이지로 뒤로 가기 방지
      navigate('/login/email', { replace: true });
    },
  });
};
