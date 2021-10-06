import { ReactElement, ReactNode } from 'react';

import { RenderItemArguments } from './render-item-arguments.type';

export type ForecastCarouselCardProps<T> = {
  data: T[];
  heading: ReactNode;
  renderItem: (item: RenderItemArguments<T>) => ReactElement;
};

export default ForecastCarouselCardProps;
