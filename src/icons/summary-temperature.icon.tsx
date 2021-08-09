import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SummaryTemperature from '../../public/icons/summary-temperature.svg';

export const SummaryTemperatureIcon = (props: IconProps): ReactElement => (
  <Icon as={SummaryTemperature} {...props} />
);

export default SummaryTemperatureIcon;
