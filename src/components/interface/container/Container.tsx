import { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-3', className)} {...props}>
      {children}
    </div>
  );
};
