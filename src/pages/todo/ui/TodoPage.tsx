import { Calendar } from '../../../shared/ui/Calendar';
import { TodoList } from '../../../widgets/todo-list/ui/TodoList';

export const TodoPage = () => {
  return (
    <div className='flex min-h-full flex-col gap-4 bg-[#f3f4f6] px-4 pb-4'>
      <Calendar />
      <TodoList />
    </div>
  );
};
