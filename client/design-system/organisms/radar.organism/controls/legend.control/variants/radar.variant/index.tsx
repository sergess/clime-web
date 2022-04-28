import React, { ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { ColorScale } from 'client/design-system/atoms';

import { ColorScaleContainer } from './molecules';

export const Radar = (): ReactElement => {
  const { t } = useTranslation('weather-radar-page');

  return (
    <Flex
      direction="row"
      w="full"
      bg="white"
      pt={{ base: '0.5', md: '3.5' }}
      pb={{ base: '2', md: '3.5' }}
      ps="3"
      pe="3"
      justifyContent={{ base: 'space-between', md: 'center' }}
      alignItems="center"
    >
      <ColorScaleContainer
        title={t('Rain')}
        colorScale={
          <ColorScale
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="rain-legend"
          >
            <Text>{t('Light')}</Text>
            <Text>{t('Heavy')}</Text>
          </ColorScale>
        }
      />
      <ColorScaleContainer
        title={t('Mixed')}
        colorScale={
          <ColorScale
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="mixed-legend"
          >
            <Text>{t('Light')}</Text>
            <Text>{t('Heavy')}</Text>
          </ColorScale>
        }
      />
      <ColorScaleContainer
        title={t('Snow')}
        colorScale={
          <ColorScale
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="snow-legend"
          >
            <Text>{t('Light')}</Text>
            <Text>{t('Heavy')}</Text>
          </ColorScale>
        }
      />
    </Flex>
  );
};

export default Radar;
