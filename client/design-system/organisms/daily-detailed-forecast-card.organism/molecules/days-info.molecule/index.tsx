import { ReactElement, memo, useState, useCallback, useMemo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { WeatherStateIcon } from 'client/design-system/atoms';
import {
  DetailedForecastChart,
  DetailedForecastCarousel,
  DetailedForecastCarouselSlide,
} from 'client/design-system/molecules';

import { SLIDES_PER_VIEW, X_VALUE_CONFIG, Y_VALUE_CONFIG } from './constants';
import { DaysInfoProps } from './types';

export const DaysInfo = memo(
  ({
    data,
    selectedSlideIndex,
    onSetSelectedSlideIndex,
  }: DaysInfoProps): ReactElement | null => {
    const { t } = useTranslation('ten-day-weather-page');

    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const onActiveSlideIndexChange = useCallback((index: number) => {
      setActiveSlideIndex(index);
      onSetSelectedSlideIndex(index);
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

    return (
      <Flex width="full" position="relative" direction="column" px={5}>
        <DetailedForecastCarousel
          data={data}
          slidesPerView={SLIDES_PER_VIEW}
          onActiveIndexChange={onActiveSlideIndexChange}
          componentStyles={{
            pb: 4,
          }}
          renderItem={({ index, item }) => {
            const selected = index === selectedSlideIndex;

            return (
              <DetailedForecastCarouselSlide
                selected={selected}
                onSelect={() => onSetSelectedSlideIndex(index)}
                heading={index === 0 ? t('Today') : item.day}
                main={
                  <WeatherStateIcon
                    mt={2}
                    boxSize="10"
                    night={item.night}
                    stateId={item.stateId}
                  />
                }
                upperLabel={
                  <Text textStyle="14-semi-bold" color="blue.800" mt={2}>
                    {item.maxTemperature}&#176;
                  </Text>
                }
                lowerLabel={
                  <Text textStyle="14-semi-bold" color="blue.800" mt="124px">
                    {item.minTemperature}&#176;
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
          isValueDefined={isChartValueDefined}
          isItemSelected={isChartItemSelected}
          styles={{
            position: 'absolute',
            top: '115px',
          }}
        />
      </Flex>
    );
  }
);

DaysInfo.displayName = 'DaysInfo';

export default DaysInfo;
