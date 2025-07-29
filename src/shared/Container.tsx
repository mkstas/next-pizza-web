import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-7xl px-2', className)}>{children}</div>;
};
