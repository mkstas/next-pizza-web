import type { ProductVariant } from '@prisma/client';
import type { ProductIngredientWithRelation } from '@/types/products.types';

export const getProductImageUrl = (variants: ProductVariant[]) => {
  return variants[2] ? variants[2].imageUrl : variants[0].imageUrl;
};

export const getProductDetails = (ingredients: ProductIngredientWithRelation[]) => {
  if (ingredients.length) {
    return [...ingredients.filter(item => item.required).map(item => item.ingredient.title)].join(
      ', ',
    );
  }
};
