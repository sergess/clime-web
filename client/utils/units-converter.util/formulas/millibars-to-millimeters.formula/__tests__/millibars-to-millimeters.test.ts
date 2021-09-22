import { millibarsToMillimeters } from 'client/utils';

describe('Millibars to Millimeters', () => {
  test('receive 2mm for 2.6664mbar', () => {
    expect(millibarsToMillimeters(2.6664)).toBe(2);
  });

  test('receive 0mm for 0mbar', () => {
    expect(millibarsToMillimeters(0)).toBe(0);
  });

  test('receive -2.6664mm for -2.6664mbar', () => {
    expect(millibarsToMillimeters(-2.6664)).toBe(-2);
  });
});
