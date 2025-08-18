import type { Category, Ingredient, User } from '@prisma/client';
import { slugify } from '../../src/shared/utils/slugify';

export const USER: Pick<User, 'phoneNumber'> = {
  phoneNumber: '79000000000',
};

export const CATEGORIES: Pick<Category, 'title' | 'alias'>[] = [
  {
    title: 'Пиццы',
    alias: slugify('Пиццы'),
  },
  {
    title: 'Закуски',
    alias: slugify('Закуски'),
  },
  {
    title: 'Коктейли',
    alias: slugify('Коктейли'),
  },
  {
    title: 'Кофе',
    alias: slugify('Кофе'),
  },
  {
    title: 'Десерты',
    alias: slugify('Десерты'),
  },
  {
    title: 'Завтрак',
    alias: slugify('Завтрак'),
  },
];

export const INGREDIENTS: Pick<Ingredient, 'title' | 'alias' | 'imageUrl' | 'price'>[] = [
  {
    title: 'Сырный бортик',
    alias: slugify('Сырный бортик'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    price: 179,
  },
  {
    title: 'Пряная говядина',
    alias: slugify('Пряная говядина'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
    price: 119,
  },
  {
    title: 'Моцарелла',
    alias: slugify('Моцарелла'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    price: 79,
  },
  {
    title: 'Сыры чеддер и пармезан',
    alias: slugify('Сыры чеддер и пармезан'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    price: 79,
  },
  {
    title: 'Сыр блю чиз',
    alias: slugify('Сыр блю чиз'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6A277BB50',
    price: 149,
  },
  {
    title: 'Острый перец халапенью',
    alias: slugify('Острый перец халапенью'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    price: 59,
  },
  {
    title: 'Нежный цыпленок',
    alias: slugify('Нежный цыпленок'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    price: 79,
  },
  {
    title: 'Шампиньоны',
    alias: slugify('Шампиньоны'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    price: 59,
  },
  {
    title: 'Бекон',
    alias: slugify('Бекон'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    price: 79,
  },
  {
    title: 'Ветчина',
    alias: slugify('Ветчина'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    price: 79,
  },
  {
    title: 'Пикантная пепперони',
    alias: slugify('Пикантная пепперони'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    price: 79,
  },
  {
    title: 'Острая чоризо',
    alias: slugify('Острая чоризо'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    price: 79,
  },
  {
    title: 'Маринованные огурчики',
    alias: slugify('Маринованные огурчики'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    price: 59,
  },
  {
    title: 'Свежие томаты',
    alias: slugify('Свежие томаты'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    price: 59,
  },
  {
    title: 'Красный лук',
    alias: slugify('Красный лук'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    price: 59,
  },
  {
    title: 'Сочные ананасы',
    alias: slugify('Сочные ананасы'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    price: 59,
  },
  {
    title: 'Итальянские травы',
    alias: slugify('Итальянские травы'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    price: 39,
  },
  {
    title: 'Сладкий перец',
    alias: slugify('Сладкий перец'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    price: 59,
  },
  {
    title: 'Кубики брынзы',
    alias: slugify('Кубики брынзы'),
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    price: 79,
  },
  {
    title: 'Митболы',
    alias: slugify('Митболы'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    price: 79,
  },
  {
    title: 'Баварские колбаски',
    alias: slugify('Баварские колбаски'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee9d3660793feda24a236677d3013e.png',
    price: 129,
  },
  {
    title: 'Креветки',
    alias: slugify('Креветки'),
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11eee5d51d4c576da0f0db611c8947bd.png',
    price: 199,
  },
];
