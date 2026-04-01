export const TodoItemSkeleton = () => {
  return (
    <div className='flex items-start'>
      <div className='h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200' />

      <div className='ml-2 flex flex-col gap-1'>
        <div className='h-6 w-40 animate-pulse rounded bg-gray-200' />
        <div className='h-3.5 w-24 animate-pulse rounded bg-gray-200' />
      </div>
    </div>
  );
};
