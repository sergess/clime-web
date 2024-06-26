import React, { ReactElement } from 'react';
import { Box, Container, Link, Divider } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
        flexDir={['column', 'column', 'column', 'row']}
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
          <Box
            order={1}
            position="relative"
            w={{ base: '132px', md: '149px' }}
            h={{ base: '30px', md: '34px' }}
          >
            <Image
              src="/icons/clime-logo-white.svg"
              layout="fill"
              alt="Clime"
            />
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
            {t('© 2022 Clime. All rights reserved.')}
          </Box>
          <Box order={{ base: 2, md: 3 }} mt={{ base: '-6px', md: 2 }}>
            <Download />
          </Box>
        </Box>
        <Box
          w={['100%', null, null, '60%']}
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
              rel="nofollow"
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
              rel="nofollow"
            >
              {t('Privacy policy')}
            </Link>
            <Link
              href="https://weatherornotapps.com/privacyPolicy#h"
              d="inline-block"
              pe={['12', null, '10']}
              mb={['6', null, '0']}
              color="white"
              isExternal
              rel="nofollow"
            >
              {t('California Privacy Rights')}
            </Link>
            <Box
              className="ot-sdk-show-settings"
              d="inline-block"
              mb={['6', null, '0']}
              color="white"
              cursor="pointer"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {t('Cookie Settings')}
            </Box>
          </Box>
          <Divider
            d={['block', null, 'none']}
            borderColor="blue.500"
            opacity="0.2"
          />
          <Box pt={['5', null, '10']} color="white" opacity="0.5">
            {t(
              'All trademarks and brand names belong to their respective owners. Use of third party trademarks does not represent endorsement.'
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
