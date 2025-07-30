import { PizzaType, PizzaSize, mapPizzaType } from '@/constants/pizza';
import { Ingredient, ProductVariant } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductVariant[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

  return { totalPrice, textDetails };
};
