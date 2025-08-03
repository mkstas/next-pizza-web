import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from './title';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className, ingredients }) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="bg-secondary flex h-[260px] justify-center rounded-lg p-6">
          <img className="h-[215px] w-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />
        <p className="text-sm text-gray-400">{ingredients.map(ingredient => ingredient.name).join(', ')}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
