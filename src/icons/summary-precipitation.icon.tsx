import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SummaryPrecipitation from '../../public/icons/summary-precipitation.svg';

export const SummaryPrecipitationIcon = (props: IconProps): ReactElement => (
  <Icon as={SummaryPrecipitation} {...props} />
);

export default SummaryPrecipitationIcon;
