import React, { ReactElement } from 'react';
import { Box, Flex, SimpleGrid, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header } from 'client/design-system/organisms';
import { TopNavigationBar } from 'client/design-system/molecules';
import { useScreenWidthSmallerThanMedium } from 'client/hooks';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

export const DefaultLayout: React.FC = ({
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
            <SimpleGrid
              w="full"
              pe={[null, null, null, 5]}
              pb={5}
              columns={[1, 1, 1, 1, 2]}
              spacing={[4, 5]}
            >
              <TopNavigationBar
                pt="5"
                gridColumn={[null, null, null, null, 'span 2']}
              />
              {children}
            </SimpleGrid>
            {!widthSmallerThanMedium && (
              <Flex w="full" maxW="380px" my="5" flexDirection="column">
                <Box bg="red.50" w="full" h="640px">
                  ads
                </Box>
                <Box bg="gray.300" w="full" h="320px" mt="10">
                  ads 2
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

export default DefaultLayout;
