import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoHumidity from '../../public/icons/info-humidity.svg';

export const InfoHumidityIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoHumidity} {...props} />
);

export default InfoHumidityIcon;
