import { ReactElement, memo, useState, useCallback } from 'react';
import { Button, Text, ComponentDefaultProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { SUNSET, SUNRISE, WEATHER_STATE } from 'common/constants';

import { ClientOnly } from 'client/design-system/atoms';
import {
  ForecastCard,
  SelectableColumnBlock,
} from 'client/design-system/molecules';

import { useHourlyForecastCardData } from './hooks';
import { Icon } from './atoms';

export const HourlyForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('weather-today-page');
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const onSelect = useCallback((index: number) => {
      setSelectedItem(index);
    }, []);

    const hourlyForecastCardData = useHourlyForecastCardData();

    if (!hourlyForecastCardData) return null;

    return (
      <ForecastCard
        {...props}
        py="5"
        heading={t('Hourly Forecast')}
        data={hourlyForecastCardData}
        footer={
          <Button w="full" variant="cta" mx={3.5}>
            {t('Explore hourly forecast')}
          </Button>
        }
        renderItem={({ index, item }) => {
          const selected = index === selectedItem;

          return (
            <SelectableColumnBlock
              key={item.time}
              selected={selected}
              onSelect={() => onSelect(index)}
              heading={
                <Text
                  textStyle={selected ? '12-bold' : '12-semi-bold'}
                  color={selected ? 'blue.500' : 'blue.800'}
                >
                  {index === 0 && t('Now')}
                  {index !== 0 && item.time}
                </Text>
              }
              main={
                <Icon
                  my={2}
                  boxSize="10"
                  variant={item.variant}
                  night={item.night}
                  stateId={item.stateId}
                />
              }
              footer={
                <ClientOnly>
                  <Text
                    textStyle={selected ? '12-bold' : '12-semi-bold'}
                    color="blue.800"
                  >
                    {SUNSET === item.variant && t('sunset')}
                    {SUNRISE === item.variant && t('sunrise')}
                    {WEATHER_STATE === item.variant &&
                      t('{{temperature}}degree', {
                        temperature: item.temperature,
                      })}
                  </Text>
                </ClientOnly>
              }
            />
          );
        }}
      />
    );
  }
);

HourlyForecastCard.displayName = 'HourlyForecastCard';

export default HourlyForecastCard;
