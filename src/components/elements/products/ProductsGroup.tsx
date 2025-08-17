import { FC } from 'react';
import { ProductWithRelations } from '@/types/products.types';
import { ProductsGroupSkeleton } from './ProductsGroupSkeleton';
import { ProductsCard } from './ProductsCard';
import { getProductDetails, getProductImageUrl } from './get-product-data';

interface Props {
  isLoading?: boolean;
  categoryId?: string;
  categoryTitle?: string;
  products?: ProductWithRelations[];
}

export const ProductsGroup: FC<Props> = ({ categoryId, categoryTitle, products, isLoading }) => {
  if (isLoading) {
    return <ProductsGroupSkeleton />;
  }

  return (
    <div id={categoryId} className='space-y-8'>
      <h2 className='text-3xl font-extrabold'>{categoryTitle}</h2>
      <div className='grid grid-cols-3 gap-8'>
        {products?.map(product => (
          <ProductsCard
            key={product.id}
            productId={product.id}
            title={product.title}
            imageUrl={getProductImageUrl(product.productVariants)}
            details={getProductDetails(product.description, product.productIngredients)}
            variants={product.productVariants}
            ingredients={product.productIngredients}
          />
        ))}
      </div>
    </div>
  );
};
