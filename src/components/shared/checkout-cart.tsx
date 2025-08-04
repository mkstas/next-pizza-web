'use client';

import { FC } from 'react';
import { WhiteBlock } from './white-block';
import { useCart } from '@/hooks/user-cart';
import { CheckoutCartItem } from './checkout-cart-item';
import { PizzaType, PizzaSize } from '@/constants/pizza';
import { getCartItemDetails } from '@/lib/get-cart-item-details';

export const CheckoutCart: FC = () => {
  const { cartProduct, onClickCountButton, removeCartItem } = useCart();

  return (
    <WhiteBlock title="1. Корзина" contentClassName="space-y-4">
      {cartProduct.map(item => (
        <CheckoutCartItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          details={
            item.pizzaSize
              ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingredients)
              : ''
          }
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
          onClickRemove={() => removeCartItem(item.id)}
        />
      ))}
    </WhiteBlock>
  );
};
