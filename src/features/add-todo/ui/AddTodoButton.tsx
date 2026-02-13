import { useState } from 'react';

import { Icon } from '../../../shared/ui';
import { AddTodoSheet } from './AddTodoSheet';

interface IAddTodoButtonProps {
  categoryId: string;
}

export const AddTodoButton = ({ categoryId }: IAddTodoButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='fixed right-4 bottom-18 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#aad1f0]'
      >
        <Icon name='Plus' size={28} color='white' />
      </button>

      <AddTodoSheet categoryId={categoryId} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
