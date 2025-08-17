import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const pizzaSizes = await prisma.productVariant.groupBy({
    where: { NOT: [{ pizzaSize: null }] },
    by: ['pizzaSize'],
    orderBy: {
      pizzaSize: 'asc',
    },
  });

  if (!pizzaSizes.length) {
    return NextResponse.json({ message: 'Pizza sizes are not found' }, { status: 404 });
  }

  return NextResponse.json(pizzaSizes, { status: 200 });
}
