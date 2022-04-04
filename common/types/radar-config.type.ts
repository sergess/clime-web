import { RadarLayers } from './radar-layers';
import { ForecaPid } from './foreca-pid.type';

export type RadarConfig = {
  layers: RadarLayers;
  frc: ForecaPid;
};

export default RadarConfig;
