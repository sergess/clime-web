import React, { ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { RadarLegendProps } from './types';

export const RadarLegend = ({
  inDetail,
  title,
  legend,
}: RadarLegendProps): ReactElement => (
  <Flex
    align={['flex-start', 'flex-start', 'center']}
    position="relative"
    px={['0', '0', '14']}
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
    {legend}
  </Flex>
);

export default RadarLegend;
