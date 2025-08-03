'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ChoozeProductForm } from '../chooze-product-form';
import { ProductWithRelations } from '@/@types/product';
import { ChoozePizzaForm } from '../chooze-pizza-form';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useCartStore } from '@/store/cart';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.productVariants[0];
  const isPizzaForm = Boolean(firstItem.type);

  const { loading, addCartItem } = useCartStore();

  const onAddToCart = async () => {
    try {
      await addCartItem({
        productVariantId: firstItem.id,
      });
      toast.success('Товар добавлен в корзину');
      router.back();
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
      router.back();
    } catch (error) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle hidden>{product.name}</DialogTitle>
      <DialogContent className={cn('min-h-[520px] overflow-hidden bg-white p-0 sm:max-w-5xl', className)}>
        {isPizzaForm ? (
          <ChoozePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.productVariants}
            onSubmit={onAddPizzaToCart}
            loading={loading}
          />
        ) : (
          <ChoozeProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onAddToCart}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
