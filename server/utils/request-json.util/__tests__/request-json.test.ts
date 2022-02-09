/* eslint-disable */
import { requestJson } from 'server/utils/request-json.util';

describe('Checking if request method returns', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve('success'),
    });
  });

  beforeEach(() => {
    // @ts-ignore
    fetch.mockClear();
  });

  test('"success" if promise resolves', async () => {
    const response = await requestJson('/test/url');

    expect(response).toEqual({ ok: true, data: 'success' });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('"{ ok: false }" if promise rejects', async () => {
    // @ts-ignore
    fetch.mockRejectedValueOnce(new Error('API is down'));

    const response = await requestJson('/test/url');

    expect(response).toEqual({ ok: false, data: null });
  });
});
