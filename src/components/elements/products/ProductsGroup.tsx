import { type FC, useRef } from 'react';
import type { ProductVariant } from '@prisma/client';
import type { ProductIngredientWithRelation, ProductWithRelations } from '@/types/products.types';
import { useIntersection } from '@/hooks/useIntersection';
import { useCategoryContext } from '@/providers/category.provider';
import { ProductsCard } from './ProductsCard';
import { ProductsGroupSkeleton } from './ProductsGroupSkeleton';

interface Props {
  isLoading?: boolean;
  categoryTitle?: string;
  categoryAlias?: string;
  products?: ProductWithRelations[];
}

const getProductImageUrl = (variants: ProductVariant[]) => {
  return variants[2] ? variants[2].imageUrl : variants[0].imageUrl;
};

const getProductDetails = (ingredients: ProductIngredientWithRelation[]) => {
  if (ingredients.length) {
    return [...ingredients.filter(item => item.required).map(item => item.ingredient.title)].join(
      ', ',
    );
  }
};

export const ProductsGroup: FC<Props> = ({ categoryTitle, categoryAlias, products, isLoading }) => {
  const { setActiveCategory } = useCategoryContext();
  const productGroupRef = useRef<HTMLDivElement>(null);

  useIntersection(productGroupRef, () => setActiveCategory!(categoryAlias!));

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
            imageUrl={getProductImageUrl(product.variants)}
            details={getProductDetails(product.ingredients) || product.description}
            variants={product.variants}
          />
        ))}
      </div>
    </div>
  );
};
