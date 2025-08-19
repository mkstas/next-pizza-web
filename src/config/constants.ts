export const ROUTES = {
  MARKET: '/',
  PRODUCT: '/product',
  LOGIN: '/login',
  ACCOUNT: '/account',
};

export const API_PREFIX = '/api/v1';

export const API_ROUTES = {
  CATEGORIES: `${API_PREFIX}/categories`,
  PRODUCTS: `${API_PREFIX}/products`,
  FILTER_PIZZA_SIZES: `${API_PREFIX}/products/filters/pizza-sizes`,
  FILTER_PIZZA_TYPES: `${API_PREFIX}/products/filters/pizza-types`,
  FILTER_INGREDIENTS: `${API_PREFIX}/products/filters/ingredients`,
};
