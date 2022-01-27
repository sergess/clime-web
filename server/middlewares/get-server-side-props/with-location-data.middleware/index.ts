import { GetServerSidePropsContext } from 'next';

import { LocationData } from 'common/types';
import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';

import { getClientIp } from 'server/utils';

import { fetchLocationData } from './utils';
import { WithLocationDataArguments } from './types';

export const withLocationData =
  ({ autolocation = false }: WithLocationDataArguments) =>
  async (context: GetServerSidePropsContext): Promise<LocationData | null> => {
    const { locale, defaultLocale, query, req } = context;

    const userAgentHeader = context?.req?.headers?.['user-agent'];
    const language = locale || (defaultLocale as string);
    const cookies = req?.cookies;

    const locationFromCookies = {
      latitude: Number(cookies?.[EXACT_LATITUDE_COOKIE]),
      longitude: Number(cookies?.[EXACT_LONGITUDE_COOKIE]),
    };

    const clientIp = getClientIp(context.req, autolocation);

    const locationData = await fetchLocationData({
      userAgentHeader,
      autolocation,
      language,
      locationFromCookies,
      slug: query?.slug as string,
      clientIp,
    });

    if (!locationData) {
      return null;
    }

    return locationData;
  };

export default withLocationData;
