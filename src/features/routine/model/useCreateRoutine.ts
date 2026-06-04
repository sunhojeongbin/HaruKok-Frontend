import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { routineApi } from '@entities/routine';

export const useCreateRoutine = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: routineApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });

      toast.success(translate('routine.created'));

      // 루틴 관리 페이지로 이동
      navigate(-1);
    },
  });
};
