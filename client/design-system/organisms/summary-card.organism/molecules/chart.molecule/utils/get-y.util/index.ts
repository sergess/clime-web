import prop from 'ramda/src/prop';
import map from 'ramda/src/map';

import { ChartPoint } from 'client/design-system/organisms/summary-card.organism/types';

export const getY = map<ChartPoint, number | null>(prop('y'));

export default getY;
