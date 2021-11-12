import { ReactElement, useMemo } from 'react';
import { ParentSize } from '@visx/responsive';
import { scaleLinear, scalePoint } from '@visx/scale';
import { LinePath, Circle } from '@visx/shape';
import { GridColumns } from '@visx/grid';
import { curveMonotoneX } from '@visx/curve';
import { Group } from '@visx/group';
import reduce from 'ramda/src/reduce';

import climeTheme from 'client/theme';

import { isNumber, isNotNil } from 'common/utils';

import { CHART_HEIGHT, Y_RANGE_PADDING } from './constants';
import { DetailedForecastChartProps } from './types';

export const DetailedForecastChart = <T,>({
  data,
  styles,
  xValueConfig,
  yValueConfigs,
  isItemSelected,
  isValueDefined = isNotNil,
}: DetailedForecastChartProps<T>): ReactElement => {
  const [minY, maxY] = useMemo(() => {
    const allYValues = reduce<T, number[]>(
      (values, item) => [
        ...values,
        ...(yValueConfigs
          .map(({ getValue }) => getValue(item))
          .filter(isNumber) as number[]),
      ],
      [],
      data
    );

    return [Math.min(...allYValues), Math.max(...allYValues)];
  }, [data, yValueConfigs]);

  return (
    <ParentSize debounceTime={500}>
      {({ width }) => {
        const yScale = scaleLinear({
          domain: [minY, maxY],
          range: [CHART_HEIGHT - Y_RANGE_PADDING, 0 + Y_RANGE_PADDING],
        });

        const xScale = scalePoint({
          domain: data.map(xValueConfig.getValue),
          range: [0, width],
          padding: 0.5,
        });

        const getScaledX = (item: T) =>
          xScale(xValueConfig.getValue(item)) as number;

        return (
          <svg
            width={width}
            height={CHART_HEIGHT}
            viewBox={`0 0 ${width} ${CHART_HEIGHT}`}
            style={styles}
          >
            <GridColumns
              scale={xScale}
              width={1}
              height={CHART_HEIGHT}
              stroke={climeTheme.colors.gray[100]}
              strokeDasharray="8"
            />

            {yValueConfigs.map(({ getValue, strokeColor }, valueIndex) => {
              const getScaledY = (item: T) => yScale(getValue(item) as number);
              const isYDefined = (item: T) => isValueDefined(getValue(item));

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Group key={valueIndex}>
                  <LinePath
                    data={data}
                    defined={isYDefined}
                    x={getScaledX}
                    y={getScaledY}
                    stroke={strokeColor}
                    strokeWidth={2}
                    curve={curveMonotoneX}
                  />

                  {data.map((item, index) => {
                    const x = xValueConfig.getValue(item);
                    const y = getValue(item);

                    if (!isNumber(y)) return null;

                    const yScaled = yScale(y as number);

                    return (
                      <Group key={x} left={xScale(x)}>
                        {isItemSelected(index) && (
                          <Circle
                            r={6}
                            transform={`translate(0 ${yScaled})`}
                            stroke={strokeColor}
                            opacity="0.4"
                            fill="none"
                          />
                        )}

                        <Circle
                          r={4}
                          transform={`translate(0 ${yScaled})`}
                          fill={strokeColor}
                        />
                      </Group>
                    );
                  })}
                </Group>
              );
            })}
          </svg>
        );
      }}
    </ParentSize>
  );
};

export default DetailedForecastChart;
