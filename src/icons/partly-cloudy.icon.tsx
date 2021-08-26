import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PartlyCloudy from 'public/icons/partly-cloudy.svg';

export const PartlyCloudyIcon = (props: IconProps): ReactElement => (
  <Icon as={PartlyCloudy} {...props} />
);

export default PartlyCloudyIcon;
