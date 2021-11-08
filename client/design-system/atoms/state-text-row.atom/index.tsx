import { ReactElement, memo } from 'react';
import { Flex, Text, ComponentDefaultProps } from '@chakra-ui/react';

export const StateTextRow = memo(
  ({ children, ...componentStyles }: ComponentDefaultProps): ReactElement => (
    <Flex {...componentStyles} justify="center">
      <Text color="blue.800" textStyle="16-weather-detail" align="center">
        {children}
      </Text>
    </Flex>
  )
);

StateTextRow.displayName = 'StateTextRow';

export default StateTextRow;
