import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast/store';

import { categoryApi, type UpdateCategoryRequest } from '@entities/category';

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

      toast.success(translate('category.updated'));

      // 카테고리 관리 페이지로 이동
      navigate(-1);
    },
  });
};
