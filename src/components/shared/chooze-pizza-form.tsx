import { cn } from '@/lib/utils';
import { Ingredient, ProductVariant } from '@prisma/client';
import { FC } from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui/button';
import { GroupVariants } from './group-variants';
import { PizzaSize, PizzaType, pizzaTypes } from '@/constants/pizza';
import React from 'react';
import { IngredientItem } from './ingredient-item';
import { usePizzaOptions } from '@/hooks/use-pizza-options';
import { getPizzaDetails } from '@/lib/get-pizza-details';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductVariant[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoozePizzaForm: FC<Props> = ({ name, items, imageUrl, loading, ingredients, className, onSubmit }) => {
  const { size, type, selectedIngredients, availableSizes, currentItemId, setSize, setType, addIngredient } =
    usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

  const handleClickAdd = () => {
    onSubmit(currentItemId, Array.from(selectedIngredients));
  };

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className="bg-secondary flex w-[490px] flex-col p-7">
        <Title text={name} size="md" className="mb-2 font-extrabold" />

        <p className="mb-3 text-gray-400">{textDetails}</p>

        <GroupVariants
          className="mb-2"
          items={availableSizes}
          value={String(size)}
          onClick={value => setSize(Number(value) as PizzaSize)}
        />

        <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />

        <div className="my-3 h-[420px] overflow-auto rounded-md bg-gray-50 p-2">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map(ingredient => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="mt-auto h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
