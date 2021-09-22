import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import MostlyCloudy from 'public/icons/mostly-cloudy.svg';

import { omitUnusedIconProps } from '../utils';

export const MostlyCloudyIcon = (props: IconProps): ReactElement => (
  <Icon as={MostlyCloudy} {...omitUnusedIconProps(props)} />
);

export default MostlyCloudyIcon;
