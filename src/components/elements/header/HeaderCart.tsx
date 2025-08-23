import { ArrowRightIcon, ShoppingBagIcon } from 'lucide-react';
import { type FC, memo } from 'react';
import { Button } from '@/components/interface';

interface Props {
  onClick?: () => void;
}

const Component: FC<Props> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className='group relative'>
      <span>1000 ₽</span>
      <span className='h-5 w-0.25 bg-white/50'></span>
      <span className='flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0'>
        <span>3</span>
        <ShoppingBagIcon size={16} className='relative -top-0.25 size-4' />
      </span>
      <ArrowRightIcon
        size={20}
        className='absolute right-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
      />
    </Button>
  );
};

export const HeaderCart = memo(Component);
