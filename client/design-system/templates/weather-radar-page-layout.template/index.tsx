import React, { ReactElement } from 'react';

import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { TopNavigationBar } from 'client/design-system/molecules';
import {
  AdsenseBanner,
  Footer,
  Header,
  AdvertisingBanner,
} from 'client/design-system/organisms';
import { useScreenWidthSmallerThan } from 'client/hooks';

import {
  CLIENT_ID,
  LAYOUT_HORIZONTAL_PADDING,
  MOBILE_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from 'client/constants';
import { useAtomValue } from 'jotai/utils';
import { mapFullscreenOn } from 'client/state/atoms';

export const WeatherRadarPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => {
  const widthSmallerThanLarge = useScreenWidthSmallerThan(
    climeTheme.breakpoints.lg
  );

  const mapFullscreen = useAtomValue(mapFullscreenOn);

  return (
    <>
      <Box flex="1 0 auto">
        <Header />
        <Flex
          as="main"
          w="full"
          h="100%"
          bg="gray.50"
          px={!mapFullscreen ? LAYOUT_HORIZONTAL_PADDING : '0'}
          justify="center"
        >
          <Flex
            maxW={!mapFullscreen ? 'container.xl' : 'full'}
            w="full"
            justify="space-between"
            align="flex-start"
          >
            <Flex
              w="full"
              pe={!mapFullscreen ? { base: 0, lg: 5 } : '0'}
              py={!mapFullscreen ? 5 : 0}
              flexDirection="column"
              alignItems="stretch"
              h={{
                base: `calc(100% - ${MOBILE_HEADER_HEIGHT}px)`,
                lg: `calc(100% - ${DESKTOP_HEADER_HEIGHT}px)`,
              }}
            >
              {!mapFullscreen && (
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
              display={!mapFullscreen ? 'flex' : 'none'}
            >
              <AdsenseBanner
                client={CLIENT_ID}
                slot="1272521434"
                stub={
                  <AdvertisingBanner
                    showBackgroundVideo={!widthSmallerThanLarge}
                  />
                }
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
      <Footer />
    </>
  );
};

export default WeatherRadarPageLayout;
