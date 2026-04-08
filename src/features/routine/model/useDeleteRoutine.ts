import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { routineApi } from '../../../entities/routine/api/routineApi';

interface UseDeleteRoutineParams {
  routineId: string;
}

export const useDeleteRoutine = ({ routineId }: UseDeleteRoutineParams) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => routineApi.delete(routineId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });

      toast.success('루틴이 삭제됐어요.');

      // 카테고리 관리 페이지로 뒤로 가기 방지
      navigate('/routines', { replace: true });
    },
    onError: (error) => {
      toast.error(error.message || '루틴을 삭제하지 못했어요.');
    },
  });
};
