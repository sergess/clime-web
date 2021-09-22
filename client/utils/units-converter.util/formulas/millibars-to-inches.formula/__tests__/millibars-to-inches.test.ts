import { millibarsToInches } from 'client/utils';

describe('Millibars to Inches', () => {
  test('receive 6.644266645592475inch for 225mbar', () => {
    expect(millibarsToInches(225)).toBe(6.644266645592475);
  });

  test('receive 0inch for 0mbar', () => {
    expect(millibarsToInches(0)).toBe(0);
  });

  test('receive -1.063082663294796inch for -36mbar', () => {
    expect(millibarsToInches(-36)).toBe(-1.063082663294796);
  });
});
