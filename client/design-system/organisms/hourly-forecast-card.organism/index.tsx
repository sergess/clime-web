import { ReactElement, memo, useState, useCallback } from 'react';
import {
  Button,
  Text,
  ComponentDefaultProps,
  LinkBox,
  LinkOverlay,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
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
    const { t } = useTranslation('hourly-forecast-card');
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const setSelectedHour = useUpdateAtom(selectedHourAtom);
    const urlSlug = useUrlSlug();

    const renderHourBlock = useCallback(
      ({ index, item }) => {
        const selected = index === selectedItem;

        return (
          <LinkBox key={item.dateTime}>
            <SelectableColumnBlock
              selected={selected}
              onSelect={() => setSelectedItem(index)}
              heading={
                <Text
                  textStyle={selected ? '12-bold' : '12-semi-bold'}
                  color={selected ? 'blue.500' : 'blue.800'}
                >
                  <Link href={`/${HOURLY_WEATHER}/${urlSlug}`} passHref>
                    <LinkOverlay onClick={() => setSelectedHour(item.dateTime)}>
                      {index === 0 && t('Now')}
                      {index !== 0 && item.time}
                    </LinkOverlay>
                  </Link>
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
                    {WEATHER_STATE === item.variant &&
                      `${item.temperature}\u00b0`}
                  </Text>
                </ClientOnly>
              }
            />
          </LinkBox>
        );
      },
      [selectedItem, t]
    );

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
