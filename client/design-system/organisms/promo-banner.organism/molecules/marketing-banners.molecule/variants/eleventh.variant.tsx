import React, { ReactElement } from 'react';
import {
  Box,
  Button,
  ComponentDefaultProps,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useClimeAppLink } from 'client/hooks';
import {
  DEFAULT_BANNER_HEIGHT,
  DEFAULT_BANNER_BORDER_RADIUS,
} from 'client/design-system/organisms/promo-banner.organism/constants';

export const MarketingBannerEleventh = (
  props: ComponentDefaultProps
): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <LinkBox
      borderRadius={DEFAULT_BANNER_BORDER_RADIUS}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      h={DEFAULT_BANNER_HEIGHT}
      alignItems="center"
      bg="blue.500"
      {...props}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="center"
      >
        <Box>
          <Flex align="center">
            <Box me={2.5} w="33px" pos="relative">
              <Image
                src="/icons/rain-scope.svg"
                width={33}
                height={30}
                alt={t('RainScope')}
              />
            </Box>
            <Text
              color="white"
              fontSize={23}
              lineHeight="25px"
              fontWeight="700"
            >
              {t('RainScope')}
            </Text>
          </Flex>
        </Box>
        <Text
          color="white"
          fontSize={18}
          lineHeight="24px"
          fontWeight="500"
          pb={1.5}
        >
          {t('Temperature Forecast Map')}
        </Text>
        <Box>
          <Image
            src="/icons/graphic.svg"
            width={329}
            height={109}
            alt="Moderate rain"
          />
        </Box>
      </Flex>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a" isExternal>
          <Button w="140px" variant="marketing-banner-button" mb={4} mx={4}>
            {t('Get Clime App')}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default MarketingBannerEleventh;
