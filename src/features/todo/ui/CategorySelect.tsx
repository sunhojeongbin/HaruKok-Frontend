import { useState } from 'react';

import { useCategories } from '../../../entities/category/model/useCategories';

import { Icon } from '../../../shared/ui';

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
  const { data: categories = [] } = useCategories();

  const selectedCategory = categories.find((category) => category.id === value);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='flex h-12 w-full items-center gap-2 rounded-lg border px-4'
        style={{
          backgroundColor: selectedCategory?.color ? `${selectedCategory?.color}33` : '#aad1f033',
          borderColor: isOpen ? selectedCategory?.color || '#aad1f0' : 'transparent',
          color: selectedCategory?.color || '#aad1f0',
        }}
      >
        <span className='min-w-0 flex-1 truncate text-left text-sm font-medium'>
          {selectedCategory?.name}
        </span>
        <Icon name={isOpen ? 'ArrowUp' : 'ArrowDown'} size={20} />
      </button>

      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className='fixed inset-0 z-10' />

          <div className='absolute top-14 z-20 max-h-36 w-full overflow-y-auto rounded-lg bg-white shadow-md'>
            {categories.map((category) => (
              <button
                key={category.id}
                type='button'
                onClick={() => {
                  onChange(category.id);
                  setIsOpen(false);
                }}
                className={`flex h-12 w-full items-center gap-3 px-4 text-left text-sm hover:bg-gray-50 ${
                  value === category.id ? 'bg-gray-100' : ''
                }`}
              >
                <div
                  className='h-3 w-3 shrink-0 rounded-full'
                  style={{ backgroundColor: category.color }}
                />
                <span className='font-medium'>{category.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
