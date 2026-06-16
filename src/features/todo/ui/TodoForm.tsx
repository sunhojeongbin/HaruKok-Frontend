import { useId } from 'react';

import { useTranslation } from '@shared/lib/i18n';
import { Field, Input } from '@shared/ui';

import { CategorySelect } from '@entities/category';

import type { TodoFormValues } from '../model/types';

interface TodoFormProps {
  values: TodoFormValues;
  onChange: <K extends keyof TodoFormValues>(key: K, value: TodoFormValues[K]) => void;
}

export const TodoForm = ({ values, onChange }: TodoFormProps) => {
  const { t } = useTranslation();

  const formId = useId();
  const contentId = `${formId}-content`;
  const memoId = `${formId}-memo`;

  return (
    <div className='flex flex-col gap-4'>
      <CategorySelect
        value={values.categoryId}
        onChange={(categoryId) => onChange('categoryId', categoryId)}
      />

      <Field label={t('todo.content')} htmlFor={contentId}>
        <Input
          id={contentId}
          name='content'
          value={values.content}
          placeholder={t('todo.contentPlaceholder')}
          onChange={(e) => onChange('content', e.target.value)}
        />
      </Field>

      <Field label={t('todo.memo')} htmlFor={memoId}>
        <Input
          id={memoId}
          name='memo'
          value={values.memo}
          placeholder={t('todo.memoPlaceholder')}
          onChange={(e) => onChange('memo', e.target.value)}
        />
      </Field>
    </div>
  );
};
