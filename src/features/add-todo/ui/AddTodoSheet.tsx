import { BottomSheet } from '../../../shared/ui/BottomSheet';
import { AddTodoForm } from './AddTodoForm';

interface IAddTodoSheetProps {
  categoryName: string;
  open: boolean;
  onClose: () => void;
}

/**
 * @description 투두 추가 시트 컴포넌트
 * @param categoryName - 선택된 카테고리 이름
 * @param open - 시트 열림 여부
 * @param onClose - 시트 닫기 시 실행되는 함수
 */
export const AddTodoSheet = ({ categoryName, open, onClose }: IAddTodoSheetProps) => {
  const handleAddTodo = (todo: { title: string; memo?: string }) => {
    console.log(todo);
    onClose();
  };

  return (
    <BottomSheet open={open} onClose={onClose}>
      <AddTodoForm categoryName={categoryName} onAddTodo={handleAddTodo} onCancel={onClose} />
    </BottomSheet>
  );
};
