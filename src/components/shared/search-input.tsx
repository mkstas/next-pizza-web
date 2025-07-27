'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(searchQuery).then(items => {
        setProducts(items);
      });
    },
    300,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  return (
    <>
      {focused && <div className="fixed inset-0 z-30 bg-black/50" />}

      <div ref={ref} className={cn('relative z-30 flex h-11 w-full justify-between rounded-md', className)}>
        <Search className="absolute top-1/2 left-3 h-5 translate-y-[-50%] text-gray-400" />
        <input
          className="w-full rounded-md bg-gray-100 pl-11 outline-none"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {!!products.length && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full overflow-hidden rounded-md bg-white py-2 opacity-0 shadow-md transition-all duration-200',
              focused && 'visible top-12 opacity-100',
            )}
          >
            {products.map(product => (
              <Link
                key={product.id}
                className="hover:bg-primary/10 flex w-full items-center gap-3 px-3 py-2"
                href={`/product/${product.id}`}
                onClick={onClickItem}
              >
                <img className="h-8 w-8 rounded-sm" src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
