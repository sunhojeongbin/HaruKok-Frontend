import { useMutation } from '@tanstack/react-query';

import { authApi } from '@entities/auth';

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: authApi.verifyEmail,
  });
};
