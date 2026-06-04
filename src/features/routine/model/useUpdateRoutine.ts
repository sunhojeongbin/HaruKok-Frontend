import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { routineApi, type UpdateRoutineRequest } from '@entities/routine';

interface UseUpdateRoutineParams {
  routineId: string;
}

export const useUpdateRoutine = ({ routineId }: UseUpdateRoutineParams) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (body: UpdateRoutineRequest) => routineApi.update(routineId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });

      toast.success(translate('routine.updated'));

      // 루틴 관리 페이지로 이동
      navigate(-1);
    },
  });
};
