import React, { ReactElement } from 'react';
import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

import { SwitchSelectorOptionProps } from './types';

export const SwitchSelectorOption = ({
  children,
  ...radioProps
}: UseRadioProps & SwitchSelectorOptionProps): ReactElement => {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        color="blue.500"
        textStyle="14-bold"
        p="0.125rem"
        bg="none"
        _checked={{
          shadow: 'switch-button',
          bg: 'white',
        }}
        _focus={{
          shadow: 'switch-button',
          bg: 'white',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SwitchSelectorOption;
