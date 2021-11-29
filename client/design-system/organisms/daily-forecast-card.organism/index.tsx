import React, { ReactElement, memo, useCallback } from 'react';
import { Box, Button, Text, ComponentDefaultProps } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const { t } = useTranslation('daily-forecast-card');
    const setSelectedDay = useUpdateAtom(selectedDayAtom);
    const urlSlug = useUrlSlug();

    const renderDailyBlock = useCallback(({ index, item }) => {
      const selected = index === 0;

      return (
        <SelectableColumnBlock
          key={item.dateTime}
          selected={selected}
          onSelect={() => {
            setSelectedDay(item.dateTime);
            router.push(`/${TEN_DAY_WEATHER}/${urlSlug}`);
          }}
          heading={
            <Text
              textStyle={selected ? '12-bold' : '12-semi-bold'}
              color={selected ? 'blue.500' : 'blue.800'}
            >
              {index === 0 && t('Today')}
              {index !== 0 && item.date}
            </Text>
          }
          main={
            <Box my={2}>
              <WeatherStateIcon night={item.night} stateId={item.stateId} />
            </Box>
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
    }, []);

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
