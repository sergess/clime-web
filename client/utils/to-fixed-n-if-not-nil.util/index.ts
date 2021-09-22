import ifElse from 'ramda/src/ifElse';
import isNil from 'ramda/src/isNil';

import { defaultToDash } from '../default-to-dash.util';

export const toFixedNIfNotNil: (
  n: number
) => <T>(value: T) => NonNullable<T> | string = (n: number) =>
  ifElse(isNil, defaultToDash, (value) => Number(value.toFixed(n)));

export default toFixedNIfNotNil;
