import React, { ReactElement, useMemo } from 'react';
import { Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { Arrow2Icon, ColorScale } from 'client/design-system/atoms';
import { useScreenWidthSmallerThan } from 'client/hooks';
import climeTheme from 'client/theme';

import { ColorScaleContainer } from './molecules';

export const Radar = (): ReactElement => {
  const { t } = useTranslation('weather-radar-page');
  const widthSmallerThanSmall = useScreenWidthSmallerThan(
    climeTheme.breakpoints.sm
  );
  const { isOpen: expanded, onToggle: onExpandedToggle } = useDisclosure();

  const inDetail = useMemo(
    () => expanded || !widthSmallerThanSmall,
    [expanded, widthSmallerThanSmall]
  );

  return (
    <Flex
      direction="row"
      w="full"
      bg="white"
      py="2.5"
      ps="2.5"
      pe="3"
      justifyContent={['space-between', 'space-between', 'center']}
      alignItems="center"
    >
      <ColorScaleContainer
        title={t('Rain')}
        inDetail={inDetail}
        colorScale={
          <ColorScale
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
          </ColorScale>
        }
      />
      <ColorScaleContainer
        title={t('Mixed')}
        inDetail={inDetail}
        colorScale={
          <ColorScale
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
          </ColorScale>
        }
      />
      <ColorScaleContainer
        title={t('Snow')}
        inDetail={inDetail}
        colorScale={
          <ColorScale
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
          </ColorScale>
        }
      />

      {widthSmallerThanSmall && (
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

export default Radar;
