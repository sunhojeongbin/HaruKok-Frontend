import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from '../../../shared/ui/toast/store';

import { categoryApi } from '../../../entities/category/api/categoryApi';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: categoryApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });

      toast.success('카테고리가 추가됐어요.');

      // 카테고리 관리 페이지로 뒤로 가기 방지
      navigate('/categories', { replace: true });
    },
  });
};
