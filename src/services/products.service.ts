import type { CategoryProduct, ProductWithRelations } from '@/types/products.types';
import { API_ROUTES } from '@/config/constants';

export const productsService = {
  findAll: async (): Promise<CategoryProduct[]> => {
    return (await fetch(API_ROUTES.PRODUCTS)).json();
  },
  findOne: async (id: string): Promise<ProductWithRelations> => {
    return (await fetch(API_ROUTES.SINGLE_PRODUCT(id))).json();
  },
};
