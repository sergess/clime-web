import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoPressure from '../../public/icons/info-pressure.svg';

export const InfoPressureIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoPressure} {...props} />
);

export default InfoPressureIcon;
