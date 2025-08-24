import type { Category } from '@prisma/client';
import { slugify } from '@/utils/slugify';

export const CATEGORIES: Pick<Category, 'title' | 'alias'>[] = [
  {
    title: 'Пиццы',
    alias: slugify('Пиццы'),
  },
  {
    title: 'Закуски',
    alias: slugify('Закуски'),
  },
  {
    title: 'Коктейли',
    alias: slugify('Коктейли'),
  },
  {
    title: 'Кофе',
    alias: slugify('Кофе'),
  },
  {
    title: 'Десерты',
    alias: slugify('Десерты'),
  },
  {
    title: 'Завтрак',
    alias: slugify('Завтрак'),
  },
];
