import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UiSkeleton: FC<Props> = ({ className, ...props }) => {
  return <div className={cn('animate-pulse bg-slate-200 dark:bg-neutral-700', className)} {...props}></div>;
};
