import { Category, Ingredient, Product, ProductIngredient, ProductVariant } from '@prisma/client';

export type ProductIngredientWithRelation = ProductIngredient & { ingredient: Ingredient };

export type ProductWithRelations = Product & {
  productVariants: ProductVariant[];
  productIngredients: ProductIngredientWithRelation[];
};

export type CategoryProduct = Category & { products: ProductWithRelations[] };
