import React, { ReactElement, FC } from 'react';
import { useClimeAppLink } from 'client/hooks';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  ComponentDefaultProps,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { BackgroundImage } from 'client/design-system/atoms';

export const RadarSnapshotStub: FC<
  { priorityLoad?: boolean } & ComponentDefaultProps
> = ({ priorityLoad = false, ...props }): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <LinkBox
      borderRadius={16}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="full"
      overflow="hidden"
      alignItems="center"
      {...props}
    >
      <Box px={4} pt={5} pb={4} bg="white" w="full" position="relative">
        <Text color="blue.800" textStyle="16-semi-bold">
          {t('Weather Radar')}
        </Text>
      </Box>
      <Flex
        position="relative"
        w="full"
        h="full"
        alignItems="flex-end"
        justify="center"
      >
        <BackgroundImage
          src="/radar-snapshot-stub-background.jpg"
          priority={priorityLoad}
        />
        <NextLink href={climeAppLink} passHref>
          <LinkOverlay as="a" isExternal w="full" mx="29px">
            <Button w="full" variant="cta" mb={5}>
              {t('Get Clime App')}
            </Button>
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  );
};

export default RadarSnapshotStub;
