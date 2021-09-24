import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import { SwitchItem } from 'client/design-system/atoms';

import { SwitchSelectorProps } from './types';

export const SwitchSelector = <T,>({
  data,
  onSelect,
}: SwitchSelectorProps<T>): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  useEffect(() => {
    onSelect(selectedItem);
  }, [selectedItem]);

  return (
    <Box
      d="inline-flex"
      borderRadius="lg"
      bg="rgba(60, 131, 232, 0.1)"
      p="0.5"
      alignItems="stretch"
      alignContent="center"
      justifyContent="center"
    >
      {data.map((item, index) => (
        <SwitchItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() => setSelectedItem(index)}
          selected={selectedItem === index}
          content={
            typeof item === 'string' ? (
              <Text px="2.5" lineHeight="36px">
                {item}
              </Text>
            ) : (
              <Flex align="center" h="28px">
                {item}
              </Flex>
            )
          }
        />
      ))}
    </Box>
  );
};

export default SwitchSelector;
