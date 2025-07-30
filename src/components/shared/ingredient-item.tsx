import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: FC<Props> = ({ className, active, onClick, name, imageUrl, price }) => {
  return (
    <div
      className={cn(
        'relative flex w-32 cursor-pointer flex-col items-center rounded-md border border-white bg-white p-1 text-center shadow-md',
        { 'border-primary': active },
        className,
      )}
      onClick={onClick}
    >
      {active && <CircleCheck className="text-primary absolute top-2 right-2" />}
      <Image width={110} height={110} src={imageUrl} alt={name} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
