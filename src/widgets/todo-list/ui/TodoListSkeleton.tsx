import { TodoItemSkeleton } from '../../../entities/todo/ui/TodoItemSkeleton';

import { MAX_VISIBLE_TABS } from '../model/constants';

export const TodoListSkeleton = () => {
  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <div className='flex gap-1'>
        {Array.from({ length: MAX_VISIBLE_TABS }).map((_, index) => (
          <div
            key={index}
            className='h-8 animate-pulse rounded-t-lg bg-gray-200'
            style={{
              width: `calc((100% - 0.25rem * ${MAX_VISIBLE_TABS - 1}) / ${MAX_VISIBLE_TABS})`,
            }}
          />
        ))}
      </div>

      <div className='flex min-h-0 flex-1 flex-col gap-2 rounded-b-lg bg-white p-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <TodoItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
