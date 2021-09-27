import React, { ReactElement } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { CloseIcon, SettingsIcon } from 'client/design-system/atoms';

import { SettingsTogglerProps } from './types';

export const SettingsToggler = ({
  temperatureUnit,
  onSetting,
  active,
}: SettingsTogglerProps): ReactElement => (
  <>
    <Flex
      align="center"
      justify="space-between"
      cursor="pointer"
      ms={[1.5, 1.5, 5]}
      h="36px"
      w="80px"
      flex="none"
      bg="gray.50"
      borderRadius="2xl"
      ps="3.5"
      pe="1.5"
      onClick={onSetting}
    >
      <Box textStyle="16-medium">&deg;{temperatureUnit}</Box>
      {active ? (
        <CloseIcon w="24px" h="24px" />
      ) : (
        <SettingsIcon w="24px" h="24px" />
      )}
    </Flex>
  </>
);

export default SettingsToggler;
