import { useMutation } from '@tanstack/react-query';

import { authApi } from '@entities/auth';

export const useResendEmail = () => {
  return useMutation({
    mutationFn: authApi.resendEmail,
  });
};
