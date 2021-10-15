import isNil from 'ramda/src/isNil';

import { LocationData } from 'common/types';
import { isString } from 'common/utils';

import BaseApiV3Service from 'server/services/base-api-v3.service';

import {
  LocationDataByLocationArguments,
  LocationDataByCoordinatesArguments,
  AutocompleteArguments,
  SearchArguments,
} from './types';

export class Geocode extends BaseApiV3Service {
  public async getLocationDataByCoordinates({
    latitude,
    longitude,
    language,
  }: LocationDataByCoordinatesArguments): Promise<LocationData | null> {
    const locationData = await this.callAsync<LocationData>(
      `/geocode/reverse/${language}/${latitude}/${longitude}`
    );

    return locationData;
  }

  public async getLocationDataByLocation({
    countryCode,
    city,
    language,
  }: LocationDataByLocationArguments): Promise<LocationData | null> {
    if (!isString(countryCode) || !isString(city) || !isString(language)) {
      return null;
    }

    const locationData = await this.callAsync<LocationData>(
      `/geocode/lookup/${language}/${countryCode}:${city}`
    );

    return Array.isArray(locationData) || isNil(locationData)
      ? null
      : locationData;
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/search/${language}/${query}`
    );

    return locationData;
  }

  public async queryAutocomplete({
    query,
    language,
  }: AutocompleteArguments): Promise<LocationData[] | null> {
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/autocomplete/${language}/${query}`
    );

    return locationData;
  }
}

export * from './types';

export default Geocode;
