import { ReactElement, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Arrow1Icon, ClientOnly } from 'client/design-system/atoms';

import { MinMaxTemperatureProps } from './types';

export const MinMaxTemperature = memo(
  ({ max, min }: MinMaxTemperatureProps): ReactElement => (
    <Flex>
      <Flex pr={2} borderRight="1px solid" borderColor="gray.100">
        <Arrow1Icon stroke="orange.400" boxSize="14px" mr={1} />
        <Text textStyle="14-medium" color="blue.800">
          <ClientOnly>{max}&#176;</ClientOnly>
        </Text>
      </Flex>
      <Flex pl={2}>
        <Arrow1Icon
          stroke="blue.500"
          boxSize="14px"
          mr={1}
          transform="rotate(180deg)"
        />
        <Text textStyle="14-medium" color="blue.800">
          <ClientOnly>{min}&#176;</ClientOnly>
        </Text>
      </Flex>
    </Flex>
  )
);

MinMaxTemperature.displayName = 'MinMaxTemperature';

export default MinMaxTemperature;
