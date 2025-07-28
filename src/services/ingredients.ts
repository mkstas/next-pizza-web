import { Ingredient } from '@prisma/client';
import { instance } from './instance';
import { ApiRoutes } from './constants';

export const findAll = async () => {
  return (await instance.get<Ingredient[]>(ApiRoutes.INGREDIRNTS)).data;
};
