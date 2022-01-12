import { isNotNil } from 'common/utils';

export const filterNotNil = (values: (number | null)[]): number[] =>
  values.filter(isNotNil) as number[];

export default filterNotNil;
