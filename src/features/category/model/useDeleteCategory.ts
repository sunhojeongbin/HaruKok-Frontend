import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { translate } from '@shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { categoryApi } from '@entities/category';

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

      toast.success(translate('category.deleted'));

      // 카테고리 관리 페이지로 이동
      navigate(-1);
    },
    onError: (error) => {
      toast.error(error.message || translate('category.deleteError'));
    },
  });
};
