import type {
  Category,
  Ingredient,
  Product,
  ProductIngredient,
  ProductVariant,
} from '@prisma/client';

export type ProductIngredientWithRelation = ProductIngredient & { ingredient: Ingredient };

export type ProductWithRelations = Product & {
  variants: ProductVariant[];
  ingredients: ProductIngredientWithRelation[];
};

export type CategoryProduct = Category & { products: ProductWithRelations[] };

export type PizzaType = {
  pizzaType: string;
  pizzaTypeAlias: string;
};

export type PizzaSize = {
  pizzaSize: number;
};

export type ProductFilterItem = {
  value: string;
  label: string;
  alias: string;
};

export type ProductFilterParams = {
  pizzaTypes: string[];
  pizzasSizes: string[];
  ingredients: string[];
};
