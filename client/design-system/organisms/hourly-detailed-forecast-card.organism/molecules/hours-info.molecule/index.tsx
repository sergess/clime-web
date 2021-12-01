import {
  ReactElement,
  memo,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { HourConditionIcon } from 'client/design-system/atoms';
import {
  DetailedForecastCarousel,
  DetailedForecastCarouselSlide,
} from 'client/design-system/molecules';
import {
  DetailedForecastChart,
  useDomain,
} from 'client/design-system/molecules/detailed-forecast-chart.molecule';

import { WEATHER_STATE, SUNRISE, SUNSET } from 'common/constants';

import { SLIDES_PER_VIEW, X_VALUE_CONFIG, Y_VALUE_CONFIG } from './constants';
import { HoursInfoProps } from './types';

export const HoursInfo = memo(
  ({
    data,
    selectedSlideIndex,
    onSetSelectedSlideIndex,
  }: HoursInfoProps): ReactElement | null => {
    const { t } = useTranslation('hourly-detailed-forecast-card');

    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const onActiveSlideIndexChange = useCallback((index: number) => {
      setActiveSlideIndex(index);
    }, []);

    const isChartItemSelected = useCallback(
      (index) => activeSlideIndex + index === selectedSlideIndex,
      [activeSlideIndex, selectedSlideIndex]
    );
    const isChartValueDefined = useCallback((value) => value !== '-', []);

    const chartData = useMemo(
      () => data?.slice(activeSlideIndex, activeSlideIndex + SLIDES_PER_VIEW),
      [data, activeSlideIndex]
    );

    const yDomain = useDomain(data, Y_VALUE_CONFIG);

    useEffect(() => {
      if (selectedSlideIndex < activeSlideIndex) {
        onSetSelectedSlideIndex(activeSlideIndex);
      }

      if (selectedSlideIndex >= activeSlideIndex + SLIDES_PER_VIEW) {
        onSetSelectedSlideIndex(activeSlideIndex - 1 + SLIDES_PER_VIEW);
      }
    }, [activeSlideIndex, selectedSlideIndex]);

    return (
      <Flex width="full" position="relative" direction="column" px={5}>
        <DetailedForecastCarousel
          data={data}
          slidesPerView={SLIDES_PER_VIEW}
          onActiveIndexChange={onActiveSlideIndexChange}
          renderItem={({ index, item }) => {
            const selected = index === selectedSlideIndex;

            return (
              <DetailedForecastCarouselSlide
                selected={selected}
                onSelect={() => onSetSelectedSlideIndex(index)}
                heading={index === 0 ? t('Now') : item.time}
                main={
                  <Box mt={2}>
                    <HourConditionIcon
                      variant={item.variant}
                      night={item.night}
                      stateId={item.stateId}
                    />
                  </Box>
                }
                upperLabel={
                  <Text
                    textStyle="14-semi-bold"
                    color="blue.800"
                    mt={2}
                    mb={112}
                  >
                    {SUNSET === item.variant && t('sunset')}
                    {SUNRISE === item.variant && t('sunrise')}
                    {WEATHER_STATE === item.variant &&
                      `${item.temperature}\u00b0`}
                  </Text>
                }
              />
            );
          }}
        />

        <DetailedForecastChart
          data={chartData}
          xValueConfig={X_VALUE_CONFIG}
          yValueConfigs={Y_VALUE_CONFIG}
          yDomain={yDomain}
          isValueDefined={isChartValueDefined}
          isItemSelected={isChartItemSelected}
          styles={{
            position: 'absolute',
            top: '123px',
          }}
        />
      </Flex>
    );
  }
);

HoursInfo.displayName = 'HoursInfo';

export default HoursInfo;
