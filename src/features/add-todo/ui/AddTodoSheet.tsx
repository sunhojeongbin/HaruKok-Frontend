import { useEffect, useState } from 'react';

import { BottomSheet } from '../../../shared/ui/BottomSheet';
import { AddTodoForm } from './AddTodoForm';

interface IAddTodoSheetProps {
  categoryId: string;
  open: boolean;
  onClose: () => void;
}

/** @description 투두 추가 시트 컴포넌트 */
export const AddTodoSheet = ({ categoryId, open, onClose }: IAddTodoSheetProps) => {
  const [formData, setFormData] = useState<{
    categoryId: string;
    title: string;
    memo?: string;
  }>({ categoryId, title: '' });

  useEffect(() => {
    if (open) {
      setFormData({ categoryId, title: '' });
    }
  }, [open, categoryId]);

  const handleConfirm = () => {
    console.log(formData);
    setFormData({ categoryId, title: '' });
    onClose();
  };

  return (
    <BottomSheet open={open} title='투두 추가' onClose={onClose} onConfirm={handleConfirm}>
      <AddTodoForm
        key={open ? 'open' : 'closed'}
        categoryId={formData.categoryId}
        title={formData.title}
        memo={formData.memo}
        onCategoryChange={(categoryId) => setFormData((prev) => ({ ...prev, categoryId }))}
        onTitleChange={(title) => setFormData((prev) => ({ ...prev, title }))}
        onMemoChange={(memo) => setFormData((prev) => ({ ...prev, memo }))}
      />
    </BottomSheet>
  );
};
