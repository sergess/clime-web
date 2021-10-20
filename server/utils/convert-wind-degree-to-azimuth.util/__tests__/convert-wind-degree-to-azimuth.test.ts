import { Azimuth } from 'common/types';

import { convertWindDegreeToAzimuth } from 'server/utils';

describe('Coverting wind degree to azimuth', () => {
  test('receive NNE azimuth for 12°', () => {
    expect(convertWindDegreeToAzimuth(12)).toBe(Azimuth.NNE);
  });

  test('receive N azimuth for 0°', () => {
    expect(convertWindDegreeToAzimuth(0)).toBe(Azimuth.N);
  });
});
