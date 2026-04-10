import { useEffect, useState } from 'react';

import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { Label } from '../../../shared/ui';

import type { Category } from '../../../entities/category/model/types';
import { CategoryItem, CategoryItemSkeleton } from '../../../entities/category/ui';

interface CategoryListProps {
  categories: Category[];
  isLoading: boolean;
  onReorder: (categories: Category[]) => void;
}

export const CategoryList = ({ categories, isLoading, onReorder }: CategoryListProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  const [items, setItems] = useState(categories);

  useEffect(() => {
    setItems(categories);
  }, [categories]);

  const activeCategories = items.filter((category) => !category.isEnded);
  const endedCategories = items.filter((category) => category.isEnded);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const fromIndex = items.findIndex((item) => item.id === active.id);
    const toIndex = items.findIndex((item) => item.id === over.id);

    if (fromIndex === -1 || toIndex === -1) return;
    if (items[fromIndex].isEnded !== items[toIndex].isEnded) return;

    const reorderedItems = arrayMove(items, fromIndex, toIndex);

    setItems(reorderedItems);
    onReorder(reorderedItems);
  };

  if (isLoading) {
    return (
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <CategoryItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-sm font-medium text-[#b2b8c0]'>등록된 카테고리가 없어요.</p>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      <div className='flex flex-col gap-4'>
        {activeCategories.length > 0 && (
          <section className='flex flex-col gap-1.5'>
            <SortableContext
              items={activeCategories.map((category) => category.id)}
              strategy={verticalListSortingStrategy}
            >
              <Label>진행 중</Label>

              <div className='flex flex-col gap-3'>
                {activeCategories.map((category) => (
                  <CategoryItem key={category.id} category={category} />
                ))}
              </div>
            </SortableContext>
          </section>
        )}

        {endedCategories.length > 0 && (
          <section className='flex flex-col gap-1.5'>
            <SortableContext
              items={endedCategories.map((category) => category.id)}
              strategy={verticalListSortingStrategy}
            >
              <Label>종료</Label>

              <div className='flex flex-col gap-3'>
                {endedCategories.map((category) => (
                  <CategoryItem key={category.id} category={category} />
                ))}
              </div>
            </SortableContext>
          </section>
        )}
      </div>
    </DndContext>
  );
};
