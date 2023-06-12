import React, { ReactElement, useCallback } from 'react';
import { Box, Container, Link, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { ClientOnly } from 'client/design-system/atoms';
import { TodayWeatherBanner } from 'client/design-system/organisms/header.organism/molecules';
import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  LAYOUT_HORIZONTAL_PADDING,
} from 'client/constants';
import { isCurrentRoute } from 'client/design-system/molecules/top-navigation-bar.molecule/utils';

import { useUiState } from './hooks';

const Search = dynamic(
  () => import('client/design-system/organisms/search.organism')
);
const Settings = dynamic(
  () => import('client/design-system/organisms/settings.organism')
);

export const Header = (): ReactElement => {
  const { t } = useTranslation('common');
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

  const router = useRouter();
  const isHomeRoute = isCurrentRoute(router.asPath, '/');

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
          <NextLink href="/" passHref>
            <Link
              flex="none"
              position="relative"
              d="flex"
              href="/"
              w={{ base: '132px', md: '158px' }}
              h={{ base: '30px', md: '36px' }}
            >
              <Image
                src="/icons/clime-logo-dark.svg"
                layout="fill"
                alt="Clime"
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
                className="search-cancel"
                variant="search-cancel"
                onClick={onSearchClose}
                ms={[3, null, null, 5]}
                w={{ md: '80px' }}
              >
                {t('Cancel')}
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
          {isHomeRoute && <TodayWeatherBanner />}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
