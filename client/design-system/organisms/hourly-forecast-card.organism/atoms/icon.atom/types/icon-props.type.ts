import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { HourConditionVariant, WeatherStateId } from 'common/types';

export type IconProps = ChakraIconProps & {
  variant: HourConditionVariant;
  night?: boolean;
  stateId: WeatherStateId | null;
};

export default IconProps;
