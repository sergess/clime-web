import { CSSProperties } from 'react';

import { ValueConfig } from './value-config.type';

export type DetailedForecastChartProps<T> = {
  data: T[];
  yDomain: [number, number];
  styles?: CSSProperties;
  xValueConfig: ValueConfig;
  yValueConfigs: ValueConfig[];
  isItemSelected: (index: number) => boolean;
  isValueDefined?: (value: unknown) => boolean;
};

export default DetailedForecastChartProps;
