import { isObject } from 'server/utils';

describe('Checking whether', () => {
  test('null is object', () => {
    expect(isObject(null)).toBe(false);
  });

  test('object is object', () => {
    expect(isObject({})).toBe(true);
  });

  test('array is object', () => {
    expect(isObject([])).toBe(true);
  });

  test('string is object', () => {
    expect(isObject('string')).toBe(false);
  });

  test('number is object', () => {
    expect(isObject(0)).toBe(false);
  });

  test('NaN is object', () => {
    expect(isObject(NaN)).toBe(false);
  });
});
