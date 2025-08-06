import type { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UiButton: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg bg-orange-500 px-3 py-2 text-white transition hover:bg-orange-600',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
