'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ProductWithRelations } from '@/@types/product';
import { DialogTitle } from '@radix-ui/react-dialog';
import { ProductForm } from '../product-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle hidden>{product.name}</DialogTitle>
      <DialogContent className={cn('min-h-[520px] overflow-hidden bg-white p-0 sm:max-w-5xl', className)}>
        <ProductForm product={product} />
      </DialogContent>
    </Dialog>
  );
};
