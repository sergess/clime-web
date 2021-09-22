import React, { ReactElement, useEffect, useState } from 'react';
import { Box, Container, useDisclosure, useMediaQuery } from '@chakra-ui/react';

import { ClimeLogoWhiteIcon } from 'client/design-system/atoms';
import { Search, SettingsToggler } from 'client/design-system/molecules';
import climeTheme from 'client/theme';
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'client/constants';

export const Header = (): ReactElement => {
  const { isOpen: settingsOpened, onToggle: onSettingsOpenedToggle } =
    useDisclosure();
  const { isOpen: searchActive, onToggle: onSearchActiveToggle } =
    useDisclosure();
  const [widthSmallerThanMedium, setWidthSmallerThanMedium] =
    useState<boolean>(true);

  const [widthLargerThanMedium] = useMediaQuery(
    `(min-width: ${climeTheme.breakpoints.md})`
  );

  useEffect(() => {
    setWidthSmallerThanMedium(!widthLargerThanMedium);
  }, [widthLargerThanMedium]);

  return (
    <>
      <Box
        as="header"
        h={[
          `${MOBILE_HEADER_HEIGHT}px`,
          `${MOBILE_HEADER_HEIGHT}px`,
          `${DESKTOP_HEADER_HEIGHT}px`,
        ]}
        top="0px"
        bg="white"
        w="full"
        boxShadow="header"
        px={['4', '4', '2.5']}
        d="flex"
        flex="0 0 auto"
      >
        <Container
          maxW="container.xl"
          p="0"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="none">
            <ClimeLogoWhiteIcon
              w={{ base: '90.53px', md: '108px' }}
              h={{ base: '20px', md: '24px' }}
              d="block"
            />
          </Box>
          <Box w="full" d="flex" justifyContent="flex-end">
            {!(widthSmallerThanMedium && settingsOpened) && (
              <Search onSearch={onSearchActiveToggle} active={searchActive} />
            )}
            {!(widthSmallerThanMedium && searchActive) && (
              <SettingsToggler
                onSetting={onSettingsOpenedToggle}
                active={settingsOpened}
                temperatureUnit="F"
              />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
