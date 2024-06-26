/* eslint-disable */
import ApiV3Service from 'server/services/api-v3.service';
import * as util from 'server/services/api-v3.service/utils/generete-timestamp.util';

const USER_AGENT_HEADER =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const USER_AGENT = 'web//com.clime.web//1////13.2.3//Mobile Safari//key////';
const GENERATED_SIGNATURE = '0e39173dffaad4533790592becdcc891';
const URI = 'uri';
const TIMESTAMP = 100;

describe('Checking if base api v3 service', () => {
  beforeAll(() => {
    jest.mock('server/services/api-v3.service');

    // @ts-ignore
    jest.spyOn(util, 'generateTimestamp').mockReturnValue(TIMESTAMP);

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve('success'),
    });
  });

  beforeEach(() => {
    // @ts-ignore
    fetch.mockClear();
  });

  const apiV3Service = new ApiV3Service({
    userAgentHeader: USER_AGENT_HEADER,
  });

  test('make an async call once with right params', async () => {
    // @ts-ignore
    await apiV3Service.callAsync(URI);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith('url/uri', {
      headers: {
        Accept: 'application/json',
        'X-Timestamp': 100,
        'User-Agent': USER_AGENT,
        'X-Signature': GENERATED_SIGNATURE,
      },
    });
  });

  test('receives positive response in right format', async () => {
    // @ts-ignore
    const response = await apiV3Service.callAsync(URI);

    expect(response).toEqual({
      ok: true,
      data: 'success',
    });
  });

  test('receives negative response if it has not ok code', async () => {
    // @ts-ignore
    fetch.mockResolvedValueOnce({ ok: false, statusCode: 200 });

    // @ts-ignore
    const response = await apiV3Service.callAsync(URI);

    expect(response).toEqual({
      ok: false,
      data: null,
    });
  });

  test('receives negative response in right format', async () => {
    // @ts-ignore
    fetch.mockRejectedValueOnce(new Error('API is down'));

    // @ts-ignore
    const response = await apiV3Service.callAsync(URI);

    expect(fetch).toBeCalledTimes(1);

    expect(response).toEqual({
      ok: false,
      data: null,
    });
  });

  test('make an async call once with right params in case there is additional init argument', async () => {
    // @ts-ignore
    const response = await apiV3Service.callAsync(URI, {
      // @ts-ignore
      headers: {
        test: 700,
        Accept: 'application/json',
        'X-Timestamp': 500,
      },
    });

    expect(fetch).toBeCalledWith('url/uri', {
      headers: {
        test: 700,
        Accept: 'application/json',
        'X-Timestamp': 100,
        'User-Agent': USER_AGENT,
        'X-Signature': GENERATED_SIGNATURE,
      },
    });

    expect(fetch).toBeCalledTimes(1);

    expect(response).toEqual({
      ok: true,
      data: 'success',
    });
  });
});
