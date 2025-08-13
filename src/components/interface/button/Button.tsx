import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/utils/cn';

const variants = {
  default: 'bg-orange-500 hover:bg-orange-600',
  ghost: 'hover:bg-slate-100 dark:hover:bg-neutral-700',
};

const geometries = {
  default: 'px-4 py-2',
  square: 'size-10 p-2',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  geometry?: keyof typeof geometries;
}

export const Button: FC<Props> = ({ className, children, variant = 'default', geometry = 'default', ...props }) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded-lg text-white transition dark:text-white',
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
