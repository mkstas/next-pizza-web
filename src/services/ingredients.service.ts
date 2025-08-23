import type { Ingredient } from '@prisma/client';
import { API_ROUTES } from '@/config/constants';

export const ingredientsService = {
  findAll: async (): Promise<Ingredient[]> => {
    return (await fetch(API_ROUTES.INGREDIENTS)).json();
  },
};
