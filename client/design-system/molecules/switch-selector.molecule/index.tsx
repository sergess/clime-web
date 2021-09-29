import React, { ReactElement } from 'react';
import { Box, useRadioGroup } from '@chakra-ui/react';

import { SwitchSelectorOption } from './atoms';

import { SwitchSelectorProps } from './types';

export const SwitchSelector = ({
  options,
  onSelected,
  name,
  value,
}: SwitchSelectorProps): ReactElement => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    value,
    onChange: onSelected,
  });
  const rootProps = getRootProps();

  return (
    <Box
      d="inline-flex"
      borderRadius="lg"
      bg="rgba(60, 131, 232, 0.1)"
      p="0.5"
      alignItems="stretch"
      alignContent="center"
      justifyContent="center"
      {...rootProps}
    >
      {options.map((item) => {
        const { value: itemValue, label } = item;
        const radio = getRadioProps({ value: itemValue });

        return (
          <SwitchSelectorOption key={itemValue} {...radio}>
            {label}
          </SwitchSelectorOption>
        );
      })}
    </Box>
  );
};

export default SwitchSelector;
