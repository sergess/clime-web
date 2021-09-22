import { kilometersToMiles } from 'client/utils';

describe('Kilometers to miles', () => {
  test('receive 139.80851825339923ms for 225kmph', () => {
    expect(kilometersToMiles(225)).toBe(139.80851825339923);
  });

  test('receive 0ms for 0mi', () => {
    expect(kilometersToMiles(0)).toBe(0);
  });

  test('receive -22.369362920543878ms for -36mi', () => {
    expect(kilometersToMiles(-36)).toBe(-22.369362920543878);
  });
});
