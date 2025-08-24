import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generateBreakfastOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Завтрак' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Омлет с ветчиной и грибами в пите',
      alias: slugify('Омлет с ветчиной и грибами в пите'),
      description:
        'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой',
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019860510daa726fa023e04a1ae06a87.jpg',
        price: 239,
        weight: 170,
      },
    ],
  });
};

export const generateBreakfasts = async () => {
  await generateBreakfastOne();
};
