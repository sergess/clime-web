import { ForecaPid, RadarLayerId } from 'common/types';

import { FORECA_PID_ID } from 'server/services/foreca-map.service/constants';

import { ForecaLayer } from './foreca-layer.type';

export type ForecaConfig = {
  [key in RadarLayerId]: ForecaLayer;
} & {
  [FORECA_PID_ID]: ForecaPid;
};

export default ForecaConfig;
