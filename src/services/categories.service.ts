import type { Category } from '@prisma/client';
import { API_ROUTES } from '@/config/constants';

export const categoryService = {
  findAll: async (): Promise<Category[]> => {
    return (await fetch(API_ROUTES.CATEGORIES)).json();
  },
};
