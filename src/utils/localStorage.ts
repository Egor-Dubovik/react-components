import { IStorage } from 'types/localStorage';

export const storage: IStorage = {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  get: (key) => {
    return localStorage.getItem(key) as string;
  },
};
