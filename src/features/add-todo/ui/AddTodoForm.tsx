import { useState } from 'react';

import { Button, Input, Label } from '../../../shared/ui';

interface IAddTodoFormProps {
  categoryName: string;
  onAddTodo: (todo: { title: string; memo?: string }) => void;
  onCancel: () => void;
}

/**
 * @description 투두 추가 폼 컴포넌트
 * @param categoryName - 선택된 카테고리 이름
 * @param onAddTodo - 투두 추가 시 실행되는 함수
 * @param onCancel - 취소 버튼 클릭 시 실행되는 함수
 */
export const AddTodoForm = ({ categoryName, onAddTodo, onCancel }: IAddTodoFormProps) => {
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    onAddTodo({ title, memo });

    setTitle('');
    setMemo('');
  };

  const handleCancel = () => {
    setTitle('');
    setMemo('');

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex h-12 items-center rounded-lg bg-[#aad1f0] px-4'>
          <span className='flex-1 truncate text-sm font-medium'>{categoryName}</span>
        </div>
        <div>
          <Label htmlFor='todo-title'>할 일</Label>
          <Input
            id='todo-title'
            placeholder='할 일을 입력해 주세요.'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor='todo-memo'>메모</Label>
          <Input
            id='todo-memo'
            placeholder='메모를 입력해 주세요.'
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
      </div>
      <div className='flex gap-4'>
        <Button type='button' variant='filled' onClick={handleCancel}>
          취소
        </Button>
        <Button type='submit'>추가</Button>
      </div>
    </form>
  );
};
