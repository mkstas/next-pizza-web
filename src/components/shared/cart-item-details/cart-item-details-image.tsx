import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return <Image width={60} height={60} className={cn('h-[60px] w-[60px]', className)} src={src} alt="image" />;
};
