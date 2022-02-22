import { ReactElement, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { Axis, Orientation } from '@visx/axis';
import { curveMonotoneX } from '@visx/curve';
import { LinearGradient } from '@visx/gradient';
import { LinePath, AreaClosed } from '@visx/shape';
import { ParentSize } from '@visx/responsive';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import isNil from 'ramda/src/isNil';

import climeTheme from 'client/theme';
import { ChartPoint } from 'client/design-system/organisms/summary-card.organism/types';

import { SUMMARY_CARD_SWITCHER_HEIGHT } from 'client/constants';
import { ChartProps } from './types';
import { getMinY, getMaxY, isYDefined, getMinMaxYDomain } from './utils';

const X_DOMAIN_PADDING = 0.5;

export const Chart = ({ points, theme, Point }: ChartProps): ReactElement => {
  const { t } = useTranslation('summary-card');

  const xAxisValues = useMemo(() => points.map((_, i) => i), [points]);
  const minY = useMemo(() => getMinY(points), [points]);
  const maxY = useMemo(() => getMaxY(points), [points]);

  return (
    <ParentSize
      debounceTime={500}
      parentSizeStyles={{
        width: '100%',
        height: `calc(100% - ${SUMMARY_CARD_SWITCHER_HEIGHT}px)`,
      }}
    >
      {({ width, height }) => {
        const lastPointIndex = points.length - 1;
        const xScale = scaleLinear({
          domain: [0 + X_DOMAIN_PADDING, lastPointIndex - X_DOMAIN_PADDING],
          range: [0, width],
        });
        const yScale = scaleLinear({
          domain: getMinMaxYDomain(minY, maxY),
          range: [height, 0],
        });
        const getXScaleByIndex = (_: ChartPoint, i: number) => xScale(i);
        const getYScale = ({ y }: ChartPoint) => yScale(y as number);

        return (
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <LinearGradient
              id="area-closed-fill"
              from={theme.areaClosedFill.from}
              to={theme.areaClosedFill.to}
            />

            <AreaClosed
              data={points}
              defined={isYDefined}
              x={getXScaleByIndex}
              y={getYScale}
              yScale={yScale}
              fill="url('#area-closed-fill')"
              strokeWidth={0}
              curve={curveMonotoneX}
            />
            <LinePath
              data={points}
              defined={isYDefined}
              x={getXScaleByIndex}
              y={getYScale}
              stroke={theme.lineStroke}
              strokeWidth={2}
              curve={curveMonotoneX}
            />
            <Axis
              scale={xScale}
              top={height}
              orientation={Orientation.top}
              hideAxisLine
              hideTicks
              tickLength={15}
              tickValues={xAxisValues}
              tickFormat={(_, index: number) => {
                const { visible, period } = points[index];
                return visible ? t(period) : '';
              }}
              tickLabelProps={() => ({
                fill: climeTheme.colors.blue[800],
                textAnchor: 'middle',
                verticalAnchor: 'end',
                fontWeight: 600,
                fontSize: 14,
              })}
            />

            <Group>
              {points.map(
                (point, index) =>
                  point.visible &&
                  !isNil(point.y) && (
                    <Point
                      {...point}
                      key={point.period}
                      theme={theme}
                      left={xScale(index)}
                      top={yScale(point.y)}
                    />
                  )
              )}
            </Group>
          </svg>
        );
      }}
    </ParentSize>
  );
};

export default Chart;
