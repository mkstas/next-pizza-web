import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';

export async function GET() {
  const pizzaTypes = await prisma.productVariant.groupBy({
    where: { NOT: [{ pizzaType: null }] },
    by: ['pizzaType'],
    orderBy: {
      pizzaType: 'desc',
    },
  });

  if (!pizzaTypes.length) {
    return NextResponse.json({ message: 'Pizza types are not found' }, { status: 404 });
  }

  return NextResponse.json(pizzaTypes, { status: 200 });
}
