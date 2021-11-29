import { ReactElement, memo, useCallback } from 'react';
import { Button, Text, ComponentDefaultProps, Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUpdateAtom } from 'jotai/utils';

import { ClientOnly, HourConditionIcon } from 'client/design-system/atoms';
import {
  ForecastCard,
  SelectableColumnBlock,
} from 'client/design-system/molecules';
import { HOURLY_WEATHER } from 'client/constants';
import { useUrlSlug } from 'client/hooks';
import { selectedHourAtom } from 'client/design-system/organisms/hourly-detailed-forecast-card.organism';

import { SUNSET, SUNRISE, WEATHER_STATE } from 'common/constants';

import { useHourlyForecastCardData } from './hooks';

export const HourlyForecastCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const router = useRouter();
    const { t } = useTranslation('hourly-forecast-card');
    const setSelectedHour = useUpdateAtom(selectedHourAtom);
    const urlSlug = useUrlSlug();

    const renderHourBlock = useCallback(({ index, item }) => {
      const selected = index === 0;

      return (
        <SelectableColumnBlock
          key={item.dateTime}
          selected={selected}
          onSelect={() => {
            setSelectedHour(item.dateTime);
            router.push(`/${HOURLY_WEATHER}/${urlSlug}`);
          }}
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
            <Box my={2}>
              <HourConditionIcon
                variant={item.variant}
                night={item.night}
                stateId={item.stateId}
              />
            </Box>
          }
          footer={
            <ClientOnly>
              <Text
                textStyle={selected ? '12-bold' : '12-semi-bold'}
                color="blue.800"
              >
                {SUNSET === item.variant && t('sunset')}
                {SUNRISE === item.variant && t('sunrise')}
                {WEATHER_STATE === item.variant && `${item.temperature}\u00b0`}
              </Text>
            </ClientOnly>
          }
        />
      );
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
          <Link href={`/${HOURLY_WEATHER}/${urlSlug}`} passHref>
            <Button as="a" w="full" variant="cta" mx={3.5}>
              {t('Explore hourly forecast')}
            </Button>
          </Link>
        }
        renderItem={renderHourBlock}
      />
    );
  }
);

HourlyForecastCard.displayName = 'HourlyForecastCard';

export default HourlyForecastCard;
