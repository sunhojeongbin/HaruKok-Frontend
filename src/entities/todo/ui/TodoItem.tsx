import { useToggleTodo } from '../../../features/todo/model/useToggleTodo';

import type { Todo } from '../model/types';
import { TodoCheckbox } from './TodoCheckbox';

interface TodoItemProps {
  todo: Todo;
  onClick?: () => void;
}

export const TodoItem = ({ todo, onClick }: TodoItemProps) => {
  const { mutate: toggle, isPending } = useToggleTodo({ yearMonth: todo.date.slice(0, 7) });

  const isChecked = todo.isCompleted;

  const handleToggle = () => {
    if (isPending) return;

    toggle(todo.id);
  };

  return (
    <div className='flex items-start'>
      <TodoCheckbox checked={isChecked} disabled={isPending} onToggle={handleToggle} />

      <button onClick={onClick} className='ml-2 flex flex-col items-start'>
        <p className={`text-sm leading-6 ${isChecked ? 'text-[#b2b8c0] line-through' : ''}`}>
          {todo.content}
        </p>
        {todo.memo && <p className='text-xs text-[#b2b8c0]'>{todo.memo}</p>}
      </button>
    </div>
  );
};
