import { useMutation } from '@tanstack/react-query';

import { authApi } from '../../../entities/auth/api/authApi';

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: authApi.verifyEmail,
  });
};
