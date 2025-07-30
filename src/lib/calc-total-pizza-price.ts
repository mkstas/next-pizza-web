import { PizzaType, PizzaSize } from '@/constants/pizza';
import { Ingredient, ProductVariant } from '@prisma/client';

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductVariant[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice = items.find(item => item.type === type && item.size === size)?.price || 0;

  const ingredientsPrice = ingredients
    .filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + ingredientsPrice;
};
