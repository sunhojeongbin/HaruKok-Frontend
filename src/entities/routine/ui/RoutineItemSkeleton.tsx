export const RoutineItemSkeleton = () => {
  return (
    <div className='flex flex-col gap-1 rounded-lg bg-[#f9fafb] p-4'>
      <div className='h-3.5 w-3/4 animate-pulse rounded bg-gray-200' />

      <div className='flex flex-col gap-1'>
        <div className='h-3 w-2/3 animate-pulse rounded bg-gray-200' />

        <div className='h-3 w-1/2 animate-pulse rounded bg-gray-200' />
      </div>
    </div>
  );
};
