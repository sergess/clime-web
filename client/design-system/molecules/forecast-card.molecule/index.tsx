import React, { ReactElement } from 'react';
import { Flex, Center, Text, ComponentDefaultProps } from '@chakra-ui/react';

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
    <Flex w="full" h="full" px="4" direction="column" justify="space-between">
      <Text color="blue.800" textStyle="16-card-title" noOfLines={1}>
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
    </Flex>
  </Card>
);

export default ForecastCard;
