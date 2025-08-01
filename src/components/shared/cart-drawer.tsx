'use client';

import { FC, PropsWithChildren } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/lib/get-cart-item-details';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#F4F1EE] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-5 flex-1 space-y-2 overflow-auto">
          <CartDrawerItem
            id={0}
            imageUrl="https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
            details={getCartItemDetails(2, 30, [{ name: 'Цыпленок' }, { name: 'Сыр' }])}
            name="Пепперони фреш"
            price={419}
            quantity={1}
          />
        </div>

        <SheetFooter className="bg-white p-8">
          <div className="mb-4 flex">
            <span className="flex flex-1 text-lg text-neutral-500">
              Итого
              <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
            </span>
            <span className="text-lg font-bold">1000 ₽</span>
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
