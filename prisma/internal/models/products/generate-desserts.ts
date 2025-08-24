import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generateDessertOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Десерты' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Чизкейк Банановый с шоколадным печеньем',
      alias: slugify('Чизкейк Банановый с шоколадным печеньем'),
      description:
        'Солнечная версия классического рецепта: нежный чизкейк с бананом и шоколадным печеньем',
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0198138723e478fba518947539dbbdcb.jpg',
        price: 189,
        weight: 100,
      },
    ],
  });
};

export const generateDesserts = async () => {
  await generateDessertOne();
};
