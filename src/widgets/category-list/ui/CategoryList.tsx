import { useCategories } from '../../../entities/category/model/useCategories';

import { CategoryItem, CategoryItemSkeleton } from '../../../entities/category/ui';

export const CategoryList = () => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <CategoryItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-3'>
      {categories?.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
