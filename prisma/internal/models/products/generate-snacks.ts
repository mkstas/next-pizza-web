import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generateSnackOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Закуски' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Додстер',
      alias: slugify('Додстер'),
      description:
        'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/01980cb92528769295aeb186fb501f8e.jpg',
        price: 249,
        weight: 190,
      },
    ],
  });
};

export const generateSnacks = async () => {
  await generateSnackOne();
};
