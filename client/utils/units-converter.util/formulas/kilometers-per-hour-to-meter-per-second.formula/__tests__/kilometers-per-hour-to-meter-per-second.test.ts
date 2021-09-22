import { kilometersPerHourToMeterPerSecond } from 'client/utils';

describe('Kilometers per hour to meter per second', () => {
  test('receive 62.5ms for 225kmph', () => {
    expect(kilometersPerHourToMeterPerSecond(225)).toBe(62.5);
  });

  test('receive 0ms for 0kmph', () => {
    expect(kilometersPerHourToMeterPerSecond(0)).toBe(0);
  });

  test('receive -10ms for -36kmph', () => {
    expect(kilometersPerHourToMeterPerSecond(-36)).toBe(-10);
  });
});
