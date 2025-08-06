import { memo, type FC } from 'react';
import { ShoppingBagIcon, ArrowRightIcon } from 'lucide-react';
import { UiButton } from '@/components';

interface Props {
  onClick?: () => void;
}

const CartButton: FC<Props> = ({ onClick }) => {
  return (
    <UiButton onClick={onClick} className='group relative'>
      <span>1000 ₽</span>
      <span className='h-5 w-0.25 bg-white/50'></span>
      <span className='flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0'>
        <span>0</span>
        <ShoppingBagIcon size={16} className='relative -top-0.25 size-4' />
      </span>
      <ArrowRightIcon
        size={20}
        className='absolute right-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
      />
    </UiButton>
  );
};

export const HeaderCartButton = memo(CartButton);
