import { FC } from 'react';
import { Skeleton } from '@/components/interface';

export const FilterGroupItemsSkeleton: FC = () => {
  return (
    <div className='space-y-2'>
      <Skeleton className='h-7 w-40 rounded-lg' />
      <div className='space-y-2'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-6 w-60 rounded-lg' />
          ))}
      </div>
    </div>
  );
};
