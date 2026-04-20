import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { categoryApi } from '../../../entities/category';

interface UseDeleteCategoryParams {
  categoryId: string;
}

export const useDeleteCategory = ({ categoryId }: UseDeleteCategoryParams) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => categoryApi.delete(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });

      toast.success('카테고리가 삭제됐어요.');

      // 카테고리 관리 페이지로 이동
      navigate(-1);
    },
    onError: (error) => {
      toast.error(error.message || '카테고리를 삭제하지 못했어요.');
    },
  });
};
