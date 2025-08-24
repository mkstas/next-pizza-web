import { type FC, useRef } from 'react';
import type { ProductWithRelations } from '@/types/products.types';
import { useIntersection } from '@/hooks/useIntersection';
import { useCategoryContext } from '@/providers/category.provider';
import { getProductDetails, getProductImageUrl } from './get-product-info';
import { ProductsCard } from './ProductsCard';
import { ProductsGroupSkeleton } from './ProductsGroupSkeleton';

interface Props {
  isLoading?: boolean;
  categoryTitle?: string;
  categoryAlias?: string;
  products?: ProductWithRelations[];
}

export const ProductsGroup: FC<Props> = ({ categoryTitle, categoryAlias, products, isLoading }) => {
  const { setActiveCategory } = useCategoryContext();
  const productGroupRef = useRef<HTMLDivElement>(null);

  useIntersection(productGroupRef, () => setActiveCategory!(categoryAlias!), 0.9);

  if (isLoading) {
    return <ProductsGroupSkeleton />;
  }

  return (
    <div ref={productGroupRef} id={categoryAlias} className='space-y-8'>
      <h2 className='text-3xl font-extrabold'>{categoryTitle}</h2>
      <div className='grid grid-cols-3 gap-8'>
        {products?.map(product => (
          <ProductsCard
            key={product.id}
            title={product.title}
            alias={product.alias}
            imageUrl={getProductImageUrl(product.productVariants)}
            details={getProductDetails(product.productIngredients) || product.description}
            variants={product.productVariants}
          />
        ))}
      </div>
    </div>
  );
};
