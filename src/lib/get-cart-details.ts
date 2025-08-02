import { CartDTO } from '@/services/dto/cart.dto';
import { calcCartCost } from './calc-cart-cost';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  cartProduct: CartStateItem[];
  cost: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const cartProduct: CartStateItem[] = data.cartProduct.map(item => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productVariant.product.name,
    imageUrl: item.productVariant.product.imageUrl,
    price: calcCartCost(item),
    pizzaSize: item.productVariant.size,
    pizzaType: item.productVariant.type,
    ingredients: item.ingredients.map(ingredient => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  }));

  return {
    cartProduct,
    cost: data.cost,
  };
};
