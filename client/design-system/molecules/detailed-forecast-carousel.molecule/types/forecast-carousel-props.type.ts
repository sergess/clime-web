import { ReactElement } from 'react';

import { RenderItemArguments } from './render-item-arguments.type';

export type ForecastCarouselProps<T> = {
  data: T[];
  slidesPerView: number;
  slidesPerGroup?: number;
  onActiveIndexChange: (index: number) => void;
  renderItem: (item: RenderItemArguments<T>) => ReactElement;
};

export default ForecastCarouselProps;
