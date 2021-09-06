import { convertWindDegreeToAzimuth } from 'src/utils';
import { Azimuth } from 'src/types';

describe('Coverting wind degree to azimuth', () => {
  test('receive NNE azimuth for 12°', () => {
    expect(convertWindDegreeToAzimuth(12)).toBe(Azimuth.NNE);
  });

  test('receive N azimuth for 0°', () => {
    expect(convertWindDegreeToAzimuth(0)).toBe(Azimuth.N);
  });
});
