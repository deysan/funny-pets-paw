import { Breed } from '../models';

export const paginate = (array: Breed[], page: number, limit: number) => {
  const startIndex = page * limit;

  return [...array].splice(startIndex, limit);
};
