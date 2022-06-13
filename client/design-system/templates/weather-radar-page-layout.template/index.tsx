import React, { ReactElement } from 'react';

import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { TopNavigationBar } from 'client/design-system/molecules';
import {
  AdsenseBanner,
  Footer,
  Header,
  AdvertisingBanner,
  Breadcrumbs,
} from 'client/design-system/organisms';

import {
  CLIENT_ID,
  LAYOUT_HORIZONTAL_PADDING,
  MOBILE_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from 'client/constants';
import { useAtomValue } from 'jotai/utils';
import { mapFullscreenOnAtom } from 'client/state/atoms';

export const WeatherRadarPageLayout: React.FC = ({
  children,
  breadcrumbs,
}: ComponentDefaultProps): ReactElement => {
  const mapFullscreenOn = useAtomValue(mapFullscreenOnAtom);

  return (
    <>
      <Box flex="1 0 auto">
        <Header />
        <Flex
          as="main"
          w="full"
          h="100%"
          bg="gray.50"
          px={!mapFullscreenOn ? LAYOUT_HORIZONTAL_PADDING : '0'}
          justify="center"
        >
          <Flex
            maxW={!mapFullscreenOn ? 'container.xl' : 'full'}
            w="full"
            justify="space-between"
            align="flex-start"
          >
            <Flex
              w="full"
              pe={!mapFullscreenOn ? { base: 0, lg: 5 } : '0'}
              py={!mapFullscreenOn ? 5 : 0}
              flexDirection="column"
              alignItems="stretch"
              h={{
                base: `calc(100% - ${MOBILE_HEADER_HEIGHT}px)`,
                lg: `calc(100% - ${DESKTOP_HEADER_HEIGHT}px)`,
              }}
            >
              {!mapFullscreenOn && (
                <TopNavigationBar
                  p="3px"
                  mx="-3px"
                  mb="17px"
                  bg="gray.50"
                  flex="none"
                />
              )}
              {children}
            </Flex>
            <Flex
              sx={{
                [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]:
                  { display: 'none' },
              }}
              w="full"
              maxW="380px"
              my="5"
              flexDirection="column"
              display={!mapFullscreenOn ? 'flex' : 'none'}
            >
              <AdsenseBanner
                client={CLIENT_ID}
                slot="1272521434"
                stub={<AdvertisingBanner />}
                w="full"
                h="640px"
              />
              <AdsenseBanner
                client={CLIENT_ID}
                slot="1080949747"
                w="full"
                h="320px"
                mt="10"
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Breadcrumbs items={breadcrumbs} />

      <Footer />
    </>
  );
};

export default WeatherRadarPageLayout;
