import { useMutation, useQueryClient } from '@tanstack/react-query';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { routineApi } from '@entities/routine';

export const useReorderRoutine = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (rtnIds: string[]) => routineApi.reorder({ rtnIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });
    },
    onError: (error) => {
      toast.error(error.message || translate('routine.reorderError'));
    },
  });
};
