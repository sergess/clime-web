import React, { ReactElement } from 'react';

import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { TopNavigationBar } from 'client/design-system/molecules';
import {
  AdsenseBanner,
  Footer,
  Header,
  AdvertisingBanner,
  PromoBanner,
} from 'client/design-system/organisms';
import { useScreenWidthSmallerThan } from 'client/hooks';

import { CLIENT_ID, TOP_NAVIGATION_BAR_HEIGHT } from 'client/constants';

export const WeatherRadarPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => {
  const widthSmallerThanLarge = useScreenWidthSmallerThan(
    climeTheme.breakpoints.lg
  );

  return (
    <>
      <Box flex="1 0 auto">
        <Header />
        <Flex as="main" maxW="container.xl" w="full" margin="0 auto">
          <Box w="100%" pos="relative">
            <TopNavigationBar
              h={`${TOP_NAVIGATION_BAR_HEIGHT}px`}
              pos="relative"
              mx={{ base: '3px', lg: '0' }}
              zIndex="navigation"
              px={{ base: '2.5', lg: '0' }}
              pt={5}
            />
            <Box
              mt={`-${TOP_NAVIGATION_BAR_HEIGHT}px`}
              pos="relative"
              w={{ base: '100%', lg: 'calc(50vw + 50% - 200px)' }}
              right={{ base: '0', lg: 'calc(50vw - 50% - 200px)' }}
              bg="blue.50"
              h="full"
              _after={{
                content: '" "',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                zIndex: 'aboveMap',
                height: '68px',
                bg: 'linear-gradient(0deg, rgba(239, 243, 248, 0) 0%, #EFF3F8 100%)',
                [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]:
                  {
                    height: '80px',
                    bg: 'linear-gradient(0deg, rgba(239, 243, 248, 0) 2.42%, #EFF3F8 46.28%)',
                  },
              }}
            >
              {children}
            </Box>
          </Box>
          <Box
            sx={{
              [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]:
                { display: 'none' },
            }}
            flex="none"
            w="380px"
            ps={5}
            py={5}
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
          </Box>
        </Flex>
        <Box
          bg="gray.50"
          py={4}
          px={2.5}
          display={{ base: 'block', md: 'none' }}
        >
          <PromoBanner spotId="radarOne" priorityLoad />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default WeatherRadarPageLayout;
