import { useState } from 'react';

import { TodoCheckbox } from './TodoCheckbox';

interface ITodoItemProps {
  title: string;
  memo?: string;
}

export const TodoItem = ({ title, memo }: ITodoItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex items-start'>
      <TodoCheckbox checked={isChecked} onToggle={() => setIsChecked((prev) => !prev)} />

      <div className='ml-2 flex flex-col'>
        <p className={`text-sm leading-6 ${isChecked ? 'text-[#b2b8c0] line-through' : ''}`}>
          {title}
        </p>
        {memo && <p className='text-xs text-[#b2b8c0]'>{memo}</p>}
      </div>
    </div>
  );
};
