import { ReactElement } from 'react';
import { Circle } from '@visx/shape';
import { Glyph } from '@visx/glyph';
import { Text } from '@visx/text';
import { useAtomValue } from 'jotai/utils';

import climeTheme from 'client/theme';
import { precipitationUnitAtom } from 'client/state/atoms';
import { MEASUREMENT_UNIT_LABELS } from 'client/constants/measurement-units/labels.constant';

import { DropIcon } from './atoms';

import { PointProps } from '../../types';
import {
  ICON_HEIGHT,
  HALF_ICON_WIDTH,
  POINT_RADIUS,
  ICON_WIDTH,
} from '../../constants';

export const PrecipitationPoint = ({
  y,
  theme,
  precipitationLevel,
  left,
  top,
}: PointProps): ReactElement => {
  const precipitationUnit = useAtomValue(precipitationUnitAtom);

  return (
    <Glyph key={`${left}-${top}`} left={left} top={top}>
      <g transform={`translate(-${HALF_ICON_WIDTH}, -${ICON_HEIGHT + 10})`}>
        <DropIcon
          chance={y as number}
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
        />
      </g>

      <Circle r={POINT_RADIUS} fill={theme.pointFill} />

      <Text
        fontSize={14}
        fill={climeTheme.colors.blue[800]}
        textAnchor="middle"
        verticalAnchor="start"
        fontWeight={600}
        dy={12}
      >{`${y}%`}</Text>

      <Text
        fontSize={10}
        fill={climeTheme.colors.gray[400]}
        textAnchor="middle"
        verticalAnchor="start"
        fontWeight={600}
        dy={30}
      >{`${precipitationLevel} ${MEASUREMENT_UNIT_LABELS[precipitationUnit]}`}</Text>
    </Glyph>
  );
};

export default PrecipitationPoint;
