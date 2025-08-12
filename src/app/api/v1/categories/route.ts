import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await prisma.category.findMany();

  if (!categories.length) {
    return NextResponse.json({ message: 'categories are not found' }, { status: 404 });
  }

  return NextResponse.json(categories, {
    status: 200,
  });
}
