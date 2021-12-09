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
import { useSelectedDateTimeIndex } from 'client/hooks';
import { LocationInfoRow, WindInfoRow } from 'client/design-system/molecules';
import { windSpeedUnitAtom } from 'client/state/atoms';

import { useCardData } from './hooks';
import { SelectedHourInfo } from './molecules';
import { selectedHourAtom } from './state/atoms';

const HoursInfo = dynamic(() => import('./molecules/hours-info.molecule'), {
  loading: () => <Skeleton h="220px" w="full" />,
  ssr: false,
});

export const HourlyDetailedForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('hourly-detailed-forecast-card');

    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);

    const hourlyDetailedForecast = useCardData();

    const [selectedHourIndex, setSelectedHourIndex] = useSelectedDateTimeIndex(
      hourlyDetailedForecast,
      selectedHourAtom
    );

    if (!hourlyDetailedForecast) return null;

    const {
      precipitationChance,
      precipitationLevel,
      uvIndex,
      humidity,
      pressure,
      feelsLikeTemperature,
      date,
      time,
      relatedDayConditionIndex,
      stateText,
      windDirectionAngle,
      windAzimuth,
      windSpeed,
    } = hourlyDetailedForecast[selectedHourIndex];

    return (
      <Card {...props} pt="5" pb={{ md: 2 }} overflow="hidden">
        <LocationInfoRow
          date={
            <>
              {relatedDayConditionIndex === 0 && t('Today, {{time}}', { time })}
              {relatedDayConditionIndex === 1 &&
                t('Tomorrow, {{time}}', { time })}
              {relatedDayConditionIndex > 1 &&
                t('{{date}}, {{time}}', { date, time })}
            </>
          }
          componentStyles={{
            mb: 5,
            px: 4,
          }}
        />

        <HoursInfo
          data={hourlyDetailedForecast}
          selectedSlideIndex={selectedHourIndex}
          onSetSelectedSlideIndex={setSelectedHourIndex}
        />

        <Flex width="full" px={4} mt={7} direction="column">
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

          <SelectedHourInfo
            precipitationChance={precipitationChance}
            precipitationLevel={precipitationLevel}
            uvIndex={uvIndex}
            humidity={humidity}
            pressure={pressure}
            feelsLikeTemperature={feelsLikeTemperature}
          />
        </Flex>
      </Card>
    );
  }
);

HourlyDetailedForecastCard.displayName = 'HourlyDetailedForecastCard';

export * from './state/atoms';

export default HourlyDetailedForecastCard;
