import { FC, memo } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Theme } from '@/providers/theme.provider';

interface Props {
  theme?: Theme;
  onClick?: () => void;
}

const Component: FC<Props> = ({ theme = 'light', onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex size-10 cursor-pointer items-center justify-center rounded-lg p-2 transition hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-700'
    >
      {theme === 'light' ? (
        <SunIcon size={20} className='text-yellow-500' />
      ) : (
        <MoonIcon size={20} className='text-purple-500' />
      )}
    </button>
  );
};

export const HeaderTheme = memo(Component);
