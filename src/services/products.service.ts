import { CategoryProduct } from '@/types/products.types';

export const productsService = {
  findAll: async (): Promise<CategoryProduct[]> => {
    const res = await fetch('/api/v1/products');

    return await res.json();
  },
};
