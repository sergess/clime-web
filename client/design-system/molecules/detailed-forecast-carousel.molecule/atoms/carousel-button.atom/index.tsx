import { ReactElement } from 'react';
import { ComponentDefaultProps, IconButton } from '@chakra-ui/react';

import { CarouselButtonProps } from './types';

export const CarouselButton = ({
  icon,
  direction,
  ...componentStyles
}: CarouselButtonProps & ComponentDefaultProps): ReactElement => (
  <IconButton
    className={
      direction === 'Left' ? 'swiper-prev-control' : 'swiper-next-control'
    }
    variant="carousel-control"
    aria-label={direction}
    icon={icon}
    {...componentStyles}
  />
);

export default CarouselButton;
