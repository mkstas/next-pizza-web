import { slugify } from '../../src/shared/utils/slugify';
import { CATEGORIES, INGREDIENTS, USER } from './constants';
import { prisma } from './prisma-client';

async function generateProductVariant(variant: any) {
  await prisma.productVariant.create({
    data: variant,
  });
}

async function generatePizzasVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Карбонара' },
  });
  // const product2 = await prisma.product.findFirst({
  //   where: { title: 'Гавайская' },
  // });
  // const product3 = await prisma.product.findFirst({
  //   where: { title: 'Четыре сыра' },
  // });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0196361c3c34728dbed2f01a37f04284.jpg',
    price: 479,
    weight: 220,
    pizzaSize: 20,
    pizzaType: 'Традиционное',
    pizzaTypeAlias: slugify('Традиционное'),
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b1343c746bb4c108bede4d469c.jpg',
    price: 659,
    weight: 410,
    pizzaSize: 25,
    pizzaType: 'Традиционное',
    pizzaTypeAlias: slugify('Традиционное'),
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.jpg',
    price: 1009,
    weight: 590,
    pizzaSize: 30,
    pizzaType: 'Традиционное',
    pizzaTypeAlias: slugify('Традиционное'),
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b14a2e7663a8daf17169cfd23f.jpg',
    price: 1119,
    weight: 800,
    pizzaSize: 35,
    pizzaType: 'Традиционное',
    pizzaTypeAlias: slugify('Традиционное'),
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b141c877ac8054d155c9cb6b19.jpg',
    price: 1009,
    weight: 520,
    pizzaSize: 30,
    pizzaType: 'Тонкое',
    pizzaTypeAlias: slugify('Тонкое'),
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b1518e735c8da6eeef256663e1.jpg',
    price: 1119,
    weight: 710,
    pizzaSize: 35,
    pizzaType: 'Тонкое',
    pizzaTypeAlias: slugify('Тонкое'),
  });
}

async function generatePizzaIngredients() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Карбонара' },
  });

  const ingredients = await prisma.ingredient.findMany();

  ingredients.slice(0, 5).forEach(async ingredient => {
    await prisma.productIngredient.create({
      data: {
        productId: product1!.id,
        ingredientId: ingredient.id,
        required: true,
      },
    });
  });

  ingredients.slice(5, ingredients.length).forEach(async ingredient => {
    await prisma.productIngredient.create({
      data: {
        productId: product1!.id,
        ingredientId: ingredient.id,
      },
    });
  });
}

async function generatePizzas() {
  const category = await prisma.category.findFirst({
    where: { title: 'Пиццы' },
  });

  await prisma.product.createMany({
    data: [
      {
        categoryId: category!.id,
        title: 'Карбонара',
        alias: slugify('Карбонара'),
      },
      // {
      //   categoryId: category!.id,
      //   title: 'Гавайская',
      // },
      // {
      //   categoryId: category!.id,
      //   title: 'Четыре сыра',
      // },
    ],
  });
}

async function generateSnacks() {
  const category = await prisma.category.findFirst({
    where: { title: 'Закуски' },
  });

  await prisma.product.createMany({
    data: {
      categoryId: category!.id,
      title: 'Додстер',
      alias: slugify('Додстер'),
      description:
        'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
    },
  });
}

async function generateSnackVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Додстер' },
  });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/01980cb92528769295aeb186fb501f8e.jpg',
    price: 249,
    weight: 190,
  });
}

async function generateCocktails() {
  const category = await prisma.category.findFirst({
    where: { title: 'Коктейли' },
  });

  await prisma.product.createMany({
    data: {
      categoryId: category!.id,
      title: 'Молочный коктейль Фисташка',
      alias: slugify('Молочный коктейль Фисташка'),
      description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
    },
  });
}

async function generateCocktailVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Молочный коктейль Фисташка' },
  });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198227c9627795b991b79142c0e3ba0.jpg',
    price: 269,
    weight: 320,
    volume: 300,
  });
  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019808099d0271c3999692798b376dc3.jpg',
    price: 439,
    weight: 500,
    volume: 400,
  });
}

async function generateCoffee() {
  const category = await prisma.category.findFirst({
    where: { title: 'Кофе' },
  });

  await prisma.product.createMany({
    data: {
      categoryId: category!.id,
      title: 'Кофе Капучино',
      alias: slugify('Кофе Капучино'),
      description: 'Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка',
    },
  });
}

async function generateCoffeeVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Кофе Капучино' },
  });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019840b6488170018dd640026aea9961.jpg',
    price: 179,
    weight: 240,
    volume: 400,
  });
}

async function generateDesserts() {
  const category = await prisma.category.findFirst({
    where: { title: 'Десерты' },
  });

  await prisma.product.createMany({
    data: {
      categoryId: category!.id,
      title: 'Чизкейк Банановый с шоколадным печеньем',
      alias: slugify('Чизкейк Банановый с шоколадным печеньем'),
      description: 'Солнечная версия классического рецепта: нежный чизкейк с бананом и шоколадным печеньем',
    },
  });
}

async function generateDessertVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Чизкейк Банановый с шоколадным печеньем' },
  });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198138723e478fba518947539dbbdcb.jpg',
    price: 189,
    weight: 100,
  });
}

async function generateBreakfast() {
  const category = await prisma.category.findFirst({
    where: { title: 'Завтрак' },
  });

  await prisma.product.createMany({
    data: {
      categoryId: category!.id,
      title: 'Омлет с ветчиной и грибами в пите',
      alias: slugify('Омлет с ветчиной и грибами в пите'),
      description:
        'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой',
    },
  });
}

async function generateBreakfastVariants() {
  const product1 = await prisma.product.findFirst({
    where: { title: 'Омлет с ветчиной и грибами в пите' },
  });

  await generateProductVariant({
    productId: product1!.id,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019860510daa726fa023e04a1ae06a87.jpg',
    price: 239,
    weight: 170,
  });
}

async function up() {
  await prisma.user.create({
    data: USER,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  await prisma.ingredient.createMany({
    data: INGREDIENTS,
  });

  await generatePizzas();
  await generatePizzasVariants();
  await generatePizzaIngredients();

  await generateSnacks();
  await generateSnackVariants();

  await generateCocktails();
  await generateCocktailVariants();

  await generateCoffee();
  await generateCoffeeVariants();

  await generateDesserts();
  await generateDessertVariants();

  await generateBreakfast();
  await generateBreakfastVariants();
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_variants" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_ingredients" RESTART IDENTITY CASCADE`;
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
