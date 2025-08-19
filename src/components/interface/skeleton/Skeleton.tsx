import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse bg-slate-200 dark:bg-neutral-700', className)}
      {...props}
    ></div>
  );
};
