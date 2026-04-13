import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModalStore } from '../../../shared/ui/modal/store';
import { Icon } from '../../../shared/ui';

import { TodoCreateSheet } from './TodoCreateSheet';

interface TodoCreateButtonProps {
  categoryId: string;
  selectedDate: string;
  hasCategories: boolean;
}

export const TodoCreateButton = ({
  categoryId,
  selectedDate,
  hasCategories,
}: TodoCreateButtonProps) => {
  const navigate = useNavigate();

  const { open: openModal } = useModalStore();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!hasCategories) {
      openModal({
        title: '카테고리가 필요해요',
        description: '투두를 만들기 전에 카테고리를 먼저 추가해 주세요.',
        confirmText: '카테고리 추가',
        onConfirm: () => navigate('/categories/new'),
      });

      return;
    }

    setIsOpen(true);
  };

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className='fixed right-4 bottom-[72px] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1ea958]'
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
