import pipe from 'ramda/src/pipe';

import { getY } from '../get-y.util';
import { filterNotNil } from '../filter-not-nil.util';

const getMin = (values: number[]) => Math.min(...values);

export const getMinY = pipe(getY, filterNotNil, getMin);

export default getMinY;
