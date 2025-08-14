import { ProductVariant } from '@prisma/client';
import { ProductIngredientWithRelation } from '@/types/products.types';

export const useProduct = (variants: ProductVariant[], ingredients: ProductIngredientWithRelation[]) => {
  const imageUrl = variants[2] ? variants[2].imageUrl : variants[0].imageUrl;

  const details = [];

  if (ingredients.length) {
    details.push(...ingredients.filter(item => item.required).map(item => item.ingredient.title));
  }

  return { imageUrl, details };
};
