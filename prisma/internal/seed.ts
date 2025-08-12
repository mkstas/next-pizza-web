import { CATEGORIES, USER } from './constants';
import { prisma } from './prisma-client';

async function up() {
  await prisma.user.create({
    data: USER,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
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
