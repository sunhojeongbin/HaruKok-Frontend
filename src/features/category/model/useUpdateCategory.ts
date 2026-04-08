import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import type { UpdateCategoryRequest } from '../../../entities/category/api/types';
import { categoryApi } from '../../../entities/category/api/categoryApi';

interface UseUpdateCategoryParams {
  categoryId: string;
}

export const useUpdateCategory = ({ categoryId }: UseUpdateCategoryParams) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (body: UpdateCategoryRequest) => categoryApi.update(categoryId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });

      toast.success('카테고리가 수정됐어요.');

      // 카테고리 관리 페이지로 뒤로 가기 방지
      navigate('/categories', { replace: true });
    },
  });
};
