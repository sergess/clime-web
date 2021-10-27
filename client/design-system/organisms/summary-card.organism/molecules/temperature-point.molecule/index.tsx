import { ReactElement } from 'react';
import { Circle } from '@visx/shape';
import { Glyph } from '@visx/glyph';
import { Text } from '@visx/text';
import { useTranslation } from 'next-i18next';

import climeTheme from 'client/theme';
import { WeatherStateIcon, ClientOnly } from 'client/design-system/atoms';

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
}: PointProps): ReactElement => {
  const { t } = useTranslation('weather-today-page');
  const temperature = t('{{temperature}}degree', {
    temperature: y,
  });

  return (
    <Glyph key={`${left}-${top}`} left={left} top={top}>
      <foreignObject
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        transform={`translate(-${HALF_ICON_WIDTH} -${ICON_HEIGHT + 10})`}
      >
        <WeatherStateIcon
          night={night}
          stateId={stateId}
          boxSize={`${ICON_WIDTH}px`}
        />
      </foreignObject>

      <Circle r={POINT_RADIUS} fill={theme.pointFill} />

      <ClientOnly>
        <Text
          fontSize={14}
          fill={climeTheme.colors.blue[800]}
          textAnchor="middle"
          verticalAnchor="start"
          fontWeight={600}
          dy={12}
        >
          {temperature}
        </Text>
      </ClientOnly>
    </Glyph>
  );
};

export default TemperaturePoint;
