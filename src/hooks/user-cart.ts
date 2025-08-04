import { useCartStore } from '@/store/cart';
import { useEffect } from 'react';

export const useCart = () => {
  const { cost, cartProduct, fetchCartItems, updateItemQuantity, removeCartItem } = useCartStore(state => state);

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return {
    cost,
    cartProduct,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
    onClickCountButton,
  };
};
