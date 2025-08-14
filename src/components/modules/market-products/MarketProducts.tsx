'use client';

import { FC } from 'react';
import { useCatedoryProducts } from './useCatedoryProducts';
import { ProductsGroup } from '@/components/elements/products';

export const MarketProducts: FC = () => {
  const { isLoading, categoryProducts } = useCatedoryProducts();

  if (isLoading) {
    return (
      <div className='space-y-8'>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <ProductsGroup key={index} isLoading={isLoading} />
          ))}
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {categoryProducts?.map(category => (
        <ProductsGroup
          key={category.id}
          categoryId={category.id}
          categoryTitle={category.title}
          products={category.products}
        />
      ))}
    </div>
  );
};
