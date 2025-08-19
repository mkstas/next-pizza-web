import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();

  if (!ingredients.length) {
    return NextResponse.json({ message: 'Ingredients are not found' }, { status: 404 });
  }

  return NextResponse.json(
    [
      ...ingredients.map(ingredient => {
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
