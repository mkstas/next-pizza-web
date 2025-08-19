'use client';

import type { FC } from 'react';
import { useCategoryContext } from '@/providers/category.provider';
import { CartButton } from '@/components/elements/cart';
import { CategoriesList } from '@/components/elements/categories';
import { Container } from '@/components/interface';
import { useCategories } from './useCategories';

export const NavigationBar: FC = () => {
  const { categories, isLoading, onClickCategory } = useCategories();
  const { activeCategory } = useCategoryContext();

  return (
    <nav className='sticky top-0 left-0 z-10 bg-white py-4 dark:bg-neutral-800'>
      <Container className='flex gap-2'>
        <CategoriesList
          isLoading={isLoading}
          categories={categories}
          activeCategory={activeCategory!}
          onClick={onClickCategory}
        />
        <div className='ml-auto'>
          <CartButton />
        </div>
      </Container>
    </nav>
  );
};
