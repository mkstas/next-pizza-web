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

  return (
    <div className={cn('inline-flex gap-1 rounded-md bg-gray-50 p-1', className)}>
      {cats.map((cat, index) => (
        <a
          className={cn(
            'flex h-11 items-center rounded-md px-5 font-bold',
            activeCategoryId === cat.id && 'text-primary bg-white shadow-md shadow-gray-200',
          )}
          href={`/#${cat.name}`}
          key={index}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
