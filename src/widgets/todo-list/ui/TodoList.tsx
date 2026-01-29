import { mockCategories } from '../../../entities/category/model/mockCategories';
import { mockTodos } from '../../../entities/todo/model/mockTodos';

import { CategoryItem } from '../../../entities/category/ui/CategoryItem';
import { TodoItem } from '../../../entities/todo/ui/TodoItem';

interface TodoListProps {
  selectedDate: Date;
}

export const TodoList = ({ selectedDate }: TodoListProps) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const selectedDateStr = formatDate(selectedDate);

  return (
    <div className='flex flex-col gap-4 rounded-lg bg-white p-4'>
      {mockCategories.map((category) => {
        const filteredTodos = mockTodos.filter(
          (todo) => todo.categoryId === category.id && todo.date === selectedDateStr,
        );

        return (
          <div key={category.id} className='flex flex-col'>
            <CategoryItem name={category.name} />

            {filteredTodos.length > 0 && (
              <div className='mt-2 flex flex-col gap-2'>
                {filteredTodos.map((todo) => (
                  <TodoItem key={todo.id} title={todo.title} memo={todo.memo} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
