import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-3', className)} {...props}>
      {children}
    </div>
  );
};
