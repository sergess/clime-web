import { NextApiRequestCookies } from 'next/dist/server/api-utils';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';
import { Location } from 'common/types';

export const getExactLocationFromCookies = (
  cookies: NextApiRequestCookies
): Location => ({
  latitude: Number(cookies?.[EXACT_LATITUDE_COOKIE]),
  longitude: Number(cookies?.[EXACT_LONGITUDE_COOKIE]),
});

export default getExactLocationFromCookies;
