import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductFilterParams } from '@/types/products.types';

export const useFilterParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedPizzaSizes, setSelectedPizzaSizes] = useState<string[]>(
    searchParams.get('pizzasSizes')?.split(',') || [],
  );

  const [selectedPizzaTypes, setSelectedPizzaTypes] = useState<string[]>(
    searchParams.get('pizzaTypes')?.split(',') || [],
  );

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    searchParams.get('ingredients')?.split(',') || [],
  );

  const onChangePizzaSize = useCallback(
    (value: string) => {
      if (selectedPizzaSizes?.find(item => item === value)) {
        setSelectedPizzaSizes(prev => prev?.filter(type => type !== value));
      } else {
        setSelectedPizzaSizes(prev => [...prev, value]);
      }
    },
    [selectedPizzaSizes],
  );

  const onChangePizzaType = useCallback(
    (value: string) => {
      if (selectedPizzaTypes?.find(item => item === value)) {
        setSelectedPizzaTypes(prev => prev?.filter(type => type !== value));
      } else {
        setSelectedPizzaTypes(prev => [...prev, value]);
      }
    },
    [selectedPizzaTypes],
  );

  const onChangeIngredient = useCallback(
    (value: string) => {
      if (selectedIngredients?.find(item => item === value)) {
        setSelectedIngredients(prev => prev?.filter(type => type !== value));
      } else {
        setSelectedIngredients(prev => [...prev, value]);
      }
    },
    [selectedIngredients],
  );

  const getParamsString = (params: ProductFilterParams) => {
    return Object.entries(params)
      .map(([key, values]) => {
        if (values.length) {
          return `${encodeURIComponent(key)}=${encodeURIComponent(values.map(value => value).join(','))}`;
        }
      })
      .filter(item => item !== undefined)
      .join('&');
  };

  useEffect(() => {
    const params: ProductFilterParams = {
      pizzasSizes: selectedPizzaSizes,
      pizzaTypes: selectedPizzaTypes,
      ingredients: selectedIngredients,
    };

    router.push(`?${getParamsString(params)}`, {
      scroll: false,
    });
  }, [selectedPizzaSizes, selectedPizzaTypes, selectedIngredients]);

  return {
    selectedPizzaSizes,
    selectedPizzaTypes,
    selectedIngredients,
    onChangePizzaType,
    onChangePizzaSize,
    onChangeIngredient,
  };
};
