'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: 'Пиццы',
  },
  {
    id: 2,
    name: 'Завтрак',
  },
  {
    id: 3,
    name: 'Закуски',
  },
  {
    id: 4,
    name: 'Коктейли',
  },
  {
    id: 5,
    name: 'Кофе',
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore(state => state.activeId);
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId);

  return (
    <div className={cn('bg-secondary inline-flex gap-1 rounded-md p-1', className)}>
      {cats.map(cat => (
        <button
          className={cn(
            'flex cursor-pointer items-center rounded-md px-5 py-2 font-bold',
            activeCategoryId === cat.id && 'text-primary cursor-auto bg-white shadow-xs',
          )}
          key={cat.id}
          onClick={() => setActiveCategoryId(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
