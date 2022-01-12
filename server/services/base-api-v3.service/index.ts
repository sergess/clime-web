import parser from 'ua-parser-js';
import md5 from 'md5';

import { requestJson, isResponseOk } from 'server/utils/request-json.util';
import { CallAsyncResult } from 'server/types';

import { BaseApiV3ServiceParams } from './types';

/**
 * Base API 3.0 service.
 * Each API call should include the following HTTP headers: 'X-Timestamp', 'User-Agent', 'X-Signature'
 * More info could be found below:
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Timestamp+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=User-Agent+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Signature+HTTP+Header
 */
export class BaseApiV3 {
  private baseUrl = process.env.API_BASE_URL;

  private userAgentHeader: string | undefined;

  private static get timestamp(): string {
    return `${Math.floor(new Date().getTime() / 1000)}`;
  }

  constructor({ userAgentHeader }: BaseApiV3ServiceParams) {
    this.userAgentHeader = userAgentHeader;
  }

  private get userAgent(): string {
    const parsedUserAgent = parser(this.userAgentHeader);
    const version = process.env.npm_package_version;

    return `web//com.clime.web//${version}////${
      parsedUserAgent?.os?.version ?? ''
    }//${parsedUserAgent?.browser?.name ?? ''}//${process.env.API_KEY}////`;
  }

  private generateSignature(uri: string, timestamp: string): string {
    return md5(
      `${uri}${this.userAgent}${timestamp}${process.env.API_SECRET_KEY}`
    );
  }

  protected async callAsync<T>(
    uri: string,
    init?: RequestInit
  ): Promise<CallAsyncResult<T>> {
    const { timestamp } = BaseApiV3;
    const response = await requestJson<T>(`${this.baseUrl}${uri}`, {
      ...init,
      headers: {
        ...init?.headers,
        'X-Timestamp': timestamp,
        'User-Agent': this.userAgent,
        'X-Signature': this.generateSignature(uri, timestamp),
      },
    });
    const ok = isResponseOk(response);

    return {
      ok,
      data: ok ? (response as T) : null,
    };
  }
}

export default BaseApiV3;
