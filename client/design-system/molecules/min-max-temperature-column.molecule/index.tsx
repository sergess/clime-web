import React, { FC, ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const MinMaxTemperatureColumn: FC<{
  max: number | string;
  min: number | string;
}> = ({ max, min }): ReactElement => (
  <Flex direction="column">
    <Flex mb="1">
      <Image
        src="/icons/arrow-1-gray-max.svg"
        alt="Max temperature"
        width={12}
        height={12}
      />
      <Text ms="0.5" textStyle="12-semi-bold" color="blue.800">
        {max}&#176;
      </Text>
    </Flex>
    <Flex>
      <Image
        src="/icons/arrow-1-gray-min.svg"
        alt="Min temperature"
        width={12}
        height={12}
      />
      <Text ms="0.5" textStyle="12-semi-bold" color="gray.500">
        {min}&#176;
      </Text>
    </Flex>
  </Flex>
);

export default MinMaxTemperatureColumn;
