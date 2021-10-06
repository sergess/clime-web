import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { HourlyConditionVariant } from 'client/types';

export type IconProps = ChakraIconProps & {
  variant: HourlyConditionVariant;
  night?: boolean;
  stateId: string | null;
};

export default IconProps;
