import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/internal/prisma-client';
import type { ProductFilterItem } from '@/types/products.types';

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();

  if (!ingredients.length) {
    return NextResponse.json({ message: 'Ingredients are not found' }, { status: 404 });
  }

  return NextResponse.json(
    [
      ...ingredients.map((ingredient): ProductFilterItem => {
        return {
          value: ingredient.alias,
          label: ingredient.title,
          alias: ingredient.alias,
        };
      }),
    ],
    { status: 200 },
  );
}
