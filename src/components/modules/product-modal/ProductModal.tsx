'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { ProductChooseForm } from '@/components/elements/products';
import { Modal } from '@/components/interface';
import { useSingleProduct } from './useSingleProduct';

interface Props {
  productId: string;
}

export const ProductModal: FC<Props> = ({ productId }) => {
  const router = useRouter();
  const { isLoading, product } = useSingleProduct(productId);

  return (
    <Modal onClose={router.back} className='min-h-128 max-w-5xl'>
      <div className='grid w-full grid-cols-2'>
        <div></div>
        <div className='bg-slate-100 px-6 py-4'>
          <ProductChooseForm isLoading={isLoading} product={product} />
        </div>
      </div>
    </Modal>
  );
};
