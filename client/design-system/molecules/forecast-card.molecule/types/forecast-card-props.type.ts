import { ReactElement } from 'react';

import { RenderItemProp } from './render-item-prop.type';

export type ForecastCardProps<T> = {
  data: T[];
  heading: string;
  footer?: ReactElement;
  renderItem: (item: RenderItemProp<T>) => ReactElement;
};

export default ForecastCardProps;
