import type { FC } from 'react';
import { Skeleton } from '@/components/interface';

export const ProductsGroupSkeleton: FC = () => {
  return (
    <div className='space-y-8'>
      <Skeleton className='h-9 w-32 rounded-lg' />
      <div className='grid grid-cols-3 gap-8'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='space-y-4'>
              <Skeleton className='aspect-square w-full rounded-lg' />
              <Skeleton className='h-7 w-32 rounded-lg' />
              <Skeleton className='h-15 rounded-lg' />
              <div className='flex items-center justify-between gap-2'>
                <Skeleton className='h-10 w-24 rounded-lg' />
                <Skeleton className='h-10 w-24 rounded-lg' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
