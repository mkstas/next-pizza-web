import type { FC } from 'react';
import { UserIcon } from 'lucide-react';

interface Props {
  onClick?: () => void;
}

export const HeaderAccountButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='ml-auto flex size-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-700'
    >
      <UserIcon size={20} className='size-5 text-orange-500' />
    </button>
  );
};
