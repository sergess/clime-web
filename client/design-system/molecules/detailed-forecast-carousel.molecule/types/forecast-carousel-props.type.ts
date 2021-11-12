import { ReactElement } from 'react';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { RenderItemArguments } from './render-item-arguments.type';

export type ForecastCarouselProps<T> = {
  data: T[];
  slidesPerView: number;
  onActiveIndexChange: (index: number) => void;
  renderItem: (item: RenderItemArguments<T>) => ReactElement;
  componentStyles: ComponentDefaultProps;
};

export default ForecastCarouselProps;
