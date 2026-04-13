export const CategoryItemSkeleton = () => {
  return (
    <div className='flex flex-col gap-1 rounded-xl bg-[#f9fafb] p-4'>
      <div className='flex items-center gap-2'>
        <div className='h-3 w-3 shrink-0 animate-pulse rounded-full bg-gray-200' />
        <div className='h-3.5 w-2/3 animate-pulse rounded bg-gray-200' />
      </div>

      <div className='ml-5 flex items-center gap-1'>
        <div className='h-3.5 w-3.5 animate-pulse rounded bg-gray-200' />
        <div className='h-3 w-1/3 animate-pulse rounded bg-gray-200' />
      </div>
    </div>
  );
};
