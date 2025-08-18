import { NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { ProductFilterItem } from '@/types/products.types';

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

  return NextResponse.json(
    [
      ...pizzaSizes.map((size): ProductFilterItem => {
        return {
          value: size.pizzaSize!.toString(),
          label: `${size.pizzaSize} см`,
          alias: `pizza_size_${size.pizzaSize!}`,
        };
      }),
    ],
    { status: 200 },
  );
}
