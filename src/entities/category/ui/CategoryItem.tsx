import { useNavigate } from 'react-router-dom';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { useTranslation } from '@shared/lib/i18n';
import { Icon } from '@shared/ui';

import type { Category } from '../model/types';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: category.id,
  });

  const isFriends = category.visibility === 'FRIENDS';

  return (
    <div
      ref={setNodeRef}
      className={`bg-app-surface-muted flex items-center rounded-xl p-4 ${isDragging ? 'z-10' : ''}`}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <button
        type='button'
        onClick={() => navigate(`/categories/${category.id}/edit`)}
        className='min-w-0 flex-1 flex-col gap-1'
      >
        <div className='flex items-center gap-2'>
          <div
            className='h-3 w-3 shrink-0 rounded-full'
            style={{ backgroundColor: category.color }}
          />
          <span className='truncate text-sm font-medium'>{category.name}</span>
        </div>

        <div className='text-app-text-muted ml-5 flex items-center gap-1 text-xs'>
          <Icon name={isFriends ? 'People' : 'Lock'} size={14} />
          <span>{isFriends ? t('category.friends') : t('category.private')}</span>
        </div>
      </button>

      <button
        type='button'
        {...attributes}
        {...listeners}
        className='shrink-0 cursor-grab touch-none active:cursor-grabbing'
      >
        <Icon name='Drag' size={20} color='var(--app-color-text-muted)' />
      </button>
    </div>
  );
};
