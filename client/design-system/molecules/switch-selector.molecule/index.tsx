import React, { ReactElement, useCallback, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { SwitchSelectorProps } from './types';

export const SwitchSelector = <T,>({
  data,
  renderButton,
}: SwitchSelectorProps<T>): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const onSelect = useCallback((index: number) => {
    setSelectedItem(index);
  }, []);

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
      {data.map((item, index) =>
        renderButton({
          onSelect,
          selectedItem,
          item,
          index,
        })
      )}
    </Box>
  );
};

export default SwitchSelector;
