import { ReactElement, memo } from 'react';
import { Text, Flex } from '@chakra-ui/react';

import { WindDirectionIcon } from 'client/design-system/atoms';

import { WindInfoRowProps } from './types';

export const WindInfoRow = memo(
  ({
    directionAngle,
    children,
    componentStyles,
  }: WindInfoRowProps): ReactElement => (
    <Flex {...componentStyles} justify="center">
      <WindDirectionIcon
        fill="gray.600"
        me={2}
        transform={`rotate(${directionAngle}deg)`}
      />

      <Text color="gray.600" textStyle="16-medium">
        {children}
      </Text>
    </Flex>
  )
);

WindInfoRow.displayName = 'WindInfoRow';

export default WindInfoRow;
