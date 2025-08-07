import { memo, type FC } from 'react';

export const CATEGORIES = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

const Categories: FC = () => {
  return (
    <ul className='-mx-2 flex gap-3'>
      {CATEGORIES.map((category, index) => (
        <li key={index}>
          <button className='cursor-pointer p-2 font-semibold transition-colors hover:text-orange-500'>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export const HeaderCategories = memo(Categories);
