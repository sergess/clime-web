import React, { ReactElement, useCallback } from 'react';
import { Box, Container, Link, Button } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { ClimeLogoDarkIcon, ClientOnly } from 'client/design-system/atoms';
import { useUrlSlug } from 'client/hooks';
import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  LAYOUT_HORIZONTAL_PADDING,
  WEATHER_TODAY,
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
    logoVisible,
  } = useUiState();

  const settingsOpen = useCallback(() => {
    if (searchOpened) {
      onSearchClose();
    }
    onSettingsOpen();
  }, [searchOpened]);

  const searchOpen = useCallback(() => {
    if (settingsOpened) {
      onSettingsClose();
    }
    onSearchOpen();
  }, [settingsOpened]);

  const urlSlug = useUrlSlug();

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
        {logoVisible && (
          <NextLink href={`/${WEATHER_TODAY}/${urlSlug}`} passHref>
            <Link href={`/${WEATHER_TODAY}/${urlSlug}`}>
              <ClimeLogoDarkIcon
                w={{ base: '141px', md: '169.2px' }}
                h={{ base: '30px', md: '33px' }}
                d="block"
              />
            </Link>
          </NextLink>
        )}

        <Box w="full" d="flex" justifyContent="flex-end" alignItems="center">
          <ClientOnly>
            {searchVisible && (
              <Search
                onOpen={searchOpen}
                onClose={onSearchClose}
                opened={searchOpened}
              />
            )}
            {searchOpened && (
              <Button
                variant="search-cancel"
                onClick={onSearchClose}
                ms={[3, null, null, 8]}
              >
                Cancel
              </Button>
            )}
          </ClientOnly>

          <ClientOnly>
            {settingsVisible && (
              <Settings
                onOpen={settingsOpen}
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
