import type { PizzaSize, PizzaType } from '@/types/products.types';
import { API_ROUTES } from '@/config/constants';

export const productVariantsService = {
  findPizzaTypes: async (): Promise<PizzaType[]> => {
    return (await fetch(API_ROUTES.PIZZA_TYPES)).json();
  },
  findPizzaSizes: async (): Promise<PizzaSize[]> => {
    return (await fetch(API_ROUTES.PIZZA_SIZES)).json();
  },
};
