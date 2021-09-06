import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import ClimeLogoWhite from 'public/icons/clime-logo-white.svg';

export const ClimeLogoWhiteIcon = (props: IconProps): ReactElement => (
  <Icon as={ClimeLogoWhite} {...props} />
);

export default ClimeLogoWhiteIcon;
