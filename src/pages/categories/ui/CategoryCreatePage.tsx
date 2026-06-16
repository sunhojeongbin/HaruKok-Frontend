import { useState } from 'react';

import { useTranslation } from '@shared/lib/i18n';
import { CATEGORY_COLORS } from '@shared/theme';

import { CategoryForm, useCreateCategory, type CategoryFormValues } from '@features/category';

import { SubLayout } from '@app/layouts';

export const CategoryCreatePage = () => {
  const { t } = useTranslation();

  const { mutate: create, isPending, error, reset } = useCreateCategory();

  const [form, setForm] = useState<CategoryFormValues>({
    name: '',
    visibility: 'FRIENDS',
    color: CATEGORY_COLORS[0],
  });

  const handleChange = <K extends keyof CategoryFormValues>(
    key: K,
    value: CategoryFormValues[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    reset();
  };

  const handleSubmit = () => {
    if (isPending) return;

    create({
      ctgName: form.name,
      visibility: form.visibility,
      colorCode: form.color,
    });
  };

  return (
    <SubLayout title={t('category.create')} disabled={isPending} onSubmit={handleSubmit}>
      <CategoryForm values={form} errorMessage={error?.message} onChange={handleChange} />
    </SubLayout>
  );
};
