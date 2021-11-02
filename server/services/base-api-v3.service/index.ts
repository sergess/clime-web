import parser from 'ua-parser-js';
import md5 from 'md5';

import BaseService from 'server/services/base.service';

import { BaseApiV3ServiceParams } from './types';

export class BaseApiV3 extends BaseService {
  private static get timestamp(): string {
    return `${Math.floor(new Date().getTime() / 1000)}`;
  }

  private userAgentHeader: string | undefined;

  constructor({ userAgentHeader }: BaseApiV3ServiceParams) {
    super();

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
      `${encodeURI(uri).replace(/[!'()*#]/g, escape)}${
        this.userAgent
      }${timestamp}${process.env.API_SECRET_KEY}`
    );
  }

  protected async callAsync<T>(
    uri: string,
    init?: RequestInit
  ): Promise<T | null> {
    const { timestamp } = BaseApiV3;

    return super.callAsync(uri, {
      headers: {
        'X-Timestamp': timestamp,
        'User-Agent': this.userAgent,
        'X-Signature': this.generateSignature(uri, timestamp),
      },
      ...init,
    });
  }
}

export default BaseApiV3;
