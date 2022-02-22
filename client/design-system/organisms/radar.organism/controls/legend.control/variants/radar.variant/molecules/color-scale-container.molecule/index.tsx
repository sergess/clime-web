import React, { FC, ReactElement, ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const ColorScaleContainer: FC<{
  title: string;
  colorScale: ReactNode;
}> = ({ title, colorScale }): ReactElement => (
  <Flex
    align="center"
    position="relative"
    me={{ base: 0, md: 16 }}
    flexDirection={{ base: 'column', md: 'row' }}
  >
    <Text
      textStyle={{ base: '10-semi-bold', md: '12-semi-bold' }}
      color="gray.600"
      py={{ base: '1', md: '0' }}
      pe="2"
    >
      {title}
    </Text>
    {colorScale}
  </Flex>
);

export default ColorScaleContainer;
