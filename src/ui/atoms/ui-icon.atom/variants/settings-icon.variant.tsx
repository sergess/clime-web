import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Settings from 'public/icons/settings.svg';

export const SettingsIcon = (props: IconProps): ReactElement => (
  <Icon as={Settings} {...props} />
);

export default SettingsIcon;
