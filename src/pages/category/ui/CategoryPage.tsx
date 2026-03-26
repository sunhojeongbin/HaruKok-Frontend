import { SubLayout } from '../../../app/layouts';

import { CategoryList } from '../../../widgets/category-list/ui/CategoryList';

export const CategoryPage = () => {
  return (
    <SubLayout title='카테고리 관리'>
      <CategoryList />
    </SubLayout>
  );
};
