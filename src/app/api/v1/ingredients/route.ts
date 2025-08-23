import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();

  if (!ingredients.length) {
    return NextResponse.json({ message: 'Ingredients are not found' }, { status: 404 });
  }

  return NextResponse.json(ingredients, { status: 200 });
}
