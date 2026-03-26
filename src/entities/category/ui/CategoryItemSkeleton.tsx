export const CategoryItemSkeleton = () => {
  return (
    <div className='flex animate-pulse flex-col gap-1 rounded-lg bg-[#f9fafb] p-4'>
      <div className='flex items-center gap-2'>
        <div className='h-3 w-3 shrink-0 rounded-full bg-gray-200' />
        <div className='h-4 w-24 rounded bg-gray-200' />
      </div>

      <div className='ml-5 flex items-center gap-1'>
        <div className='h-3.5 w-3.5 rounded bg-gray-200' />
        <div className='h-3 w-16 rounded bg-gray-200' />
      </div>
    </div>
  );
};
