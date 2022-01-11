import React, { ReactElement } from 'react';

import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header } from 'client/design-system/organisms';
import { useScreenWidthSmallerThanMedium } from 'client/hooks';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

export const ErrorPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => {
  const widthSmallerThanMedium = useScreenWidthSmallerThanMedium();
  return (
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
            {!widthSmallerThanMedium && (
              <Flex w="full" maxW="380px" my="5" flexDirection="column">
                <Box bg="red.50" w="full" h="640px">
                  ads
                </Box>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default ErrorPageLayout;
