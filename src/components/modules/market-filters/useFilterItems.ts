import { useEffect, useState } from 'react';
import type { Ingredient } from '@prisma/client';
import type { PizzaSize, PizzaType, ProductFilterItem } from '@/types/products.types';
import { ingredientsService } from '@/services/ingredients.service';
import { productVariantsService } from '@/services/product-variants.service';

export const useFilterItems = () => {
  const [pizzaTypes, setPizzaTypes] = useState<ProductFilterItem[]>([]);
  const [pizzaSizes, setPizzaSizes] = useState<ProductFilterItem[]>([]);
  const [ingredients, setIngredients] = useState<ProductFilterItem[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const convertPizzaTypesToFilter = (pizzaTypes: PizzaType[]): ProductFilterItem[] => {
    return [
      ...pizzaTypes.map((type): ProductFilterItem => {
        return {
          value: type.pizzaType,
          label: type.pizzaType,
          alias: type.pizzaType,
        };
      }),
    ];
  };

  const convertPizzaSizesToFilter = (pizzaSizes: PizzaSize[]): ProductFilterItem[] => {
    return [
      ...pizzaSizes.map((size): ProductFilterItem => {
        return {
          value: size.pizzaSize.toString(),
          label: `${size.pizzaSize} см`,
          alias: `pizza_size_${size.pizzaSize}`,
        };
      }),
    ];
  };

  const convertIngredeintsToFilter = (ingredients: Ingredient[]): ProductFilterItem[] => {
    return [
      ...ingredients.map((ingredient): ProductFilterItem => {
        return {
          value: ingredient.alias,
          label: ingredient.title,
          alias: ingredient.alias,
        };
      }),
    ];
  };

  const fetchData = async () => {
    try {
      const [pizzaTypes, pizzaSizes, ingredients] = await Promise.all([
        productVariantsService.findPizzaTypes(),
        productVariantsService.findPizzaSizes(),
        ingredientsService.findAll(),
      ]);

      setPizzaTypes(convertPizzaTypesToFilter(pizzaTypes));
      setPizzaSizes(convertPizzaSizesToFilter(pizzaSizes));
      setIngredients(convertIngredeintsToFilter(ingredients));
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
