import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { CATEGORY_COLORS } from '@shared/theme';
import { useModalStore } from '@shared/ui/modal';
import { Button } from '@shared/ui';

import { categoryApi } from '@entities/category';

import {
  CategoryForm,
  useDeleteCategory,
  useUpdateCategory,
  type CategoryFormValues,
} from '@features/category';

import { SubLayout } from '@app/layouts';

export const CategoryEditPage = () => {
  const { t } = useTranslation();

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
    color: CATEGORY_COLORS[0],
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
      title: category.isEnded ? t('category.resumeTitle') : t('category.endTitle'),
      description: category.isEnded
        ? t('category.resumeDescription')
        : t('category.endDescription'),
      confirmText: category.isEnded ? t('category.resume') : t('category.end'),
      onConfirm: () => update({ isEnded: !category.isEnded }),
    });
  };

  const handleDeleteCategory = () => {
    if (!category) return;
    if (isUpdatePending || isDeletePending) return;

    openModal({
      title: t('category.deleteTitle'),
      description: t('category.deleteDescription'),
      confirmText: t('common.delete'),
      onConfirm: () => deleteCategory(),
    });
  };

  return (
    <SubLayout title={t('category.edit')} onSubmit={handleSubmit}>
      <div className='flex flex-col gap-8'>
        <CategoryForm values={form} errorMessage={error?.message} onChange={handleChange} />

        <div className='flex gap-2'>
          <Button
            variant='danger'
            disabled={isUpdatePending || isDeletePending}
            onClick={handleDeleteCategory}
          >
            {t('common.delete')}
          </Button>
          <Button
            variant='neutral'
            disabled={isUpdatePending || isDeletePending}
            onClick={handleUpdateCategory}
          >
            {category?.isEnded ? t('category.resume') : t('category.end')}
          </Button>
        </div>
      </div>
    </SubLayout>
  );
};
