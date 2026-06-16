import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { authApi } from '@entities/auth';

export const useSignup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      toast.success(t('auth.signupSuccess'));

      // 이메일 회원가입 페이지로 뒤로 가기 방지
      navigate('/auth/login', { replace: true });
    },
  });
};
