import React, { ReactElement } from 'react';
import { Box, Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { ClimeLogoWhiteIcon, ClientOnly } from 'client/design-system/atoms';
import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  LAYOUT_HORIZONTAL_PADDING,
} from 'client/constants';

import { useUiState } from './hooks';

const Search = dynamic(
  () => import('client/design-system/organisms/search.organism')
);
const Settings = dynamic(
  () => import('client/design-system/organisms/settings.organism')
);

export const Header = (): ReactElement => {
  const {
    searchOpened,
    searchVisible,
    onSearchClose,
    onSearchOpen,
    settingsOpened,
    settingsVisible,
    onSettingsOpen,
    onSettingsClose,
  } = useUiState();

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
          <ClientOnly>
            {searchVisible && (
              <Search
                onOpen={onSearchOpen}
                onClose={onSearchClose}
                opened={searchOpened}
              />
            )}
          </ClientOnly>

          <ClientOnly>
            {settingsVisible && (
              <Settings
                onOpen={onSettingsOpen}
                onClose={onSettingsClose}
                opened={settingsOpened}
              />
            )}
          </ClientOnly>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
