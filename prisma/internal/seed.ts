import { CATEGORIES } from './models/categories';
import { INGREDIENTS } from './models/ingredients';
import { generateBreakfasts } from './models/products/generate-breakfasts';
import { generateCocktails } from './models/products/generate-cocktails';
import { generateCoffee } from './models/products/generate-coffee';
import { generateDesserts } from './models/products/generate-desserts';
import { generatePizzas } from './models/products/generate-pizzas';
import { generateSnacks } from './models/products/generate-snacks';
import { USERS } from './models/users';
import { prisma } from './prisma-client';

async function up() {
  await prisma.user.createMany({ data: USERS });
  await prisma.category.createMany({ data: CATEGORIES });
  await prisma.ingredient.createMany({ data: INGREDIENTS });
  await generatePizzas();
  await generateSnacks();
  await generateCocktails();
  await generateCoffee();
  await generateDesserts();
  await generateBreakfasts();
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_variants" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (err) {
    console.error(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async err => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
