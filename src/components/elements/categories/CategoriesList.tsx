import { type FC, memo } from 'react';
import type { Category } from '@prisma/client';
import { cn } from '@/utils/cn';
import { Skeleton } from '@/components/interface';

interface Props {
  isLoading?: boolean;
  categories?: Category[];
  activeCategory: string;
  onClick: (alias: string) => void;
}

const Component: FC<Props> = ({ isLoading, categories, activeCategory, onClick }) => {
  if (isLoading) {
    return <Skeleton className='h-10 w-full max-w-lg rounded-lg' />;
  }

  if (categories?.length) {
    return (
      <ul className='inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-neutral-700'>
        {categories?.map(category => (
          <li key={category.id}>
            <button
              onClick={() => onClick(category.alias)}
              className={cn(
                'block cursor-pointer rounded-md px-2 py-1 font-semibold transition-colors hover:text-orange-500',
                category.alias === activeCategory && 'bg-white text-orange-500 dark:bg-neutral-800',
              )}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

export const CategoriesList = memo(Component);
