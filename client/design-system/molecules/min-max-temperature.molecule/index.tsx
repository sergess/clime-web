import { ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Arrow1Icon } from 'client/design-system/atoms';

import { MinMaxTemperatureProps } from './types';

export const MinMaxTemperature = ({
  max,
  min,
}: MinMaxTemperatureProps): ReactElement => (
  <Flex>
    <Flex pr={2} borderRight="1px solid" borderColor="gray.100">
      <Arrow1Icon stroke="orange.400" boxSize="14px" mr={1} />
      <Text textStyle="14-medium" color="blue.800">
        {max ? `${max}°` : '-'}
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
        {min ? `${min}°` : '-'}
      </Text>
    </Flex>
  </Flex>
);

export default MinMaxTemperature;
