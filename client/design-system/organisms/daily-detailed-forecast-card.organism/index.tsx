import { ReactElement, memo } from 'react';
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
import { useSelectedDateTimeIndex, useLocationData } from 'client/hooks';
import {
  LocationMetaInfoRow,
  WindInfoRow,
} from 'client/design-system/molecules';
import { windSpeedUnitAtom } from 'client/state/atoms';

import { useCardData } from './hooks';
import { SelectedDayInfo } from './molecules';
import { selectedDayAtom } from './state/atoms';

const DaysInfo = dynamic(() => import('./molecules/days-info.molecule'), {
  loading: () => <Skeleton h="260px" w="full" />,
  ssr: false,
});

export const DailyDetailedForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('daily-detailed-forecast-card');

    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);

    const locationData = useLocationData();
    const dailyDetailedForecast = useCardData();

    const [selectedDayIndex, setSelectedDayIndex] = useSelectedDateTimeIndex(
      dailyDetailedForecast,
      selectedDayAtom
    );

    if (!dailyDetailedForecast) return null;

    const {
      precipitationChance,
      precipitationLevel,
      uvIndex,
      humidity,
      pressure,
      dewPoint,
      date,
      stateText,
      windDirectionAngle,
      windAzimuth,
      windSpeed,
    } = dailyDetailedForecast[selectedDayIndex];

    return (
      <Card {...props} pt="5" pb={{ md: 2 }} overflow="hidden">
        <LocationMetaInfoRow
          exact={locationData?.exact}
          name={locationData?.name}
          date={
            <>
              {selectedDayIndex === 0 && t('Today')}
              {selectedDayIndex === 1 && t('Tomorrow')}
              {selectedDayIndex > 1 && date}
            </>
          }
          componentStyles={{
            mb: 5,
            px: 4,
          }}
        />

        <DaysInfo
          data={dailyDetailedForecast}
          selectedSlideIndex={selectedDayIndex}
          onSetSelectedSlideIndex={setSelectedDayIndex}
        />

        <Flex width="full" px={4} mt={4} direction="column">
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

export * from './state/atoms';

export default DailyDetailedForecastCard;
