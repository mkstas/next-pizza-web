import { FC } from 'react';
import { Skeleton } from '@/components/interface';

export const ProductsCardSkeleton: FC = () => {
  return (
    <div className='space-y-4'>
      <Skeleton className='aspect-square w-full rounded-xl' />
      <Skeleton className='h-7 w-32 rounded-xl' />
      <Skeleton className='h-10 rounded-xl' />
      <div className='flex items-center justify-between gap-2'>
        <Skeleton className='h-10 w-24 rounded-xl' />
        <Skeleton className='h-10 w-24 rounded-xl' />
      </div>
    </div>
  );
};
