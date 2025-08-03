'use client';

import { ProductWithRelations } from '@/@types/product';
import { useCartStore } from '@/store/cart';
import { FC } from 'react';
import toast from 'react-hot-toast';
import { ChoozePizzaForm } from './chooze-pizza-form';
import { ChoozeProductForm } from './chooze-product-form';
import { cn } from '@/lib/utils';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ProductForm: FC<Props> = ({ className, product }) => {
  const firstItem = product.productVariants[0];
  const isPizzaForm = Boolean(firstItem.type);

  const { loading, addCartItem } = useCartStore();

  const onAddToCart = async () => {
    try {
      await addCartItem({
        productVariantId: firstItem.id,
      });
      toast.success('Товар добавлен в корзину');
    } catch (error) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(error);
    }
  };

  const onAddPizzaToCart = async (productVariantId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productVariantId,
        ingredients,
      });
      toast.success('Товар добавлен в корзину');
    } catch (error) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoozePizzaForm
        className={cn(className)}
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.productVariants}
        onSubmit={onAddPizzaToCart}
        loading={loading}
      />
    );
  }

  return (
    <ChoozeProductForm
      className={cn(className)}
      imageUrl={product.imageUrl}
      name={product.name}
      price={firstItem.price}
      onSubmit={onAddToCart}
      loading={loading}
    />
  );
};
