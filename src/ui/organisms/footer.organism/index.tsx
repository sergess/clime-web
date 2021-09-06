import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Link,
  Divider,
  ComponentDefaultProps,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { ClimeLogoDarkIcon } from 'src/ui/atoms';

const Download = dynamic(() => import('src/ui/molecules/download.molecule'), {
  ssr: false,
});

export const Footer = ({
  variant,
  ...rest
}: ComponentDefaultProps): ReactElement => {
  const { t } = useTranslation('footer');

  return (
    <Box
      as="footer"
      bg="blue.900"
      w="full"
      py={['9', '9', '12']}
      px={['5', '5', '2.5']}
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
            {t('Copyright')}
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
            {t('Disclaimer')}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;