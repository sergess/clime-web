import { GetServerSidePropsContext } from 'next';

import { LocationData } from 'common/types';

import {
  getExactLocationFromCookies,
  getExtendedLocationName,
} from 'server/utils';

import { fetchLocationData } from './utils';
import { WithLocationDataArguments } from './types';

export const withLocationData =
  ({ autolocation = false }: WithLocationDataArguments) =>
  async (context: GetServerSidePropsContext): Promise<LocationData | null> => {
    const { locale, defaultLocale, query, req } = context;

    const userAgentHeader = context?.req?.headers?.['user-agent'];
    const language = locale || (defaultLocale as string);
    const cookies = req?.cookies;

    const locationFromCookies = getExactLocationFromCookies(cookies);

    const locationData = await fetchLocationData({
      userAgentHeader,
      autolocation,
      language,
      locationFromCookies,
      slug: query?.slug as string,
    });

    if (!locationData) {
      return null;
    }

    return {
      ...locationData,
      name: getExtendedLocationName(locationData),
    };
  };

export default withLocationData;
