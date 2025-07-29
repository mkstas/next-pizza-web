import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/shared';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Category } from '@prisma/client';

interface Props {
  cats: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className, cats }) => {
  return (
    <div className={cn('sticky top-0 z-20 bg-white py-4 shadow-lg shadow-black/5', className)}>
      <Container className="flex items-center justify-between">
        <Categories cats={cats} />
        <SortPopup />
      </Container>
    </div>
  );
};
