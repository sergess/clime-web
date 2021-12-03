import { EN } from 'client/constants';

export const getUserLocale = (): string => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  }

  return navigator.language || EN;
};

export default getUserLocale;
