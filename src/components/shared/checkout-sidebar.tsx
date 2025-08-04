'use client';

import { cn } from '@/lib/utils';
import { Package, Percent, Truck, ArrowRight } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../ui/button';
import { CheckoutItemDetails } from './checkout-item-details';
import { WhiteBlock } from './white-block';
import { useCart } from '@/hooks/user-cart';

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: FC = () => {
  const { cost } = useCart();

  const vatCost = (cost * VAT) / 100;

  return (
    <WhiteBlock className={cn('sticky top-4 p-6')}>
      <div className="space-y-1">
        <div className="text-xl">Итого:</div>
        <div className="text-3xl font-extrabold">{cost + vatCost + DELIVERY_PRICE} ₽</div>
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center space-x-2">
            <Package size={16} />
            <span>Стоимость товаров:</span>
          </div>
        }
        value={cost}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center space-x-2">
            <Percent size={16} />
            <span>Налоги:</span>
          </div>
        }
        value={vatCost}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center space-x-2">
            <Truck size={16} />
            <span>Доставка:</span>
          </div>
        }
        value={DELIVERY_PRICE}
      />
      <Button type="submit" className="mt-6 h-14 w-full rounded-2xl text-base font-bold">
        Перейти к оплате
        <ArrowRight className="ml-2 w-5" />
      </Button>
    </WhiteBlock>
  );
};
