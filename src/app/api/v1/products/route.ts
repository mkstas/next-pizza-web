import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variants: true,
          ingredients: {
            include: {
              ingredient: true,
            },
          },
        },
      },
    },
  });

  if (!products.length) {
    return NextResponse.json({ message: 'products are not found' }, { status: 404 });
  }

  return NextResponse.json(products, {
    status: 200,
  });
}
