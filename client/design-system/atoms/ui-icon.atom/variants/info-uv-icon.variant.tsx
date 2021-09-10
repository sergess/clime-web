import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import InfoUv from 'public/icons/info-uv.svg';

export const InfoUvIcon = (props: IconProps): ReactElement => (
  <Icon as={InfoUv} {...props} />
);

export default InfoUvIcon;
