import React, { ReactElement, FC } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  ComponentDefaultProps,
  Skeleton,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import climeTheme from 'client/theme';
import { AdsenseBanner, Footer, Header } from 'client/design-system/organisms';
import { TopNavigationBar } from 'client/design-system/molecules';

import { CLIENT_ID, LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const AdvertisingBanner = dynamic(
  () => import('client/design-system/organisms/advertising-banner.organism'),
  {
    loading: () => <Skeleton h="full" w="full" />,
  }
);

export const DefaultLayout: FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Header />
      <Flex
        as="main"
        w="full"
        h="100%"
        bg="gray.50"
        px={LAYOUT_HORIZONTAL_PADDING}
        justify="center"
      >
        <Flex
          maxW="container.xl"
          w="full"
          p="0"
          justify="space-between"
          align="flex-start"
        >
          <SimpleGrid
            w="full"
            pe={[null, null, null, null, 5]}
            py={5}
            columns={[1, 1, 1, 2]}
            spacing={[4, 5]}
          >
            <TopNavigationBar
              p="3px"
              m="-3px"
              gridColumn={[null, null, null, 'span 2']}
            />
            {children}
          </SimpleGrid>
          <Flex
            sx={{
              [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]:
                { display: 'none' },
            }}
            w="full"
            maxW="380px"
            my="5"
            flexDirection="column"
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
    <Footer />
  </>
);

export default DefaultLayout;
