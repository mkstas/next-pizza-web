import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const types = await prisma.productVariant.groupBy({
    where: { NOT: [{ type: null }] },
    by: ['type'],
    orderBy: {
      type: 'desc',
    },
  });

  if (!types.length) {
    return NextResponse.json({ message: 'types are not found' }, { status: 404 });
  }

  return NextResponse.json([...types.map(type => type.type)], { status: 200 });
}
