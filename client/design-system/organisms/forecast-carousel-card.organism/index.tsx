import React, { ReactElement, useState, useCallback } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Card } from 'client/design-system/atoms';
import { Carousel } from 'client/design-system/molecules';

import { ForecastCarouselCardProps } from './types';

export const ForecastCarouselCard = <T,>({
  data,
  heading,
  renderItem,
}: ForecastCarouselCardProps<T>): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const onSelect = useCallback((index: number) => {
    setSelectedItem(index);
  }, []);

  return (
    <Card my={5} py="5" w={{ md: 340 }}>
      <Box w="full" px="4" mb="5">
        {heading}
      </Box>
      <Carousel>
        {data.map((item, index) =>
          renderItem({
            onSelect,
            selectedItem,
            index,
            item,
          })
        )}
      </Carousel>
    </Card>
  );
};

export default ForecastCarouselCard;
