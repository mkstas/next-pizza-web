import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';
import { ProductFilterItem } from '@/types/products.types';

export async function GET() {
  const pizzaTypes = await prisma.productVariant.groupBy({
    where: { NOT: [{ pizzaType: null }] },
    by: ['pizzaType', 'pizzaTypeAlias'],
    orderBy: {
      pizzaType: 'desc',
    },
  });

  if (!pizzaTypes.length) {
    return NextResponse.json({ message: 'Pizza types are not found' }, { status: 404 });
  }

  return NextResponse.json(
    [
      ...pizzaTypes.map((type): ProductFilterItem => {
        return {
          value: type.pizzaTypeAlias!,
          label: type.pizzaType!,
          alias: type.pizzaTypeAlias!,
        };
      }),
    ],
    { status: 200 },
  );
}
