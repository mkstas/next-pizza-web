import { useEffect, useState } from 'react';
import type { ProductWithRelations } from '@/types/products.types';
import { productsService } from '@/services/products.service';

export const useSingleProduct = (id: string) => {
  const [product, setProduct] = useState<ProductWithRelations>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const product = await productsService.findOne(id);

      setProduct(product);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, product };
};
