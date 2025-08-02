import { CartItemDTO } from '@/services/dto/cart.dto';

export const calcCartCost = (item: CartItemDTO): number => {
  const ingredientsCost = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  return (ingredientsCost + item.productVariant.price) * item.quantity;
};
