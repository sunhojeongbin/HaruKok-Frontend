import { useEffect, useState } from 'react';

import type { TodoFormValues } from '../model/types';

import { useCreateTodo } from '../model/useCreateTodo';

import { BottomSheet } from '../../../shared/ui/BottomSheet';
import { TodoForm } from './TodoForm';

interface TodoCreateSheetProps {
  open: boolean;
  categoryId: string;
  selectedDate: string;
  onClose: () => void;
}

export const TodoCreateSheet = ({
  open,
  categoryId,
  selectedDate,
  onClose,
}: TodoCreateSheetProps) => {
  const { mutate: create, isPending } = useCreateTodo({ yearMonth: selectedDate.slice(0, 7) });

  const [form, setForm] = useState<TodoFormValues>({ categoryId, content: '', memo: '' });

  useEffect(() => {
    if (open) {
      setForm({ categoryId, content: '', memo: '' });
    }
  }, [open, categoryId]);

  const handleChange = <K extends keyof TodoFormValues>(key: K, value: TodoFormValues[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirm = () => {
    if (isPending) return;

    create(
      {
        ctgId: form.categoryId,
        content: form.content,
        memo: form.memo,
        todoDate: selectedDate,
      },
      {
        onSuccess: () => {
          setForm({ categoryId, content: '', memo: '' });

          onClose();
        },
      },
    );
  };

  return (
    <BottomSheet open={open} title='투두 추가' onClose={onClose} onConfirm={handleConfirm}>
      <TodoForm key={open ? 'open' : 'closed'} values={form} onChange={handleChange} />
    </BottomSheet>
  );
};
