import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from '../../../shared/ui/toast/store';

import { routineApi } from '../../../entities/routine/api/routineApi';

export const useReorderRoutine = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (rtnIds: string[]) => routineApi.reorder({ rtnIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });
    },
    onError: (error) => {
      toast.error(error.message || '루틴 순서를 변경하지 못했어요.');
    },
  });
};
