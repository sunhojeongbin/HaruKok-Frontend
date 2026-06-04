export const TodoItemSkeleton = () => {
  return (
    <div className='flex items-start'>
      <div className='bg-app-skeleton h-6 w-6 shrink-0 animate-pulse rounded-full' />

      <div className='ml-2 flex flex-col gap-1'>
        <div className='bg-app-skeleton h-6 w-40 animate-pulse rounded' />
        <div className='bg-app-skeleton h-3.5 w-24 animate-pulse rounded' />
      </div>
    </div>
  );
};
