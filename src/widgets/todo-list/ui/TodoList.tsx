import { mockCategories } from '../../../entities/category/model/mocks';

import { CategoryItem } from '../../../entities/category/ui/CategoryItem';
import { TodoItem } from '../../../entities/todo/ui/TodoItem';

export const TodoList = () => {
  return (
    <div className='flex flex-col gap-4 rounded-lg bg-white p-4'>
      {mockCategories.map((category) => (
        <div key={category.id} className='flex flex-col'>
          <CategoryItem name={category.name} />

          <div className='mt-2 flex flex-col gap-2'>
            {category.todos.map((todo) => (
              <TodoItem key={todo.id} title={todo.title} memo={todo.memo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
