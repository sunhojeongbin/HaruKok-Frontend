import { useMutation } from '@tanstack/react-query';

import { authApi } from '../../../entities/auth/api/authApi';

export const useSendEmail = () => {
  return useMutation({
    mutationFn: authApi.sendEmail,
  });
};
