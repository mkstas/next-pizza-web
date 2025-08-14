import type { Category, Ingredient, User } from '@prisma/client';

export const USER: Pick<User, 'phoneNumber'> = {
  phoneNumber: '79000000000',
};

export const CATEGORIES: Pick<Category, 'title'>[] = [
  {
    title: 'Пиццы',
  },
  {
    title: 'Закуски',
  },
  {
    title: 'Коктейли',
  },
  {
    title: 'Кофе',
  },
  {
    title: 'Десерты',
  },
  {
    title: 'Завтрак',
  },
];

export const INGREDIENTS: Pick<Ingredient, 'title' | 'imageUrl' | 'price'>[] = [
  {
    title: 'Сырный бортик',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    price: 179,
  },
  {
    title: 'Пряная говядина',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
    price: 119,
  },
  {
    title: 'Моцарелла',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    price: 79,
  },
  {
    title: 'Сыры чеддер и пармезан',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    price: 79,
  },
  {
    title: 'Сыр блю чиз',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6A277BB50',
    price: 149,
  },
  {
    title: 'Острый перец халапенью',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    price: 59,
  },
  {
    title: 'Нежный цыпленок',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    price: 79,
  },
  {
    title: 'Шампиньоны',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    price: 59,
  },
  {
    title: 'Бекон',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    price: 79,
  },
  {
    title: 'Ветчина',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    price: 79,
  },
  {
    title: 'Пикантная пепперони',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    price: 79,
  },
  {
    title: 'Острая чоризо',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    price: 79,
  },
  {
    title: 'Маринованные огурчики',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    price: 59,
  },
  {
    title: 'Свежие томаты',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    price: 59,
  },
  {
    title: 'Красный лук',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    price: 59,
  },
  {
    title: 'Сочные ананасы',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    price: 59,
  },
  {
    title: 'Итальянские травы',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    price: 39,
  },
  {
    title: 'Сладкий перец',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    price: 59,
  },
  {
    title: 'Кубики брынзы',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    price: 79,
  },
  {
    title: 'Митболы',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    price: 79,
  },
  {
    title: 'Баварские колбаски',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee9d3660793feda24a236677d3013e.png',
    price: 129,
  },
  {
    title: 'Креветки',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11eee5d51d4c576da0f0db611c8947bd.png',
    price: 199,
  },
];
