import isNill from 'ramda/src/isNil';

import { Location } from 'common/types';

import { isLatitudeValid } from '../is-latitude-valid.util';
import { isLongitudeValid } from '../is-longitude-valid.util';

export const isLocationValid = (location: Location | null): boolean =>
  !isNill(location) &&
  isLatitudeValid(location?.latitude) &&
  isLongitudeValid(location?.longitude);

export default isLocationValid;
