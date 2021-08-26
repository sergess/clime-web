import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import MostlyCloudy from 'public/icons/mostly-cloudy.svg';

export const MostlyCloudyIcon = (props: IconProps): ReactElement => (
  <Icon as={MostlyCloudy} {...props} />
);

export default MostlyCloudyIcon;
