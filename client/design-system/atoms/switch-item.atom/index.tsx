import React, { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';

import { SwitchItemProps } from './types';

export const SwitchItem = ({
  selected,
  onSelect,
  content,
}: SwitchItemProps): ReactElement => (
  <Flex
    cursor="pointer"
    alignItems="center"
    bg={selected ? 'white' : 'none'}
    borderRadius="md"
    shadow={selected ? 'switch-button' : 'none'}
    color="blue.500"
    p="0.5"
    textStyle="14-bold"
    onClick={onSelect}
  >
    {content}
  </Flex>
);

export default SwitchItem;
