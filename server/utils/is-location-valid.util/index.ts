import { Location } from 'common/types';

import { isLatitudeValid } from '../is-latitude-valid.util';
import { isLongitudeValid } from '../is-longitude-valid.util';

export const isLocationValid = (location: Location | null): boolean =>
  !!location &&
  !!location.latitude &&
  !!location.longitude &&
  isLatitudeValid(location.latitude) &&
  isLongitudeValid(location.longitude);

export default isLocationValid;
