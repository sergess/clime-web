import React, { ReactElement, memo, useState, useCallback } from 'react';
import {
  Button,
  Text,
  ComponentDefaultProps,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useUpdateAtom } from 'jotai/utils';

import { ClientOnly, WeatherStateIcon } from 'client/design-system/atoms';
import {
  ForecastCard,
  SelectableColumnBlock,
  MinMaxTemperatureColumn,
} from 'client/design-system/molecules';
import { TEN_DAY_WEATHER } from 'client/constants';
import { selectedDayAtom } from 'client/design-system/organisms/daily-detailed-forecast-card.organism';
import { useUrlSlug } from 'client/hooks';

import { useDailyForecastCardData } from './hooks';

export const DailyForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('daily-forecast-card');
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const setSelectedDay = useUpdateAtom(selectedDayAtom);
    const urlSlug = useUrlSlug();

    const renderDailyBlock = useCallback(
      ({ index, item }) => {
        const selected = index === selectedItem;

        return (
          <LinkBox key={item.dateTime}>
            <SelectableColumnBlock
              key={item.time}
              selected={selected}
              onSelect={() => setSelectedItem(index)}
              heading={
                <Text
                  textStyle={selected ? '12-bold' : '12-semi-bold'}
                  color={selected ? 'blue.500' : 'blue.800'}
                >
                  <Link href={`/${TEN_DAY_WEATHER}/${urlSlug}`} passHref>
                    <LinkOverlay onClick={() => setSelectedDay(item.dateTime)}>
                      {index === 0 && t('Today')}
                      {index !== 0 && item.time}
                    </LinkOverlay>
                  </Link>
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
          </LinkBox>
        );
      },
      [selectedItem, t]
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
          <Link href={`/${TEN_DAY_WEATHER}/${urlSlug}`} passHref>
            <Button as="a" w="full" variant="cta" mx={3.5}>
              {t('Explore 10-day forecast')}
            </Button>
          </Link>
        }
        renderItem={renderDailyBlock}
      />
    );
  }
);

DailyForecastCard.displayName = 'DailyForecastCard';

export default DailyForecastCard;
