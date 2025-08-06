import type { FC } from 'react';
import Link from 'next/link';
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { UiSkeleton } from '@/components';
import { ROUTES } from '@/config/constants';

interface Props {
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const MenuLogin: FC<Props> = ({ isLoading, isLoggedIn }) => {
  if (isLoading) {
    return (
      <div className='px-3 py-2'>
        <UiSkeleton className='h-6 rounded-md' />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <button className='flex w-full cursor-pointer items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'>
        <LogOutIcon size={16} className='size-4 text-orange-500' />
        <span className='font-semibold text-slate-600 dark:text-neutral-400'>Выйти</span>
      </button>
    );
  }

  return (
    <Link
      href={ROUTES.LOGIN}
      className='flex items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
    >
      <LogInIcon size={16} className='size-4 text-orange-500' />
      <span className='font-semibold text-slate-600 dark:text-neutral-400'>Войти</span>
    </Link>
  );
};
