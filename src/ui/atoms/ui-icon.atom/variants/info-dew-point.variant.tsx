import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoDewPoint from 'public/icons/info-dew-point.svg';

export const InfoDewPointIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoDewPoint} {...props} />
);

export default InfoDewPointIcon;
