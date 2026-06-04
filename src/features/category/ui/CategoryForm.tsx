import { useTranslation } from '@shared/lib/i18n';
import { ColorPicker, Field, Icon, Input } from '@shared/ui';
import type { IconName } from '@shared/ui/Icon';

import type { CategoryVisibility } from '@entities/category';

import type { CategoryFormValues } from '../model/types';

interface CategoryFormProps {
  values: CategoryFormValues;
  errorMessage?: string;
  onChange: <K extends keyof CategoryFormValues>(key: K, value: CategoryFormValues[K]) => void;
}

interface VisibilityOption {
  id: CategoryVisibility;
  icon: IconName;
  labelKey: 'category.friends' | 'category.private';
  descriptionKey: 'category.friendsDescription' | 'category.privateDescription';
}

const visibilityOptions: VisibilityOption[] = [
  {
    id: 'FRIENDS',
    icon: 'People',
    labelKey: 'category.friends',
    descriptionKey: 'category.friendsDescription',
  },
  {
    id: 'PRIVATE',
    icon: 'Lock',
    labelKey: 'category.private',
    descriptionKey: 'category.privateDescription',
  },
];

export const CategoryForm = ({ values, errorMessage, onChange }: CategoryFormProps) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4'>
      <Field label={t('category.name')} htmlFor='category-name' errorMessage={errorMessage}>
        <Input
          id='category-name'
          name='name'
          value={values.name}
          placeholder={t('category.namePlaceholder')}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </Field>

      <Field label={t('category.visibility')}>
        <div className='flex gap-3'>
          {visibilityOptions.map((option) => (
            <button
              key={option.id}
              type='button'
              onClick={() => onChange('visibility', option.id)}
              className={`flex flex-1 items-center gap-2 rounded-xl border p-4 transition-colors ${
                values.visibility === option.id
                  ? 'border-app-primary bg-app-primary-soft text-app-primary'
                  : 'bg-app-muted text-app-text-muted border-transparent'
              }`}
            >
              <Icon name={option.icon} size={20} />

              <div className='flex flex-col items-start'>
                <span className='text-sm font-medium'>{t(option.labelKey)}</span>
                <span className='text-xs'>{t(option.descriptionKey)}</span>
              </div>
            </button>
          ))}
        </div>
      </Field>

      <Field label={t('category.color')}>
        <ColorPicker value={values.color} onChange={(color) => onChange('color', color)} />
      </Field>
    </div>
  );
};
