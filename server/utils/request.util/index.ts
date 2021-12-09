import { NotOk } from './types';

export const request = async <T>(
  url: string,
  init?: RequestInit
): Promise<T | NotOk> => {
  try {
    const response = await fetch(url, init);
    const body = await response.json();

    return body;
  } catch (error) {
    // [TODO] add logging here
    return { ok: false };
  }
};

export * from './utils';

export default request;
