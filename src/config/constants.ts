export const ROUTES = {
  MARKET: '/',
  PRODUCT: '/product',
  CHECKOUT: '/checkout',
  ACCOUNT: '/account',
  LOGIN: '/login',
};

export const API_PREFIX = 'http://localhost:3000/api/v1';

export const API_ROUTES = {
  CATEGORIES: `${API_PREFIX}/categories`,
  PRODUCTS: `${API_PREFIX}/products`,
  SINGLE_PRODUCT: (id: string) => `${API_PREFIX}/products/${id}`,
  INGREDIENTS: `${API_PREFIX}/ingredients`,
  PIZZA_SIZES: `${API_PREFIX}/product-variants/pizza-sizes`,
  PIZZA_TYPES: `${API_PREFIX}/product-variants/pizza-types`,
};
