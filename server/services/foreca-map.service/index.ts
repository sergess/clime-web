import { RadarConfig, RadarLayerId } from 'common/types';

import ApiV3Service from 'server/services/api-v3.service';

import { ForecaConfig } from './types';
import { FORECA_PID_ID } from './constants';
import { prepareRadarLayer } from './utils';

/**
 * Foreca Map service.
 * @see https://confluence.jabodo.com:8443/display/AWS/Foreca+Map
 */
export class ForecaMap extends ApiV3Service {
  public async getConfig(): Promise<RadarConfig | null> {
    const { ok, data } = await this.callAsync<ForecaConfig>(
      '/meteoradar/map/frc/frame/40/-73'
    );

    if (!ok || !data) {
      return null;
    }

    return {
      layers: {
        [RadarLayerId.RADAR]: prepareRadarLayer(data[RadarLayerId.RADAR]),
      },
      frc: data[FORECA_PID_ID],
    };
  }
}

export default ForecaMap;
