'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedIds: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selectedIds,
  defaultValue,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItems || items).slice(0, limit);

  if (loading) {
    return (
      <div className={className}>
        <p className="mb-3 font-bold">{title}</p>

        {Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="mb-4 h-6 rounded-md" />
          ))}

        <Skeleton className="mb-4 h-6 w-28 rounded-md" />
      </div>
    );
  }

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={cn(className)}>
      <p className="mb-3 font-bold">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            name={name}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={!showAll ? 'mt-4 border-t border-t-neutral-100' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3 cursor-pointer">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
