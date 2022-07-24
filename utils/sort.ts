import { Breed } from '../models';

export const sort = (array: Breed[], order: string) => {
  if (order === 'asc') {
    return [...array].sort((a, b) => a.id.localeCompare(b.id));
  } else if (order === 'desc') {
    return [...array].sort((a, b) => b.id.localeCompare(a.id));
  } else {
    return [...array]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
};
