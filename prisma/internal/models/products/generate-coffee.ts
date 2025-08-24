import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generateCoffeeOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Кофе' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Кофе Капучино',
      alias: slugify('Кофе Капучино'),
      description: 'Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка',
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019840b6488170018dd640026aea9961.jpg',
        price: 179,
        weight: 240,
        volume: 400,
      },
    ],
  });
};

export const generateCoffee = async () => {
  await generateCoffeeOne();
};
