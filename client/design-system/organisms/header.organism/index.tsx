import React, { ReactElement } from 'react';
import { Box, IconButton, Container, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { ClimeLogoWhiteIcon, SearchIcon } from 'client/design-system/atoms';
import { SettingsToggler } from 'client/design-system/molecules';
import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  LAYOUT_HORIZONTAL_PADDING,
} from 'client/constants';
import { useScreenWidthSmallerThanMedium } from 'client/hooks';

const Search = dynamic(
  () => import('client/design-system/organisms/search.organism')
);

export const Header = (): ReactElement => {
  const { isOpen: settingsOpened, onToggle: onSettingsOpenedToggle } =
    useDisclosure();
  const {
    isOpen: searchActive,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();
  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  return (
    <Box
      as="header"
      h={[
        `${MOBILE_HEADER_HEIGHT}px`,
        `${MOBILE_HEADER_HEIGHT}px`,
        `${DESKTOP_HEADER_HEIGHT}px`,
      ]}
      bg="white"
      w="full"
      boxShadow="header"
      px={LAYOUT_HORIZONTAL_PADDING}
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
        {/* [TODO] Add link to weather-today page. What should we render on index page? */}
        <ClimeLogoWhiteIcon
          w={{ base: '90.53px', md: '108px' }}
          h={{ base: '20px', md: '24px' }}
          d="block"
          me={5}
        />

        <Box w="full" d="flex" justifyContent="flex-end" alignItems="center">
          {!(screenWidthSmallerThanMedium && settingsOpened) &&
            (searchActive ? (
              <Search onSearchEnd={onSearchClose} />
            ) : (
              <IconButton
                variant="ghost"
                borderRadius="full"
                onClick={onSearchOpen}
                aria-label="Location search"
                minW="auto"
                p="0 0.625em"
                _hover={{
                  bg: 'gray.50',
                }}
                icon={<SearchIcon boxSize={6} />}
              />
            ))}

          {/* [TOOD] Fix propagation after search is closed on mobile */}
          {!(screenWidthSmallerThanMedium && searchActive) && (
            <SettingsToggler
              onSetting={onSettingsOpenedToggle}
              active={settingsOpened}
              temperatureUnit="F"
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
