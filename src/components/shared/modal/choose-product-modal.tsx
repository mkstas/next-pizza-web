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

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.productVariants[0];
  const isPizzaForm = Boolean(firstItem.type);

  const { addCartItem } = useCartStore();

  const onAddToCart = () => {
    addCartItem({
      productVariantId: firstItem.id,
    });
  };

  const onAddPizzaToCart = (productVariantId: number, ingredients: number[]) => {
    addCartItem({
      productVariantId,
      ingredients,
    });
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
          />
        ) : (
          <ChoozeProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onAddToCart}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
