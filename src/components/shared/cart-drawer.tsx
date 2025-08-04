'use client';

import { FC, PropsWithChildren } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/lib/get-cart-item-details';
import { PizzaSize, PizzaType } from '@/constants/pizza';
import { useCart } from '@/hooks/user-cart';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { cartProduct, cost, onClickCountButton, removeCartItem } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#F4F1EE] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{cartProduct.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-5 flex-1 space-y-2 overflow-auto">
          {cartProduct.map(item => (
            <CartDrawerItem
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
        </div>

        <SheetFooter className="bg-white p-8">
          <div className="mb-4 flex">
            <span className="flex flex-1 text-lg text-neutral-500">
              Итого
              <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
            </span>
            <span className="text-lg font-bold">{cost} ₽</span>
          </div>
          <Link href="/checkout">
            <Button type="submit" className="h-12 w-full text-base">
              Оформить заказ
              <ArrowRight className="ml-2 w-5" />
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
