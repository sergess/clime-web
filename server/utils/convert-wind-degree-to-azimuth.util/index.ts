import { Azimuth } from 'common/types';

export const convertWindDegreeToAzimuth = (degree: number): Azimuth => {
  if (degree >= 11.25 && degree < 33.75) {
    return Azimuth.NNE;
  }

  if (degree >= 33.75 && degree < 56.25) {
    return Azimuth.NE;
  }

  if (degree >= 56.25 && degree < 78.75) {
    return Azimuth.ENE;
  }

  if (degree >= 78.75 && degree < 101.25) {
    return Azimuth.E;
  }

  if (degree >= 101.25 && degree < 123.75) {
    return Azimuth.ESE;
  }

  if (degree >= 123.75 && degree < 146.25) {
    return Azimuth.SE;
  }

  if (degree >= 146.25 && degree < 168.75) {
    return Azimuth.SSE;
  }

  if (degree >= 168.75 && degree < 191.25) {
    return Azimuth.S;
  }

  if (degree >= 191.25 && degree < 213.75) {
    return Azimuth.SSW;
  }

  if (degree >= 213.75 && degree < 236.25) {
    return Azimuth.SW;
  }

  if (degree >= 236.25 && degree < 258.75) {
    return Azimuth.WSW;
  }

  if (degree >= 258.75 && degree < 281.25) {
    return Azimuth.W;
  }

  if (degree >= 281.25 && degree < 303.75) {
    return Azimuth.WNW;
  }

  if (degree >= 303.75 && degree < 326.25) {
    return Azimuth.NW;
  }

  if (degree >= 326.25 && degree < 348.75) {
    return Azimuth.NNW;
  }

  return Azimuth.N;
};

export default convertWindDegreeToAzimuth;
