import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryApi } from '../../../entities/category/api/categoryApi';

export const useReorderCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ctgIds: string[]) => categoryApi.reorder({ ctgIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};
