import { useNavigate } from 'react-router-dom';

import type { Category } from '../../../entities/category/model/types';
import { useCategories } from '../../../entities/category/model/useCategories';

import { useReorderCategory } from '../../../features/category/model/useReorderCategory';

import { CategoryList } from '../../../widgets/category-list/ui/CategoryList';

import { SubLayout } from '../../../app/layouts';

export const CategoryPage = () => {
  const navigate = useNavigate();

  const { data: categories = [], isLoading } = useCategories();
  const { mutate: reorder } = useReorderCategory();

  const handleReorder = (categories: Category[]) => {
    reorder(categories.map((category) => category.id));
  };

  return (
    <SubLayout title='카테고리 관리' onPlus={() => navigate('/categories/new')}>
      <CategoryList categories={categories} isLoading={isLoading} onReorder={handleReorder} />
    </SubLayout>
  );
};
