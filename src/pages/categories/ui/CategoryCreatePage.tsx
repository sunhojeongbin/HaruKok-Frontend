import { useState } from 'react';

import type { CategoryFormValues } from '../../../features/category/model/types';

import { SubLayout } from '../../../app/layouts';

import { useCreateCategory } from '../../../features/category/model/useCreateCategory';

import { CategoryForm } from '../../../features/category/ui/CategoryForm';

export const CategoryCreatePage = () => {
  const { mutate: create, isPending } = useCreateCategory();

  const [form, setForm] = useState<CategoryFormValues>({
    name: '',
    visibility: 'FRIENDS',
    color: '#aad1f0',
  });

  const handleChange = <K extends keyof CategoryFormValues>(
    key: K,
    value: CategoryFormValues[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
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
    <SubLayout title='카테고리 추가' onSubmit={handleSubmit}>
      <CategoryForm values={form} onChange={handleChange} />
    </SubLayout>
  );
};
