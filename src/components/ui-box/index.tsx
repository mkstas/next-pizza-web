import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UiBox: FC<Props> = ({ className, children, ...props }) => {
  return <div className={cn('overflow-hidden rounded-lg bg-white dark:bg-neutral-800', className)}>{children}</div>;
};
