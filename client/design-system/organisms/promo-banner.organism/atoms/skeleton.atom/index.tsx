import React, { ReactElement } from 'react';
import {
  ComponentDefaultProps,
  Skeleton as ChakraSkeleton,
} from '@chakra-ui/react';

import {
  DEFAULT_BANNER_BORDER_RADIUS,
  DEFAULT_BANNER_HEIGHT,
} from '../../constants';

export const Skeleton = (props: ComponentDefaultProps): ReactElement => (
  <ChakraSkeleton
    borderRadius={DEFAULT_BANNER_BORDER_RADIUS}
    h={DEFAULT_BANNER_HEIGHT}
    w="full"
    {...props}
  />
);

export default Skeleton;
