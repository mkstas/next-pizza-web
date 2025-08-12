import { FC } from 'react';
import { Skeleton } from '@/components/interface';

export const CategoriesSkeleton: FC = () => {
  return <Skeleton className='h-10 w-full max-w-md rounded-lg' />;
};
