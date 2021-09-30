import React, { ReactElement, useMemo } from 'react';
import { Center, Flex, Text } from '@chakra-ui/react';

import { HeaderCardPopoverRow } from 'client/design-system/atoms';
import { SwitchSelector } from 'client/design-system/molecules';

import { SwitcherRowProps } from './types';

export const SettingsCardSwitcherRow = <T,>({
  title,
  value,
  options,
  onValueChange,
  first = false,
}: SwitcherRowProps<T>): ReactElement => {
  const selectorOptions = useMemo(
    () =>
      options.map((option) => ({
        value: option.value,
        label: (
          <Center minW={10} px={2.5}>
            <Text lineHeight="36px">{option.label}</Text>
          </Center>
        ),
      })),
    [options]
  );

  return (
    <HeaderCardPopoverRow first={first}>
      <Flex justify="space-between" direction="row" alignItems="center" py={3}>
        <Text textStyle="16-medium" color="blue.800">
          {title}
        </Text>
        <SwitchSelector
          options={selectorOptions}
          name={title}
          value={value}
          onSelected={onValueChange as unknown as (value: string) => void}
        />
      </Flex>
    </HeaderCardPopoverRow>
  );
};

export default SettingsCardSwitcherRow;
