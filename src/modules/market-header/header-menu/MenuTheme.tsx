import { useContext, type FC } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { UiSkeleton } from '@/components';
import { ThemeContext } from '@/providers';

interface Props {
  isLoading: boolean;
}

export const MenuTheme: FC<Props> = ({ isLoading }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (isLoading) {
    return (
      <div className='px-3 py-2'>
        <UiSkeleton className='h-6 rounded-md' />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className='flex w-full cursor-pointer items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
    >
      {theme === 'light' ? (
        <SunIcon size={16} className='size-4 text-orange-500' />
      ) : (
        <MoonIcon size={16} className='size-4 text-orange-500' />
      )}
      <p className='font-semibold text-slate-600 dark:text-neutral-400'>
        Тема: <span className='text-orange-500'>{theme === 'light' ? 'светлая' : 'темная'}</span>
      </p>
    </button>
  );
};
