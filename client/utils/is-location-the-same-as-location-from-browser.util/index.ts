import Cookies from 'js-cookie';
import getDistance from 'geolib/es/getDistance';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';

import { Location } from 'common/types';
import {
  isLocationValid,
  isLatitudeValid,
  isLongitudeValid,
} from 'common/utils';

const FIVE_KILOMETERS = 5000;

export const isLocationTheSameAsLocationFromBrowser = (
  location: Location
): boolean => {
  const latitudeFromCookies = Number(Cookies.get(EXACT_LATITUDE_COOKIE));
  const longitudeFromCookies = Number(Cookies.get(EXACT_LONGITUDE_COOKIE));

  if (
    !isLocationValid(location) ||
    !isLatitudeValid(latitudeFromCookies) ||
    !isLongitudeValid(longitudeFromCookies)
  ) {
    return false;
  }

  const metersAway = getDistance(
    {
      latitude: latitudeFromCookies,
      longitude: longitudeFromCookies,
    },
    location
  );

  return metersAway <= FIVE_KILOMETERS;
};

export default isLocationTheSameAsLocationFromBrowser;
