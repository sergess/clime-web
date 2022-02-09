import { TileLayerProps } from 'react-leaflet';
import type { LatLngBoundsExpression } from 'leaflet';

import { RadarLayerId } from 'common/types';

export type ForecaTileLayerProps = {
  c: string;
  layer: RadarLayerId;
  frame: number;
  updated: string;
  bounds?: LatLngBoundsExpression;
} & TileLayerProps;

export default ForecaTileLayerProps;
