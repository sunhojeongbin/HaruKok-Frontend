import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from '../../../shared/ui/toast/store';

import { categoryApi } from '../../../entities/category';

export const useReorderCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ctgIds: string[]) => categoryApi.reorder({ ctgIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      toast.error(error.message || '카테고리 순서를 변경하지 못했어요.');
    },
  });
};
