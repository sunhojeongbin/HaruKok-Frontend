import { useMutation, useQueryClient } from '@tanstack/react-query';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { categoryApi } from '@entities/category';

export const useReorderCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ctgIds: string[]) => categoryApi.reorder({ ctgIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      toast.error(error.message || translate('category.reorderError'));
    },
  });
};
