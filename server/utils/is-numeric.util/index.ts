import { isString } from 'common/utils';

export const isNumeric = (value: string | unknown): boolean => {
  if (!isString(value)) return false;

  return !Number.isNaN(value) && !Number.isNaN(parseFloat(value as string));
};

export default isNumeric;
