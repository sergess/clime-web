import React, { ReactElement } from 'react';
import { Box, Button, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useClimeAppLink } from 'client/hooks';
import { BackgroundImage } from 'client/design-system/atoms';
import { DEFAULT_BANNER_BORDER_RADIUS } from 'client/design-system/organisms/promo-banner.organism/constants';

export const BaseNativeBanner = ({
  heading,
  buttonText,
  priorityLoad,
  backgroundSrc,
  spotId,
  bannerId,
}: {
  heading: string;
  buttonText: string;
  priorityLoad: boolean;
  backgroundSrc: string;
  spotId: string | number;
  bannerId: number;
}): ReactElement => {
  const climeAppLink = useClimeAppLink();

  return (
    <LinkBox
      className="banner"
      data-banner-id={bannerId}
      data-spot-name={spotId}
      borderRadius={DEFAULT_BANNER_BORDER_RADIUS}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="full"
      minH={340}
      overflow="hidden"
      alignItems="center"
    >
      <BackgroundImage src={backgroundSrc} priority={priorityLoad} />

      <Box px={4} pt={5} pb={4} bg="white" w="full" position="relative">
        <Text color="blue.800" textStyle="16-semi-bold">
          {heading}
        </Text>
      </Box>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a" isExternal>
          <Button w="280px" variant="cta" mb={5}>
            {buttonText}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default BaseNativeBanner;
