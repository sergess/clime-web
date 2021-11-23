import { ReactElement } from 'react';
import { Circle } from '@visx/shape';
import { Glyph } from '@visx/glyph';
import { Text } from '@visx/text';
import { useAtomValue } from 'jotai/utils';
import Image from 'next/image';

import climeTheme from 'client/theme';
import { windSpeedUnitAtom } from 'client/state/atoms';

import { UNIT_LABELS } from './constants';

import { PointProps } from '../../types';
import {
  ICON_HEIGHT,
  HALF_ICON_WIDTH,
  HALF_ICON_HEIGHT,
  POINT_RADIUS,
  ICON_WIDTH,
} from '../../constants';

export const WindPoint = ({
  theme,
  y,
  windAzimuth,
  windDirectionAngle,
  left,
  top,
}: PointProps): ReactElement => {
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);

  return (
    <Glyph key={`${left}-${top}`} left={left} top={top}>
      <g
        transform={`translate(-${HALF_ICON_WIDTH}, -${
          ICON_HEIGHT + 10
        }), rotate(${windDirectionAngle}, ${HALF_ICON_WIDTH}, ${HALF_ICON_HEIGHT})`}
      >
        <foreignObject width={ICON_WIDTH} height={ICON_HEIGHT}>
          <div style={{ position: 'fixed' }}>
            <Image
              src="/icons/wind.svg"
              width={ICON_WIDTH}
              height={ICON_HEIGHT}
              alt="wind"
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
      >{`${y} ${UNIT_LABELS[windSpeedUnit]}`}</Text>

      <Text
        fontSize={10}
        fill={climeTheme.colors.gray[400]}
        textAnchor="middle"
        verticalAnchor="start"
        fontWeight={600}
        dy={30}
      >
        {windAzimuth.toUpperCase()}
      </Text>
    </Glyph>
  );
};

export default WindPoint;
