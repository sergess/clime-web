import isNil from 'ramda/src/isNil';

import { ChartPoint } from 'client/design-system/organisms/summary-card.organism/types';

export const isYDefined = ({ y }: ChartPoint): boolean => !isNil(y);

export default isYDefined;
