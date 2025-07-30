import { cn } from '@/lib/utils';
import { FC } from 'react';
import Image from 'next/image';
import { Title } from './title';
import { Button } from '../ui/button';

interface Props {
  imageUrl: string;
  name: string;
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoozeProductForm: FC<Props> = ({ name, imageUrl, loading, onSubmit, className }) => {
  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className={cn('relative flex w-full flex-1 items-center justify-center')}>
        <Image
          width={300}
          height={300}
          src={imageUrl}
          alt="Image"
          className={cn('relative top-2 left-2 z-10 size-[300px] transition-all duration-300')}
        />
      </div>

      <div className="bg-secondary w-[490px] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        <Button className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base">Добавить в корзину за 300 ₽</Button>
      </div>
    </div>
  );
};
