import toLower from 'ramda/src/toLower';

export const getValidRedirectUrl = (
  pagePath: string,
  countryCode: string,
  city: string,
  forecastZoneId: number
): string => {
  const cityInKebabCase = (city as string).replace(/ /g, '-');

  return encodeURI(
    `/${pagePath}/${countryCode}/${toLower(cityInKebabCase)}/${forecastZoneId}`
  );
};

export default getValidRedirectUrl;
