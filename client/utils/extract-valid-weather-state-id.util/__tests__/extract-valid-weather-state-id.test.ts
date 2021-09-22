import { extractValidWeatherStateId } from 'client/utils';

describe('Extracting valid weather state id', () => {
  test('receive null if there is no weather state id', () => {
    expect(extractValidWeatherStateId(null)).toBe(null);
  });

  test('receive valid weather state id for id with one colon', () => {
    expect(extractValidWeatherStateId('rn:tr')).toBe('rn:tr');
  });

  test('receive valid weather state id for id with two colons', () => {
    expect(extractValidWeatherStateId('rn:tr:')).toBe('rn:tr');
  });

  test('receive valid weather state id for id with three colons', () => {
    expect(extractValidWeatherStateId('rn:tr:sdfadf.:asdfaf')).toBe('rn:tr');
  });
});
