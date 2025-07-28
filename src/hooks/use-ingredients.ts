import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const ingredients = await Api.ingredients.findAll();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
