import React, { ReactElement } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

import { SelectableColumnBlockProps } from './types';

export const SelectableColumnBlock = ({
  main,
  footer,
  heading,
  selected,
  onSelect,
}: SelectableColumnBlockProps): ReactElement => (
  <Flex
    w="60px"
    flex="none"
    py="2.5"
    cursor="pointer"
    direction="column"
    justify="space-between"
    align="center"
    border="1.5px"
    borderStyle="solid"
    borderColor={selected ? 'blue.50' : 'white'}
    borderRadius="lg"
    onClick={onSelect}
  >
    <Text textStyle="12-semi-bold" color={selected ? 'blue.500' : 'blue.800'}>
      {heading}
    </Text>
    {main}
    {footer}
  </Flex>
);

export default SelectableColumnBlock;
