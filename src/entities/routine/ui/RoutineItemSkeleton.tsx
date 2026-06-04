export const RoutineItemSkeleton = () => {
  return (
    <div className='bg-app-surface-muted flex flex-col gap-1 rounded-xl p-4'>
      <div className='bg-app-skeleton h-3.5 w-3/4 animate-pulse rounded' />

      <div className='flex flex-col gap-1'>
        <div className='bg-app-skeleton h-3 w-2/3 animate-pulse rounded' />
        <div className='bg-app-skeleton h-3 w-1/2 animate-pulse rounded' />
      </div>
    </div>
  );
};
