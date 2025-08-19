import { useEffect, useState } from 'react';
import type { ProductFilterItem } from '@/types/products.types';
import { productsService } from '@/services/products.service';

export const useFilterItems = () => {
  const [pizzaTypes, setPizzaTypes] = useState<ProductFilterItem[]>([]);
  const [pizzaSizes, setPizzaSizes] = useState<ProductFilterItem[]>([]);
  const [ingredients, setIngredients] = useState<ProductFilterItem[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const [pizzaTypes, pizzaSizes, ingredients] = await Promise.all([
        productsService.findPizzaTypes(),
        productsService.findPizzaSizes(),
        productsService.findIgredients(),
      ]);

      setPizzaTypes(pizzaTypes);
      setPizzaSizes(pizzaSizes);
      setIngredients(ingredients);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { pizzaTypes, pizzaSizes, ingredients, isLoading, isExpanded, setIsExpanded };
};
