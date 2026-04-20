import { useState } from 'react';

import {
  CategoryForm,
  useCreateCategory,
  type CategoryFormValues,
} from '../../../features/category';

import { SubLayout } from '../../../app/layouts';

export const CategoryCreatePage = () => {
  const { mutate: create, isPending, error, reset } = useCreateCategory();

  const [form, setForm] = useState<CategoryFormValues>({
    name: '',
    visibility: 'FRIENDS',
    color: '#1ea958',
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
    <SubLayout title='카테고리 추가' disabled={isPending} onSubmit={handleSubmit}>
      <CategoryForm values={form} errorMessage={error?.message} onChange={handleChange} />
    </SubLayout>
  );
};
