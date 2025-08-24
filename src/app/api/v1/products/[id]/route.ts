import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { alias: id },
    include: {
      productIngredients: {
        include: {
          ingredient: true,
        },
      },
      productVariants: true,
    },
  });

  if (!product) {
    return NextResponse.json({ message: 'Product is not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
