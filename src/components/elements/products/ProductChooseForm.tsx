import type { FC } from 'react';
import type { ProductWithRelations } from '@/types/products.types';
import { Button } from '@/components/interface';
import { getProductDetails } from './get-product-info';
import { ProductVariant } from './ProductVariant';

interface Props {
  isLoading?: boolean;
  product: ProductWithRelations | undefined;
}

export const ProductChooseForm: FC<Props> = ({ isLoading, product }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex h-full flex-col space-y-4'>
      <div className='space-y-2'>
        <h4 className='text-2xl font-bold'>{product?.title}</h4>
        {product?.ingredients && (
          <p className='mt-2 text-sm text-slate-600'>{getProductDetails(product.ingredients)}</p>
        )}
      </div>
      <ProductVariant
        productVariantsGroup={[
          [
            { title: '20 см', value: '1' },
            { title: '25 см', value: '2' },
            { title: '30 см', value: '3' },
            { title: '35 см', value: '4' },
          ],
          [
            { title: 'Традиционное', value: '1' },
            { title: 'Тонкое', value: '2' },
          ],
        ]}
      />
      <Button className='mt-auto w-full'>Добавить 349 ₽</Button>
    </div>
  );
};
