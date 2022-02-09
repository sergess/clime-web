import React, { ReactElement } from 'react';

import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { TopNavigationBar } from 'client/design-system/molecules';
import { Footer, Header } from 'client/design-system/organisms';
import { useScreenWidthSmallerThan } from 'client/hooks';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

export const WeatherRadarPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => {
  const widthSmallerThanLarge = useScreenWidthSmallerThan(
    climeTheme.breakpoints.lg
  );

  return (
    <>
      <Flex flex="1 0 auto" h="85%" direction="column">
        <Header />

        <Flex
          as="main"
          w="full"
          bg="gray.50"
          justify="center"
          flex="1 0 auto"
          position="relative"
          pe={{ lg: 4 }}
        >
          <Flex w="full" h="full" flexDirection="column" pe={{ lg: 5 }}>
            {/* [todo] move gradient on map layer? */}
            <Flex
              bg="linear-gradient(0deg, rgba(239, 243, 248, 0) 0%, #EFF3F8 100%)"
              px={LAYOUT_HORIZONTAL_PADDING}
              position="absolute"
              left={0}
              right={0}
              // [todo] move zIndex to constants ABOVE_THE_MAP, MAP, SETTINGS, еtс
              zIndex={1200}
            >
              <Flex
                maxW="container.xl"
                w="full"
                margin="0 auto"
                overflow="auto"
              >
                {/* [todo] scroll to current nav item is broken */}
                <TopNavigationBar py={{ base: 4, lg: 5 }} zIndex={1100} />
              </Flex>
            </Flex>

            {/* [todo] how we can make fullscreen mode? create atom for this purpose? */}
            {children}
          </Flex>

          {!widthSmallerThanLarge && (
            <Flex
              w="full"
              maxW="380px"
              my="5"
              flexDirection="column"
              // [TODO] can we make it without zIndex?
              zIndex={1210}
            >
              <Box bg="red.50" w="full" h="640px">
                ads
              </Box>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default WeatherRadarPageLayout;
