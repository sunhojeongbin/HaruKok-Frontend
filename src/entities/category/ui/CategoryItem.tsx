import { IconButton } from '../../../shared/ui';

interface ICategoryItemProps {
  name: string;
}

export const CategoryItem = ({ name }: ICategoryItemProps) => {
  return (
    <div className='flex h-10 items-center gap-2 rounded-lg bg-[#aad1f0] px-4'>
      <span className='flex-1 truncate text-sm font-medium'>{name}</span>
      <IconButton icon='PlusCloud' size={28} onClick={() => {}} />
    </div>
  );
};
