import { useEffect, useState } from 'react';
import { CategoryProduct } from '@/types/products.types';
import { productsService } from '@/services/products.service';

export const useCatedoryProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryProducts, setCategoryProducts] = useState<CategoryProduct[]>([]);

  const fetchData = async () => {
    try {
      const products = await productsService.findAll();
      setCategoryProducts(products);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { categoryProducts, isLoading };
};
