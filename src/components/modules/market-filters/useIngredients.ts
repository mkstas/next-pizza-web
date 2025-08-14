import { useEffect, useState } from 'react';
import { Ingredient } from '@prisma/client';
import { ingredientsService } from '@/services/ingredients.service';

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const ingredients = await ingredientsService.findAll();
      setIngredients(ingredients);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ingredients, isLoading, isShowAll, setIsShowAll };
};
