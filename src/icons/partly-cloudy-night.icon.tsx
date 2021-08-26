import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PartlyCloudyNight from 'public/icons/partly-cloudy-night.svg';

export const PartlyCloudyNightIcon = (props: IconProps): ReactElement => (
  <Icon as={PartlyCloudyNight} {...props} />
);

export default PartlyCloudyNightIcon;
