import { Cart, CartProduct, Ingredient, Product, ProductVariant } from '@prisma/client';

export type CartItemDTO = CartProduct & {
  productVariant: ProductVariant & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  cartProduct: CartItemDTO[];
}

export interface CreateCartItemValues {
  productVariantId: number;
  ingredients?: number[];
}
