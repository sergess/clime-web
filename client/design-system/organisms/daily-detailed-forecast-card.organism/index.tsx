import { ReactElement, memo, useState } from 'react';
import {
  Flex,
  ComponentDefaultProps,
  Divider,
  Skeleton,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';
import dynamic from 'next/dynamic';

import { Card, StateTextRow, ClientOnly } from 'client/design-system/atoms';
import { useLocationMetaInfo } from 'client/hooks';
import {
  LocationMetaInfoRow,
  WindInfoRow,
} from 'client/design-system/molecules';
import { windSpeedUnitAtom } from 'client/state/atoms';

import { useCardData } from './hooks';
import { SelectedDayInfo } from './molecules';

const DaysInfo = dynamic(() => import('./molecules/days-info.molecule'), {
  loading: () => <Skeleton h="260px" w="full" />,
  ssr: false,
});

export const DailyDetailedForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('ten-day-weather-page');

    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);

    const locationMetaInfo = useLocationMetaInfo();
    const dailyDetailedForecast = useCardData();

    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);

    if (!dailyDetailedForecast) return null;

    const {
      precipitationChance,
      precipitationLevel,
      uvIndex,
      humidity,
      pressure,
      dewPoint,
      day,
      stateText,
      windDirectionAngle,
      windAzimuth,
      windSpeed,
    } = dailyDetailedForecast[selectedSlideIndex];

    return (
      <Card {...props} pt="5" pb={{ md: 2 }} overflow="hidden">
        <LocationMetaInfoRow
          exact={locationMetaInfo.exact}
          name={locationMetaInfo.name}
          time={day}
          componentStyles={{
            mb: 5,
            px: 4,
          }}
        />

        <DaysInfo
          data={dailyDetailedForecast}
          selectedSlideIndex={selectedSlideIndex}
          onSetSelectedSlideIndex={setSelectedSlideIndex}
        />

        <Flex width="full" px={4} direction="column">
          <Divider orientation="horizontal" variant="card-divider" />

          <StateTextRow mt={3}>{stateText}</StateTextRow>

          <WindInfoRow
            directionAngle={windDirectionAngle}
            componentStyles={{
              my: '1.125em',
            }}
          >
            <ClientOnly>
              {t('{{windAzimuth}} wind at {{windSpeed}}{{windSpeedUnit}}', {
                windAzimuth: windAzimuth.toUpperCase(),
                windSpeed,
                windSpeedUnit,
              })}
            </ClientOnly>
          </WindInfoRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <SelectedDayInfo
            precipitationChance={precipitationChance}
            precipitationLevel={precipitationLevel}
            uvIndex={uvIndex}
            humidity={humidity}
            pressure={pressure}
            dewPoint={dewPoint}
          />
        </Flex>
      </Card>
    );
  }
);

DailyDetailedForecastCard.displayName = 'DailyDetailedForecastCard';

export default DailyDetailedForecastCard;
