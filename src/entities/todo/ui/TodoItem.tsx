import type { Todo } from '../model/types';
import { TodoCheckbox } from './TodoCheckbox';

import { useToggleTodo } from '../../../features/todo/model/useToggleTodo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggle, isPending } = useToggleTodo({ yearMonth: todo.date.slice(0, 7) });

  const isChecked = todo.isCompleted;

  const handleToggle = () => {
    if (isPending) return;

    toggle(todo.id);
  };

  return (
    <div className='flex items-start'>
      <TodoCheckbox checked={isChecked} disabled={isPending} onToggle={handleToggle} />

      <div className='ml-2 flex flex-col'>
        <p className={`text-sm leading-6 ${isChecked ? 'text-[#b2b8c0] line-through' : ''}`}>
          {todo.content}
        </p>
        {todo.memo && <p className='text-xs text-[#b2b8c0]'>{todo.memo}</p>}
      </div>
    </div>
  );
};
