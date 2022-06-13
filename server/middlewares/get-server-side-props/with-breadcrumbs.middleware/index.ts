import { GetServerSidePropsContext } from 'next';

import { LocationData, LocationParent } from 'common/types';

import { Geocode } from 'server/services';

export const withBreadcrumbs = async (
  context: GetServerSidePropsContext,
  locationData: LocationData
): Promise<LocationParent[] | null> => {
  const { locale, defaultLocale, query } = context;

  const userAgentHeader = context?.req?.headers?.['user-agent'];
  const language = locale || (defaultLocale as string);

  const geocodeService = new Geocode({ userAgentHeader });

  const location = await geocodeService.getLocationParentsBySlug({
    slug: (query?.slug as string) ?? locationData.slug,
    language,
  });

  return location?.parents
    ? location.parents.concat({
        name: locationData.city as string,
        type: 'city',
        url: `/${locationData.slug}`,
      })
    : null;
};

export default withBreadcrumbs;
