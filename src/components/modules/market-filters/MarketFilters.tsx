'use client';

import { FC, useMemo } from 'react';
import { Checkbox } from '@/components/interface';
import { useIngredients } from './useIngredients';

export const MarketFilters: FC = () => {
  const { ingredients, isShowAll, setIsShowAll } = useIngredients();

  const showedIngredients = useMemo(
    () => (isShowAll && ingredients?.length ? ingredients : ingredients?.slice(0, 6)),
    [isShowAll, ingredients],
  );

  return (
    <div>
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
            {showedIngredients?.map((ingredient, index) => (
              <Checkbox key={index} id={`ingredient_${index}`} name={`ingredient_${index}`} label={ingredient.title} />
            ))}
          </div>
          {isShowAll ? (
            <button
              onClick={() => setIsShowAll(false)}
              className='flex w-full cursor-pointer text-orange-500 transition-colors hover:text-orange-600'
            >
              Скрыть -
            </button>
          ) : (
            <button
              onClick={() => setIsShowAll(true)}
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
