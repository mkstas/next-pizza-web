import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/components/shared/container';
import { notFound } from 'next/navigation';

export default async function Poduct({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <ProductImage src={product.imageUrl} className="" />
    </Container>
  );
}
