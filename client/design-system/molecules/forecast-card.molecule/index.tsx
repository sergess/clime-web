import React, { ReactElement } from 'react';
import {
  Box,
  Flex,
  Center,
  Text,
  ComponentDefaultProps,
} from '@chakra-ui/react';

import { Card } from 'client/design-system/atoms';

import { ForecastCardProps } from './types';

export const ForecastCard = <T,>({
  data,
  heading,
  footer,
  renderItem,
  ...rest
}: ForecastCardProps<T> & ComponentDefaultProps): ReactElement => (
  <Card {...rest}>
    <Box w="full" px="4">
      <Text color="blue.800" textStyle="16-semi-bold" noOfLines={1}>
        {heading}
      </Text>

      <Flex w="full" mt="5" justify="space-between">
        {data.map((item, index) =>
          renderItem({
            index,
            item,
          })
        )}
      </Flex>

      {footer && <Center mt="5">{footer}</Center>}
    </Box>
  </Card>
);

export default ForecastCard;
