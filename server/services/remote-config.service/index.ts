import { AppConfig } from 'common/types';

import { CallAsyncResult } from 'server/types';
import { requestJson } from 'server/utils/request-json.util';

import { DEFAULT_APP_CONFIG } from './constants';

export class RemoteConfig {
  private baseUrl = process.env.REMOTE_CONFIG_URL;

  public async getAppConfig(): Promise<AppConfig> {
    const { ok, data } = await this.callAsync<AppConfig>();

    if (!ok) return DEFAULT_APP_CONFIG;

    return data as AppConfig;
  }

  private async callAsync<T>(init?: RequestInit): Promise<CallAsyncResult<T>> {
    const response = await requestJson<T>(this.baseUrl as string, init);

    return response;
  }
}

export default RemoteConfig;
