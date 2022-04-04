import React, { FC, ReactElement } from 'react';
import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

export const SwitchSelectorOption: FC<UseRadioProps> = ({
  children,
  ...radioProps
}): ReactElement => {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} aria-label={`Switch to ${radioProps.value}`} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        color="blue.500"
        textStyle="14-bold"
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
