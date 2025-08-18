import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductVariant } from '@prisma/client';
import { Button } from '@/components/interface';
import { ROUTES } from '@/config/constants';

interface Props {
  title: string;
  alias: string;
  imageUrl: string;
  details: string | null;
  variants: ProductVariant[];
}

export const ProductsCard: FC<Props> = ({ title, alias, imageUrl, details, variants }) => {
  return (
    <Link href={`${ROUTES.PRODUCT}/${alias}`} className='space-y-4'>
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
      {!!details && <p className='text-sm text-slate-500 dark:text-neutral-400'>{details}</p>}
      <div className='flex items-center justify-between gap-2'>
        <span className='text-xl font-bold'>от {variants[0].price} ₽</span>
        <Button>Выбрать</Button>
      </div>
    </Link>
  );
};
