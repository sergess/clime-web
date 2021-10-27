import pipe from 'ramda/src/pipe';

import { getY } from '../get-y.util';
import { filterNotNil } from '../filter-not-nil.util';

const getMax = (values: number[]) => Math.max(...values);

export const getMaxY = pipe(getY, filterNotNil, getMax);

export default getMaxY;
