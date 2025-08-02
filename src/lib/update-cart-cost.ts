import { prisma } from '@/prisma/prisma-client';
import { calcCartCost } from './calc-cart-cost';

export const udpateCartCost = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      cartProduct: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productVariant: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  const cost = userCart.cartProduct.reduce((acc, item) => {
    return acc + calcCartCost(item);
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      cost,
    },
    include: {
      cartProduct: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productVariant: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
