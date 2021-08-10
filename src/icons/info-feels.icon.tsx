import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoFeels from '../../public/icons/info-feels.svg';

export const InfoFeelsIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoFeels} {...props} />
);

export default InfoFeelsIcon;
