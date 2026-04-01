import { useState } from 'react';

import { useCategories } from '../../../entities/category/model/useCategories';
import { useTodos } from '../../../entities/todo/model/useTodos';
import { TodoItem } from '../../../entities/todo/ui/TodoItem';

import { TodoCreateButton } from '../../../features/todo/ui/TodoCreateButton';

import { MAX_VISIBLE_TABS } from '../model/constants';
import { TodoListSkeleton } from './TodoListSkeleton';

interface TodoListProps {
  selectedDate: Date;
}

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const TodoList = ({ selectedDate }: TodoListProps) => {
  const selectedDateStr = formatDate(selectedDate);

  const { data: categories = [], isLoading: isCategoryLoading } = useCategories();
  const { data: todos = [], isLoading: isTodoLoading } = useTodos({
    yearMonth: selectedDateStr.slice(0, 7),
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const categoryTabs = [{ id: null, name: '전체', color: '#aad1f0' }, ...categories];

  const selectedCategory =
    categories.find((category) => category.id === selectedCategoryId) ?? categories[0];

  const filteredTodos = todos.filter(
    (todo) =>
      todo.date === selectedDateStr &&
      (selectedCategoryId === null || todo.categoryId === selectedCategoryId),
  );

  if (isCategoryLoading || isTodoLoading) {
    return <TodoListSkeleton />;
  }

  return (
    <>
      <div className='flex min-h-0 flex-1 flex-col'>
        <div className='flex snap-x snap-mandatory gap-1 overflow-x-auto'>
          {categoryTabs.map((tab) => (
            <button
              key={tab.id ?? 'all'}
              onClick={() => setSelectedCategoryId(tab.id)}
              className={`shrink-0 snap-start rounded-t-lg px-1 py-2.5 text-xs font-semibold transition-colors ${
                selectedCategoryId === tab.id ? 'text-white' : 'bg-white/50 text-[#b2b8c0]'
              }`}
              style={{
                width: `calc((100% - 0.25rem * ${MAX_VISIBLE_TABS - 1}) / ${MAX_VISIBLE_TABS})`,
                ...(selectedCategoryId === tab.id && {
                  backgroundColor: tab.color,
                }),
              }}
            >
              <span className='block truncate'>{tab.name}</span>
            </button>
          ))}
        </div>

        <div
          className={`flex min-h-0 flex-1 flex-col gap-2 rounded-b-lg bg-white p-4 ${
            categoryTabs.length < MAX_VISIBLE_TABS ? 'rounded-tr-lg' : ''
          }`}
        >
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          ) : (
            <div className='flex flex-1 items-center justify-center'>
              <p className='text-sm font-medium text-[#b2b8c0]'>등록된 투두가 없습니다.</p>
            </div>
          )}
        </div>
      </div>

      <TodoCreateButton categoryId={selectedCategory?.id ?? ''} selectedDate={selectedDateStr} />
    </>
  );
};
