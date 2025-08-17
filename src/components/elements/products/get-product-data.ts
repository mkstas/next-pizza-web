import { ProductVariant } from '@prisma/client';
import { ProductIngredientWithRelation } from '@/types/products.types';

export const getProductImageUrl = (variants: ProductVariant[]) => {
  return variants[2] ? variants[2].imageUrl : variants[0].imageUrl;
};

export const getProductDetails = (description: string | null, ingredients: ProductIngredientWithRelation[]) => {
  if (ingredients.length) {
    return [...ingredients.filter(item => item.required).map(item => item.ingredient.title)].join(', ');
  }

  return description;
};
