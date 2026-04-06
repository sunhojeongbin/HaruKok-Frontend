import { useCategories } from '../../../entities/category/model/useCategories';
import { useRoutines } from '../../../entities/routine/model/useRoutines';
import { RoutineItem, RoutineItemSkeleton } from '../../../entities/routine/ui';

export const RoutineList = () => {
  const { data: categories = [], isLoading: isCategoryLoading } = useCategories();
  const { data: routines = [], isLoading: isRoutineLoading } = useRoutines();

  const categorizedRoutines = categories
    .map((category) => ({
      category,
      routines: routines
        .filter((routine) => routine.categoryId === category.id)
        .sort((a, b) => a.order - b.order),
    }))
    .filter(({ routines }) => routines.length > 0);

  if (isCategoryLoading || isRoutineLoading) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <RoutineItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (routines.length === 0) {
    return (
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-sm font-medium text-[#b2b8c0]'>등록된 루틴이 없어요.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      {categorizedRoutines.map(({ category, routines }) => (
        <section key={category.id} className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1.5'>
            <div
              className='h-3 w-3 shrink-0 rounded-full'
              style={{ backgroundColor: category.color }}
            />
            <span className='text-sm font-medium'>{category.name}</span>
          </div>

          <div className='flex flex-col gap-3'>
            {routines.map((routine) => (
              <RoutineItem key={routine.id} routine={routine} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
