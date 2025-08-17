import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const sizes = await prisma.productVariant.groupBy({
    where: { NOT: [{ size: null }] },
    by: ['size'],
    orderBy: {
      size: 'asc',
    },
  });

  if (!sizes.length) {
    return NextResponse.json({ message: 'sizes are not found' }, { status: 404 });
  }

  return NextResponse.json([...sizes.map(size => size.size)], { status: 200 });
}
