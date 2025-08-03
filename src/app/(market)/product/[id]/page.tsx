import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/components/shared/container';
import { notFound } from 'next/navigation';
import { ProductForm } from '@/components/shared/product-form';

export default async function Poduct({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      productVariants: true,
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              productVariants: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <ProductForm product={product} />
    </Container>
  );
}
