import { useNavigate } from 'react-router-dom';

import { SubLayout } from '../../../app/layouts';

import { CategoryList } from '../../../widgets/category-list/ui/CategoryList';

export const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <SubLayout title='카테고리 관리' onPlus={() => navigate('/categories/new')}>
      <CategoryList />
    </SubLayout>
  );
};
