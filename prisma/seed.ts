import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { CATEGORIES, INGREDIENTS, PRODUCTS } from './constants';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariant = ({
  productId,
  type,
  size,
}: {
  productId: number;
  type?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    type,
    size,
  } as Prisma.ProductVariantUncheckedCreateInput;
};

const up = async () => {
  await prisma.user.createMany({
    data: [
      {
        username: 'User',
        email: 'user@test.ru',
        password: hashSync('qwertyui', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        username: 'Admin',
        email: 'admin@test.ru',
        password: hashSync('qwertyui', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  await prisma.ingredient.createMany({
    data: INGREDIENTS,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(10, 40),
      },
    },
  });

  await prisma.productVariant.createMany({
    data: [
      generateProductVariant({ productId: pizza1.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza1.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza1.id, type: 2, size: 40 }),
      generateProductVariant({ productId: pizza2.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza2.id, type: 1, size: 30 }),
      generateProductVariant({ productId: pizza2.id, type: 1, size: 40 }),
      generateProductVariant({ productId: pizza2.id, type: 2, size: 20 }),
      generateProductVariant({ productId: pizza2.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza2.id, type: 2, size: 40 }),
      generateProductVariant({ productId: pizza3.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza3.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza3.id, type: 2, size: 40 }),
      generateProductVariant({ productId: 1 }),
      generateProductVariant({ productId: 2 }),
      generateProductVariant({ productId: 3 }),
      generateProductVariant({ productId: 4 }),
      generateProductVariant({ productId: 5 }),
      generateProductVariant({ productId: 6 }),
      generateProductVariant({ productId: 7 }),
      generateProductVariant({ productId: 8 }),
      generateProductVariant({ productId: 9 }),
      generateProductVariant({ productId: 10 }),
      generateProductVariant({ productId: 11 }),
      generateProductVariant({ productId: 12 }),
      generateProductVariant({ productId: 13 }),
      generateProductVariant({ productId: 14 }),
      generateProductVariant({ productId: 15 }),
      generateProductVariant({ productId: 16 }),
      generateProductVariant({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        cost: 0,
        token: 'qwertyuiop',
      },
      {
        userId: 2,
        cost: 0,
        token: 'asdfghjkl',
      },
    ],
  });

  await prisma.cartProduct.create({
    data: {
      cartId: 1,
      productVariantId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
};

const down = async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_variants" RESTART IDENTITY CASCADE`;
};

const main = async () => {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
