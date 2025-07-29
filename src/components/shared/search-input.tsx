'use client';

import React from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { search } from '@/services/products.service';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [products, setProducts] = React.useState<Product[]>([]);
  const searchInputRef = React.useRef(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onFocusInput = () => {
    setIsFocused(true);
    search(searchQuery).then(products => {
      setProducts(products);
    });
  };

  useClickAway(searchInputRef, () => {
    setIsFocused(false);
  });

  useDebounce(
    () => {
      search(searchQuery).then(products => {
        setProducts(products);
      });
    },
    300,
    [searchQuery],
  );

  const onClickProduct = () => {
    setIsFocused(false);
  };

  return (
    <div ref={searchInputRef} className={cn('relative z-30 flex h-10 justify-between rounded-md', className)}>
      <Search size={20} className="text-secondary-foreground absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        className="bg-secondary text-secondary-foreground w-full rounded-md pl-11"
        type="text"
        name="search_input"
        placeholder="Найти пиццу..."
        value={searchQuery}
        onChange={onChangeInput}
        onFocus={onFocusInput}
      />
      {!!products.length && (
        <div
          className={cn(
            'invisible absolute z-30 w-full overflow-hidden rounded-md bg-white py-2 opacity-0 shadow-md transition-all duration-200',
            !isFocused && 'top-14',
            isFocused && 'visible top-12 opacity-100',
          )}
        >
          {products.map(product => (
            <Link
              key={product.id}
              className="hover:bg-secondary flex w-full items-center gap-3 px-3 py-2"
              href={`/product/${product.id}`}
              onClick={onClickProduct}
            >
              <Image width={32} height={32} className="size-8 rounded-sm" src={product.imageUrl} alt={product.name} />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
