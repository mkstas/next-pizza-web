import { cn } from '@/lib/utils';
import { FC } from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CartItemDetailsImage } from './cart-item-details/cart-item-details-image';
import { CartItemInfo } from './cart-item-details/cart-item-info';
import { CountButton } from './count-button';
import { CartItemDetailsPrice } from './cart-item-details/cart-item-details-price';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem: FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickCountButton,
  onClickRemove,
  className,
}) => {
  return (
    <div className={cn('flex gap-6 bg-white p-5', className)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />

            <Trash2Icon className="cursor-pointer text-gray-400 hover:text-gray-600" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
