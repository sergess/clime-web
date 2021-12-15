import { Location } from 'common/types';
import { CallAsyncResult } from 'server/types';

import { isResponseOk, requestJson } from 'server/utils/request-json.util';

import { NowResponse } from './types';

export class Utility {
  private baseUrl = process.env.UTILITY_SERVICES_BASE_URL;

  public async getLocation(): Promise<Location | null> {
    const { ok, data } = await this.callAsync<Location>('/location');

    if (!ok) return null;

    return data;
  }

  public async getNow(): Promise<number | null> {
    const { ok, data } = await this.callAsync<NowResponse>('/now');

    if (!ok) return null;

    return data?.t as number;
  }

  private async callAsync<T>(
    uri: string,
    init?: RequestInit
  ): Promise<CallAsyncResult<T>> {
    const response = await requestJson<T>(`${this.baseUrl}${uri}`, init);
    const ok = isResponseOk(response);

    return {
      ok,
      data: ok ? (response as T) : null,
    };
  }
}

export default Utility;
