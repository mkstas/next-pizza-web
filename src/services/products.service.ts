import { CategoryProduct, ProductFilterItem } from '@/types/products.types';
import { API_ROUTES } from '@/config/constants';

export const productsService = {
  findAll: async (): Promise<CategoryProduct[]> => {
    const res = await fetch(API_ROUTES.PRODUCTS);

    return await res.json();
  },
  findPizzaTypes: async (): Promise<ProductFilterItem[]> => {
    const res = await fetch(API_ROUTES.FILTER_PIZZA_TYPES);

    return await res.json();
  },
  findPizzaSizes: async (): Promise<ProductFilterItem[]> => {
    const res = await fetch(API_ROUTES.FILTER_PIZZA_SIZES);

    return await res.json();
  },
  findIgredients: async (): Promise<ProductFilterItem[]> => {
    const res = await fetch(API_ROUTES.FILTER_INGREDIENTS);

    return await res.json();
  },
};
