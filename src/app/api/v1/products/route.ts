import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';

export async function GET() {
  const products = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productVariants: true,
          productIngredients: {
            include: {
              ingredient: true,
            },
          },
        },
      },
    },
  });

  if (!products.length) {
    return NextResponse.json({ message: 'Products are not found' }, { status: 404 });
  }

  return NextResponse.json(products, {
    status: 200,
  });
}
