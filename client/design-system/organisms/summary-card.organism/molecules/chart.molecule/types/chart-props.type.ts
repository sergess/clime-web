import { ElementType } from 'react';

import { CHART_THEME } from 'client/design-system/organisms/summary-card.organism/constants';
import {
  ChartPoint,
  PointProps,
} from 'client/design-system/organisms/summary-card.organism/types';

type ChartThemeKeys = keyof typeof CHART_THEME;

export type ChartProps = {
  theme: typeof CHART_THEME[ChartThemeKeys];
  points: ChartPoint[];
  Point: ElementType<PointProps>;
};

export default ChartProps;
