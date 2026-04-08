import type { IconName } from '../../../shared/ui/Icon';
import { ColorPicker, Field, Icon, Input } from '../../../shared/ui';

import type { CategoryVisibility } from '../../../entities/category/model/types';

import type { CategoryFormValues } from '../model/types';

interface CategoryFormProps {
  values: CategoryFormValues;
  errorMessage?: string;
  onChange: <K extends keyof CategoryFormValues>(key: K, value: CategoryFormValues[K]) => void;
}

interface VisibilityOption {
  id: CategoryVisibility;
  icon: IconName;
  label: string;
  description: string;
}

const visibilityOptions: VisibilityOption[] = [
  { id: 'FRIENDS', icon: 'People', label: '친구 공개', description: '친구만 볼 수 있어요.' },
  { id: 'PRIVATE', icon: 'Lock', label: '나만 보기', description: '나만 볼 수 있어요.' },
];

export const CategoryForm = ({ values, errorMessage, onChange }: CategoryFormProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <Field label='카테고리 이름' htmlFor='name' errorMessage={errorMessage}>
        <Input
          id='name'
          name='name'
          value={values.name}
          placeholder='카테고리 이름을 입력해 주세요.'
          onChange={(e) => onChange('name', e.target.value)}
        />
      </Field>

      <Field label='공개 설정'>
        <div className='flex gap-3'>
          {visibilityOptions.map((option) => (
            <button
              key={option.id}
              type='button'
              onClick={() => onChange('visibility', option.id)}
              className={`flex flex-1 items-center gap-2 rounded-lg border p-4 transition-colors ${
                values.visibility === option.id
                  ? 'border-[#aad1f0] bg-[#aad1f033] text-[#aad1f0]'
                  : 'border-transparent bg-[#f3f4f6] text-[#b2b8c0]'
              }`}
            >
              <Icon name={option.icon} size={20} />

              <div className='flex flex-col items-start'>
                <span className='text-sm font-medium'>{option.label}</span>
                <span className='text-xs'>{option.description}</span>
              </div>
            </button>
          ))}
        </div>
      </Field>

      <Field label='색상'>
        <ColorPicker value={values.color} onChange={(color) => onChange('color', color)} />
      </Field>
    </div>
  );
};
