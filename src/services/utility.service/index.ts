import BaseService from 'src/services/base.service';
import { Location } from 'src/types';

import { NowResponse } from './types';

export class Utility extends BaseService {
  protected baseUrl: string | undefined = process.env.UTILITY_SERVICES_BASE_URL;

  public async getLocation(): Promise<Location | null> {
    const location = await this.callAsync<Location>('/location');

    return location;
  }

  public async getNow(): Promise<number | null> {
    const now = await this.callAsync<NowResponse>('/now');

    return now?.t ?? null;
  }
}

export default Utility;
