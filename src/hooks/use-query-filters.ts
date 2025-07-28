import { useRouter } from 'next/navigation';
import { Filters } from './use-filters';
import qs from 'qs';
import React from 'react';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.price,
      types: Array.from(filters.types),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters, router]);
};
