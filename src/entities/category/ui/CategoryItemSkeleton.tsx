export const CategoryItemSkeleton = () => {
  return (
    <div className='bg-app-surface-muted flex flex-col gap-1 rounded-xl p-4'>
      <div className='flex items-center gap-2'>
        <div className='bg-app-skeleton h-3 w-3 shrink-0 animate-pulse rounded-full' />
        <div className='bg-app-skeleton h-3.5 w-2/3 animate-pulse rounded' />
      </div>

      <div className='ml-5 flex items-center gap-1'>
        <div className='bg-app-skeleton h-3.5 w-3.5 animate-pulse rounded' />
        <div className='bg-app-skeleton h-3 w-1/3 animate-pulse rounded' />
      </div>
    </div>
  );
};
