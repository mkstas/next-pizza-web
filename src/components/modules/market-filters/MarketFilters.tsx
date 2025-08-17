'use client';

import { FC, useMemo } from 'react';
import { Checkbox } from '@/components/interface';
import { useFilterPoints } from './useFilterPoints';

export const MarketFilters: FC = () => {
  const { pizzaTypes, pizzaSizes, ingredients, isShowAll, setIsShowAll } = useFilterPoints();

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
            {pizzaTypes?.map((item, index) => (
              <Checkbox key={index} id={item} name={item} label={item} />
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <h4 className='text-xl font-semibold'>Размер пиццы</h4>
          <div className='space-y-1'>
            {pizzaSizes?.map((item, index) => (
              <Checkbox key={index} id={item} name={item} label={item} />
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <h4 className='text-xl font-semibold'>Ингредиенты</h4>
          <div className='scrollbar max-h-96 space-y-1 overflow-y-auto'>
            {showedIngredients?.map(ingredient => (
              <Checkbox key={ingredient.id} id={ingredient.id} name={ingredient.title} label={ingredient.title} />
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
