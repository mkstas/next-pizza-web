'use client';

import { FC, useCallback, useMemo } from 'react';
import { Button } from '@/components/interface';
import { FilterGroupItems } from '@/components/elements/filters';
import { useFilterItems } from './useFilterItems';
import { useFilterParams } from './useFilterParams';

export const MarketFilters: FC = () => {
  const { pizzaTypes, pizzaSizes, ingredients, isLoading, isExpanded, setIsExpanded } =
    useFilterItems();

  const {
    selectedPizzaTypes,
    selectedPizzaSizes,
    selectedIngredients,
    onChangePizzaType,
    onChangePizzaSize,
    onChangeIngredient,
  } = useFilterParams();

  const expandedIngredients = useMemo(
    () => (isExpanded ? ingredients : ingredients.slice(0, 6)),
    [isExpanded, ingredients],
  );

  const onClickExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className='sticky top-26'>
      <h3 className='text-2xl font-bold'>Фильтрация</h3>
      <div className='mt-4 space-y-4'>
        <FilterGroupItems
          onChange={onChangePizzaType}
          title='Тип теста'
          name='filter_pizza_type'
          items={pizzaTypes}
          selectedItems={selectedPizzaTypes}
          isLoading={isLoading}
        />
        <FilterGroupItems
          onChange={onChangePizzaSize}
          title='Размер пиццы'
          name='filter_pizza_size'
          items={pizzaSizes}
          selectedItems={selectedPizzaSizes}
          isLoading={isLoading}
        />
        <div className='space-y-2'>
          <FilterGroupItems
            onChange={onChangeIngredient}
            title='Ингредиенты'
            name='filter_ingredient'
            items={expandedIngredients}
            selectedItems={selectedIngredients}
            isLoading={isLoading}
          />
          {!isLoading && (
            <Button onClick={onClickExpand} variant='link' geometry='none'>
              {isExpanded ? 'Скрыть -' : 'Показать все +'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
