'use client';

import { FC } from 'react';
import { useCatedoryProducts } from './useCatedoryProducts';
import { ProductsGroup } from '@/components/elements/products';

export const MarketProducts: FC = () => {
  const { isLoading, categoryProducts } = useCatedoryProducts();

  return (
    <div className='space-y-8'>
      {categoryProducts.map((category, index) => (
        <ProductsGroup
          key={category.id || index}
          isLoading={isLoading}
          categoryId={category.id}
          categoryTitle={category.title}
          products={category.products}
        />
      ))}
    </div>
  );
};
