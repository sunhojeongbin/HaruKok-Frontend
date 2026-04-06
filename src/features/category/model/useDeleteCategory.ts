import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { categoryApi } from '../../../entities/category/api/categoryApi';

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

      // 카테고리 관리 페이지로 뒤로 가기 방지
      navigate('/categories', { replace: true });
    },
    onError: (error) => {
      toast.error(error.message || '카테고리를 삭제하지 못했어요.');
    },
  });
};
