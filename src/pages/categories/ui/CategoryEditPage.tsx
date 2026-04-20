import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useModalStore } from '../../../shared/ui/modal/store';
import { Button } from '../../../shared/ui';

import { categoryApi } from '../../../entities/category';

import {
  CategoryForm,
  useDeleteCategory,
  useUpdateCategory,
  type CategoryFormValues,
} from '../../../features/category';

import { SubLayout } from '../../../app/layouts';

export const CategoryEditPage = () => {
  const { categoryId = '' } = useParams();

  const { open: openModal } = useModalStore();

  const { data: category } = useQuery({
    queryKey: ['categories', categoryId],
    queryFn: () => categoryApi.getDetail(categoryId),
    enabled: Boolean(categoryId),
  });

  const {
    mutate: update,
    isPending: isUpdatePending,
    error,
    reset,
  } = useUpdateCategory({ categoryId });
  const { mutate: deleteCategory, isPending: isDeletePending } = useDeleteCategory({ categoryId });

  const [form, setForm] = useState<CategoryFormValues>({
    name: '',
    visibility: 'FRIENDS',
    color: '#1ea958',
  });

  useEffect(() => {
    if (!category) return;

    setForm({
      name: category.name,
      visibility: category.visibility,
      color: category.color,
    });
  }, [category]);

  const handleChange = <K extends keyof CategoryFormValues>(
    key: K,
    value: CategoryFormValues[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    reset();
  };

  const handleSubmit = () => {
    if (!category || isUpdatePending) return;

    update({
      ctgName: form.name,
      visibility: form.visibility,
      colorCode: form.color,
    });
  };

  const handleUpdateCategory = () => {
    if (!category) return;
    if (isUpdatePending || isDeletePending) return;

    openModal({
      title: category.isEnded ? '카테고리를 재개할까요' : '카테고리를 종료할까요',
      description: category.isEnded
        ? '재개하면 이 카테고리에 다시 투두와 루틴을 추가할 수 있어요.'
        : '종료하면 이 카테고리에는 더 이상 투두와 루틴을 추가할 수 없어요.',
      confirmText: category.isEnded ? '재개' : '종료',
      onConfirm: () => update({ isEnded: !category.isEnded }),
    });
  };

  const handleDeleteCategory = () => {
    if (!category) return;
    if (isUpdatePending || isDeletePending) return;

    openModal({
      title: '카테고리를 삭제할까요',
      description:
        '삭제하면 이 카테고리에 포함된 투두와 루틴이 모두 삭제되며, 다시 복구할 수 없어요.',
      confirmText: '삭제',
      onConfirm: () => deleteCategory(),
    });
  };

  return (
    <SubLayout title='카테고리 수정' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-8'>
        <CategoryForm values={form} errorMessage={error?.message} onChange={handleChange} />

        <div className='flex gap-2'>
          <Button
            variant='danger'
            disabled={isUpdatePending || isDeletePending}
            onClick={handleDeleteCategory}
          >
            삭제
          </Button>
          <Button
            variant='neutral'
            disabled={isUpdatePending || isDeletePending}
            onClick={handleUpdateCategory}
          >
            {category?.isEnded ? '재개' : '종료'}
          </Button>
        </div>
      </div>
    </SubLayout>
  );
};
