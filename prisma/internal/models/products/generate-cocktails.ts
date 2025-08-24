import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generateCocktailOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Коктейли' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Молочный коктейль Фисташка',
      alias: slugify('Молочный коктейль Фисташка'),
      description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0198227c9627795b991b79142c0e3ba0.jpg',
        price: 269,
        weight: 320,
        volume: 300,
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019808099d0271c3999692798b376dc3.jpg',
        price: 439,
        weight: 500,
        volume: 400,
      },
    ],
  });
};

export const generateCocktails = async () => {
  await generateCocktailOne();
};
