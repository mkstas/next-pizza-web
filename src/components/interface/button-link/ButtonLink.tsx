import { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import { cn } from '@/shared/utils/cn';

const variants = {
  default: 'bg-orange-500 hover:bg-orange-600 text-white',
  ghost: 'hover:bg-slate-100 dark:hover:bg-neutral-700 text-slate-900',
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
        'flex items-center justify-center gap-2 rounded-lg transition',
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
