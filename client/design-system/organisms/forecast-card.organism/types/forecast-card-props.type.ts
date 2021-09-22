import { ReactElement } from 'react';

import { RenderItemProps } from './render-item-props.type';

export type ForecastCardProps<T> = {
  data: T[];
  heading: string;
  ctaButton: ReactElement | null;
  renderItem: (items: RenderItemProps<T>) => ReactElement;
};

export default ForecastCardProps;
