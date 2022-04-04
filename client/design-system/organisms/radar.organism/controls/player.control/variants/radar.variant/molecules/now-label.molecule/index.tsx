import React, { ReactElement } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { useAtomValue } from 'jotai/utils';
import { formatInTimeZone } from 'date-fns-tz';
import { useTranslation } from 'next-i18next';

import { activeFrameIndexAtom } from 'client/design-system/organisms/radar.organism/state/atoms';
import { RadarLayerId } from 'common/types';
import { useLayer } from 'client/design-system/organisms/radar.organism/hooks';
import { useLocationData } from 'client/hooks';

import { UTC } from 'common/constants';

export const NowLabel = (): ReactElement | null => {
  const { t } = useTranslation('radar');

  const layer = useLayer(RadarLayerId.RADAR);
  const activeFrameIndex = useAtomValue(activeFrameIndexAtom);
  const locationData = useLocationData();

  if (!layer) return null;

  const { intervalToNow, today, dateTime } = layer.dates[activeFrameIndex];

  const currentTimestamp = formatInTimeZone(
    dateTime,
    locationData?.timeZone ?? UTC,
    today ? 'h:mmaaa' : 'iii, LLL dd, h:mmaaa'
  );

  return (
    <Flex>
      <Text textStyle="12-semi-bold" color="gray.600">
        {intervalToNow?.hours
          ? t('{{hours}} h', { hours: intervalToNow.hours })
          : ''}{' '}
        {intervalToNow?.minutes
          ? t('{{minutes}} min', { minutes: intervalToNow.minutes })
          : ''}{' '}
        {intervalToNow?.hours || intervalToNow?.minutes ? t('ago') : ''}
      </Text>
      <Text textStyle="12-medium" color="gray.400" ps={1}>
        {currentTimestamp}
      </Text>
    </Flex>
  );
};

export default NowLabel;
