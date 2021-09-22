import { fahrenheitToCelsius } from 'client/utils';

describe('Fahrenheit to Celsius', () => {
  test('receive 0°C for 32°F', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });

  test('receive -17.77777777777778 for 0°F', () => {
    expect(fahrenheitToCelsius(0)).toBe(-17.77777777777778);
  });

  test('receive -20°C for -4°F', () => {
    expect(fahrenheitToCelsius(-4)).toBe(-20);
  });
});
