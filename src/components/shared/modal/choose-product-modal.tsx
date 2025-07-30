'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ChoozeProductForm } from '../chooze-product-form';
import { ProductWithRelations } from '@/@types/product';
import { ChoozePizzaForm } from '../chooze-pizza-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.productVariants[0].type);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('min-h-[520px] overflow-hidden bg-white p-0 sm:max-w-5xl', className)}>
        {isPizzaForm ? (
          <ChoozePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.productVariants}
          />
        ) : (
          <ChoozeProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
