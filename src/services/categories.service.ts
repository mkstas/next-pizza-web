import { Category } from '@prisma/client';

export const categoryService = {
  findAll: async (): Promise<Category[]> => {
    const res = await fetch('/api/v1/categories');

    return await res.json();
  },
};
