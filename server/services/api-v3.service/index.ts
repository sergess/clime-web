import { requestJson } from 'server/utils/request-json.util';
import { CallAsyncResult } from 'server/types';

import { ApiV3ServiceParams } from './types';
import { generateHeaders } from './utils';

/**
 * API 3.0 service.
 * Each API call should include the following HTTP headers: 'X-Timestamp', 'User-Agent', 'X-Signature'
 * More info could be found below:
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Timestamp+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=User-Agent+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Signature+HTTP+Header
 */
export class ApiV3 {
  private baseUrl = process.env.API_BASE_URL;

  private userAgentHeader: string | undefined;

  constructor({ userAgentHeader }: ApiV3ServiceParams) {
    this.userAgentHeader = userAgentHeader;
  }

  protected async callAsync<T>(
    uri: string,
    init?: RequestInit
  ): Promise<CallAsyncResult<T>> {
    const response = await requestJson<T>(`${this.baseUrl}${uri}`, {
      ...init,
      headers: {
        ...init?.headers,
        ...generateHeaders(uri, this.userAgentHeader),
      },
    });

    return response;
  }
}

export default ApiV3;
