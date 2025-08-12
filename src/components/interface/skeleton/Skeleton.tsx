import { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Skeleton: FC<Props> = ({ className, ...props }) => {
  return <div className={cn('animate-pulse bg-slate-200 dark:bg-neutral-700', className)} {...props}></div>;
};
