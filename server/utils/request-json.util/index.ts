import { NotOk } from './types';

export const requestJson = async <T>(
  url: string,
  init?: RequestInit
): Promise<T | NotOk> => {
  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        Accept: 'application/json',
      },
    });
    const body = await response.json();

    return body;
  } catch (err) {
    console.error('[requestJson]: ', err);

    return { ok: false };
  }
};

export * from './utils';

export default requestJson;
