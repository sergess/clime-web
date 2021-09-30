import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Box, Container, Link, Divider } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { ClimeLogoDarkIcon } from 'client/design-system/atoms';
import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const Download = dynamic(
  () => import('client/design-system/molecules/download.molecule'),
  {
    ssr: false,
  }
);

export const Footer = (): ReactElement => {
  const { t } = useTranslation('common');

  return (
    <Box
      as="footer"
      bg="blue.900"
      w="full"
      py={['9', '9', '12']}
      px={LAYOUT_HORIZONTAL_PADDING}
      flex="0 0 auto"
    >
      <Container
        maxW="container.xl"
        p="0"
        d="flex"
        flexDir={['column', 'column', 'row']}
        alignItems="stretch"
        justifyContent="space-between"
      >
        <Box
          d="flex"
          flex="none"
          flexWrap="wrap"
          h="auto"
          flexDirection={{ base: 'row', md: 'column' }}
          justifyContent="space-between"
        >
          <Box order={1}>
            <ClimeLogoDarkIcon w="126px" h="28px" />
          </Box>
          <Box
            as="span"
            w="100%"
            order={{ base: 3, md: 2 }}
            textStyle={{ base: '12-medium', md: '14-text-body' }}
            pt={{ base: '5', md: '4' }}
            pb={{ base: '6', md: '0' }}
            color="white"
            opacity="0.5"
          >
            {t('© 2021 Clime. All rights reserved.')}
          </Box>
          <Box order={{ base: 2, md: 3 }} mt={{ base: '-6px', md: '0px' }}>
            <Download />
          </Box>
        </Box>
        <Box
          w={['100%', null, '60%']}
          textStyle={{ base: '12-medium', md: '14-text-body' }}
          lineHeight={{ base: '4' }}
        >
          <Box>
            <Link
              href="https://weatherornotapps.com/eula"
              d="inline-block"
              pe={['12', null, '10']}
              mb={['6', null, '0']}
              color="white"
              isExternal
            >
              {t('EULA')}
            </Link>
            <Link
              href="mailto:support@weatherornotapps.com"
              d="inline-block"
              pe={['12', null, '10']}
              mb={['6', null, '0']}
              color="white"
              isExternal
            >
              {t('Support')}
            </Link>
            <Link
              href="https://weatherornotapps.com/privacyPolicy"
              d="inline-block"
              pe={['12', null, '10']}
              mb={['6', null, '0']}
              color="white"
              isExternal
            >
              {t('Privacy policy')}
            </Link>
            <Link
              href="https://weatherornotapps.com/privacyPolicy#h"
              d="inline-block"
              mb={['6', null, '0']}
              color="white"
              isExternal
            >
              {t('California Privacy Rights')}
            </Link>
          </Box>
          <Divider
            d={['block', null, 'none']}
            borderColor="blue.500"
            opacity="0.2"
          />
          <Box pt={['5', null, '10']} color="white" opacity="0.5">
            {t(
              'Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license. Android, Google Play and the Google Play logo are trademarks of Google Inc. All other trademarks are the property of their respective owners.'
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
