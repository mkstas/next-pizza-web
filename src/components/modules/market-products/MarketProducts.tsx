'use client';

import { FC } from 'react';
import { ProductsGroup } from '@/components/elements/products';
import { useCatedoryProducts } from './useCatedoryProducts';

export const MarketProducts: FC = () => {
  const { isLoading, categoryProducts } = useCatedoryProducts();

  return (
    <div className='space-y-8'>
      {categoryProducts.map((category, index) => (
        <ProductsGroup
          key={category.id || index}
          isLoading={isLoading}
          categoryTitle={category.title}
          categoryAlias={category.alias}
          products={category.products}
        />
      ))}
    </div>
  );
};
