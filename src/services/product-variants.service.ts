export const productVariantsService = {
  findVariantTypes: async (): Promise<string[]> => {
    const res = await fetch('/api/v1/products/variants/types');

    return await res.json();
  },

  findVariantSizes: async (): Promise<string[]> => {
    const res = await fetch('/api/v1/products/variants/sizes');

    return await res.json();
  },
};
