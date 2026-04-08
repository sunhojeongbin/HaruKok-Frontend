import { useId } from 'react';

import { Field, Input } from '../../../shared/ui';

import type { TodoFormValues } from '../model/types';
import { CategorySelect } from '../../category/ui/CategorySelect';

interface TodoFormProps {
  values: TodoFormValues;
  onChange: <K extends keyof TodoFormValues>(key: K, value: TodoFormValues[K]) => void;
}

export const TodoForm = ({ values, onChange }: TodoFormProps) => {
  const formId = useId();
  const contentId = `${formId}-content`;
  const memoId = `${formId}-memo`;

  return (
    <div className='flex flex-col gap-4'>
      <CategorySelect
        value={values.categoryId}
        onChange={(categoryId) => onChange('categoryId', categoryId)}
      />

      <Field label='할 일' htmlFor={contentId}>
        <Input
          id={contentId}
          name='content'
          value={values.content}
          placeholder='할 일을 입력해 주세요.'
          onChange={(e) => onChange('content', e.target.value)}
        />
      </Field>

      <Field label='메모' htmlFor={memoId}>
        <Input
          id={memoId}
          name='memo'
          value={values.memo}
          placeholder='메모를 입력해 주세요.'
          onChange={(e) => onChange('memo', e.target.value)}
        />
      </Field>
    </div>
  );
};
