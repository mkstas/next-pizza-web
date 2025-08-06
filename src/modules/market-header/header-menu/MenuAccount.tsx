import type { FC } from 'react';
import Link from 'next/link';
import { CircleUserIcon } from 'lucide-react';
import { UiSkeleton } from '@/components';
import { ROUTES } from '@/config/constants';

interface Props {
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const MenuAccount: FC<Props> = ({ isLoading, isLoggedIn }) => {
  if (isLoading) {
    return (
      <div className='px-3 py-2'>
        <UiSkeleton className='h-6 rounded-md' />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <Link
        href={ROUTES.ACCOUNT}
        className='flex items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
      >
        <CircleUserIcon size={16} className='size-4 text-orange-500' />
        <span className='font-semibold text-slate-600 dark:text-neutral-400'>Профиль</span>
      </Link>
    );
  }
};
