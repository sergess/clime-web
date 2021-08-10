import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoPrecipitation from '../../public/icons/info-precipitation.svg';

export const InfoPrecipitationIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoPrecipitation} {...props} />
);

export default InfoPrecipitationIcon;
