import { ReactElement, useState, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { Flex, Text, Center, ComponentDefaultProps } from '@chakra-ui/react';

import {
  Card,
  SummaryTemperatureIcon,
  SummaryPrecipitationIcon,
  SummaryWindIcon,
  ClientOnly,
} from 'client/design-system/atoms';
import { SwitchSelector } from 'client/design-system/molecules';
import { CardWithDataProps } from 'client/types';

import { SummaryCardData } from 'common/types';

import { ChartOption } from './types';
import { CHART_THEME } from './constants';
import {
  Chart,
  TemperaturePoint,
  PrecipitationPoint,
  WindPoint,
} from './molecules';
import { useChartData } from './hooks';

const SummaryIconMap = {
  [ChartOption.TEMPERATURE]: SummaryTemperatureIcon,
  [ChartOption.PRECIPITATION]: SummaryPrecipitationIcon,
  [ChartOption.WIND_SPEED]: SummaryWindIcon,
};

const selectorOptions = [
  ChartOption.TEMPERATURE,
  ChartOption.PRECIPITATION,
  ChartOption.WIND_SPEED,
].map((option) => {
  const SummaryIcon = SummaryIconMap[option];

  return {
    value: option,
    label: (
      <Center mx={1} p={0.5}>
        <SummaryIcon boxSize={6} />
      </Center>
    ),
  };
});

export const SummaryCard = ({
  data,
  ...componentProps
}: CardWithDataProps<SummaryCardData> &
  ComponentDefaultProps): ReactElement => {
  const { t } = useTranslation('weather-today-page');

  const [activeChart, setActiveChart] = useState<ChartOption>(
    ChartOption.TEMPERATURE
  );
  const points = useChartData(data, activeChart);

  const Point = useMemo(() => {
    switch (activeChart) {
      case ChartOption.PRECIPITATION:
        return PrecipitationPoint;
      case ChartOption.WIND_SPEED:
        return WindPoint;
      case ChartOption.TEMPERATURE:
      default:
        return TemperaturePoint;
    }
  }, [activeChart]);

  return (
    <Card {...componentProps} overflow="hidden">
      <Flex
        w="100%"
        px={4}
        pt={3}
        pb={{ base: 0, md: 3.5 }}
        justify="space-between"
        align="center"
      >
        <Text color="blue.800" textStyle="16-semi-bold">
          {activeChart === ChartOption.TEMPERATURE && t('Temperature Summary')}
          {activeChart === ChartOption.PRECIPITATION &&
            t('Precipitation Summary')}
          {activeChart === ChartOption.WIND_SPEED && t('Wind Summary')}
        </Text>

        <ClientOnly>
          <SwitchSelector
            options={selectorOptions}
            name="summary"
            value={activeChart as unknown as string}
            onSelected={setActiveChart as unknown as (value: string) => void}
          />
        </ClientOnly>
      </Flex>

      <Chart theme={CHART_THEME[activeChart]} points={points} Point={Point} />
    </Card>
  );
};

export default SummaryCard;
