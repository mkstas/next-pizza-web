import { Skeleton } from '@/components/interface';
import { ROUTES } from '@/config/constants';
import { LogOutIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';

interface Props {
  isLoading?: boolean;
  isLoggedIn?: boolean;
}

const Component: FC<Props> = ({ isLoading, isLoggedIn }) => {
  if (isLoading) {
    return <Skeleton className='size-10 rounded-lg' />;
  }

  if (isLoggedIn) {
    return (
      <Link
        href={ROUTES.ACCOUNT}
        className='flex size-10 cursor-pointer items-center justify-center rounded-lg p-2 transition hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-700'
      >
        <UserIcon size={20} className='text-orange-500' />
      </Link>
    );
  }

  return (
    <button className='flex size-10 cursor-pointer items-center justify-center rounded-lg p-2 transition hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-700'>
      <LogOutIcon size={20} className='text-orange-500' />
    </button>
  );
};

export const HeaderAuth = memo(Component);
