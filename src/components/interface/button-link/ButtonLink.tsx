import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/utils';

const variants = {
  default: 'bg-orange-500 hover:bg-orange-600',
  ghost: 'hover:bg-slate-100 dark:hover:bg-neutral-700',
};

const geometries = {
  default: 'px-4 py-2',
  square: 'size-10 p-2',
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants;
  geometry?: keyof typeof geometries;
  href: string;
}

export const ButtonLink: FC<Props> = ({
  className,
  children,
  href,
  variant = 'default',
  geometry = 'default',
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg text-slate-900 transition dark:text-white',
        variants[variant],
        geometries[geometry],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
