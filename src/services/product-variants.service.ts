export const productVariantsService = {
  findPizzaTypes: async (): Promise<string[]> => {
    const res = await fetch('/api/v1/products/variants/pizza-types');

    return await res.json();
  },

  findVariantSizes: async (): Promise<string[]> => {
    const res = await fetch('/api/v1/products/variants/pizza-sizes');

    return await res.json();
  },
};
