import { millimetersToInches } from 'client/utils';

describe('Millibars to Millimeters', () => {
  test('receive 2mm for 50.8inch', () => {
    expect(millimetersToInches(50.8)).toBe(2);
  });

  test('receive 0mm for 0inch', () => {
    expect(millimetersToInches(0)).toBe(0);
  });

  test('receive -2mm for -50.8inch', () => {
    expect(millimetersToInches(-50.8)).toBe(-2);
  });
});
