import climeTheme from 'client/theme';

import { ChartOption } from '../types/chart-option.type';

export const CHART_THEME = {
  [ChartOption.TEMPERATURE]: {
    areaClosedFill: {
      from: 'rgba(250, 195, 16, 0)',
      to: 'rgba(250, 195, 16, 0.2)',
    },
    lineStroke: '#FAC310',
    pointFill: '#FAC310',
  },
  [ChartOption.PRECIPITATION]: {
    areaClosedFill: {
      from: 'rgba(60, 131, 232, 0)',
      to: 'rgba(60, 131, 232, 0.2)',
    },
    lineStroke: climeTheme.colors.blue[500],
    pointFill: climeTheme.colors.blue[500],
  },
  [ChartOption.WIND_SPEED]: {
    areaClosedFill: {
      from: 'rgba(196, 196, 196, 0)',
      to: 'rgba(100, 116, 155, 0.2)',
    },
    lineStroke: climeTheme.colors.gray[400],
    pointFill: climeTheme.colors.gray[400],
  },
} as const;

export default CHART_THEME;
