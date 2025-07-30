import { Variant } from '@/components/shared/group-variants';
import { PizzaType, pizzaSizes } from '@/constants/pizza';
import { ProductVariant } from '@prisma/client';

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductVariant[]): Variant[] => {
  const filteredPizzasByType = items.filter(item => item.type === type);

  return pizzaSizes.map(item => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(pizza => Number(pizza.size) === Number(item.value)),
  }));
};
