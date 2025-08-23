import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

interface Props extends PropsWithChildren {
  className?: string;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, className, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div onClick={onClose} className='absolute inset-0 z-10 bg-slate-900/30'></div>
      <div
        className={cn('relative z-20 flex w-full overflow-hidden rounded-lg bg-white', className)}
      >
        {children}
      </div>
    </div>
  );
};
