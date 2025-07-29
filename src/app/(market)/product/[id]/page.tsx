import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/components/shared/container';
import { notFound } from 'next/navigation';
import { ProductImage } from '@/components/shared/product-image';
import { Title } from '@/components/shared/title';
import { GroupVariants } from '@/components/shared/group-variants';

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
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="bg-secondary w-[490px] rounded-md p-7">
          <Title text={product.name} size="md" className="mb-1 font-extrabold" />
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          <GroupVariants
            value="2"
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
