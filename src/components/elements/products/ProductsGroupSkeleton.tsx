import { FC } from 'react';
import { Skeleton } from '@/components/interface';
import { ProductsCardSkeleton } from './ProductsCardSkeleton';

export const ProductsGroupSkeleton: FC = () => {
  return (
    <div className='space-y-8'>
      <Skeleton className='h-9 w-32 rounded-lg' />
      <div className='grid grid-cols-3 gap-8'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <ProductsCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};
