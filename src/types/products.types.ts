import { Category, Ingredient, Product, ProductIngredient, ProductVariant } from '@prisma/client';

export type ProductIngredientWithRelation = ProductIngredient & { ingredient: Ingredient };

export type ProductWithRelations = Product & {
  variants: ProductVariant[];
  ingredients: ProductIngredientWithRelation[];
};

export type CategoryProduct = Category & { products: ProductWithRelations[] };
