import { Input, Label } from '../../../shared/ui';
import { CategorySelect } from './CategorySelect';

interface IAddTodoFormProps {
  categoryId: string;
  title: string;
  memo?: string;
  onCategoryChange: (categoryId: string) => void;
  onTitleChange: (title: string) => void;
  onMemoChange?: (memo: string) => void;
}

/** @description 투두 추가 폼 컴포넌트 */
export const AddTodoForm = ({
  categoryId,
  title,
  memo,
  onCategoryChange,
  onTitleChange,
  onMemoChange,
}: IAddTodoFormProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <CategorySelect value={categoryId} onChange={onCategoryChange} />
      <div>
        <Label htmlFor='todo-title'>할 일</Label>
        <Input
          id='todo-title'
          placeholder='할 일을 입력해 주세요.'
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor='todo-memo'>메모</Label>
        <Input
          id='todo-memo'
          placeholder='메모를 입력해 주세요.'
          value={memo || ''}
          onChange={(e) => onMemoChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};
