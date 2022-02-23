import { ReactElement, useState, useMemo, memo } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import {
  Flex,
  Text,
  Center,
  ComponentDefaultProps,
  Skeleton,
} from '@chakra-ui/react';
import Image from 'next/image';

import { Card } from 'client/design-system/atoms';

import { SUMMARY_CARD_SWITCHER_HEIGHT } from 'client/constants';
import { ChartOption } from './types';
import { CHART_THEME } from './constants';
import { TemperaturePoint, PrecipitationPoint, WindPoint } from './molecules';
import { useChartData } from './hooks';

const SwitchSelector = dynamic(
  () => import('client/design-system/molecules/switch-selector.molecule'),
  {
    loading: () => <Skeleton h="full" w="115px" />,
    ssr: false,
  }
);

const Chart = dynamic(() => import('./molecules/chart.molecule'), {
  loading: () => <Skeleton h="full" w="full" mt={2} />,
  ssr: false,
});

const SummaryIconMap = {
  [ChartOption.TEMPERATURE]: 'summary-temperature',
  [ChartOption.PRECIPITATION]: 'summary-precipitation',
  [ChartOption.WIND_SPEED]: 'summary-wind',
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
        <Image
          alt="Chart switch selector"
          src={`/icons/${SummaryIcon}.svg`}
          width={24}
          height={24}
        />
      </Center>
    ),
  };
});

export const SummaryCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const { t } = useTranslation('summary-card');

    const [activeChart, setActiveChart] = useState<ChartOption>(
      ChartOption.TEMPERATURE
    );

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

    const points = useChartData(activeChart);

    if (!points) return null;

    return (
      <Card
        {...props}
        overflow="hidden"
        className={`summary-block__${activeChart}`}
      >
        <Flex
          w="100%"
          h={`${SUMMARY_CARD_SWITCHER_HEIGHT}px`}
          px={3}
          mt={3}
          justify="space-between"
          align="center"
        >
          <Text color="blue.800" textStyle="16-semi-bold">
            {activeChart === ChartOption.TEMPERATURE &&
              t('Temperature Summary')}
            {activeChart === ChartOption.PRECIPITATION &&
              t('Precipitation Summary')}
            {activeChart === ChartOption.WIND_SPEED && t('Wind Summary')}
          </Text>

          <SwitchSelector
            options={selectorOptions}
            name="summary"
            value={activeChart as unknown as string}
            onSelected={setActiveChart as unknown as (value: string) => void}
          />
        </Flex>

        <Chart theme={CHART_THEME[activeChart]} points={points} Point={Point} />
      </Card>
    );
  }
);

SummaryCard.displayName = 'SummaryCard';

export default SummaryCard;
