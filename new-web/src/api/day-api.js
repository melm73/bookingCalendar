import { get } from './http';

export const getDays = (month, year) => {
  let path = `year/${year}/month/${month}/days`;
  return get(path);
}
