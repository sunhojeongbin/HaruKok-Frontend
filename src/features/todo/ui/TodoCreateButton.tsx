import { useState } from 'react';

import { Icon } from '../../../shared/ui';
import { TodoCreateSheet } from './TodoCreateSheet';

interface TodoCreateButtonProps {
  categoryId: string;
  selectedDate: string;
}

export const TodoCreateButton = ({ categoryId, selectedDate }: TodoCreateButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='fixed right-4 bottom-[72px] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#aad1f0]'
      >
        <Icon name='Plus' size={28} color='white' />
      </button>

      <TodoCreateSheet
        open={isOpen}
        categoryId={categoryId}
        selectedDate={selectedDate}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
