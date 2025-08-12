import { FC, memo } from 'react';
import { Category } from '@prisma/client';
import { CategoriesSkeleton } from './CategoriesSkeleton';
import { cn } from '@/shared/utils/cn';

interface Props {
  isLoading?: boolean;
  categories?: Category[];
}

const Component: FC<Props> = ({ isLoading, categories }) => {
  if (isLoading) {
    return <CategoriesSkeleton />;
  }

  if (categories?.length) {
    return (
      <ul className='inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-neutral-700'>
        {categories?.map(category => (
          <li key={category.id}>
            <button
              className={cn(
                'block cursor-pointer rounded-md px-2 py-1 font-semibold transition-colors hover:text-orange-500',
                category.id === categories[0].id && 'bg-white text-orange-500 dark:bg-neutral-800',
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
