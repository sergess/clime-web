import { ReactElement, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { SelectableColumnBlock } from '../selectable-column-block.molecule';

import { DetailedForecastCarouselSlideProps } from './types';

export const DetailedForecastCarouselSlide = memo(
  ({
    selected,
    onSelect,
    heading,
    main,
    upperLabel,
    lowerLabel,
  }: DetailedForecastCarouselSlideProps): ReactElement | null => (
    <Flex direction="column" align="center">
      <SelectableColumnBlock
        selected={selected}
        onSelect={onSelect}
        heading={
          <Text
            textStyle={selected ? '12-bold' : '12-semi-bold'}
            color={selected ? 'blue.500' : 'blue.800'}
          >
            {heading}
          </Text>
        }
        main={main}
      />
      {upperLabel}
      {lowerLabel}
    </Flex>
  )
);

DetailedForecastCarouselSlide.displayName = 'DetailedForecastCarouselSlide';

export default DetailedForecastCarouselSlide;
