import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';

export async function GET() {
  const categories = await prisma.category.findMany();

  if (!categories.length) {
    return NextResponse.json({ message: 'Categories are not found' }, { status: 404 });
  }

  return NextResponse.json(categories, {
    status: 200,
  });
}
