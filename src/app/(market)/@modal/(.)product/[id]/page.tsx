import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ChooseProductModal } from '@/components/shared/modal/choose-product-modal';

export default async function PoductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      productVariants: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
