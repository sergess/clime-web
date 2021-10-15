import toLower from 'ramda/src/toLower';

export const getValidRedirectUrl = (
  countryCode: string,
  city: string,
  forecastZoneId: number
): string => {
  const cityInKebabCase = (city as string).replace(/ /g, '-');

  return encodeURI(
    `/weather-today/${countryCode}/${toLower(
      cityInKebabCase
    )}/${forecastZoneId}`
  );
};

export default getValidRedirectUrl;
