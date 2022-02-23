import React, { ReactElement, FC } from 'react';
import dynamic from 'next/dynamic';
import { Box, Flex, ComponentDefaultProps, Skeleton } from '@chakra-ui/react';
import climeTheme from 'client/theme';

import { AdsenseBanner, Footer, Header } from 'client/design-system/organisms';

import { CLIENT_ID, LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const AdvertisingBanner = dynamic(
  () => import('client/design-system/organisms/advertising-banner.organism'),
  {
    loading: () => <Skeleton h="full" w="full" />,
  }
);

export const ErrorPageLayout: FC = ({
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
          <Flex w="full" flexDirection="column" pe={[null, null, 5]}>
            {children}
          </Flex>
          <Flex
            sx={{
              [`@media not screen and (min-width: ${climeTheme.breakpoints.md})`]:
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
          </Flex>
        </Flex>
      </Flex>
    </Box>
    <Footer />
  </>
);

export default ErrorPageLayout;
