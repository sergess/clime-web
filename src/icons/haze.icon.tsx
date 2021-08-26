import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Haze from 'public/icons/haze.svg';

export const HazeIcon = (props: IconProps): ReactElement => (
  <Icon as={Haze} {...props} />
);

export default HazeIcon;
