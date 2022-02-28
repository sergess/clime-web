import { AppConfig } from 'common/types';

import { CallAsyncResult } from 'server/types';
import { isResponseOk, requestJson } from 'server/utils/request-json.util';

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
    const ok = isResponseOk(response);

    if (!ok) {
      console.error(`[RemoteConfig.callAsync]: response is not ok`, {
        ok,
        init,
        response,
      });
    }

    return {
      ok,
      data: ok ? (response as T) : null,
    };
  }
}

export default RemoteConfig;
