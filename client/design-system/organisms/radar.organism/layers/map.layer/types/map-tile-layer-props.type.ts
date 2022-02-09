import { TileLayerProps } from 'react-leaflet';

import { MapLayerStyle } from './map-layer-style.type';

export type MapTileLayerProps = {
  style: MapLayerStyle;
} & TileLayerProps;

export default MapTileLayerProps;
