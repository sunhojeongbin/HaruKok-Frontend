import { useNavigate } from 'react-router-dom';

import type { Category } from '../model/types';

import { Icon } from '../../../shared/ui';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const navigate = useNavigate();

  const isFriends = category.visibility === 'FRIENDS';

  return (
    <button
      type='button'
      onClick={() => navigate(`/categories/${category.id}/edit`)}
      className='flex flex-col gap-1 rounded-lg bg-[#f9fafb] p-4'
    >
      <div className='flex items-center gap-2'>
        <div
          className='h-3 w-3 shrink-0 rounded-full'
          style={{ backgroundColor: category.color }}
        />
        <span className='text-sm font-medium'>{category.name}</span>
      </div>

      <div className='ml-5 flex items-center gap-1 text-xs text-[#b2b8c0]'>
        <Icon name={isFriends ? 'People' : 'Lock'} size={14} />
        <span>{isFriends ? '친구 공개' : '나만 보기'}</span>
      </div>
    </button>
  );
};
