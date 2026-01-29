import { useState } from 'react';

import { Calendar } from '../../../shared/ui/Calendar';
import { TodoList } from '../../../widgets/todo-list/ui/TodoList';

export const TodoPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className='flex min-h-full flex-col gap-4 bg-[#f3f4f6] px-4 pb-4'>
      <Calendar onDateSelect={setSelectedDate} />
      <TodoList selectedDate={selectedDate} />
    </div>
  );
};
