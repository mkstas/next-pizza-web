import type { Category, User } from '@prisma/client';

export const USER: Pick<User, 'phoneNumber'> = {
  phoneNumber: '79000000000',
};

export const CATEGORIES: Pick<Category, 'title'>[] = [
  {
    title: 'Пиццы',
  },
  {
    title: 'Закуски',
  },
  {
    title: 'Коктейли',
  },
  {
    title: 'Кофе',
  },
  {
    title: 'Десерты',
  },
  {
    title: 'Завтрак',
  },
];
