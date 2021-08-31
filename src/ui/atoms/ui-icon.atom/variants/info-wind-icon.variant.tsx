import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoWind from 'public/icons/info-wind.svg';

export const InfoWindIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoWind} {...props} />
);

export default InfoWindIcon;
