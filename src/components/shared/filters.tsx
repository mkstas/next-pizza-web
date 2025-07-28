'use client';

import { cn } from '@/lib/utils';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFilterGroup } from './checkbox-filters-group';
import React from 'react';
import { useIngredients } from '@/hooks/use-ingredients';
import { useFilters } from '@/hooks/use-filters';
import { useQueryFilters } from '@/hooks/use-query-filters';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }));

  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selectedIds={filters.types}
        items={[
          { text: 'Тонкое', value: '1', name: 'qwe' },
          { text: 'Традиционное', value: '2', name: 'qwe' },
        ]}
      />

      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selectedIds={filters.sizes}
        items={[
          { text: '20 см', value: '20', name: 'qwe' },
          { text: '30 см', value: '30', name: 'qwe' },
          { text: '40 см', value: '40', name: 'qwe' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(filters.price.priceFrom)}
            onChange={e => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.price.priceTo)}
            onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => {
            filters.setPrices('priceFrom', priceFrom);
            filters.setPrices('priceTo', priceTo);
          }}
        />
      </div>

      <CheckboxFilterGroup
        className="mt-5"
        title="Ингредиенты"
        limit={6}
        name="ingredients"
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedIds={filters.selectedIngredients}
      />
    </div>
  );
};
