/* eslint-disable */
import { request } from 'server/utils/request.util';

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
    const response = await request('/test/url');

    expect(response).toBe('success');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('"{ ok: false }" if promise rejects', async () => {
    // @ts-ignore
    fetch.mockRejectedValueOnce(new Error('API is down'));

    const response = await request('/test/url');

    expect(response).toEqual({ ok: false });
  });
});
