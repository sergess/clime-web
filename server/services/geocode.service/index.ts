import { LocationData } from 'common/types';

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

  // [TODO] stubbed for now, implement when api will be ready
  // eslint-disable-next-line
  public async getLocationDataByLocation({
    countryCode,
    city,
    forecastZoneId,
  }: LocationDataByLocationArguments): Promise<LocationData | null> {
    return Promise.resolve({
      airZoneId: 1,
      forecastZoneId: 1,
      nowcastZoneId: 1,
      pollenZoneId: 1,
      warningZoneId: 1,
      latitude: 50,
      longitude: 50,
      district: 'test',
      city: 'Minsk',
      region: 'test',
      country: 'Belarus',
      countryCode: 'by',
      timeZone: 'Europe/Minsk',
    });
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
