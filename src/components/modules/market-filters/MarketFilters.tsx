'use client';

import { useState, type FC } from 'react';
import { Checkbox } from '@/components/interface';

export const INGREDIENTS = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
];

export const MarketFilters: FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  let ingredients = INGREDIENTS.slice(0, 6);

  if (showAll) {
    ingredients = INGREDIENTS;
  }

  return (
    <div className='p-4'>
      <h3 className='text-2xl font-bold'>Фильтрация</h3>
      <div className='mt-4 space-y-4'>
        <div className='space-y-2'>
          <h4 className='text-xl font-semibold'>Тип теста</h4>
          <div className='space-y-1'>
            <Checkbox id='pizza_type_1' name='pizza_type_1' label='Традиционное' />
            <Checkbox id='pizza_type_2' name='pizza_type_2' label='Тонкое' />
          </div>
        </div>
        <div className='space-y-2'>
          <h4 className='text-xl font-semibold'>Размер пиццы</h4>
          <div className='space-y-1'>
            <Checkbox id='pizza_size_1' name='pizza_size_1' label='20 см' />
            <Checkbox id='pizza_size_2' name='pizza_size_2' label='30 см' />
            <Checkbox id='pizza_size_3' name='pizza_size_3' label='40 см' />
          </div>
        </div>
        <div className='space-y-2'>
          <h4 className='text-xl font-semibold'>Ингредиенты</h4>
          <div className='scrollbar max-h-96 space-y-1 overflow-y-auto'>
            {ingredients.map((ingredient, index) => (
              <Checkbox key={index} id={`ingredient_${index}`} name={`ingredient_${index}`} label={ingredient.name} />
            ))}
          </div>
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className='flex w-full cursor-pointer text-orange-500 transition-colors hover:text-orange-600'
            >
              Скрыть -
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className='flex w-full cursor-pointer text-orange-500 transition-colors hover:text-orange-600'
            >
              Показать все +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
