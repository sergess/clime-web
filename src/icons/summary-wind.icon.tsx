import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SummaryWind from 'public/icons/summary-wind.svg';

export const SummaryWindIcon = (props: IconProps): ReactElement => (
  <Icon as={SummaryWind} {...props} />
);

export default SummaryWindIcon;
