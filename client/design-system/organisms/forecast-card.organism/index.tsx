import React, { ReactElement, useState, useCallback } from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';

import { Card } from 'client/design-system/atoms';

import { ForecastCardProps } from './types';

// Arrow function with generic: https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
export const ForecastCard = <T,>({
  data,
  heading,
  ctaButton,
  renderItem,
}: ForecastCardProps<T>): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const onSelect = useCallback((index: number) => {
    setSelectedItem(index);
  }, []);

  return (
    <Card m={5} py="5" w={{ md: 340 }}>
      <Box w="full" px="4">
        <Box
          textAlign="left"
          color="blue.800"
          textStyle="16-semi-bold"
          noOfLines={1}
        >
          {heading}
        </Box>

        <Flex w="full" mt="5" justify="space-between">
          {data.map((item, index) =>
            renderItem({
              onSelect,
              selectedItem,
              index,
              item,
            })
          )}
        </Flex>

        {ctaButton && <Center mt="5">{ctaButton}</Center>}
      </Box>
    </Card>
  );
};

export default ForecastCard;
