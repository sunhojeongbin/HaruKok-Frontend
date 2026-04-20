import { useNavigate } from 'react-router-dom';

import { useCategories, type Category } from '../../../entities/category';

import { useReorderCategory } from '../../../features/category';

import { CategoryList } from '../../../widgets/category-list';

import { SubLayout } from '../../../app/layouts';

export const CategoriesPage = () => {
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
