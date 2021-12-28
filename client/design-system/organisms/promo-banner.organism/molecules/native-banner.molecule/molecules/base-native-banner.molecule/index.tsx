import React, { ReactElement } from 'react';
import { Box, Button, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useClimeAppLink } from 'client/hooks';
import { BaseNativeBannerProps } from './types';

export const BaseNativeBanner = ({
  heading,
  buttonText,
  bannerStyles,
}: BaseNativeBannerProps): ReactElement => {
  const climeAppLink = useClimeAppLink();

  return (
    <LinkBox
      borderRadius={16}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="full"
      minH={340}
      overflow="hidden"
      alignItems="center"
      bgSize="cover"
      bgPosition="center center"
      {...bannerStyles}
    >
      <Box px={4} pt={5} pb={4} bg="white" w="full">
        <Text color="blue.800" textStyle="16-semi-bold">
          {heading}
        </Text>
      </Box>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a">
          <Button w="280px" variant="cta" mb={5}>
            {buttonText}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default BaseNativeBanner;
