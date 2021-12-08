import { isResponseOk } from 'server/utils/request.util';

describe('Checking whether response', () => {
  test('is ok for empty object', () => {
    expect(isResponseOk({})).toBe(true);
  });

  test('is ok for filled object', () => {
    expect(isResponseOk({ ok: true })).toBe(true);
  });

  test('is ok for array', () => {
    expect(isResponseOk([])).toBe(true);
  });

  test('is ok for string', () => {
    expect(isResponseOk('string')).toBe(true);
  });

  test('is ok for number', () => {
    expect(isResponseOk(0)).toBe(true);
  });

  test('is ok for NaN', () => {
    expect(isResponseOk(NaN)).toBe(true);
  });

  test('is ok for undefined', () => {
    expect(isResponseOk(undefined)).toBe(true);
  });

  test('is ok for null', () => {
    expect(isResponseOk(null)).toBe(true);
  });

  test("is ok for response with not Boolean 'ok' prop", () => {
    expect(isResponseOk({ ok: 0 })).toBe(true);
  });

  test("isn't ok for { ok: false }", () => {
    expect(isResponseOk({ ok: false })).toBe(false);
  });

  test("isn't ok for { ok: false, ...rest }", () => {
    expect(isResponseOk({ ok: false, anotherProp: 'a' })).toBe(false);
  });
});
