import React, { ReactElement } from 'react';
import { Box, useRadioGroup } from '@chakra-ui/react';

import { ClientOnly, RadioCard } from 'client/design-system/atoms';

import { RadioGroupProps } from './types';

export const RadioGroup = ({
  options,
  onSelected,
  settings,
}: RadioGroupProps): ReactElement => {
  const { name, defaultValue } = settings;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange: (value) => onSelected(value),
  });
  const group = getRootProps();

  return (
    <Box
      d="inline-flex"
      borderRadius="lg"
      bg="rgba(60, 131, 232, 0.1)"
      p="0.5"
      alignItems="stretch"
      alignContent="center"
      justifyContent="center"
      {...group}
    >
      <ClientOnly>
        {options.map((item) => {
          const { value, label } = item;
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {label}
            </RadioCard>
          );
        })}
      </ClientOnly>
    </Box>
  );
};

export default RadioGroup;
