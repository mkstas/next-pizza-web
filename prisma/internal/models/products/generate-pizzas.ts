import { slugify } from '@/utils/slugify';
import { prisma } from '../../prisma-client';

const generatePizzaOne = async () => {
  const category = await prisma.category.findFirst({
    where: { title: 'Пиццы' },
  });

  const product = await prisma.product.create({
    data: {
      categoryId: category!.id,
      title: 'Карбонара',
      alias: slugify('Карбонара'),
    },
  });

  const ingredients = await prisma.ingredient.findMany();

  ingredients.slice(0, 5).forEach(async ingredient => {
    await prisma.productIngredient.create({
      data: {
        productId: product.id,
        ingredientId: ingredient.id,
        required: true,
      },
    });
  });

  ingredients.slice(5, ingredients.length).forEach(async ingredient => {
    await prisma.productIngredient.create({
      data: {
        productId: product.id,
        ingredientId: ingredient.id,
      },
    });
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/0196361c3c34728dbed2f01a37f04284.jpg',
        price: 479,
        weight: 220,
        pizzaSize: 20,
        pizzaType: 'Традиционное',
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019591b1343c746bb4c108bede4d469c.jpg',
        price: 659,
        weight: 410,
        pizzaSize: 25,
        pizzaType: 'Традиционное',
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.jpg',
        price: 1009,
        weight: 590,
        pizzaSize: 30,
        pizzaType: 'Традиционное',
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019591b14a2e7663a8daf17169cfd23f.jpg',
        price: 1119,
        weight: 800,
        pizzaSize: 35,
        pizzaType: 'Традиционное',
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019591b141c877ac8054d155c9cb6b19.jpg',
        price: 1009,
        weight: 520,
        pizzaSize: 30,
        pizzaType: 'Тонкое',
      },
      {
        productId: product.id,
        imageUrl:
          'https://media.dodostatic.net/image/r:292x292/019591b1518e735c8da6eeef256663e1.jpg',
        price: 1119,
        weight: 710,
        pizzaSize: 35,
        pizzaType: 'Тонкое',
      },
    ],
  });
};

export const generatePizzas = async () => {
  await generatePizzaOne();
};
