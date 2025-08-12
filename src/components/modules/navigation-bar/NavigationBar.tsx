'use client';

import { FC } from 'react';
import { Container } from '@/components/interface';
import { CategoriesList } from '@/components/elements/categories';
import { useCategories } from './useCategories';
import { CartButton } from '@/components/elements/cart';

export const NavigationBar: FC = () => {
  const { categories, isLoading } = useCategories();

  return (
    <nav className='sticky top-0 left-0 z-10 bg-white py-4 dark:bg-neutral-800'>
      <Container className='flex gap-2'>
        <CategoriesList categories={categories} isLoading={isLoading} />
        <div className='ml-auto'>
          <CartButton />
        </div>
      </Container>
    </nav>
  );
};
