import { matchSorter } from 'match-sorter';

export const AUTH_TYPES = {
  signUp: 'signUp',
  signIn: 'signIn',
  forgotPassword: 'forgotPassword',
  recoveryPassword: 'recoveryPassword',
  resetPassword: 'resetPassword',
} as const;

export type AuthType = typeof AUTH_TYPES[keyof typeof AUTH_TYPES];

export const getFilterOptions = (options, { inputValue }) => {
  return inputValue ? matchSorter(options, inputValue, { keys: ['name'] }) : options;
};
