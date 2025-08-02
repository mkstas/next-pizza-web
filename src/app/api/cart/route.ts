import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { udpateCartCost } from '@/lib/update-cart-cost';
import { CreateCartItemValues } from '@/store/cart';
import { findOrCreateCart } from '@/lib/find-or-create-cart';

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ cost: 0, cartProduct: [] });
    }

    const cart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
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

    return NextResponse.json(cart);
  } catch (error) {
    console.log('[CART_GET] Server error', error);
    return NextResponse.json({ message: 'Не удалось получить корзину' }, { status: 500 });
  }
};

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartProduct.findFirst({
      where: {
        cartId: userCart.id,
        productVariantId: data.productVariantId,
        ingredients: {
          every: {
            id: { in: data.ingredients },
          },
        },
      },
    });

    if (findCartItem) {
      await prisma.cartProduct.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartProduct.create({
        data: {
          cartId: userCart.id,
          productVariantId: data.productVariantId,
          quantity: 1,
          ingredients: { connect: data.ingredients?.map(id => ({ id })) },
        },
      });
    }

    const updatedUserCart = await udpateCartCost(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set('cartToken', token);
    return resp;
  } catch (error) {
    console.log('[CART_POST] Server error', error);
    return NextResponse.json({ message: 'Не удалось создать корзину' }, { status: 500 });
  }
}
