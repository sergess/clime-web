import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Waterspout from 'public/icons/waterspout.svg';

import { omitUnusedIconProps } from '../utils';

export const WaterspoutIcon = (props: IconProps): ReactElement => (
  <Icon as={Waterspout} {...omitUnusedIconProps(props)} />
);

export default WaterspoutIcon;
