import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductVariant } from '@prisma/client';
import { ProductIngredientWithRelation } from '@/types/products.types';
import { Button } from '@/components/interface';
import { useProduct } from './useProduct';

interface Props {
  productId: string;
  title: string;
  description: string | null;
  variants: ProductVariant[];
  ingredients: ProductIngredientWithRelation[];
}

export const ProductsCard: FC<Props> = ({ productId, title, description, variants, ingredients }) => {
  const { imageUrl, details } = useProduct(variants, ingredients);

  return (
    <Link href={productId} className='space-y-4'>
      <div className='rounded-lg bg-white p-4'>
        <Image
          src={imageUrl}
          alt={title}
          width={256}
          height={256}
          className='w-full transition-transform will-change-transform hover:translate-y-1'
          priority
        />
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-sm text-slate-500 dark:text-neutral-400'>{description ? description : details.join(', ')}</p>
      <div className='flex items-center justify-between gap-2'>
        <span className='text-xl font-bold'>от {variants[0].price} ₽</span>
        <Button>Выбрать</Button>
      </div>
    </Link>
  );
};
