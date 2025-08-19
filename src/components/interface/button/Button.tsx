import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/utils';

const variants = {
  default: 'bg-orange-500 hover:bg-orange-600 text-white',
  ghost: 'hover:bg-slate-100 dark:hover:bg-neutral-700 dark:text-white',
  link: 'text-orange-500 hover:text-orange-600',
};

const geometries = {
  default: 'px-4 py-2',
  square: 'size-10 p-2',
  none: '',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  geometry?: keyof typeof geometries;
}

export const Button: FC<Props> = ({
  className,
  children,
  variant = 'default',
  geometry = 'default',
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded-lg transition',
        variants[variant],
        geometries[geometry],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
