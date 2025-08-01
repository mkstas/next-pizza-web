import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { CartDrawer } from './cart-drawer';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className={cn('group relative', className)} size={'lg'}>
        <span className="font-bold">520 ₽</span>
        <span className="mx-3 h-6 w-0.25 bg-white/30" />
        <span className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative mr-1" strokeWidth={2} />
          <span className="font-bold">3</span>
        </span>
        <ArrowRight
          size={20}
          className="absolute right-7 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </CartDrawer>
  );
};
