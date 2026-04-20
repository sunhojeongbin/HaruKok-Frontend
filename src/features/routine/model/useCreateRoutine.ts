import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { routineApi } from '../../../entities/routine';

export const useCreateRoutine = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: routineApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });

      toast.success('루틴이 추가됐어요.');

      // 루틴 관리 페이지로 이동
      navigate(-1);
    },
  });
};
