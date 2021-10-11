import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { HourConditionVariant } from 'client/types';

export type IconProps = ChakraIconProps & {
  variant: HourConditionVariant;
  night?: boolean;
  stateId: string | null;
};

export default IconProps;
