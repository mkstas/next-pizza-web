import { useEffect, useState } from 'react';
import { Ingredient } from '@prisma/client';
import { ingredientsService } from '@/services/ingredients.service';
import { productVariantsService } from '@/services/product-variants.service';

export const useFilterPoints = () => {
  const [pizzaTypes, setPizzaTypes] = useState<string[]>();
  const [pizzaSizes, setPizzaSizes] = useState<string[]>();
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const [pizzaTypes, pizzaSizes, ingredients] = await Promise.all([
        productVariantsService.findPizzaTypes(),
        productVariantsService.findVariantSizes(),
        ingredientsService.findAll(),
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

  return { pizzaTypes, pizzaSizes, ingredients, isLoading, isShowAll, setIsShowAll };
};
