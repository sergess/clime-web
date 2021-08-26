import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HazeNight from 'public/icons/haze-night.svg';

export const HazeNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HazeNight} {...props} />
);

export default HazeNightIcon;
