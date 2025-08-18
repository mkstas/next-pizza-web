import { FC, memo } from 'react';
import { ProductFilterItem } from '@/types/products.types';
import { Checkbox } from '@/components/interface';
import { FilterGroupItemsSkeleton } from './FilterGroupItemsSkeleton';

interface Props {
  title: string;
  name: string;
  items: ProductFilterItem[];
  selectedItems: string[];
  isLoading: boolean;
  onChange: (value: string) => void;
}

const GroupItems: FC<Props> = ({ isLoading, title, name, items, selectedItems, onChange }) => {
  if (isLoading) {
    return <FilterGroupItemsSkeleton />;
  }

  if (items?.length) {
    return (
      <div className='space-y-2'>
        <h4 className='text-xl font-semibold'>{title}</h4>
        <div className='scrollbar max-h-96 space-y-1 overflow-y-auto'>
          {items.map(item => (
            <Checkbox
              onChange={() => onChange(item.value)}
              key={item.value}
              id={item.alias}
              name={name}
              label={item.label}
              value={item.value}
              checked={!!selectedItems.find(selectedItem => selectedItem === item.value)}
            />
          ))}
        </div>
      </div>
    );
  }
};

export const FilterGroupItems = memo(GroupItems);
