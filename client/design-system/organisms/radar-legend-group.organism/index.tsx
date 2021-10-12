import React, { ReactElement, useMemo } from 'react';
import { Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { RadarLegend } from 'client/design-system/molecules';
import { Arrow2Icon, Legend } from 'client/design-system/atoms';

import { useScreenWidthSmallerThanMedium } from 'client/hooks';

export const RadarLegendGroup = (): ReactElement => {
  const { t } = useTranslation('weather-radar-page');
  const widthSmallerThanMedium = useScreenWidthSmallerThanMedium();
  const { isOpen: expanded, onToggle: onExpandedToggle } = useDisclosure();

  const inDetail = useMemo(
    () => expanded || !widthSmallerThanMedium,
    [expanded, widthSmallerThanMedium]
  );

  return (
    <Flex
      bg="white"
      py="2.5"
      ps="2.5"
      pe="3"
      justify={['space-between', 'space-between', 'center']}
      align="center"
    >
      <RadarLegend
        title={t('Rain')}
        inDetail={inDetail}
        legend={
          <Legend
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="rain-legend"
          >
            {inDetail ? (
              <>
                <Text>{t('Light')}</Text>
                <Text>{t('Heavy')}</Text>
              </>
            ) : (
              <Text>{t('Rain')}</Text>
            )}
          </Legend>
        }
      />
      <RadarLegend
        title={t('Mixed')}
        inDetail={inDetail}
        legend={
          <Legend
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="mixed-legend"
          >
            {inDetail ? (
              <>
                <Text>{t('Light')}</Text>
                <Text>{t('Heavy')}</Text>
              </>
            ) : (
              <Text>{t('Mixed')}</Text>
            )}
          </Legend>
        }
      />
      <RadarLegend
        title={t('Snow')}
        inDetail={inDetail}
        legend={
          <Legend
            px={1}
            w={['98px', '98px', '108px']}
            h={['12px', '12px', '14px']}
            variant="snow-legend"
          >
            {inDetail ? (
              <>
                <Text>{t('Light')}</Text>
                <Text>{t('Heavy')}</Text>
              </>
            ) : (
              <Text>{t('Snow')}</Text>
            )}
          </Legend>
        }
      />
      {widthSmallerThanMedium && (
        <IconButton
          variant="legend-detailed"
          aria-label="Details"
          icon={
            <Arrow2Icon
              boxSize={5}
              transform={expanded ? 'rotate(90deg)' : 'none'}
            />
          }
          onClick={onExpandedToggle}
        />
      )}
    </Flex>
  );
};

export default RadarLegendGroup;
