export const ingredientsService = {
  findAll: async () => {
    const res = await fetch('/api/v1/ingredients');

    return await res.json();
  },
};
