import { Label } from '../../../shared/ui';

import { useCategories } from '../../../entities/category/model/useCategories';
import { CategoryItem, CategoryItemSkeleton } from '../../../entities/category/ui';

export const CategoryList = () => {
  const { data: categories = [], isLoading } = useCategories();

  const activeCategories = categories.filter((category) => !category.isEnded);
  const endedCategories = categories.filter((category) => category.isEnded);

  if (isLoading) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <CategoryItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-sm font-medium text-[#b2b8c0]'>등록된 카테고리가 없어요.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      <section className='flex flex-col gap-1.5'>
        <Label>진행 중</Label>

        <div className='flex flex-col gap-3'>
          {activeCategories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </section>

      {endedCategories.length > 0 && (
        <section className='flex flex-col gap-1.5'>
          <Label>종료</Label>

          <div className='flex flex-col gap-3'>
            {endedCategories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
