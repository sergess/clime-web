import React, { FC, ReactElement, ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const ColorScaleContainer: FC<{
  inDetail: boolean;
  title: string;
  colorScale: ReactNode;
}> = ({ inDetail, title, colorScale }): ReactElement => (
  <Flex
    align={['flex-start', 'flex-start', 'center']}
    position="relative"
    me={{ base: 2, md: 16 }}
    flexDirection={['column', 'column', 'row']}
  >
    {inDetail && (
      <Text
        textStyle={['10-semi-bold', '12-semi-bold']}
        color="gray.600"
        py="0.5"
        pe="2"
      >
        {title}
      </Text>
    )}
    {colorScale}
  </Flex>
);

export default ColorScaleContainer;
