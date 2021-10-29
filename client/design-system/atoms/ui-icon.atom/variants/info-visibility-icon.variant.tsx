import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoVisibility from 'public/icons/info-visibility.svg';

export const InfoVisibilityIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoVisibility} {...props} />
);

export default InfoVisibilityIcon;
