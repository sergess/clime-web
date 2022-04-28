import { RadarLayer } from './radar-layer.type';
import { RadarLayerId } from '../radar-layer-id.type';

export type RadarLayers = {
  [RadarLayerId.RADAR]: RadarLayer;
};

export * from './radar-layer.type';

export default RadarLayers;
