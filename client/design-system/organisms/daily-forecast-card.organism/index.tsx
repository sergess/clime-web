import React, { ReactElement, memo, useState, useCallback } from 'react';
import { Button, Text, ComponentDefaultProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { ClientOnly, WeatherStateIcon } from 'client/design-system/atoms';
import {
  ForecastCard,
  SelectableColumnBlock,
  MinMaxTemperatureColumn,
} from 'client/design-system/molecules';

import { HOURLY_WEATHER } from 'client/constants';

import { useUrlSlug } from 'client/hooks';
import { useDailyForecastCardData } from './hooks';

export const DailyForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('weather-today-page');
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const urlSlug = useUrlSlug();

    const onSelect = useCallback((index: number) => {
      setSelectedItem(index);
    }, []);

    const renderDailyBlock = useCallback(
      ({ index, item }) => {
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
                {index === 0 && t('Today')}
                {index !== 0 && item.time}
              </Text>
            }
            main={
              <WeatherStateIcon stateId={item.stateId} my={2} boxSize="10" />
            }
            footer={
              <ClientOnly>
                <MinMaxTemperatureColumn
                  min={item.minTemperature}
                  max={item.maxTemperature}
                />
              </ClientOnly>
            }
          />
        );
      },
      [selectedItem, t, onSelect]
    );

    const dailyForecastCardData = useDailyForecastCardData();

    if (!dailyForecastCardData) return null;

    return (
      <ForecastCard
        {...props}
        py="5"
        heading={t('Daily Forecast')}
        data={dailyForecastCardData}
        footer={
          <NextLink href={`/${HOURLY_WEATHER}/${urlSlug}`} passHref>
            <Button as="a" w="full" variant="cta" mx={3.5}>
              {t('Explore 10-day forecast')}
            </Button>
          </NextLink>
        }
        renderItem={renderDailyBlock}
      />
    );
  }
);

DailyForecastCard.displayName = 'DailyForecastCard';

export default DailyForecastCard;
