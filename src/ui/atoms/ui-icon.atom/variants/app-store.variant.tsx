import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import AppStore from 'public/icons/app-store.svg';

export const AppStoreIcon = (props: IconProps): ReactElement => (
  <Icon as={AppStore} {...props} />
);

export default AppStoreIcon;
