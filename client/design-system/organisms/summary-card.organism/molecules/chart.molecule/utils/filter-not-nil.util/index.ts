import complement from 'ramda/src/complement';
import isNil from 'ramda/src/isNil';

const isNotNil = complement(isNil);

export const filterNotNil = (values: (number | null)[]): number[] =>
  values.filter(isNotNil) as number[];

export default filterNotNil;
