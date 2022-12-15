export const get = (key: string) => {
  return localStorage.getItem(key);
};

export const set = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
