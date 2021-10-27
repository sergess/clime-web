import { ChartPoint } from './chart-point.type';
import { CHART_THEME } from '../constants/chart-theme.constant';

type ChartThemeKeys = keyof typeof CHART_THEME;

export type PointProps = ChartPoint & {
  theme: typeof CHART_THEME[ChartThemeKeys];
  left: number;
  top: number;
};

export default PointProps;
