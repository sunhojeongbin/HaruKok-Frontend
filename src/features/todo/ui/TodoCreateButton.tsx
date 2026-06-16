import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { useModalStore } from '@shared/ui/modal';
import { Icon } from '@shared/ui';

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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { open: openModal } = useModalStore();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!hasCategories) {
      openModal({
        title: t('todo.categoryRequiredTitle'),
        description: t('todo.categoryRequiredDescription'),
        confirmText: t('todo.categoryRequiredConfirm'),
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
        className='bg-app-primary fixed right-4 bottom-[72px] z-40 flex h-14 w-14 items-center justify-center rounded-full'
      >
        <Icon name='Plus' size={28} color='var(--app-color-primary-foreground)' />
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
