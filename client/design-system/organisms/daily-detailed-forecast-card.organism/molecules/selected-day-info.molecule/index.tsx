import React, { ReactElement, memo } from 'react';
import { Divider } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';

import { MEASUREMENT_UNIT_LABELS } from 'client/constants/measurement-units/labels.constant';
import { ClientOnly, InfoBlocksRow } from 'client/design-system/atoms';
import { precipitationUnitAtom, pressureUnitAtom } from 'client/state/atoms';
import { InfoBlockWithIcon } from 'client/design-system/molecules';

import { SelectedDayInfoProps } from './types';

export const SelectedDayInfo = memo(
  ({
    precipitationChance,
    uvIndex,
    pressure,
    humidity,
    dewPoint,
    precipitationLevel,
  }: SelectedDayInfoProps): ReactElement | null => {
    const { t } = useTranslation('daily-detailed-forecast-card');

    const precipitationUnit = useAtomValue(precipitationUnitAtom);
    const pressureUnit = useAtomValue(pressureUnitAtom);

    return (
      <>
        <InfoBlocksRow my={3}>
          <InfoBlockWithIcon
            iconSrc="/icons/info-chance.svg"
            iconAlt={t('Chance')}
            label={t('Chance')}
            text={`${precipitationChance}%`}
            flex={1}
          />

          <InfoBlockWithIcon
            iconSrc="/icons/info-precipitation.svg"
            iconAlt={t('Precipitation')}
            label={t('Precipitation')}
            text={
              <ClientOnly>
                {`${precipitationLevel} ${MEASUREMENT_UNIT_LABELS[precipitationUnit]}`}
              </ClientOnly>
            }
            flex={1}
          />
        </InfoBlocksRow>

        <Divider orientation="horizontal" variant="card-divider" />

        <InfoBlocksRow my={3}>
          <InfoBlockWithIcon
            iconSrc="/icons/info-uv.svg"
            iconAlt={t('UV Index')}
            label={t('UV Index')}
            text={t('{{uvIndex}} of 11', { uvIndex })}
            flex={1}
          />

          <InfoBlockWithIcon
            iconSrc="/icons/info-humidity.svg"
            iconAlt={t('Humidity')}
            label={t('Humidity')}
            text={`${humidity}%`}
            flex={1}
          />
        </InfoBlocksRow>

        <Divider orientation="horizontal" variant="card-divider" />

        <InfoBlocksRow mt={3} mb="1.125em">
          <InfoBlockWithIcon
            iconSrc="/icons/info-pressure.svg"
            iconAlt={t('Pressure')}
            label={t('Pressure')}
            text={
              <ClientOnly>{`${pressure} ${MEASUREMENT_UNIT_LABELS[pressureUnit]}`}</ClientOnly>
            }
            flex={1}
          />

          <InfoBlockWithIcon
            iconSrc="/icons/info-dew-point.svg"
            iconAlt={t('Dew point')}
            label={t('Dew point')}
            text={<ClientOnly>{dewPoint}&#176;</ClientOnly>}
            flex={1}
          />
        </InfoBlocksRow>
      </>
    );
  }
);

SelectedDayInfo.displayName = 'SelectedDayInfo';

export default SelectedDayInfo;
