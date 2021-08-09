import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoChance from '../../public/icons/info-chance.svg';

export const InfoChanceIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoChance} {...props} />
);

export default InfoChanceIcon;
