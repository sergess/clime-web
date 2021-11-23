import { ReactElement } from 'react';
import { Circle } from '@visx/shape';
import { Glyph } from '@visx/glyph';
import { Text } from '@visx/text';

import climeTheme from 'client/theme';
import { WeatherStateIcon } from 'client/design-system/atoms';

import { PointProps } from '../../types';
import {
  ICON_HEIGHT,
  ICON_WIDTH,
  HALF_ICON_WIDTH,
  POINT_RADIUS,
} from '../../constants';

export const TemperaturePoint = ({
  theme,
  y,
  night,
  stateId,
  left,
  top,
}: PointProps): ReactElement => (
  <Glyph key={`${left}-${top}`} left={left} top={top}>
    <g transform={`translate(-${HALF_ICON_WIDTH}, -${ICON_HEIGHT + 10})`}>
      <foreignObject width={ICON_WIDTH} height={ICON_HEIGHT}>
        <div style={{ position: 'fixed' }}>
          <WeatherStateIcon
            night={night}
            stateId={stateId}
            width={ICON_WIDTH}
            height={ICON_WIDTH}
          />
        </div>
      </foreignObject>
    </g>

    <Circle r={POINT_RADIUS} fill={theme.pointFill} />

    <Text
      fontSize={14}
      fill={climeTheme.colors.blue[800]}
      textAnchor="middle"
      verticalAnchor="start"
      fontWeight={600}
      dy={12}
    >
      {`${y}\u00b0`}
    </Text>
  </Glyph>
);

export default TemperaturePoint;
