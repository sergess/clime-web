import React, { ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Arrow1Icon } from 'src/ui/atoms';

import { MinMaxTemperatureColumnProps } from './types';

export const MinMaxTemperatureColumn = ({
  max,
  min,
}: MinMaxTemperatureColumnProps): ReactElement => (
  <Flex direction="column">
    <Flex mb="1">
      <Arrow1Icon stroke="blue.800" boxSize="12px" mr="0.5" />
      <Text textStyle="12-semi-bold" color="blue.800">
        {max ? `${max}°` : '-'}
      </Text>
    </Flex>
    <Flex>
      <Arrow1Icon
        stroke="gray.500"
        boxSize="12px"
        mr="0.5"
        transform="rotate(180deg)"
      />
      <Text textStyle="12-semi-bold" color="gray.500">
        {min ? `${min}°` : '-'}
      </Text>
    </Flex>
  </Flex>
);

export default MinMaxTemperatureColumn;
